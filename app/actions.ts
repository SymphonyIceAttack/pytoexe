"use server";

import { Octokit } from "@octokit/rest";

function validateEnvVars() {
  const requiredVars = {
    GITHUB_TOKEN: process.env.GITHUB_TOKEN,
    GITHUB_OWNER: process.env.NEXT_PUBLIC_GITHUB_OWNER,
    GITHUB_REPO: process.env.NEXT_PUBLIC_GITHUB_REPO,
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

    await new Promise((resolve) => setTimeout(resolve, Math.random() * 1000));

    const timestamp = Date.now();
    const randomSuffix = Math.random().toString(36).substring(2, 6);
    const filename = `${timestamp}-${randomSuffix}-${file.name}`;

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

    await new Promise((resolve) => setTimeout(resolve, 5000));

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
      return timeDiff < 60000; // Within last 60 seconds
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
        error: `Repository ${process.env.NEXT_PUBLIC_GITHUB_OWNER}/${process.env.NEXT_PUBLIC_GITHUB_REPO} not found. Please verify the repository exists.`,
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

    console.log("[v0] Checking workflow status for ID:", workflowId);

    const workflow = await octokit.actions.getWorkflowRun({
      owner: env.GITHUB_OWNER,
      repo: env.GITHUB_REPO,
      run_id: workflowId,
    });

    console.log(
      "[v0] Workflow status:",
      workflow.data.status,
      "conclusion:",
      workflow.data.conclusion,
    );

    return {
      success: true,
      status: workflow.data.status,
      conclusion: workflow.data.conclusion,
    };
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Status check failed";
    console.error("[v0] Workflow status check error:", errorMessage);
    return {
      success: false,
      error: errorMessage,
    };
  }
}

export async function getExeFiles(filename: string) {
  try {
    const env = validateEnvVars();

    const octokit = new Octokit({
      auth: env.GITHUB_TOKEN,
    });

    console.log("[v0] Looking for EXE files for:", filename);

    try {
      const exeFolder = await octokit.repos.getContent({
        owner: env.GITHUB_OWNER,
        repo: env.GITHUB_REPO,
        path: "exe-files",
        ref: "main",
      });

      if (Array.isArray(exeFolder.data)) {
        console.log(
          "[v0] Files in exe-files folder:",
          exeFolder.data.map((f) => f.name),
        );

        // The workflow uses PyInstaller with the full filename as basename
        // e.g., "1763022386078-2wgl-hello.py" -> "1763022386078-2wgl-hello.exe"
        const expectedExeName = filename.replace(".py", ".exe");
        console.log("[v0] Looking for EXE file:", expectedExeName);

        let matchedFile = exeFolder.data.find(
          (f) => f.name === expectedExeName,
        );

        // If exact match not found, try partial match without timestamp/suffix
        if (!matchedFile) {
          const originalName = filename
            .split("-")
            .slice(2)
            .join("-")
            .replace(".py", ".exe");
          console.log("[v0] Trying partial match:", originalName);
          matchedFile = exeFolder.data.find((f) => f.name === originalName);
        }

        // If still not found, find the most recent EXE file
        if (!matchedFile) {
          console.log("[v0] No exact match, getting most recent EXE");
          matchedFile = exeFolder.data
            .filter((f) => f.name.endsWith(".exe"))
            .sort((a, b) => b.name.localeCompare(a.name))[0];
        }

        if (matchedFile && matchedFile.download_url) {
          console.log("[v0] Found matching EXE file:", matchedFile.name);
          return {
            success: true,
            found: true,
            downloadUrl: matchedFile.download_url,
            fileName: matchedFile.name,
            size: matchedFile.size || 0,
          };
        } else {
          console.log("[v0] No EXE files found in exe-files folder");
          return {
            success: true,
            found: false,
          };
        }
      }
    } catch (error: unknown) {
      const errorStatus = (error as { status?: number }).status;
      if (errorStatus === 404) {
        console.log("[v0] exe-files folder not found or empty");
        return {
          success: true,
          found: false,
        };
      }
      throw error;
    }

    return {
      success: false,
      found: false,
      error: "Unexpected response from GitHub API",
    };
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Failed to check EXE file";
    console.error("[v0] Get EXE file error:", errorMessage);
    return {
      success: false,
      found: false,
      error: errorMessage,
    };
  }
}

export async function findWorkflowByFile(filename: string) {
  try {
    const env = validateEnvVars();

    const octokit = new Octokit({
      auth: env.GITHUB_TOKEN,
    });

    console.log("[v0] Searching for workflow triggered by file:", filename);

    // Get recent workflow runs
    const workflows = await octokit.actions.listWorkflowRunsForRepo({
      owner: env.GITHUB_OWNER,
      repo: env.GITHUB_REPO,
      per_page: 10,
      event: "push",
    });

    // Find workflow that was triggered after this file was uploaded
    const recentRun = workflows.data.workflow_runs.find((run) => {
      const runCreatedAt = new Date(run.created_at).getTime();
      const timeDiff = Date.now() - runCreatedAt;
      return timeDiff < 120000; // Within last 2 minutes
    });

    if (recentRun) {
      console.log(
        "[v0] Found workflow run:",
        recentRun.id,
        "status:",
        recentRun.status,
      );
      return {
        success: true,
        workflowId: recentRun.id,
        status: recentRun.status,
      };
    }

    console.log("[v0] No matching workflow run found yet");
    return {
      success: false,
      error: "Workflow not found yet",
    };
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Failed to find workflow";
    console.error("[v0] Find workflow error:", errorMessage);
    return {
      success: false,
      error: errorMessage,
    };
  }
}
