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
import {
  checkEnvVars,
  checkWorkflowStatus,
  getArtifactDownloadUrl,
  getWorkflowArtifacts,
  uploadFileToGithub,
} from "@/app/actions";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import type { Locale } from "@/lib/i18n";
import { getTranslations } from "@/lib/translations";
import { LanguageSwitcher } from "./language-switcher";

export function PyToExeContent({ locale }: { locale: Locale }) {
  const t = getTranslations(locale);

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
  const [artifactId, setArtifactId] = useState<number | null>(null);
  const [artifactName, setArtifactName] = useState<string | null>(null);
  const [uploadedFilename, setUploadedFilename] = useState<string | null>(null);
  const [envConfigured, setEnvConfigured] = useState(true);
  const [envError, setEnvError] = useState<string | null>(null);
  const [verifyingAccess, setVerifyingAccess] = useState(false);
  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    const checkEnv = async () => {
      const result = await checkEnvVars();
      setEnvConfigured(result.configured);
      if (!result.configured) {
        setEnvError(result.message || "Environment variables not configured");
      } else {
        setVerifyingAccess(true);
        const { verifyGitHubAccess } = await import("@/app/actions");
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
    const maxAttempts = 60;

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

              setArtifactId(artifact.id);
              setArtifactName(artifact.name);
              setDownloadUrl(
                `https://github.com/${process.env.NEXT_PUBLIC_GITHUB_OWNER}/${process.env.NEXT_PUBLIC_GITHUB_REPO}/actions/runs/${workflowId}`,
              );
              setUploadStatus("success");
              setStatusMessage(
                `Conversion complete! Artifact "${artifact.name}" (${Math.round(artifact.size_in_bytes / 1024)} KB) is ready for download.`,
              );
              setFile(null);
              setUploadedFilename(null);
              setUploading(false);
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
          setStatusMessage(t.convertingFile);
        }
      }

      attempts++;
    };

    pollStatus();
    intervalId = setInterval(pollStatus, 5000);

    return () => clearInterval(intervalId);
  }, [workflowId, t]);

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
      setArtifactId(null);
      setArtifactName(null);
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
      setArtifactId(null);
      setArtifactName(null);
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
    setWorkflowId(null);
    setArtifactId(null);
    setArtifactName(null);
    setWorkflowStatus("");

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
    } catch {
      setUploadStatus("error");
      setStatusMessage("Upload failed. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  const handleDownload = async () => {
    if (!artifactId) return;

    setDownloading(true);
    try {
      const result = await getArtifactDownloadUrl(artifactId);
      if (result.success && result.url) {
        window.open(result.url, "_blank");
      } else {
        setUploadStatus("error");
        setStatusMessage(result.error || "Failed to get download URL");
      }
    } catch {
      setUploadStatus("error");
      setStatusMessage(
        "Failed to download artifact. Please try the GitHub Actions link.",
      );
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Github className="w-6 h-6" />
            <div>
              <h1 className="font-bold text-lg">{t.title}</h1>
              <p className="text-xs text-muted-foreground">{t.subtitle}</p>
            </div>
          </div>
          <LanguageSwitcher currentLocale={locale} />
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="relative w-24 h-24">
              <FileCode className="w-24 h-24 text-primary" strokeWidth={1.5} />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            {t.heading}
          </h1>
          <p className="text-xl text-muted-foreground mb-8">{t.subheading}</p>

          {verifyingAccess && (
            <Alert className="mb-6 border-blue-500 bg-blue-50 dark:bg-blue-950/30">
              <Loader2 className="h-4 w-4 text-blue-600 dark:text-blue-500 animate-spin" />
              <AlertDescription className="text-blue-800 dark:text-blue-300">
                {t.verifyingAccess}
              </AlertDescription>
            </Alert>
          )}

          {!envConfigured && !verifyingAccess && (
            <Alert className="mb-6 border-amber-500 bg-amber-50 dark:bg-amber-950/30">
              <AlertCircle className="h-4 w-4 text-amber-600 dark:text-amber-500" />
              <AlertDescription className="text-amber-800 dark:text-amber-300">
                <p className="font-semibold mb-2">{t.configRequired}</p>
                <p className="text-sm mb-3">{envError}</p>
                <div className="text-xs space-y-1 text-left bg-background/50 p-3 rounded-md">
                  <p className="font-medium">{t.requiredSetup}</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>
                      <code className="bg-muted px-1 rounded">
                        GITHUB_TOKEN
                      </code>{" "}
                      - {t.githubToken}
                    </li>
                    <li>
                      <code className="bg-muted px-1 rounded">
                        GITHUB_OWNER
                      </code>{" "}
                      - {t.githubOwner}
                    </li>
                    <li>
                      <code className="bg-muted px-1 rounded">GITHUB_REPO</code>{" "}
                      - {t.githubRepo}
                    </li>
                  </ul>
                  <p className="mt-3 font-medium">{t.stepsToFix}</p>
                  <ol className="list-decimal list-inside space-y-1 ml-2">
                    <li>
                      {t.createToken}{" "}
                      <a
                        href="https://github.com/settings/tokens"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline"
                      >
                        github.com/settings/tokens
                      </a>
                    </li>
                    <li>{t.enableScopes}</li>
                    <li>{t.addVars}</li>
                  </ol>
                </div>
              </AlertDescription>
            </Alert>
          )}

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
                        {t.uploadPrompt}
                      </label>{" "}
                      {t.orDragDrop}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {t.pythonFile}
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
                        {t.selectFile}
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
                  {t.securityNotice}
                </AlertDescription>
              </Alert>

              <Button
                className="w-full mt-6"
                size="lg"
                onClick={handleUpload}
                disabled={
                  !file ||
                  uploading ||
                  workflowId !== null ||
                  !envConfigured ||
                  verifyingAccess
                }
              >
                {uploading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    {t.uploading}
                  </>
                ) : workflowId && progress < 100 ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    {t.converting}
                  </>
                ) : (
                  <>
                    <Github className="w-4 h-4 mr-2" />
                    {t.uploadToGithub}
                  </>
                )}
              </Button>

              {(uploading || (workflowId && progress < 100)) && (
                <div className="mt-4 space-y-3">
                  {workflowId && (
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>
                          {t.workflowId} {workflowId}
                        </span>
                      </div>
                      <span className="text-muted-foreground">
                        {workflowStatus}
                      </span>
                    </div>
                  )}
                  <Progress value={uploading ? 5 : progress} className="h-2" />
                  <p className="text-sm text-muted-foreground text-center">
                    {uploading ? t.uploadingFile : t.convertingFile}
                  </p>
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
                        <strong>{t.file}</strong> {uploadedFilename}
                      </div>
                    )}
                    {statusMessage}
                  </AlertDescription>
                </Alert>
              )}

              {downloadUrl && artifactId && (
                <div className="mt-4 space-y-2">
                  <Button
                    className="w-full"
                    size="lg"
                    onClick={handleDownload}
                    disabled={downloading}
                  >
                    {downloading ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        {t.preparingDownload}
                      </>
                    ) : (
                      <>
                        <Download className="w-4 h-4 mr-2" />
                        {t.download} {artifactName || t.exeFile}
                      </>
                    )}
                  </Button>
                  <Button
                    className="w-full bg-transparent"
                    size="sm"
                    variant="outline"
                    asChild
                  >
                    <a
                      href={downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      {t.viewOnGithub}
                    </a>
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                <CardTitle>{t.securityInfo}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-left">
              <p className="text-muted-foreground mb-4">{t.securityDesc}</p>
              <div className="space-y-2">
                <a
                  href="https://github.com/SymphonyIceAttack/pytoexe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                >
                  <FileCode className="w-4 h-4" />
                  <span>{t.webInterface}</span>
                </a>
                <a
                  href="https://github.com/SymphonyIceAttack/pytoexe-use"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>{t.processingRepo}</span>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 text-balance">
              {t.mainHeading}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t.mainDesc1}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t.mainDesc2}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {t.mainDesc3}
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                {t.featuresHeading}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {t.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <div className="text-center">
            <p className="text-muted-foreground leading-relaxed">
              {t.footerDesc}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
