import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { Container, Eyebrow, H2, Bg } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icon";
import { CtaBand } from "@/components/CtaBand";
import { GovSection } from "@/components/InfoSections";
import { about, aboutPage, certs, pageMeta } from "@/lib/content";
import { isLang, tr } from "@/lib/i18n";
import { locales } from "@/lib/i18n";

export function generateStaticParams() { return locales.map((lang) => ({ lang })); }
export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  return { title: tr(pageMeta.about.title, lang), description: tr(pageMeta.about.desc, lang), alternates: { canonical: `/${lang}/about/` } };
}

export default async function About({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const box = "border border-vx-navy/12 bg-white p-7";
  return (
    <>
      <PageHero lang={lang} eyebrow={about.eyebrow} title={aboutPage.title} lead={aboutPage.lead} image="/images/projects/floor-corridor.jpg" />

      <section className="py-20 md:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:gap-20">
          <div>
            <Reveal><Eyebrow>{tr(aboutPage.overview, lang)}</Eyebrow><H2 className="mb-10">{tr(about.title, lang)}</H2></Reveal>
            <div className="grid gap-5">
              <Reveal className={box}><h3 className="mb-2 flex items-center gap-3 text-xl font-bold"><Icon name="box" className="text-vx-orange" />{tr(aboutPage.whoTitle, lang)}</h3><p className="text-base leading-relaxed text-vx-navy/80">{tr(about.who, lang)}</p></Reveal>
              <Reveal delay={80} className={box}><h3 className="mb-2 flex items-center gap-3 text-xl font-bold"><Icon name="tool" className="text-vx-orange" />{tr(aboutPage.whatTitle, lang)}</h3><p className="text-base leading-relaxed text-vx-navy/80">{tr(about.what, lang)}</p></Reveal>
              <Reveal delay={160} className={box}><h3 className="mb-3 flex items-center gap-3 text-xl font-bold"><Icon name="check" className="text-vx-orange" />{tr(aboutPage.strengthsTitle, lang)}</h3>
                <ul className="grid gap-2.5">{about.strengths.map((s, i) => (<li key={i} className="flex items-center gap-3 text-base text-vx-navy/85"><span className="size-2 shrink-0 bg-vx-orange" />{tr(s.text, lang)}</li>))}</ul></Reveal>
            </div>
            <div className="mt-5 grid gap-5 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {about.pillars3.map((p, i) => (<Reveal key={i} delay={i * 90} className="border-t-[3px] border-vx-navy bg-vx-sand p-6"><Icon name={p.icon} size={26} className="mb-3 text-vx-orange" /><h3 className="mb-1 text-lg font-bold">{tr(p.title, lang)}</h3><p className="text-[15px] text-vx-navy/78">{tr(p.text, lang)}</p></Reveal>))}
            </div>
          </div>
          <Reveal className="relative min-h-[420px]"><Bg src="/images/brand/mockups/billboard.jpg" className="cut-corner-tr absolute inset-0 lg:bottom-[70px]" style={{ backgroundPosition: "18% 50%" }} /><Bg src="/images/projects/interior-kitchen.jpg" className="absolute bottom-0 end-0 h-[200px] w-[260px] border-8 border-white" /></Reveal>
        </Container>
      </section>

      <section className="bg-vx-sand py-20 md:py-28">
        <Container>
          <Reveal><Eyebrow>{tr(certs.hse.title, lang)}</Eyebrow><H2 className="mb-6">{tr(certs.title, lang)}</H2><p className="max-w-[820px] text-lg leading-relaxed text-vx-navy/80">{tr(certs.hse.text, lang)}</p></Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {certs.hse.cards.map((c, i) => (<Reveal key={i} delay={i * 90} className="relative border border-vx-navy/12 bg-white p-7"><span aria-hidden="true" className="absolute -start-px -top-px h-[5px] w-14 bg-vx-orange" /><Icon name={c.icon} size={28} className="mb-5 text-vx-orange" /><h3 className="mb-2 text-xl font-bold">{tr(c.title, lang)}</h3><p className="text-[15px] text-vx-navy/78">{tr(c.text, lang)}</p></Reveal>))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <Reveal><Eyebrow>{tr(aboutPage.orgEyebrow, lang)}</Eyebrow><H2 className="mb-14">{tr(aboutPage.orgTitle, lang)}</H2></Reveal>
          <Reveal className="flex flex-col items-center">
            <div className="bg-vx-orange px-8 py-3.5 text-center text-base font-bold text-vx-navy">{tr(aboutPage.org.md, lang)}</div>
            <span aria-hidden="true" className="h-8 w-px bg-vx-navy/40" />
            <div className="border border-vx-orange bg-vx-orange/10 px-7 py-2.5 text-sm font-bold">{tr(aboutPage.org.secretary, lang)}</div>
            <span aria-hidden="true" className="h-8 w-px bg-vx-navy/40" />
          </Reveal>
          <div className="relative grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            <span aria-hidden="true" className="absolute inset-x-[10%] -top-px hidden h-px bg-vx-navy/40 lg:block" />
            {aboutPage.org.depts.map((d, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="border-2 border-vx-navy bg-white px-4 py-3.5 text-center text-[15px] font-bold">{tr(d.title, lang)}</div>
                <div className="mt-3 grid gap-2.5">
                  {d.kids.map((k, j) => (<div key={j} className="border border-vx-navy/20 bg-vx-sand px-3 py-3 text-center text-[13.5px] font-medium text-vx-navy/85">{tr(k, lang)}</div>))}
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-vx-navy py-20 text-white md:py-28">
        <Container>
          <Reveal><Eyebrow dark>{tr(aboutPage.toolsEyebrow, lang)}</Eyebrow><H2 dark className="mb-5">{tr(aboutPage.toolsTitle, lang)}</H2><p className="max-w-[720px] text-lg text-white/78">{tr(aboutPage.toolsText, lang)}</p></Reveal>
          <div className="mt-12 grid gap-px bg-white/15 md:grid-cols-2 lg:grid-cols-5">
            {aboutPage.tools.map((t, i) => (
              <Reveal key={i} delay={i * 80} className="bg-vx-navy p-7">
                <span className="mb-5 grid size-12 place-items-center border-2 border-vx-orange"><Icon name={t.icon} className="text-vx-orange" /></span>
                <h3 className="mb-3 text-xl font-bold">{tr(t.title, lang)}</h3>
                <ul className="grid gap-2">{t.items.map((it, j) => (<li key={j} className="flex items-center gap-2.5 text-[15px] text-white/82"><span className="size-1.5 bg-vx-orange" />{tr(it, lang)}</li>))}</ul>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <GovSection lang={lang} />
      <CtaBand lang={lang} />
    </>
  );
}
