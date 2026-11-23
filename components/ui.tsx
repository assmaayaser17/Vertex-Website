import Link from "next/link";
import { Icon } from "./Icon";

export function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div className={`mb-5 flex items-center gap-3.5 text-[13px] font-bold uppercase rtl:text-[15px] rtl:normal-case ${dark ? "text-vx-orange" : "text-vx-navy"}`}>
      <span aria-hidden="true" className="flex h-[18px] items-end gap-[3px]">
        <i className="block h-[8px] w-[6px] bg-vx-orange" /><i className="block h-[13px] w-[6px] bg-vx-orange" /><i className="block h-[18px] w-[6px] bg-vx-orange" />
      </span>
      {children}
    </div>
  );
}

export function H2({ children, dark = false, className = "" }: { children: React.ReactNode; dark?: boolean; className?: string }) {
  return <h2 className={`text-[34px] font-bold leading-[1.1] md:text-[44px] lg:text-[52px] rtl:leading-[1.3] ${dark ? "text-white" : "text-vx-navy"} ${className}`}>{children}</h2>;
}

type Variant = "orange" | "white" | "navy" | "ghost" | "ghostNavy";
const V: Record<Variant, string> = {
  orange: "cut-btn bg-vx-orange text-white hover:bg-white hover:text-vx-navy",
  white: "cut-btn bg-white text-vx-navy hover:bg-vx-navy hover:text-white",
  navy: "cut-btn bg-vx-navy text-white hover:bg-vx-orange",
  ghost: "border-2 border-white/50 text-white hover:bg-white hover:text-vx-navy",
  ghostNavy: "border-2 border-vx-navy text-vx-navy hover:bg-vx-navy hover:text-white",
};

export function Btn({ href, children, variant = "orange", arrow = false, external = false, className = "" }: { href: string; children: React.ReactNode; variant?: Variant; arrow?: boolean; external?: boolean; className?: string }) {
  const cls = `inline-flex h-14 items-center justify-center gap-3 px-7 text-[15px] font-bold whitespace-nowrap transition-colors duration-300 ${V[variant]} ${className}`;
  const inner = (<>{children}{arrow && <Icon name="arrow" size={20} flip />}</>);
  return external || /^(https?:|mailto:|tel:)/.test(href) ? (
    <a href={href} className={cls} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>{inner}</a>
  ) : (
    <Link href={href} className={cls}>{inner}</Link>
  );
}

export function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="inline-flex items-center gap-2.5 border-b-2 border-vx-orange pb-1 text-[15px] font-bold text-vx-navy transition-colors hover:text-vx-orange">
      {children}<Icon name="arrow" size={18} flip />
    </Link>
  );
}

export function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1320px] px-5 md:px-12 ${className}`}>{children}</div>;
}

export function Bg({ src, className = "", style }: { src: string; className?: string; style?: React.CSSProperties }) {
  return <div role="img" aria-hidden="true" className={`bg-cover bg-center ${className}`} style={{ backgroundImage: `url(${src})`, ...style }} />;
}
