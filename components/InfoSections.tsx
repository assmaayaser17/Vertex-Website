import { Container, Eyebrow, H2, TextLink } from "./ui";
import { Reveal } from "./Reveal";
import { Icon } from "./Icon";
import { approvals, certs, contactPage, location, products, ui } from "@/lib/content";
import { site } from "@/lib/site";
import { type Lang, href, tr } from "@/lib/i18n";

const partnerNames: Record<string, string> = { ege: "ege", bartoline: "Bartoline", tarkett: "Tarkett", dongsheng: "Dongsheng Carpet Group", enrich: "Enrich Wallcovering", forbo: "Forbo", armstrong: "Armstrong" };

/** International partners: intro, three promises and the logo wall. */
export function PartnersSection({ lang, link = false, className = "py-20 md:py-28" }: { lang: Lang; link?: boolean; className?: string }) {
  const P = products.partners;
  return (
    <section className={className}>
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal><Eyebrow>{tr(P.title, lang)}</Eyebrow><H2 className="mb-5">{tr({ en: "Global brands. Local delivery.", ar: "علامات عالمية. توريد محلي." }, lang)}</H2><p className="max-w-[760px] text-lg text-vx-navy/80">{tr(P.text, lang)}</p></Reveal>
          {link && <TextLink href={href(lang, "products")}>{tr(ui.viewProducts, lang)}</TextLink>}
        </div>
        <ul className="mt-8 grid gap-3 md:grid-cols-3">{P.points.map((p, i) => (<li key={i} className="flex items-center gap-3 text-base font-medium"><Icon name="check" size={20} className="text-vx-orange" />{tr(p, lang)}</li>))}</ul>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-7">
          {P.logos.map((l, i) => (
            <Reveal key={l} delay={(i % 7) * 60} className="grid h-28 place-items-center border border-vx-navy/12 bg-white p-4 transition hover:-translate-y-1 hover:border-vx-orange">
              <img src={`/images/partners/${l}.png`} alt={partnerNames[l] ?? l} loading="lazy" className="max-h-full max-w-full object-contain" />
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8 flex items-center justify-center gap-5 text-sm font-bold uppercase text-vx-navy/70 rtl:text-base rtl:normal-case">
          <span aria-hidden="true" className="h-0.5 w-12 bg-vx-orange" />{tr({ en: "And more", ar: "وغيرهم" }, lang)}<span aria-hidden="true" className="h-0.5 w-12 bg-vx-orange" />
        </Reveal>
      </Container>
    </section>
  );
}

/** Government partners: the three-stage approvals path. */
export function GovSection({ lang, className = "py-20 md:py-28" }: { lang: Lang; className?: string }) {
  return (
    <section className={className}>
      <Container>
        <Reveal><Eyebrow>{tr({ en: "Government partners", ar: "الجهات الحكومية" }, lang)}</Eyebrow><H2 className="mb-5">{tr(certs.gov.title, lang)}</H2><p className="max-w-[720px] text-lg text-vx-navy/80">{tr(certs.gov.text, lang)}</p></Reveal>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {certs.gov.steps.map((s, i) => (
            <Reveal key={i} delay={i * 100} className="relative border border-vx-navy/12 bg-white p-8">
              <span className="mb-4 block text-5xl font-bold leading-none text-vx-orange">0{i + 1}</span>
              <h3 className="mb-4 text-xl font-bold">{tr(s.title, lang)}</h3>
              <ul className="grid gap-2.5">{s.points.map((p, j) => (<li key={j} className="flex items-start gap-3 text-[15px] text-vx-navy/80"><Icon name="check" size={18} className="mt-1 text-vx-orange" />{tr(p, lang)}</li>))}</ul>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/** "Some of our approvals": a real approved submittal next to its key facts. */
export function ApprovalsSection({ lang, link = false, className = "bg-vx-sand py-20 md:py-28" }: { lang: Lang; link?: boolean; className?: string }) {
  const A = approvals;
  return (
    <section className={className}>
      <Container className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div>
          <Reveal><Eyebrow>{tr(A.eyebrow, lang)}</Eyebrow><H2 className="mb-5">{tr(A.title, lang)}</H2><p className="text-lg leading-[1.75] text-vx-navy/80">{tr(A.text, lang)}</p></Reveal>
          <Reveal delay={100} className="relative mt-9 border border-vx-navy/12 bg-white">
            <span aria-hidden="true" className="absolute -start-px -top-px h-[5px] w-14 bg-vx-orange" />
            <dl className="divide-y divide-vx-navy/10">
              {A.rows.map((r, i) => (
                <div key={i} className="grid grid-cols-[120px_1fr] gap-4 px-6 py-3.5 md:grid-cols-[140px_1fr]">
                  <dt className="text-xs font-bold uppercase text-vx-navy/60 rtl:text-sm rtl:normal-case">{tr(r.label, lang)}</dt>
                  <dd className="text-[15px] font-medium" dir={r.label.en === "Reference" ? "ltr" : undefined}>{tr(r.value, lang)}</dd>
                </div>
              ))}
            </dl>
            <div className="flex items-center gap-3 bg-vx-navy px-6 py-4 text-white">
              <span className="grid size-8 place-items-center bg-vx-orange"><Icon name="check" size={18} className="text-vx-navy" /></span>
              <span className="text-base font-bold">{tr(A.status, lang)}</span>
              <span className="text-sm text-white/70">· SBCM</span>
            </div>
          </Reveal>
          {link && <div className="mt-8"><TextLink href={href(lang, "certifications")}>{tr(ui.learnMore, lang)}</TextLink></div>}
        </div>
        <Reveal delay={150} className="relative mx-auto w-full max-w-[560px]">
          <div aria-hidden="true" className="absolute -bottom-4 -end-4 top-6 start-6 bg-vx-orange" />
          <a href={A.img} target="_blank" rel="noopener noreferrer" className="group relative block border border-vx-navy/12 bg-white p-3 shadow-[0_30px_70px_rgba(15,26,36,.16)]">
            <img src={A.img} alt={tr(A.alt, lang)} loading="lazy" className="w-full" />
            <span className="absolute bottom-6 end-6 inline-flex items-center gap-2 bg-vx-navy px-3.5 py-2 text-xs font-bold text-white opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100">
              {tr({ en: "View full size", ar: "عرض بالحجم الكامل" }, lang)}<Icon name="arrow" size={14} flip />
            </span>
          </a>
        </Reveal>
      </Container>
    </section>
  );
}

/** Location map: embedded map plus head office, coverage and contact details. */
export function LocationSection({ lang, className = "py-20 md:py-28" }: { lang: Lang; className?: string }) {
  const L = location;
  const card = "relative border border-vx-navy/12 bg-white p-6";
  return (
    <section id="location" className={className}>
      <Container>
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <Reveal><Eyebrow>{tr(L.eyebrow, lang)}</Eyebrow><H2>{tr(L.title, lang)}</H2></Reveal>
          <Reveal><p className="max-w-[460px] text-base leading-[1.75] text-vx-navy/78 md:text-lg">{tr(L.text, lang)}</p></Reveal>
        </div>
        <div className="grid gap-5 lg:grid-cols-[1.35fr_1fr]">
          <Reveal className="relative min-h-[340px] overflow-hidden border border-vx-navy/12 bg-vx-sand md:min-h-[460px]">
            <iframe src={site.mapEmbed} title={tr(L.mapTitle, lang)} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="absolute inset-0 size-full border-0 grayscale-[.35]" />
            <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-1.5 bg-vx-orange" />
          </Reveal>
          <div className="grid gap-4">
            <Reveal className={card}>
              <span aria-hidden="true" className="absolute -start-px -top-px h-[5px] w-14 bg-vx-orange" />
              <h3 className="mb-3 flex items-center gap-3 text-lg font-bold"><Icon name="pin" className="text-vx-orange" />{tr(L.head, lang)}</h3>
              <ul className="grid gap-1 text-[15px] text-vx-navy/80">{L.headLines.map((x, i) => <li key={i}>{tr(x, lang)}</li>)}</ul>
              <a href={site.mapUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2.5 border-b-2 border-vx-orange pb-1 text-sm font-bold">{tr(L.open, lang)}<Icon name="arrow" size={16} flip /></a>
            </Reveal>
            <Reveal delay={80} className={card}>
              <h3 className="mb-2 flex items-center gap-3 text-lg font-bold"><Icon name="globe" className="text-vx-orange" />{tr(L.coverage, lang)}</h3>
              <p className="text-[15px] text-vx-navy/80">{tr(L.coverageText, lang)}</p>
            </Reveal>
            <Reveal delay={160} className={card}>
              <h3 className="mb-3 flex items-center gap-3 text-lg font-bold"><Icon name="phone" className="text-vx-orange" />{tr(L.access, lang)}</h3>
              <p className="text-[15px] text-vx-navy/80">{tr(contactPage.phone, lang)}: <a dir="ltr" href={`tel:+${site.phoneRaw}`} className="font-medium text-vx-navy hover:text-vx-orange">{site.phone}</a></p>
              <p className="mt-1 text-[15px] text-vx-navy/80">{tr(contactPage.email, lang)}: <a dir="ltr" href={`mailto:${site.email}`} className="break-all font-medium text-vx-navy hover:text-vx-orange">{site.email}</a></p>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
