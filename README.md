# Vertex Investment Construction Company — Website

Next.js 16 (App Router, static export) + Tailwind CSS v4. Bilingual EN/AR (RTL).

## Run
npm install
npm run dev        # http://localhost:3000/en/  and /ar/
npm run build      # outputs static site to ./out
Deploy the `out/` folder to any static host. `/` redirects by browser language.

## Edit content
- lib/site.ts     phone, email, address, hours (single source)
- lib/content.ts  all EN/AR text
- public/images   photos and logos

Notes: the enquiry form opens email/WhatsApp (no backend). Logo is vector-traced from the brand guide; replace with the original SVG when available.
