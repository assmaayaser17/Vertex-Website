import { Container, Btn } from "./ui";
import { QuoteForm } from "./QuoteForm";
import { Icon } from "./Icon";
import { cta, ui } from "@/lib/content";
import { site } from "@/lib/site";
import { type Lang, tr } from "@/lib/i18n";

export function CtaBand({ lang }: { lang: Lang }) {
  return (
    <section id="quote" className="relative overflow-hidden bg-gradient-to-r from-vx-deep to-vx-orange py-20 text-white rtl:bg-gradient-to-l md:py-28">
      <div aria-hidden="true" className="absolute end-0 top-0 hidden h-[90px] w-[200px] bg-white/95 md:block md:h-[150px] md:w-[360px] [clip-path:polygon(18%_0,100%_0,100%_100%,0_100%)] rtl:[clip-path:polygon(0_0,82%_0,100%_100%,0_100%)]" />
      <div aria-hidden="true" className="absolute bottom-0 start-0 hidden h-[110px] w-[300px] bg-white/95 md:block [clip-path:polygon(0_0,100%_0,80%_100%,0_100%)] rtl:[clip-path:polygon(0_0,100%_0,100%_100%,20%_100%)]" />
      <Container className="relative grid items-center gap-12 lg:grid-cols-[1.2fr_.8fr] lg:gap-20">
        <div>
          <h2 className="mb-6 text-[38px] font-bold leading-[1.04] md:text-[56px] lg:text-[64px] rtl:leading-[1.28]">{tr(cta.title, lang)}</h2>
          <p className="max-w-[560px] text-lg font-medium leading-relaxed md:text-xl">{tr(cta.text, lang)}</p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Btn href={`mailto:${site.formEmail}`} variant="white" arrow>{tr(ui.quote, lang)}</Btn>
            <a href={`https://wa.me/${site.whatsappRaw}`} target="_blank" rel="noopener noreferrer" className="inline-flex h-14 items-center justify-center gap-3 border-2 border-white px-7 text-[15px] font-bold transition-colors hover:bg-white hover:text-vx-navy"><Icon name="wa" size={20} />{tr(ui.whatsapp, lang)}</a>
          </div>
        </div>
        <QuoteForm lang={lang} />
      </Container>
    </section>
  );
}
