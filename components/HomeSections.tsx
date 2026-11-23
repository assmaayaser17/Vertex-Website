import Link from "next/link";
import { Container, Eyebrow, H2, Btn, TextLink, Bg } from "./ui";
import { Reveal } from "./Reveal";
import { CountUp } from "./CountUp";
import { Icon } from "./Icon";
import { about, certs, clients, clientsTitle, field, logistics, process, products, projects, projectLabels, stats, ui } from "@/lib/content";
import { type Lang, href, tr } from "@/lib/i18n";

export function Stats({ lang }: { lang: Lang }) {
  return (
    <section className="relative z-10 -mt-14 md:-mt-[78px]">
      <Container>
        <Reveal className="grid grid-cols-2 border-t-[6px] border-vx-orange bg-white shadow-[0_30px_70px_rgba(15,26,36,.16)] lg:grid-cols-4">
          {stats.map((s, i) => (
            <div key={i} className="border-b border-vx-navy/10 p-5 md:p-8 lg:border-b-0 lg:border-e [&:nth-child(4n)]:lg:border-e-0">
              <div className="text-[38px] font-bold leading-none md:text-[54px]">
                {"value" in s && s.value !== undefined ? <CountUp to={s.value} /> : s.text}
              </div>
              <span className="mt-3.5 block h-1 w-9 bg-vx-orange" />
              <p className="mt-3.5 text-[13px] font-medium leading-snug text-vx-navy/75 md:text-[15px]">{tr(s.label, lang)}</p>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}

export function Clients({ lang }: { lang: Lang }) {
  return (
    <section className="pb-6 pt-16 md:pt-24">
      <Container>
        <Reveal><p className="mb-10 text-center text-sm font-bold uppercase text-vx-navy/70 rtl:text-[17px] rtl:normal-case">{tr(clientsTitle, lang)}</p></Reveal>
        <div className="flex flex-wrap justify-center gap-2.5 md:gap-4">
          {clients.map((c, i) => (
            <Reveal key={c.file} delay={(i % 6) * 60} className="w-[calc((100%-20px)/3)] md:w-[calc((100%-48px)/4)] lg:w-[calc((100%-80px)/6)]">
              <div className="group flex h-[72px] items-center justify-center border border-vx-navy/12 bg-white p-2.5 transition duration-300 hover:-translate-y-1 hover:border-vx-orange md:h-24 md:p-4">
                <img src={`/images/clients/${c.file}.png`} alt={c.name} loading="lazy" className="max-h-full max-w-full object-contain opacity-95 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0" />
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function AboutSection({ lang }: { lang: Lang }) {
  return (
    <section id="about" className="mt-14 bg-vx-sand py-20 md:py-32">
      <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
        <Reveal className="relative h-[400px] md:h-[620px]">
          <Bg src="/images/projects/floor-corridor.jpg" className="cut-corner-tr absolute bottom-[70px] end-[90px] start-0 top-0 max-md:end-[40px]" />
          <Bg src="/images/projects/interior-kitchen.jpg" className="absolute bottom-0 end-0 h-[150px] w-[180px] border-8 border-vx-sand md:h-[250px] md:w-[300px]" />
        </Reveal>
        <div>
          <Reveal><Eyebrow>{tr(about.eyebrow, lang)}</Eyebrow><H2 className="mb-6">{tr(about.title, lang)}</H2>
            <p className="text-base leading-[1.75] text-vx-navy/80 md:text-lg">{tr(about.body, lang)}</p></Reveal>
          <div className="mb-10 mt-11 grid gap-6 sm:grid-cols-3">
            {about.strengths.map((s, i) => (
              <Reveal key={i} delay={i * 100} className="border-t-[3px] border-vx-navy pt-5">
                <Icon name={s.icon} size={26} className="mb-3.5 text-vx-orange" />
                <h3 className="mb-2 text-lg font-bold">{tr(s.title, lang)}</h3>
                <p className="text-[14.5px] leading-relaxed text-vx-navy/75">{tr(s.text, lang)}</p>
              </Reveal>
            ))}
          </div>
          <TextLink href={href(lang, "about")}>{tr(ui.learnMore, lang)}</TextLink>
        </div>
      </Container>
    </section>
  );
}

export function ProductsSection({ lang }: { lang: Lang }) {
  return (
    <section id="products" className="relative overflow-hidden bg-vx-navy py-20 md:py-32">
      <div aria-hidden="true" className="absolute end-0 top-0 hidden h-full w-[38%] bg-gradient-to-br from-vx-orange/0 to-vx-orange/10 lg:block [clip-path:polygon(30%_0,100%_0,100%_100%,0_100%)]" />
      <Container className="relative">
        <div className="mb-12 flex flex-col justify-between gap-5 md:mb-14 md:flex-row md:items-end">
          <Reveal><Eyebrow dark>{tr(products.eyebrow, lang)}</Eyebrow><H2 dark>{tr(products.title, lang)}</H2></Reveal>
          <Reveal><p className="max-w-[460px] text-base leading-[1.75] text-white/78 md:text-lg">{tr(products.intro, lang)}</p></Reveal>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.items.map((p, i) => (
            <Reveal key={p.key} delay={i * 90}>
              <Link href={href(lang, "products")} className="group relative block h-[400px] overflow-hidden text-white md:h-[520px]">
                <Bg src={`/images/products/${p.img}.jpg`} className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.07]" />
                <div className="absolute inset-0 bg-gradient-to-b from-vx-navy/5 from-30% to-vx-navy/90" />
                <span className="absolute inset-x-0 bottom-0 h-1.5 origin-left scale-x-0 bg-vx-orange transition-transform duration-500 group-hover:scale-x-100 rtl:origin-right" />
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <span className="mb-2.5 block text-sm font-bold text-vx-orange">{p.n}</span>
                  <h3 className="mb-2.5 text-2xl font-bold leading-tight">{tr(p.title, lang)}</h3>
                  <p className="mb-4 text-[14.5px] leading-snug text-white/85">{tr(p.text, lang)}</p>
                  <Icon name="arrow" flip className="text-vx-orange transition-transform group-hover:translate-x-1.5 rtl:group-hover:-translate-x-1.5" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-5 flex flex-col items-start gap-6 border border-white/15 bg-white/[.06] p-6 text-white md:flex-row md:items-center md:px-10 md:py-8">
          <span className="grid size-16 shrink-0 place-items-center border-2 border-vx-orange"><Icon name="box" size={30} className="text-vx-orange" /></span>
          <div className="flex-1"><h3 className="text-[22px] font-bold">{tr(products.wall.title, lang)}</h3><p className="text-base text-white/78">{tr(products.wall.text, lang)}</p></div>
          <Btn href={href(lang, "contact")} variant="white" arrow>{tr(ui.requestSamples, lang)}</Btn>
        </Reveal>
      </Container>
    </section>
  );
}

export function ProcessSection({ lang }: { lang: Lang }) {
  return (
    <section className="py-20 md:py-32">
      <Container>
        <Reveal><Eyebrow>{tr(process.eyebrow, lang)}</Eyebrow><H2>{tr(process.title, lang)}</H2></Reveal>
        <div className="mt-12 grid items-end gap-5 md:mt-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {process.steps.map((s, i) => (
            <Reveal key={i} delay={i * 120}
              className={`relative flex flex-col justify-end bg-vx-sand p-7 pb-8 ${["lg:min-h-[250px]", "lg:min-h-[290px]", "lg:min-h-[330px]", "lg:min-h-[370px]"][i]}`}>
              <span aria-hidden="true" className={`absolute inset-x-0 top-0 h-1.5 ${i === 3 ? "bg-vx-orange" : "bg-vx-navy"}`} />
              <span aria-hidden="true" className="absolute end-6 top-5 text-[54px] font-bold leading-none text-vx-navy/10">0{i + 1}</span>
              <Icon name={s.icon} size={28} className="mb-5 mt-14 text-vx-orange lg:mt-0" />
              <h3 className="mb-2 text-[22px] font-bold">{tr(s.title, lang)}</h3>
              <p className="text-[15px] leading-relaxed text-vx-navy/78">{tr(s.text, lang)}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function ProjectsSection({ lang }: { lang: Lang }) {
  const [a, b, c] = projects;
  const card = (p: typeof a, cls: string, d = 0) => (
    <Reveal delay={d} className={cls}>
      <Link href={href(lang, `projects#${p.slug}`)} className="group relative block size-full min-h-[360px] overflow-hidden text-white">
        <Bg src={`/images/projects/${p.hero}.jpg`} className="absolute inset-0 transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent from-35% to-vx-navy/90" />
        <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
          <span className="inline-block bg-vx-orange px-3 py-1.5 text-xs font-bold uppercase text-white rtl:text-sm rtl:normal-case">{tr(p.tag, lang)}</span>
          <h3 className="mb-2 mt-3 text-[22px] font-bold leading-tight md:text-[26px]">{tr(p.title, lang)}</h3>
          <p className="max-w-[460px] text-[15px] leading-snug text-white/85">{tr(p.short, lang)}</p>
        </div>
      </Link>
    </Reveal>
  );
  const thumb = (img: string, cls: string, d: number) => (
    <Reveal delay={d} className={cls}><Bg src={`/images/projects/${img}.jpg`} className="size-full min-h-[200px]" /></Reveal>
  );
  return (
    <section id="projects" className="bg-vx-sand py-20 md:py-32">
      <Container>
        <div className="mb-12 flex flex-col justify-between gap-6 md:mb-14 md:flex-row md:items-end">
          <Reveal><Eyebrow>{tr(projectLabels.selected, lang)}</Eyebrow><H2>{tr(projectLabels.title, lang)}</H2></Reveal>
          <TextLink href={href(lang, "projects")}>{tr(ui.allProjects, lang)}</TextLink>
        </div>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:grid-rows-[340px_340px_260px]">
          {card(a, "lg:col-span-7 lg:row-span-2")}
          {card(b, "lg:col-span-5", 100)}
          {card(c, "lg:col-span-5", 200)}
          {thumb("conrad-bedroom", "lg:col-span-4", 0)}
          {thumb("cloud-carpet", "lg:col-span-4", 100)}
          {thumb("misk-learning", "lg:col-span-4", 200)}
        </div>
      </Container>
    </section>
  );
}

export function LogisticsSection({ lang }: { lang: Lang }) {
  return (
    <section className="overflow-hidden bg-vx-navy py-20 md:py-32">
      <Container className="grid items-center gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
        <Reveal>
          <Eyebrow dark>{tr(logistics.eyebrow, lang)}</Eyebrow>
          <H2 dark className="mb-6">{tr(logistics.title, lang)}</H2>
          <p className="text-base leading-[1.75] text-white/78 md:text-lg">{tr(logistics.text, lang)}</p>
          <ul className="mt-8 grid gap-3.5">
            {logistics.items.map((it, i) => (<li key={i} className="flex items-center gap-3.5 text-[17px] font-medium text-white"><Icon name="check" size={20} className="text-vx-orange" />{tr(it, lang)}</li>))}
          </ul>
        </Reveal>
        <Reveal delay={150} className="relative h-[340px] md:h-[520px]">
          <Bg src="/images/projects/logistics-port.jpg" className="cut-top absolute bottom-[60px] end-0 start-[30px] top-0 md:start-20" />
          <img src="/images/brand/mockups/truck.jpg" alt="Vertex branded delivery truck" loading="lazy" className="absolute bottom-0 start-0 w-[62%] shadow-[0_30px_60px_rgba(0,0,0,.4)]" />
          <img src="/images/brand/mockups/container.jpg" alt="Vertex branded shipping container" loading="lazy" className="absolute -end-2.5 -top-6 w-[36%]" />
        </Reveal>
      </Container>
    </section>
  );
}

export function CertsSection({ lang }: { lang: Lang }) {
  return (
    <section id="certs" className="py-20 md:py-32">
      <Container>
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal><Eyebrow>{tr(certs.eyebrow, lang)}</Eyebrow><H2>{tr(certs.title, lang)}</H2></Reveal>
          <Reveal><p className="max-w-[460px] text-base leading-[1.75] text-vx-navy/78 md:text-lg">{tr(certs.text, lang)}</p></Reveal>
        </div>
        <CertCards lang={lang} />
        <Consultants lang={lang} />
        <div className="mt-8"><TextLink href={href(lang, "certifications")}>{tr(ui.learnMore, lang)}</TextLink></div>
      </Container>
    </section>
  );
}

export function CertCards({ lang }: { lang: Lang }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {certs.items.map((c, i) => (
        <Reveal key={c.key} delay={i * 90} className="group relative border border-vx-navy/12 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-vx-orange md:p-8">
          <span aria-hidden="true" className="absolute -start-px -top-px h-[5px] w-14 bg-vx-orange" />
          <Icon name={c.icon} size={28} className="mb-6 text-vx-orange" />
          <div className="text-[30px] font-bold leading-[1.1] rtl:text-[28px]" dir="ltr">{c.key === "cr" ? <span dir="auto">{tr({ en: "Commercial", ar: "السجل" }, lang)}</span> : c.code}</div>
          <div className="mb-4 mt-1.5 text-[13px] font-bold uppercase text-vx-navy rtl:text-sm rtl:normal-case">{c.key === "cr" ? tr({ en: "Registration", ar: "التجاري" }, lang) : c.year}</div>
          <p className="text-[15px] leading-relaxed text-vx-navy/78">{c.key === "cr" ? tr({ en: "Registered in the Kingdom of Saudi Arabia", ar: "مسجّلة في المملكة العربية السعودية" }, lang) : tr(c.title, lang)}</p>
        </Reveal>
      ))}
    </div>
  );
}

export function Consultants({ lang }: { lang: Lang }) {
  return (
    <Reveal className="mt-7 flex flex-wrap items-center gap-x-8 gap-y-3 border-s-[5px] border-vx-orange bg-vx-sand px-6 py-5">
      <span className="me-3 text-[15px] font-bold uppercase rtl:text-[17px] rtl:normal-case">{tr(certs.consultants.title, lang)}</span>
      {certs.consultants.names.map((n) => (<span key={n} dir="ltr" className="inline-flex items-center gap-2.5 text-base font-bold"><Icon name="check" size={20} className="text-vx-orange" />{n}</span>))}
    </Reveal>
  );
}

export function FieldSection({ lang }: { lang: Lang }) {
  const tile = "min-h-[170px] bg-white";
  return (
    <section className="bg-vx-sand py-20 md:py-28">
      <Container>
        <Reveal className="mb-12"><Eyebrow>{tr(field.eyebrow, lang)}</Eyebrow><H2>{tr(field.title, lang)}</H2></Reveal>
        <div className="grid grid-cols-2 gap-4 md:gap-5 lg:grid-cols-[1.35fr_1fr_1fr_.62fr] lg:grid-rows-[300px_300px]">
          <Reveal className="col-span-2 lg:col-span-1 lg:row-span-2"><Bg src="/images/brand/mockups/vest.jpg" className={`${tile} size-full min-h-[320px]`} style={{ backgroundPosition: "60% 40%" }} /></Reveal>
          <Reveal delay={80}><Bg src="/images/brand/mockups/helmet.jpg" className={`${tile} size-full`} /></Reveal>
          <Reveal delay={160}><Bg src="/images/brand/mockups/tape.jpg" className={`${tile} size-full`} /></Reveal>
          <Reveal delay={400} className="col-span-2 row-span-2 flex justify-center lg:order-none lg:col-span-1 lg:col-start-4 lg:row-span-2 lg:row-start-1">
            {/* Phone-shaped tile: portrait, rounded like a handset */}
            <Bg src="/images/brand/phone.jpg" className="h-[460px] w-[230px] rounded-[2.25rem] border-[6px] border-vx-navy bg-black shadow-[0_24px_50px_rgba(23,37,50,.25)] lg:size-full" style={{ backgroundPosition: "48% 50%" }} />
          </Reveal>
          <Reveal delay={240}><Bg src="/images/brand/mockups/cards.jpg" className={`${tile} size-full`} /></Reveal>
          <Reveal delay={320}><Bg src="/images/brand/mockups/tote.jpg" className={`${tile} size-full`} /></Reveal>
        </div>
      </Container>
    </section>
  );
}
