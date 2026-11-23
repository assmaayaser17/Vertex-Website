"use client";
import { useEffect, useRef, useState } from "react";

export function Reveal({ children, delay = 0, className = "", as: Tag = "div" }: { children: React.ReactNode; delay?: number; className?: string; as?: "div" | "section" | "li" | "article" }) {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") { setOn(true); return; }
    const io = new IntersectionObserver((es) => { es.forEach((e) => { if (e.isIntersecting) { setOn(true); io.disconnect(); } }); }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const T = Tag as React.ElementType;
  return (
    <T ref={ref} style={{ "--d": `${delay}ms` } as React.CSSProperties} className={`reveal ${on ? "is-in" : ""} ${className}`}>
      {children}
    </T>
  );
}
