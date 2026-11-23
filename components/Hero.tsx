import { Container, Btn, Bg } from "./ui";
import { hero } from "@/lib/content";
import { type Lang, href, tr } from "@/lib/i18n";

export function Hero({ lang }: { lang: Lang }) {
  const d = (ms: number) => ({ animationDelay: `${ms}ms` });
  return (
    <section className="relative overflow-hidden bg-vx-navy text-white">
      <Bg src="/images/hero/cover.jpg" className="absolute inset-0 rtl:-scale-x-100" />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-vx-navy/90 to-vx-navy/75 lg:bg-gradient-to-r lg:from-vx-navy/95 lg:via-vx-navy/80 lg:to-vx-navy/0 lg:rtl:bg-gradient-to-l" />
      <Container className="relative grid min-h-[720px] items-center gap-12 pb-28 pt-32 lg:min-h-[900px] lg:grid-cols-[1.08fr_.92fr] lg:gap-10 lg:pb-36 lg:pt-28">
        <div>
          <div className="mb-6 flex animate-rise items-center gap-3.5 text-[13px] font-bold uppercase text-vx-orange rtl:text-[15px] rtl:normal-case" style={d(100)}>
            <span aria-hidden="true" className="flex h-[18px] items-end gap-[3px]"><i className="block h-[8px] w-[6px] bg-vx-orange" /><i className="block h-[13px] w-[6px] bg-vx-orange" /><i className="block h-[18px] w-[6px] bg-vx-orange" /></span>
            {tr(hero.eyebrow, lang)}
          </div>
          <h1 className="mb-7 animate-rise text-[38px] font-bold leading-[1.02] xs:text-[44px] md:text-[60px] lg:text-[72px] rtl:text-[42px] rtl:leading-[1.22] md:rtl:text-[60px] lg:rtl:text-[72px]" style={d(220)}>
            {tr(hero.title1, lang)}<span className="block text-vx-orange">{tr(hero.title2, lang)}</span>
          </h1>
          <p className="max-w-[560px] animate-rise text-[17px] font-medium leading-[1.7] text-white/85 md:text-xl" style={d(380)}>{tr(hero.lead, lang)}</p>
          <div className="mt-10 flex animate-rise flex-col gap-4 sm:flex-row" style={d(520)}>
            <Btn href={href(lang, "projects")} arrow>{tr(hero.cta1, lang)}</Btn>
            <Btn href={href(lang, "certifications")} variant="ghost">{tr(hero.cta2, lang)}</Btn>
          </div>
          <ul className="mt-11 flex animate-rise flex-wrap gap-2.5" style={d(660)}>
            {hero.chips.map((c, i) => (<li key={i} className="border border-white/30 px-4 py-2 text-[13px] font-medium uppercase text-white/90 rtl:text-sm rtl:normal-case">{tr(c, lang)}</li>))}
          </ul>
        </div>
        <div aria-hidden="true" className="relative mx-auto h-[400px] w-full max-w-[560px] animate-fade md:h-[560px] lg:h-[640px]" style={d(500)}>
          <div className="cut-top absolute start-10 end-0 border-2 border-vx-orange opacity-90" style={{ top: 40, bottom: 20 }} />
          <Bg src="/images/projects/conrad-lounge.jpg" className="cut-top absolute start-[70px] end-7 shadow-[0_40px_80px_rgba(0,0,0,.4)]" style={{ top: 0, bottom: 40 }} />
          <Bg src="/images/projects/cloud-lobby.jpg" className="absolute bottom-0 start-0 h-[120px] w-[150px] border-[6px] border-white shadow-[0_24px_48px_rgba(0,0,0,.35)] md:h-[190px] md:w-[250px]" />
          <div className="absolute -end-2 top-[30px] flex animate-float flex-col bg-vx-orange px-5 py-4 font-bold text-white md:top-[70px]"><b className="text-3xl leading-none">ISO</b><span dir="ltr" className="text-xs font-bold">9001 · 14001 · 45001</span></div>
        </div>
      </Container>
    </section>
  );
}
