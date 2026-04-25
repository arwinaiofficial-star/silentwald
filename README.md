# Silent Wald — Resort Website

A premium static React website for **Silent Wald Resort** (Shamirpet, Hyderabad).
Designed to be hosted on **Netlify** with the **GoDaddy domain `silentwald.com`**.

## What's included

- Cinematic hero, asymmetric "About" section with 25-year heritage story
- Cottages / Stay showcase (3 categories)
- Amenities bento grid (12 amenities)
- Experiences (Weddings, Corporate, Family, Film Shoots)
- Dining section
- Bento masonry gallery
- Testimonials, FAQ
- Contact form (auto-wired to **Netlify Forms** — no backend needed)
- Floating WhatsApp + Call CTAs
- Mobile-responsive, accessible, SEO meta tags

---

## Local development

```bash
cd frontend
yarn install
yarn start
# Opens http://localhost:3000
```

---

## Deploying to Netlify (recommended)

### Option A — Netlify Dashboard (easiest, no CLI)

1. Push this repo to GitHub.
2. Go to [app.netlify.com](https://app.netlify.com) → **Add new site** → **Import from Git**.
3. Pick your GitHub repo.
4. Netlify auto-detects `netlify.toml`. Settings will be:
   - **Base directory:** `frontend`
   - **Build command:** `yarn install --frozen-lockfile && yarn build`
   - **Publish directory:** `frontend/build`
5. Click **Deploy**. Done.

### Option B — Netlify CLI

```bash
npm i -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

---

## Connecting your GoDaddy domain `silentwald.com`

1. In Netlify dashboard → **Domain settings** → **Add custom domain** → enter `silentwald.com`.
2. In GoDaddy → **DNS**, add these records (Netlify will tell you the exact target host):
   - `A` record → `@` → `75.2.60.5` (Netlify's load balancer)
   - `CNAME` → `www` → `<your-site>.netlify.app`
3. Back in Netlify → **HTTPS** → **Verify DNS configuration** → **Provision SSL**.
4. Wait 10–60 minutes for propagation.

> **Better alternative considered:** Vercel and Cloudflare Pages also support static React apps. Netlify is recommended here because **Netlify Forms is built-in and free** (50 submissions/mo), so the enquiry form works **without any backend setup**. If you outgrow it, you can switch to Resend / Formspree / your own backend later.

---

## How the enquiry form works

The form in `Contact.jsx` posts to `/` with `form-name="contact"`. Netlify auto-detects the hidden form in `public/index.html` during build and captures all submissions to your Netlify dashboard → **Forms**. You can also configure **email notifications** so each submission lands in your inbox.

> **To get email alerts:** Netlify dashboard → Forms → Settings → Form notifications → Add notification → Email.

---

## Editing content (for the client / father)

All site content lives in **one file**: `frontend/src/data/site.js`. Update:
- Phone, WhatsApp, email, address: `SITE` object
- Cottages: `COTTAGES` array
- Amenities: `AMENITIES` array
- Experiences: `EXPERIENCES` array
- Gallery images: `GALLERY` array
- Testimonials: `TESTIMONIALS` array
- FAQs: `FAQS` array

Replace any `oorjitaprojects.com` image URLs with **your own high-resolution photos** (upload to `frontend/public/images/` and reference as `/images/your-photo.jpg`). Recommended dimensions: **2400×1600 for hero**, **1200×900 for cards**, **1600×1200 for gallery**.

---

## Stack

- React 19 + Tailwind CSS 3
- Framer Motion (animations)
- Lucide React (icons)
- Static — no backend required.

---

Built with care for the forest. 🌲
