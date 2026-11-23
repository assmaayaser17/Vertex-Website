export const locales = ["en", "ar"] as const;
export type Lang = (typeof locales)[number];
export type L = { en: string; ar: string };

export const isLang = (v: string): v is Lang => (locales as readonly string[]).includes(v);
export const tr = (l: L, lang: Lang) => l[lang];
export const dir = (lang: Lang) => (lang === "ar" ? "rtl" : "ltr");
export const other = (lang: Lang): Lang => (lang === "ar" ? "en" : "ar");
export const href = (lang: Lang, path = "") => `/${lang}${path ? `/${path.replace(/^\//, "")}` : ""}/`.replace(/\/+$/, "/");
