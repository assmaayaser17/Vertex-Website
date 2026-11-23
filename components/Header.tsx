"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { Icon } from "./Icon";
import { nav, ui } from "@/lib/content";
import { type Lang, href, other, tr } from "@/lib/i18n";

export function Header({ lang }: { lang: Lang }) {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const path = usePathname() || "";
  useEffect(() => {
    const on = () => setSolid(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => { setOpen(false); }, [path]);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);

  const rest = path.replace(/^\/(en|ar)/, "").replace(/\/+$/, "");
  const switchHref = `/${other(lang)}${rest}/`.replace(/\/+$/, "/");
  const isActive = (p: string) => (p === "" ? rest === "" : rest === `/${p}`);

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:text-vx-navy">{tr(ui.skip, lang)}</a>
      <header className={`fixed inset-x-0 top-0 z-50 text-white transition-all duration-300 ${solid ? "bg-vx-navy/95 shadow-[0_10px_40px_rgba(0,0,0,.25)] backdrop-blur" : "bg-transparent"}`}>
        <div className={`mx-auto flex max-w-[1320px] items-center justify-between gap-4 px-4 sm:px-5 transition-all duration-300 md:px-12 ${solid ? "h-[88px]" : "h-[96px] md:h-[112px]"}`}>
          <Link href={href(lang)} aria-label="Vertex" className="shrink-0"><Logo lang={lang} tone="dark" width={200} /></Link>
          <nav aria-label="Primary" className="hidden items-center gap-7 xl:flex">
            {nav.map((n) => (
              <Link key={n.key} href={href(lang, n.path)} aria-current={isActive(n.path) ? "page" : undefined}
                className={`border-b-2 py-2 text-[14px] font-medium transition-colors hover:border-vx-orange rtl:text-base ${isActive(n.path) ? "border-vx-orange" : "border-transparent opacity-90"}`}>
                {tr(n.label, lang)}
              </Link>
            ))}
          </nav>
          <div className="flex shrink-0 items-center gap-2 sm:gap-3 md:gap-5">
            <Link href={switchHref} hrefLang={other(lang)} className="hidden sm:inline-block border border-white/40 px-3 py-1.5 text-[13px] font-bold transition-colors hover:bg-white hover:text-vx-navy md:text-sm">{tr(ui.langSwitch, lang)}</Link>
            <Link href={href(lang, "contact")} className="cut-btn hidden h-11 items-center bg-white px-5 text-sm font-bold text-vx-navy transition-colors hover:bg-vx-orange md:inline-flex">{tr(ui.quote, lang)}</Link>
            <button type="button" aria-label={tr(ui.menu, lang)} aria-expanded={open} onClick={() => setOpen(true)} className="-me-2 grid size-11 place-items-center xl:hidden"><Icon name="menu" size={28} /></button>
          </div>
        </div>
      </header>
      {open && (
        <div role="dialog" aria-modal="true" aria-label={tr(ui.menu, lang)} className="fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-vx-navy px-4 pb-10 pt-2 text-white sm:px-6">
          <div className="flex h-[88px] items-center justify-between">
            <Logo lang={lang} tone="dark" width={200} />
            <button type="button" aria-label={tr(ui.close, lang)} onClick={() => setOpen(false)} className="grid size-11 place-items-center"><Icon name="x" size={28} /></button>
          </div>
          <nav className="mt-8 flex flex-1 flex-col">
            {nav.map((n, i) => (
              <Link key={n.key} href={href(lang, n.path)} onClick={() => setOpen(false)} className="flex items-center justify-between border-b border-white/15 py-5 text-2xl font-bold">
                <span><span className="me-4 text-sm font-bold text-vx-orange">0{i + 1}</span>{tr(n.label, lang)}</span>
                <Icon name="arrow" flip className="text-vx-orange" />
              </Link>
            ))}
          </nav>
          <Link href={switchHref} hrefLang={other(lang)} onClick={() => setOpen(false)} className="mt-8 inline-flex h-12 items-center justify-center border border-white/40 text-base font-bold">{tr(ui.langSwitch, lang)}</Link>
          <Link href={href(lang, "contact")} onClick={() => setOpen(false)} className="cut-btn mt-4 inline-flex h-14 items-center justify-center bg-vx-orange px-8 font-bold text-white">{tr(ui.quote, lang)}</Link>
        </div>
      )}
    </>
  );
}
