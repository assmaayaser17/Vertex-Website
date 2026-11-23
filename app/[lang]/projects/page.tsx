import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { Container, Eyebrow, H2, Bg } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icon";
import { CtaBand } from "@/components/CtaBand";
import { Clients } from "@/components/HomeSections";
import { pageMeta, projectLabels, projects } from "@/lib/content";
import { isLang, locales, tr } from "@/lib/i18n";

export function generateStaticParams() { return locales.map((lang) => ({ lang })); }
export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  return { title: tr(pageMeta.projects.title, lang), description: tr(pageMeta.projects.desc, lang), alternates: { canonical: `/${lang}/projects/` } };
}

export default async function Projects({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const rows: [keyof (typeof projects)[0]["meta"], string][] = [["location", "pin"], ["sector", "box"], ["scope", "tool"], ["areas", "ruler"]];
  return (
    <>
      <PageHero lang={lang} eyebrow={projectLabels.selected} title={projectLabels.allTitle} lead={projectLabels.allText} image="/images/projects/cloud-main.jpg" />
      {projects.map((p, i) => (
        <section key={p.slug} id={p.slug} className={`py-20 md:py-28 ${i % 2 ? "bg-vx-sand" : ""}`}>
          <Container>
            <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:gap-16">
              <Reveal>
                <span className="inline-block bg-vx-orange px-3 py-1.5 text-xs font-bold uppercase text-vx-navy rtl:text-sm rtl:normal-case">{tr(p.tag, lang)}</span>
                <h2 className="mb-5 mt-4 text-[32px] font-bold leading-[1.1] md:text-[42px] rtl:leading-[1.3]">{tr(p.title, lang)}</h2>
                <p className="mb-8 text-base leading-[1.8] text-vx-navy/80 md:text-lg">{tr(p.text, lang)}</p>
                <dl className="border border-vx-navy/12 bg-white">
                  {rows.map(([k, ic]) => (
                    <div key={k} className="flex gap-4 border-b border-vx-navy/10 px-5 py-4 last:border-0">
                      <Icon name={ic} size={20} className="mt-0.5 text-vx-orange" />
                      <div><dt className="text-xs font-bold uppercase text-vx-navy/60 rtl:text-sm rtl:normal-case">{tr(projectLabels[k], lang)}</dt><dd className="mt-0.5 text-[15px] font-medium">{tr(p.meta[k], lang)}</dd></div>
                    </div>
                  ))}
                </dl>
                <p className="mt-6 border-s-[3px] border-vx-orange ps-5 text-[15px] italic leading-relaxed text-vx-navy/80 rtl:not-italic"><b className="mb-1 block text-xs font-bold uppercase not-italic text-vx-navy rtl:text-sm rtl:normal-case">{tr(projectLabels.highlight, lang)}</b>{tr(p.highlight, lang)}</p>
              </Reveal>
              <div className="grid auto-rows-[160px] grid-cols-2 gap-3 md:auto-rows-[200px] md:gap-4">
                <Reveal className="col-span-2 row-span-2"><Bg src={`/images/projects/${p.hero}.jpg`} className="size-full" /></Reveal>
                {p.gallery.slice(0, 4).map((g, j) => (<Reveal key={g} delay={j * 70}><Bg src={`/images/projects/${g}.jpg`} className="size-full" /></Reveal>))}
              </div>
            </div>
          </Container>
        </section>
      ))}
      <Clients lang={lang} />
      <div className="h-16 md:h-24" />
      <CtaBand lang={lang} />
    </>
  );
}
