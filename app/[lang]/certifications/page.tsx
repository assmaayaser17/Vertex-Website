import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { Container, Eyebrow, H2 } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icon";
import { CtaBand } from "@/components/CtaBand";
import { ApprovalsSection, GovSection } from "@/components/InfoSections";
import { CertCards, Consultants } from "@/components/HomeSections";
import { certs, pageMeta } from "@/lib/content";
import { isLang, locales, tr } from "@/lib/i18n";

export function generateStaticParams() { return locales.map((lang) => ({ lang })); }
export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  return { title: tr(pageMeta.certifications.title, lang), description: tr(pageMeta.certifications.desc, lang), alternates: { canonical: `/${lang}/certifications/` } };
}

export default async function Certifications({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  return (
    <>
      <PageHero lang={lang} eyebrow={certs.eyebrow} title={certs.title} lead={certs.text} />
      <section className="py-20 md:py-28">
        <Container>
          <CertCards lang={lang} />
          <Consultants lang={lang} />
          <ul className="mt-6 flex flex-wrap gap-3">{certs.tags.map((t, i) => (<li key={i} className="flex items-center gap-2 border border-vx-navy/20 px-4 py-2.5 text-sm font-bold"><Icon name="check" size={18} className="text-vx-orange" />{tr(t, lang)}</li>))}</ul>
        </Container>
      </section>
      <section className="bg-vx-sand py-20 md:py-28">
        <Container>
          <Reveal><Eyebrow>{tr(certs.eyebrow, lang)}</Eyebrow><H2 className="mb-12">{tr({ en: "Certificates on file.", ar: "الشهادات المعتمدة." }, lang)}</H2></Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {certs.items.map((c, i) => (
              <Reveal key={c.key} delay={(i % 2) * 100} className="border border-vx-navy/12 bg-white p-4">
                <img src={`/images/certs/${c.img}.jpg`} alt={`${c.code} ${tr(c.title, lang)}`} loading="lazy" className="h-[320px] w-full object-contain md:h-[420px]" />
                <p className="px-2 pb-2 pt-4 text-base font-bold"><span dir="ltr">{c.code}{c.year ? ` : ${c.year}` : ""}</span> — {tr(c.title, lang)}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <section className="py-20 md:py-28">
        <Container>
          <Reveal><Eyebrow>{tr(certs.consultantSupport.title, lang)}</Eyebrow><H2 className="mb-5">{tr(certs.consultantSupport.title, lang)}</H2><p className="max-w-[720px] text-lg text-vx-navy/80">{tr(certs.consultantSupport.text, lang)}</p></Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {certs.consultantSupport.items.map((s, i) => (<Reveal key={i} delay={i * 90} className="border-t-[3px] border-vx-navy bg-vx-sand p-7"><Icon name="doc" size={26} className="mb-4 text-vx-orange" /><h3 className="mb-2 text-xl font-bold">{tr(s.title, lang)}</h3><p className="text-[15px] text-vx-navy/78">{tr(s.text, lang)}</p></Reveal>))}
          </div>
        </Container>
      </section>
      <ApprovalsSection lang={lang} />
      <GovSection lang={lang} />
      <CtaBand lang={lang} />
    </>
  );
}
