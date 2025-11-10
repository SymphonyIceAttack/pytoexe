"use client";

import { Globe } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { Locale } from "@/lib/i18n";

const languages = {
  en: "English",
  ja: "日本語",
  ru: "Русский",
};

export function LanguageSwitcher({ currentLocale }: { currentLocale: Locale }) {
  const pathname = usePathname();
  const router = useRouter();

  const switchLanguage = (newLocale: Locale) => {
    // If we're on the root page (English default)
    if (pathname === "/" || pathname === "") {
      if (newLocale === "en") {
        router.push("/");
      } else {
        router.push(`/${newLocale}`);
      }
      return;
    }

    // If we're on a language-specific page
    const segments = pathname.split("/").filter(Boolean);
    if (segments[0] === "en" || segments[0] === "ja" || segments[0] === "ru") {
      // Replace the language segment
      if (newLocale === "en") {
        router.push("/");
      } else {
        router.push(`/${newLocale}`);
      }
    } else {
      // We're on root (English), switch to another language
      if (newLocale === "en") {
        router.push("/");
      } else {
        router.push(`/${newLocale}`);
      }
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm">
          <Globe className="w-4 h-4 mr-2" />
          {languages[currentLocale]}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {Object.entries(languages).map(([locale, label]) => (
          <DropdownMenuItem
            key={locale}
            onClick={() => switchLanguage(locale as Locale)}
            className={currentLocale === locale ? "bg-accent" : ""}
          >
            {label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
