"use client";
import { useState } from "react";
import { form as F } from "@/lib/content";
import { site } from "@/lib/site";
import { type Lang, tr } from "@/lib/i18n";
import { Icon } from "./Icon";

export function QuoteForm({ lang, className = "" }: { lang: Lang; className?: string }) {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [project, setProject] = useState("");
  const body = `${tr(F.name, lang)}: ${name}\n${tr(F.contact, lang)}: ${contact}\n${tr(F.project, lang)}: ${project}`;
  const mailto = `mailto:${site.email}?subject=${encodeURIComponent(tr(F.subject, lang))}&body=${encodeURIComponent(body)}`;
  const wa = `https://wa.me/${site.phoneRaw}?text=${encodeURIComponent(`${tr(F.subject, lang)}\n\n${body}`)}`;
  const field = "w-full rounded-none border border-vx-navy/30 bg-vx-sand px-4 py-3.5 text-base normal-case text-vx-navy placeholder:text-vx-navy/50 focus:border-vx-navy focus:outline-2 focus:outline-vx-navy";
  const label = "grid gap-2 text-[13px] font-bold uppercase rtl:text-[15px] rtl:normal-case";
  return (
    <form onSubmit={(e) => e.preventDefault()} className={`grid gap-[18px] bg-white p-7 text-vx-navy shadow-[0_40px_80px_rgba(15,26,36,.25)] md:p-10 ${className}`}>
      <h3 className="text-2xl font-bold">{tr(F.title, lang)}</h3>
      <label className={label}>{tr(F.name, lang)}<input className={field} value={name} onChange={(e) => setName(e.target.value)} placeholder={tr(F.namePh, lang)} autoComplete="name" /></label>
      <label className={label}>{tr(F.contact, lang)}<input className={field} value={contact} onChange={(e) => setContact(e.target.value)} placeholder={tr(F.contactPh, lang)} autoComplete="email" /></label>
      <label className={label}>{tr(F.project, lang)}<textarea rows={3} className={field} value={project} onChange={(e) => setProject(e.target.value)} placeholder={tr(F.projectPh, lang)} /></label>
      <a href={mailto} className="cut-btn inline-flex h-14 items-center justify-center gap-3 bg-vx-navy px-7 text-[15px] font-bold text-white transition-colors hover:bg-black"><Icon name="mail" size={20} />{tr(F.send, lang)}</a>
      <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center gap-3 border-2 border-vx-navy px-7 text-[15px] font-bold transition-colors hover:bg-vx-navy hover:text-white"><Icon name="wa" size={20} />{tr(F.sendWa, lang)}</a>
      <p className="text-[13px] text-vx-navy/70">{tr(F.hint, lang)}</p>
    </form>
  );
}
