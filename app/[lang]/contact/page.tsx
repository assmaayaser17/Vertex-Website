import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icon";
import { QuoteForm } from "@/components/QuoteForm";
import { LocationSection } from "@/components/InfoSections";
import { contactPage, pageMeta } from "@/lib/content";
import { site } from "@/lib/site";
import { isLang, locales, tr } from "@/lib/i18n";

export function generateStaticParams() { return locales.map((lang) => ({ lang })); }
export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  return { title: tr(pageMeta.contact.title, lang), description: tr(pageMeta.contact.desc, lang), alternates: { canonical: `/${lang}/contact/` } };
}

export default async function Contact({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const C = contactPage;
  const rows = [
    { icon: "phone", label: C.phone, value: <a dir="ltr" href={`tel:+${site.phoneRaw}`} className="hover:text-vx-orange">{site.phone}</a> },
    { icon: "mail", label: C.email, value: <a dir="ltr" href={`mailto:${site.email}`} className="break-all hover:text-vx-orange">{site.email}</a> },
    { icon: "globe", label: C.website, value: <span dir="ltr">{site.website}</span> },
    { icon: "pin", label: C.address, value: <>{tr(site.address, lang)}</> },
    { icon: "clock", label: C.hours, value: <>{tr(site.hours, lang)}</> },
  ];
  return (
    <>
      <PageHero lang={lang} eyebrow={pageMeta.contact.title} title={C.title} lead={C.lead} image="/images/brand/mockups/cards.jpg" />
      <section className="py-20 md:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div className="min-w-0">
            <div className="grid gap-3.5">
              {rows.map((r, i) => (
                <Reveal key={i} delay={i * 60} className="flex min-w-0 items-start gap-4 border border-vx-navy/12 bg-white p-5">
                  <span className="grid size-11 shrink-0 place-items-center bg-vx-orange/10"><Icon name={r.icon} className="text-vx-orange" /></span>
                  <div className="min-w-0"><div className="text-xs font-bold uppercase text-vx-navy/60 rtl:text-sm rtl:normal-case">{tr(r.label, lang)}</div><div className="mt-0.5 text-base font-medium">{r.value}</div></div>
                </Reveal>
              ))}
            </div>
          </div>
          <div className="min-w-0 bg-vx-orange p-4 md:p-6"><QuoteForm lang={lang} /></div>
        </Container>
      </section>
      <LocationSection lang={lang} className="bg-vx-sand py-20 md:py-28" />
    </>
  );
}
