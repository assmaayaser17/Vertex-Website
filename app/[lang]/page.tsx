import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Hero } from "@/components/Hero";
import { AboutSection, CertsSection, Clients, FieldSection, LogisticsSection, ProcessSection, ProductsSection, ProjectsSection, Stats } from "@/components/HomeSections";
import { CtaBand } from "@/components/CtaBand";
import { LocationSection, PartnersSection } from "@/components/InfoSections";
import { pageMeta } from "@/lib/content";
import { isLang, locales, tr } from "@/lib/i18n";

export function generateStaticParams() { return locales.map((lang) => ({ lang })); }

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  return { title: tr(pageMeta.home.title, lang), description: tr(pageMeta.home.desc, lang), alternates: { canonical: `/${lang}/`, languages: { en: "/en/", ar: "/ar/" } } };
}

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  return (
    <>
      <Hero lang={lang} />
      <Stats lang={lang} />
      <Clients lang={lang} />
      <AboutSection lang={lang} />
      <ProductsSection lang={lang} />
      <PartnersSection lang={lang} link className="bg-vx-sand py-20 md:py-28" />
      <ProcessSection lang={lang} />
      <ProjectsSection lang={lang} />
      <LogisticsSection lang={lang} />
      <CertsSection lang={lang} />
      <FieldSection lang={lang} />
      <LocationSection lang={lang} />
      <CtaBand lang={lang} />
    </>
  );
}
