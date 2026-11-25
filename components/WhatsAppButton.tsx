import { Icon } from "./Icon";
import { site } from "@/lib/site";
import { type Lang, tr } from "@/lib/i18n";

/** Floating WhatsApp button, bottom corner on every page (mirrors to the left in Arabic). */
export function WhatsAppButton({ lang }: { lang: Lang }) {
  const label = tr({ en: `Chat with us on WhatsApp ${site.whatsapp}`, ar: `تواصل معنا عبر واتساب ${site.whatsapp}` }, lang);
  return (
    <a href={`https://wa.me/${site.whatsappRaw}`} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}
      className="fixed bottom-5 end-5 z-40 grid size-14 place-items-center rounded-full bg-vx-orange text-white shadow-[0_12px_30px_rgba(23,37,50,.3)] transition-transform duration-300 hover:scale-110 md:bottom-7 md:end-7 md:size-16">
      <Icon name="wa" size={30} />
    </a>
  );
}
