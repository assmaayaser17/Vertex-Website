import "../globals.css";
import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { dir, isLang, locales } from "@/lib/i18n";
import { site } from "@/lib/site";

export const dynamicParams = false;
export function generateStaticParams() { return locales.map((lang) => ({ lang })); }

export const viewport: Viewport = { themeColor: "#172532", width: "device-width", initialScale: 1 };
export const metadata: Metadata = { metadataBase: new URL(site.domain), icons: { icon: "/icon.svg" } };

export default async function RootLayout({ children, params }: { children: React.ReactNode; params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  return (
    <html lang={lang} dir={dir(lang)}>
      <body>
        <Header lang={lang} />
        <main id="main">{children}</main>
        <Footer lang={lang} />
      </body>
    </html>
  );
}
