import { redirect } from "next/navigation";
import { PyToExeContent } from "@/components/pytoexe-content";
import { isValidLocale, type Locale } from "@/lib/i18n";

export function generateStaticParams() {
  return [{ lang: "ja" }, { lang: "ru" }];
}

export default async function LocalePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    redirect("/");
  }

  return <PyToExeContent locale={lang as Locale} />;
}
