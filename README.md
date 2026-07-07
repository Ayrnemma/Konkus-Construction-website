# Konkus Construction Website

A complete, production-ready Next.js website for **Konkus Construction** — serving Downriver Michigan.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Add your logo (REQUIRED — see below)

# 3. Run dev server
npm run dev

# 4. Build for production
npm run build
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

---

## 📁 Logo Setup (REQUIRED FIRST STEP)

Place your logo file at:
```
public/logo.png
```

The logo appears in the Header, Footer, Mobile Nav, About page, Thank You page, and is used for brand identity throughout. It should be a **PNG with transparent background** (which your logo already has).

**Optional — also add these files to `public/` for full icon support:**
- `favicon.ico` — browser tab icon
- `favicon-16x16.png` — small favicon
- `favicon-32x32.png` — standard favicon
- `apple-touch-icon.png` — iOS home screen icon (180×180)
- `android-chrome-192x192.png` — Android icon
- `android-chrome-512x512.png` — Android icon (large)
- `og-image.jpg` — Social share image (1200×630) — use a great project photo with your logo overlaid

You can generate favicon variants from your logo at [realfavicongenerator.net](https://realfavicongenerator.net).

---

## 🌐 Deployment (Vercel — Recommended, Free)

1. Push this folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and import the repo
3. Vercel auto-detects Next.js — just click **Deploy**
4. Add your custom domain in Vercel dashboard → Settings → Domains

**Update your domain in these files:**
- `src/app/layout.tsx` — `metadataBase` URL
- `src/lib/constants.ts` — `COMPANY.url`
- `src/app/sitemap.ts` — `BASE_URL`
- `public/robots.txt` — sitemap URL

---

## 📬 Contact Form Setup

The form at `/contact` currently redirects to `/thank-you` on submit. To actually receive emails:

**✅ Formspree Already Connected**
The form is wired to `https://formspree.io/f/mdarvkyd`. No additional setup needed — submissions go straight to your Formspree inbox.

**Option 2 — Next.js API Route + Nodemailer**
Create `src/app/api/contact/route.ts` with your SMTP configuration.

---

## 🗺️ Google Maps Embed

In `src/components/home/ServiceArea.tsx`, replace the placeholder map with a real Google Maps embed:
1. Go to [Google Maps Embed API](https://developers.google.com/maps/documentation/embed/get-started)
2. Replace the placeholder `<div>` with an `<iframe>` embed

---

## 📸 Photo Replacements

All placeholder photos are from Unsplash and are great for initial launch. Replace with your actual project photos:
- `src/lib/constants.ts` — update `GALLERY_IMAGES[].src` with your real photo URLs or local paths
- `src/components/home/Hero.tsx` — hero background image
- `src/components/home/AboutSection.tsx` — owner/team photo
- Each service card image in `SERVICES[]`

---

## 🎨 Brand Colors

Extracted from your logo:
| Color | Hex | Usage |
|-------|-----|-------|
| Charcoal | `#2E2D38` | Text, dark backgrounds |
| Gold | `#9B7535` | Primary accent, CTAs |
| Wood Brown | `#C4924A` | Secondary accent |
| Cream | `#F8F6F3` | Light backgrounds |

---

## 📄 Pages

| Page | Route |
|------|-------|
| Home | `/` |
| About | `/about` |
| Services | `/services` |
| Gallery | `/gallery` |
| Contact | `/contact` |
| Thank You | `/thank-you` |
| Privacy Policy | `/privacy-policy` |
| Terms of Service | `/terms-of-service` |
| 404 | automatic |

---

## ✏️ Customization Checklist

- [ ] Add `public/logo.png`
- [ ] Add `public/og-image.jpg` (1200×630 social share image)
- [ ] Add favicon files
- [ ] Update domain in `constants.ts`, `layout.tsx`, `sitemap.ts`, `robots.txt`
- [ ] Connect contact form (Formspree or API route)
- [ ] Replace Unsplash photos with your actual project photos
- [ ] Add Google Maps embed to ServiceArea component
- [ ] (Optional) Add Google Analytics via `next/script`
- [ ] Deploy to Vercel

---

Built with ❤️ for Konkus Construction | Downriver Michigan
