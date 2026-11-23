import Link from "next/link";
import { Logo } from "./Logo";
import { Icon } from "./Icon";
import { Container } from "./ui";
import { nav, products, ui } from "@/lib/content";
import { site } from "@/lib/site";
import { type Lang, href, tr } from "@/lib/i18n";
import { L } from "@/lib/i18n";

const t = (en: string, ar: string): L => ({ en, ar });

export function Footer({ lang }: { lang: Lang }) {
  const h4 = "mb-5 text-sm font-bold uppercase text-vx-orange rtl:text-base rtl:normal-case";
  const a = "mb-3 block text-base text-white/85 transition-colors hover:text-vx-orange";
  return (
    <footer className="bg-vx-navy pb-9 pt-20 text-white">
      <Container>
        <div className="grid gap-12 border-b border-white/15 pb-14 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.4fr]">
          <div>
            <Logo lang={lang} tone="dark" width={240} />
            <p className="mt-5 max-w-xs text-base text-white/70">{tr(t("Premium flooring and interior finishing in Saudi Arabia.", "أرضيات وتشطيبات داخلية فاخرة في المملكة العربية السعودية."), lang)}</p>
          </div>
          <div>
            <h4 className={h4}>{tr(t("Company", "الشركة"), lang)}</h4>
            {nav.slice(1).map((n) => (<Link key={n.key} href={href(lang, n.path)} className={a}>{tr(n.label, lang)}</Link>))}
          </div>
          <div>
            <h4 className={h4}>{tr(t("Products", "المنتجات"), lang)}</h4>
            {products.items.map((p) => (<Link key={p.key} href={href(lang, "products")} className={a}>{tr(p.title, lang)}</Link>))}
            <Link href={href(lang, "products")} className={a}>{tr(t("Wallcoverings", "تكسية جدران"), lang)}</Link>
          </div>
          <div>
            <h4 className={h4}>{tr(t("Contact", "تواصل"), lang)}</h4>
            <p className="mb-3.5 flex items-start gap-3 text-base text-white/85"><Icon name="pin" size={18} className="mt-1 text-vx-orange" />{tr(site.address, lang)}</p>
            <p className="mb-3.5 flex items-center gap-3 text-base text-white/85"><Icon name="phone" size={18} className="text-vx-orange" /><a dir="ltr" href={`tel:+${site.phoneRaw}`} className="hover:text-vx-orange">{site.phone}</a></p>
            <p className="mb-3.5 flex items-center gap-3 text-base text-white/85"><Icon name="mail" size={18} className="text-vx-orange" /><a dir="ltr" href={`mailto:${site.email}`} className="break-all hover:text-vx-orange">{site.email}</a></p>
            <p className="mb-3.5 flex items-center gap-3 text-base text-white/85"><Icon name="globe" size={18} className="text-vx-orange" /><span dir="ltr">{site.website}</span></p>
            <p className="flex items-center gap-3 text-base text-white/85"><Icon name="clock" size={18} className="text-vx-orange" />{tr(site.hours, lang)}</p>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-2 pt-7 text-sm text-white/65 md:flex-row">
          <span>{tr(ui.rights, lang)}</span>
          <span dir="ltr">ISO 9001 · ISO 14001 · ISO 45001</span>
        </div>
      </Container>
    </footer>
  );
}
