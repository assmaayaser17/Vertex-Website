import { Container, Eyebrow } from "./ui";
import { Bg } from "./ui";
import type { L, Lang } from "@/lib/i18n";
import { tr } from "@/lib/i18n";

export function PageHero({ lang, eyebrow, title, lead, image }: { lang: Lang; eyebrow: L; title: L; lead?: L; image?: string }) {
  return (
    <section className="relative overflow-hidden bg-vx-navy text-white">
      <Bg src="/images/hero/cover.jpg" className="absolute inset-0 opacity-60 rtl:-scale-x-100" />
      {image && <Bg src={image} className="cut-top absolute inset-y-0 end-0 hidden w-[42%] opacity-80 lg:block" />}
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-vx-navy via-vx-navy/85 to-vx-navy/40 rtl:bg-gradient-to-l" />
      <Container className="relative pb-20 pt-40 md:pb-28 md:pt-52">
        <div className="max-w-[820px]">
          <div className="animate-rise"><Eyebrow dark>{tr(eyebrow, lang)}</Eyebrow></div>
          <h1 className="animate-rise text-[32px] font-bold leading-[1.06] break-words xs:text-[38px] md:text-[56px] lg:text-[64px] rtl:leading-[1.3]" style={{ animationDelay: "120ms" }}>{tr(title, lang)}</h1>
          {lead && <p className="mt-6 max-w-[640px] animate-rise text-lg font-medium leading-[1.7] text-white/82 md:text-xl" style={{ animationDelay: "260ms" }}>{tr(lead, lang)}</p>}
        </div>
      </Container>
      <div aria-hidden="true" className="h-1.5 bg-gradient-to-r from-vx-deep to-vx-orange" />
    </section>
  );
}
