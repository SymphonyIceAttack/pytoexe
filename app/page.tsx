"use client";

import {
  AlertCircle,
  CheckCircle2,
  Clock,
  Download,
  FileCode,
  Github,
  Loader2,
  Shield,
  Upload,
} from "lucide-react";
import type React from "react";
import { useEffect, useState } from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  checkEnvVars,
  checkWorkflowStatus,
  getWorkflowArtifacts,
  uploadFileToGithub,
} from "./actions";

export default function PyToExePage() {
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [workflowId, setWorkflowId] = useState<number | null>(null);
  const [workflowStatus, setWorkflowStatus] = useState<string>("");
  const [progress, setProgress] = useState(0);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [uploadedFilename, setUploadedFilename] = useState<string | null>(null);
  const [envConfigured, setEnvConfigured] = useState(true);
  const [envError, setEnvError] = useState<string | null>(null);
  const [verifyingAccess, setVerifyingAccess] = useState(false);

  useEffect(() => {
    const checkEnv = async () => {
      const result = await checkEnvVars();
      setEnvConfigured(result.configured);
      if (!result.configured) {
        setEnvError(result.message || "Environment variables not configured");
      } else {
        setVerifyingAccess(true);
        const { verifyGitHubAccess } = await import("./actions");
        const accessResult = await verifyGitHubAccess();
        setVerifyingAccess(false);

        if (!accessResult.hasAccess) {
          setEnvConfigured(false);
          setEnvError(
            accessResult.error || "Unable to access GitHub repository",
          );
        }
      }
    };
    checkEnv();
  }, []);

  useEffect(() => {
    if (!workflowId) return;

    let intervalId: NodeJS.Timeout;
    let attempts = 0;
    const maxAttempts = 60; // 5 minutes

    const pollStatus = async () => {
      if (attempts >= maxAttempts) {
        clearInterval(intervalId);
        setUploadStatus("error");
        setStatusMessage(
          "Workflow timeout. Please check your GitHub repository.",
        );
        return;
      }

      const result = await checkWorkflowStatus(workflowId);

      if (result.success) {
        setWorkflowStatus(result.status || "");

        if (result.status === "completed") {
          clearInterval(intervalId);
          setProgress(100);

          if (result.conclusion === "success") {
            const artifactsResult = await getWorkflowArtifacts(workflowId);
            if (
              artifactsResult.success &&
              artifactsResult.artifacts.length > 0
            ) {
              const artifact = artifactsResult.artifacts[0];
              setDownloadUrl(
                `https://github.com/${process.env.NEXT_PUBLIC_GITHUB_OWNER}/${process.env.NEXT_PUBLIC_GITHUB_REPO}/actions/runs/${workflowId}`,
              );
              setUploadStatus("success");
              setStatusMessage(
                `Conversion complete! Artifact "${artifact.name}" (${Math.round(artifact.size_in_bytes / 1024)} KB) is ready for download.`,
              );
            } else {
              setUploadStatus("error");
              setStatusMessage(
                "Workflow completed but no artifacts were found.",
              );
            }
          } else {
            setUploadStatus("error");
            setStatusMessage(`Workflow failed: ${result.conclusion}`);
          }
        } else if (result.status === "in_progress") {
          setProgress(Math.min(90, 10 + attempts * 5));
          setStatusMessage("Converting your Python file to exe...");
        }
      }

      attempts++;
    };

    pollStatus();
    intervalId = setInterval(pollStatus, 5000);

    return () => clearInterval(intervalId);
  }, [workflowId]);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.name.endsWith(".py")) {
      setFile(droppedFile);
      setUploadStatus("idle");
      setDownloadUrl(null);
      setUploadedFilename(null);
      setWorkflowId(null);
    } else {
      setUploadStatus("error");
      setStatusMessage("Please upload a valid Python (.py) file");
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && selectedFile.name.endsWith(".py")) {
      setFile(selectedFile);
      setUploadStatus("idle");
      setDownloadUrl(null);
      setUploadedFilename(null);
      setWorkflowId(null);
    } else {
      setUploadStatus("error");
      setStatusMessage("Please select a valid Python (.py) file");
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    setUploading(true);
    setUploadStatus("idle");
    setDownloadUrl(null);
    setProgress(0);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const result = await uploadFileToGithub(formData);

      if (result.success) {
        setUploadedFilename(result.filename || null);
        if (result.workflowId) {
          setWorkflowId(result.workflowId);
          setUploadStatus("success");
          setStatusMessage("File uploaded! GitHub Actions workflow started...");
          setProgress(10);
        } else {
          // File uploaded but workflow ID not found yet - this is still a success
          setUploadStatus("success");
          setStatusMessage(
            "File uploaded successfully! The GitHub Actions workflow should start automatically. Check your repository for the conversion progress.",
          );
        }
      } else {
        setUploadStatus("error");
        setStatusMessage(
          result.error ||
            "Upload failed. Please check your environment variables.",
        );
      }
    } catch (error) {
      console.log("[v0] Upload error:", error);
      setUploadStatus("error");
      setStatusMessage("Upload failed. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Github className="w-6 h-6" />
            <div>
              <h1 className="font-bold text-lg">Python to EXE Converter</h1>
              <p className="text-xs text-muted-foreground">Online Tool</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="relative w-24 h-24">
              <FileCode className="w-24 h-24 text-primary" strokeWidth={1.5} />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            PY to EXE
          </h1>
          <p className="text-xl text-muted-foreground mb-8">Online Converter</p>

          {verifyingAccess && (
            <Alert className="mb-6 border-blue-500 bg-blue-50 dark:bg-blue-950/30">
              <Loader2 className="h-4 w-4 text-blue-600 dark:text-blue-500 animate-spin" />
              <AlertDescription className="text-blue-800 dark:text-blue-300">
                Verifying GitHub repository access...
              </AlertDescription>
            </Alert>
          )}

          {!envConfigured && !verifyingAccess && (
            <Alert className="mb-6 border-amber-500 bg-amber-50 dark:bg-amber-950/30">
              <AlertCircle className="h-4 w-4 text-amber-600 dark:text-amber-500" />
              <AlertDescription className="text-amber-800 dark:text-amber-300">
                <p className="font-semibold mb-2">Configuration Required</p>
                <p className="text-sm mb-3">{envError}</p>
                <div className="text-xs space-y-1 text-left bg-background/50 p-3 rounded-md">
                  <p className="font-medium">Required setup:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>
                      <code className="bg-muted px-1 rounded">
                        GITHUB_TOKEN
                      </code>{" "}
                      - Personal access token with <strong>repo</strong> and{" "}
                      <strong>workflow</strong> scopes
                    </li>
                    <li>
                      <code className="bg-muted px-1 rounded">
                        GITHUB_OWNER
                      </code>{" "}
                      - Your GitHub username
                    </li>
                    <li>
                      <code className="bg-muted px-1 rounded">GITHUB_REPO</code>{" "}
                      - Repository name with GitHub Actions workflow
                    </li>
                  </ul>
                  <p className="mt-3 font-medium">Steps to fix:</p>
                  <ol className="list-decimal list-inside space-y-1 ml-2">
                    <li>
                      Create a GitHub token at{" "}
                      <a
                        href="https://github.com/settings/tokens"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline"
                      >
                        github.com/settings/tokens
                      </a>
                    </li>
                    <li>
                      Enable <strong>repo</strong> and <strong>workflow</strong>{" "}
                      scopes
                    </li>
                    <li>
                      Add all three environment variables in the Vars section →
                    </li>
                  </ol>
                </div>
              </AlertDescription>
            </Alert>
          )}

          {/* Upload Card */}
          <Card className="mb-8">
            <CardContent className="pt-6">
              <div
                className={`border-2 border-dashed rounded-lg p-8 transition-colors ${
                  isDragging
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/50"
                }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <div className="flex flex-col items-center gap-4">
                  <Upload className="w-12 h-12 text-muted-foreground" />
                  <div className="text-center">
                    <p className="text-foreground mb-1">
                      <label
                        htmlFor="file-upload"
                        className="cursor-pointer hover:text-primary transition-colors"
                      >
                        Click to upload
                      </label>
                      {" or drag and drop"}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Python file (.py)
                    </p>
                  </div>

                  <div>
                    <input
                      id="file-upload"
                      type="file"
                      accept=".py"
                      onChange={handleFileSelect}
                      className="hidden"
                    />
                    <Button variant="outline" size="sm" asChild>
                      <label htmlFor="file-upload" className="cursor-pointer">
                        <FileCode className="w-4 h-4 mr-2" />
                        Select File
                      </label>
                    </Button>
                  </div>

                  {file && (
                    <div className="flex items-center gap-2 text-sm bg-muted px-4 py-2 rounded-md">
                      <FileCode className="w-4 h-4" />
                      <span>{file.name}</span>
                    </div>
                  )}
                </div>
              </div>

              <Alert className="mt-4 bg-muted/50">
                <Shield className="h-4 w-4" />
                <AlertDescription className="text-sm">
                  PY files will be removed from repo after process.
                </AlertDescription>
              </Alert>

              <Button
                className="w-full mt-6"
                size="lg"
                onClick={handleUpload}
                disabled={
                  !file ||
                  uploading ||
                  !!workflowId ||
                  !envConfigured ||
                  verifyingAccess
                }
              >
                {uploading || workflowId ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    {uploading ? "Uploading..." : "Converting..."}
                  </>
                ) : (
                  <>
                    <Github className="w-4 h-4 mr-2" />
                    Upload to GitHub
                  </>
                )}
              </Button>

              {workflowId && (
                <div className="mt-4 space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>Workflow ID: {workflowId}</span>
                    </div>
                    <span className="text-muted-foreground">
                      {workflowStatus}
                    </span>
                  </div>
                  <Progress value={progress} className="h-2" />
                </div>
              )}

              {uploadStatus !== "idle" && statusMessage && (
                <Alert
                  className={`mt-4 ${uploadStatus === "error" ? "border-destructive" : "border-primary"}`}
                >
                  {uploadStatus === "success" && progress === 100 && (
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                  )}
                  {workflowId && progress < 100 && (
                    <Loader2 className="h-4 w-4 animate-spin text-primary" />
                  )}
                  <AlertDescription>
                    {uploadedFilename && (
                      <div className="mb-2">
                        <strong>File:</strong> {uploadedFilename}
                      </div>
                    )}
                    {statusMessage}
                  </AlertDescription>
                </Alert>
              )}

              {downloadUrl && (
                <Button className="w-full mt-4" size="lg" asChild>
                  <a
                    href={downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    View on GitHub Actions
                  </a>
                </Button>
              )}
            </CardContent>
          </Card>

          {/* Security Information */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                <CardTitle>Security Information</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-left">
              <p className="text-muted-foreground mb-4">
                For users concerned about security, you can review our source
                code in both repositories:
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <FileCode className="w-4 h-4" />
                  <span>Web Interface Repository</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Github className="w-4 h-4" />
                  <span>Python-to-EXE Processing Repository</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Description Section */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 text-balance">
              Convert Python to EXE Online - Free and Easy
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              PY to EXE is a free online tool that converts Python (.py) files
              to executable (.exe) files. No installation required - just upload
              your Python script and download the executable file.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our online Python to EXE converter is perfect for developers who
              want to distribute their Python applications to users who don't
              have Python installed. The generated executable files work on
              Windows without requiring any additional dependencies.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Simply upload your Python file, wait for the conversion process to
              complete, and download your executable file. It's that easy!
            </p>
          </div>

          {/* Features */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                Features of our Python to EXE Converter
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {[
                  "Free to use - no registration required",
                  "Secure conversion process",
                  "Works with all Python versions",
                  "Fast conversion time",
                  "No installation needed - works in your browser",
                  "Creates standalone executable files",
                  "Open source - code available for review",
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Process Explanation */}
          <div className="text-center">
            <p className="text-muted-foreground leading-relaxed">
              Your Python files will be uploaded to the{" "}
              <strong>PyToExe repository</strong> where they will be processed
              by GitHub Actions to create executable files.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t mt-20 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground mb-2">
            © 2025 PY to EXE Online Converter. All rights reserved.
          </p>
          <div className="flex justify-center gap-4 text-sm text-muted-foreground mb-4">
            <button
              type="button"
              className="hover:text-foreground transition-colors"
            >
              Web Interface Source
            </button>
            <span>•</span>
            <button
              type="button"
              className="hover:text-foreground transition-colors"
            >
              Converter Source
            </button>
          </div>
          <p className="text-xs text-muted-foreground">
            This application uses two repositories: one for the web interface
            and one for the Python-to-EXE conversion process.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground">
            <span>Powered by</span>
            <svg className="h-4" viewBox="0 0 283 64" fill="currentColor">
              <path d="M141.68 16.25c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM248.72 16.25c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM200.24 34c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9V5h9zM36.95 0L73.9 64H0L36.95 0zm92.38 5l-27.71 48L73.91 5H84.3l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10V51h-9V17h9v9.2c0-5.08 5.91-9.2 13.2-9.2z" />
            </svg>
          </div>
        </div>
      </footer>
    </div>
  );
}
