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
import { allLanguages, defaultLocale, languageNames } from "@/lib/constants";
import type { LanguageType } from "@/lib/translations";

export function LanguageSwitcher({
  currentLocale,
}: {
  currentLocale: LanguageType;
}) {
  const pathname = usePathname();
  const router = useRouter();

  const switchLanguage = (newLocale: LanguageType) => {
    // If we're on the root page (default language)
    if (pathname === "/" || pathname === "") {
      if (newLocale === defaultLocale) {
        router.push("/");
      } else {
        router.push(`/${newLocale}`);
      }
      return;
    }

    // If we're on a language-specific page
    const segments = pathname.split("/").filter(Boolean);
    if (allLanguages.includes(segments[0] as LanguageType)) {
      // Replace the language segment
      if (newLocale === defaultLocale) {
        router.push("/");
      } else {
        router.push(`/${newLocale}`);
      }
    } else {
      // We're on root (default language), switch to another language
      if (newLocale === defaultLocale) {
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
          {languageNames[currentLocale]}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {allLanguages.map((locale) => (
          <DropdownMenuItem
            key={locale}
            onClick={() => switchLanguage(locale)}
            className={currentLocale === locale ? "bg-accent" : ""}
          >
            {languageNames[locale]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
