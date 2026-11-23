const P: Record<string, React.ReactNode> = {
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  pin: (<><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></>),
  phone: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />,
  mail: (<><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>),
  shield: (<><path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6z" /><path d="m9 12 2 2 4-4" /></>),
  leaf: (<><path d="M5 19c0-8 5-13 14-14 0 9-5 14-13 14" /><path d="M5 19c3-5 6-8 10-10" /></>),
  hard: <path d="M3 17h18M5 17a7 7 0 0 1 14 0M12 6v4" />,
  doc: (<><path d="M7 3h7l4 4v14H7z" /><path d="M14 3v4h4M10 12h5M10 16h5" /></>),
  ruler: (<><path d="m4 16 12-12 4 4L8 20z" /><path d="m8 12 2 2M11 9l2 2M14 6l2 2" /></>),
  box: (<><path d="m3 8 9-5 9 5v8l-9 5-9-5z" /><path d="m3 8 9 5 9-5M12 13v8" /></>),
  tool: (<><path d="M14 6a4 4 0 0 0 5 5l-9 9a2 2 0 0 1-3-3z" /><path d="M14 6l3-3 3 3-3 3" /></>),
  check: <path d="m5 12 5 5 9-10" />,
  down: <path d="M12 4v14M6 13l6 6 6-6" />,
  wa: (<><path d="M4 20l1.5-4.5A8 8 0 1 1 8.5 18.5z" /><path d="M9 9c0 3 3 6 6 6l1-2-2-1-1 .8c-1-.5-2-1.5-2.5-2.5L11 9.5 10 7z" /></>),
  clock: (<><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>),
  globe: (<><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" /></>),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  x: <path d="M6 6l12 12M18 6 6 18" />,
};

export type IconName = keyof typeof P;

export function Icon({ name, size = 22, className = "", flip = false }: { name: string; size?: number; className?: string; flip?: boolean }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className={`shrink-0 ${flip ? "rtl:-scale-x-100" : ""} ${className}`}>
      {P[name] ?? P.check}
    </svg>
  );
}
