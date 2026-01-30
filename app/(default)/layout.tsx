import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type React from "react";
import "../globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { supportedLocales } from "@/lib/constants";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://pytoexe.top"),
  title: {
    default: "PyToExe - Python to EXE Converter Online",
    template: "%s | PyToExe",
  },
  description:
    "Convert Python files to Windows executables online without installing Python. Free, fast, and secure Python to EXE conversion powered by GitHub Actions and PyInstaller.",
  keywords: [
    "python to exe",
    "py to exe converter",
    "python compiler",
    "pyinstaller online",
    "python executable",
    "convert python",
    "python to windows exe",
    "online python converter",
    "python packaging",
  ],
  authors: [{ name: "PyToExe" }],
  creator: "PyToExe",
  publisher: "PyToExe",
  applicationName: "PyToExe",
  referrer: "origin-when-cross-origin",
  category: "Development Tools",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: supportedLocales.map(
      (locale) => `${locale}_${locale.toUpperCase()}`,
    ),
    url: "https://pytoexe.top",
    siteName: "PyToExe",
    title: "PyToExe - Python to EXE Converter Online",
    description:
      "Convert Python files to Windows executables online without installing Python. Free, fast, and secure.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PyToExe - Python to EXE Converter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PyToExe - Python to EXE Converter Online",
    description:
      "Convert Python files to Windows executables online without installing Python",
    images: ["/og-image.png"],
    creator: "@pytoexe",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          src="https://quge5.com/88/tag.min.js"
          data-zone="206813"
          async
          data-cfasync="false"
        ></script>
      </head>
      <body className={`font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
