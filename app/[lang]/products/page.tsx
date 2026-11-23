import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { Container, Eyebrow, H2, Btn, Bg } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icon";
import { CtaBand } from "@/components/CtaBand";
import { PartnersSection } from "@/components/InfoSections";
import { pageMeta, products, productsPage, ui } from "@/lib/content";
import { href, isLang, locales, tr } from "@/lib/i18n";

export function generateStaticParams() { return locales.map((lang) => ({ lang })); }
export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  return { title: tr(pageMeta.products.title, lang), description: tr(pageMeta.products.desc, lang), alternates: { canonical: `/${lang}/products/` } };
}

export default async function Products({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  return (
    <>
      <PageHero lang={lang} eyebrow={products.eyebrow} title={productsPage.title} lead={productsPage.lead} image="/images/projects/conrad-lounge.jpg" />
      <section className="py-20 md:py-28">
        <Container className="grid gap-20 md:gap-28">
          {products.items.map((p, i) => (
            <article key={p.key} id={p.key} className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-20 ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <Reveal className="relative">
                <Bg src={`/images/products/${p.img}.jpg`} className={`h-[360px] md:h-[520px] ${i % 2 ? "cut-top" : "cut-corner-tr"}`} />
                <span className="absolute -bottom-5 start-6 bg-vx-orange px-5 py-3 text-2xl font-bold text-vx-navy">{p.n}</span>
              </Reveal>
              <Reveal delay={100}>
                <Eyebrow>{tr(products.eyebrow, lang)}</Eyebrow>
                <H2 className="mb-5">{tr(p.title, lang)}</H2>
                <p className="mb-8 text-lg leading-[1.75] text-vx-navy/80">{tr(p.long, lang)}</p>
                <h3 className="mb-3 text-sm font-bold uppercase text-vx-navy rtl:text-base rtl:normal-case">{tr(productsPage.usedIn, lang)}</h3>
                <ul className="mb-9 grid gap-2.5">{p.uses.map((u, j) => (<li key={j} className="flex items-center gap-3 text-base font-medium"><Icon name="check" size={20} className="text-vx-orange" />{tr(u, lang)}</li>))}</ul>
                <Btn href={href(lang, "contact")} variant="navy" arrow>{tr(ui.requestSamples, lang)}</Btn>
              </Reveal>
            </article>
          ))}
        </Container>
      </section>

      <section className="bg-vx-navy py-16 text-white md:py-20">
        <Container>
          <Reveal className="flex flex-col items-start gap-6 border border-white/15 bg-white/[.06] p-7 md:flex-row md:items-center md:p-10">
            <span className="grid size-16 shrink-0 place-items-center border-2 border-vx-orange"><Icon name="box" size={30} className="text-vx-orange" /></span>
            <div className="flex-1"><h2 className="text-2xl font-bold">{tr(products.wall.title, lang)}</h2><p className="mt-1 text-lg text-white/80">{tr(products.wall.text, lang)}</p></div>
            <Btn href={href(lang, "contact")} variant="white" arrow>{tr(ui.requestSamples, lang)}</Btn>
          </Reveal>
        </Container>
      </section>

      <PartnersSection lang={lang} />
      <CtaBand lang={lang} />
    </>
  );
}
