import type { Metadata } from "next";

export const metadata: Metadata = { title: "Vertex", icons: { icon: "/icon.svg" }, robots: { index: false } };

export default function RootRedirectLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
