"use server";

import { Octokit } from "@octokit/rest";

function validateEnvVars() {
  const requiredVars = {
    GITHUB_TOKEN: process.env.GITHUB_TOKEN,
    GITHUB_OWNER: process.env.GITHUB_OWNER,
    GITHUB_REPO: process.env.GITHUB_REPO,
  };

  const missing = Object.entries(requiredVars)
    .filter(([_, value]) => !value)
    .map(([key]) => key);

  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missing.join(", ")}. Please add them in the Vars section of the sidebar.`,
    );
  }

  return requiredVars as Record<keyof typeof requiredVars, string>;
}

export async function checkEnvVars() {
  try {
    validateEnvVars();
    return {
      configured: true,
      message: "All environment variables are configured",
    };
  } catch (error) {
    return {
      configured: false,
      message: error instanceof Error ? error.message : "Configuration error",
    };
  }
}

export async function verifyGitHubAccess() {
  try {
    const env = validateEnvVars();

    const octokit = new Octokit({
      auth: env.GITHUB_TOKEN,
    });

    const repo = await octokit.repos.get({
      owner: env.GITHUB_OWNER,
      repo: env.GITHUB_REPO,
    });

    return {
      success: true,
      hasAccess: true,
      repoName: repo.data.full_name,
      permissions: repo.data.permissions,
    };
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    const errorStatus = (error as { status?: number }).status;

    if (errorStatus === 404) {
      return {
        success: false,
        hasAccess: false,
        error: `Repository not found. Please verify that ${process.env.GITHUB_OWNER}/${process.env.GITHUB_REPO} exists and is accessible.`,
      };
    } else if (errorStatus === 401) {
      return {
        success: false,
        hasAccess: false,
        error:
          "Invalid GitHub token. Please check your GITHUB_TOKEN in the Vars section.",
      };
    } else if (errorStatus === 403) {
      return {
        success: false,
        hasAccess: false,
        error:
          "GitHub token lacks required permissions. Please ensure your token has 'repo' scope (full control of private repositories) or 'public_repo' scope (for public repositories only).",
      };
    }

    return {
      success: false,
      hasAccess: false,
      error: errorMessage,
    };
  }
}

export async function uploadFileToGithub(formData: FormData) {
  const file = formData.get("file") as File;

  if (!file || !file.name.endsWith(".py")) {
    return {
      success: false,
      error: "Invalid file type. Please upload a .py file.",
    };
  }

  try {
    const env = validateEnvVars();
    const content = await file.text();
    const base64Content = Buffer.from(content).toString("base64");

    const octokit = new Octokit({
      auth: env.GITHUB_TOKEN,
    });

    const timestamp = Date.now();
    const filename = `${timestamp}-${file.name}`;

    console.log("[v0] Uploading file to GitHub:", filename);

    // Upload to GitHub repository
    await octokit.repos.createOrUpdateFileContents({
      owner: env.GITHUB_OWNER,
      repo: env.GITHUB_REPO,
      path: `python-files/${filename}`,
      message: `Upload ${file.name}`,
      content: base64Content,
      branch: "main",
    });

    console.log("[v0] File uploaded successfully");

    await new Promise((resolve) => setTimeout(resolve, 2000));

    try {
      console.log("[v0] Attempting to trigger workflow manually");
      await octokit.actions.createWorkflowDispatch({
        owner: env.GITHUB_OWNER,
        repo: env.GITHUB_REPO,
        workflow_id: "convert.yml", // Adjust this to match your workflow file name
        ref: "main",
        inputs: {
          filename: filename,
        },
      });
      console.log("[v0] Workflow triggered manually");
    } catch (dispatchError) {
      console.log(
        "[v0] Manual workflow trigger not available or failed:",
        dispatchError,
      );
      // This is OK - the workflow might be triggered automatically by push
    }

    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Get the latest workflow run
    console.log("[v0] Fetching latest workflow run");
    const workflows = await octokit.actions.listWorkflowRunsForRepo({
      owner: env.GITHUB_OWNER,
      repo: env.GITHUB_REPO,
      per_page: 5,
      event: "push", // Filter for push events
    });

    console.log(
      "[v0] Found",
      workflows.data.workflow_runs.length,
      "workflow runs",
    );

    const recentRun = workflows.data.workflow_runs.find((run) => {
      const runCreatedAt = new Date(run.created_at).getTime();
      const timeDiff = Date.now() - runCreatedAt;
      return timeDiff < 30000; // Within last 30 seconds
    });

    if (recentRun) {
      console.log("[v0] Found recent workflow run:", recentRun.id);
    } else {
      console.log("[v0] No recent workflow run found");
    }

    return {
      success: true,
      filename,
      workflowId: recentRun?.id,
    };
  } catch (error: unknown) {
    console.error("[v0] Upload error:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    const errorStatus = (error as { status?: number }).status;

    if (errorStatus === 404) {
      return {
        success: false,
        error: `Repository ${process.env.GITHUB_OWNER}/${process.env.GITHUB_REPO} not found. Please verify the repository exists.`,
      };
    } else if (errorStatus === 401) {
      return {
        success: false,
        error:
          "Invalid GitHub token. Please check your GITHUB_TOKEN in the Vars section.",
      };
    } else if (errorStatus === 403) {
      return {
        success: false,
        error:
          "Access denied. Your GitHub token needs 'repo' and 'workflow' scope permissions. Please create a new token at https://github.com/settings/tokens with these scopes enabled.",
      };
    }

    return {
      success: false,
      error: errorMessage,
    };
  }
}

export async function checkWorkflowStatus(workflowId: number) {
  try {
    const env = validateEnvVars();

    const octokit = new Octokit({
      auth: env.GITHUB_TOKEN,
    });

    const workflow = await octokit.actions.getWorkflowRun({
      owner: env.GITHUB_OWNER,
      repo: env.GITHUB_REPO,
      run_id: workflowId,
    });

    return {
      success: true,
      status: workflow.data.status,
      conclusion: workflow.data.conclusion,
    };
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Status check failed";
    return {
      success: false,
      error: errorMessage,
    };
  }
}

export async function getWorkflowArtifacts(workflowId: number) {
  try {
    const env = validateEnvVars();

    const octokit = new Octokit({
      auth: env.GITHUB_TOKEN,
    });

    const artifacts = await octokit.actions.listWorkflowRunArtifacts({
      owner: env.GITHUB_OWNER,
      repo: env.GITHUB_REPO,
      run_id: workflowId,
    });

    return {
      success: true,
      artifacts: artifacts.data.artifacts,
    };
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Failed to get artifacts";
    return {
      success: false,
      error: errorMessage,
      artifacts: [],
    };
  }
}

export async function getArtifactDownloadUrl(artifactId: number) {
  try {
    const env = validateEnvVars();

    const octokit = new Octokit({
      auth: env.GITHUB_TOKEN,
    });

    const download = await octokit.actions.downloadArtifact({
      owner: env.GITHUB_OWNER,
      repo: env.GITHUB_REPO,
      artifact_id: artifactId,
      archive_format: "zip",
    });

    return {
      success: true,
      url: download.url,
    };
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Failed to get download URL";
    return {
      success: false,
      error: errorMessage,
    };
  }
}
