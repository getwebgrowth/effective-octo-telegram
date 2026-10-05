# ConceptOne Labs LLC — Official Web Application

Production-ready web application for **ConceptOne Labs LLC** (`ConceptOne Labs`), an R&D, software development, SaaS, browser extension, AI automation, and product engineering company registered in Wyoming, USA.

Built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4**, and **Lucide Icons**.

---

## Architecture Overview

```
conceptone-labs/
├── app/
│   ├── layout.tsx             # Root layout, Google Fonts, OpenGraph, JSON-LD
│   ├── page.tsx               # Homepage (Hero, Lifecycle, Products, Capabilities, Stack)
│   ├── services/page.tsx      # In-depth engineering capabilities & deliverables
│   ├── products/page.tsx      # ExamGhost & Elite FUT Bot portfolio & R&D incubator
│   ├── about/page.tsx         # Legal entity details, mission & engineering principles
│   ├── contact/page.tsx       # Project inquiry form & direct communication info
│   ├── privacy/page.tsx       # Compliance-focused Privacy Policy
│   ├── terms/page.tsx         # Terms of Service
│   ├── refund-policy/page.tsx # Milestone & subscription refund policy
│   ├── api/contact/route.ts   # Contact form handler + webhook forwarding
│   ├── sitemap.ts             # Dynamic XML sitemap generator
│   ├── robots.ts              # Dynamic robots.txt generator
│   └── icon.svg               # Application icon & favicon
├── components/
│   ├── Navbar.tsx             # Responsive sticky navigation & mobile drawer
│   ├── Footer.tsx             # Legal disclosures, products & compliance statements
│   ├── Logo.tsx               # Minimal geometric SVG/CSS brand mark
│   ├── Button.tsx             # Reusable accessible button/link component
│   ├── SectionHeading.tsx     # Eyebrow badge, title, & description component
│   ├── ServiceCard.tsx        # Engineering capability card with deliverables list
│   ├── ProductCard.tsx        # Commercial product card with legal ownership notices
│   ├── CTA.tsx                # Reusable call-to-action banner
│   ├── ContactForm.tsx        # Interactive contact form with validation & mailto fallback
│   └── JsonLd.tsx             # Schema.org Organization, WebSite & SoftwareApplication
├── lib/
│   └── site-config.ts         # Central configuration for company, products, & links
├── public/                    # Static assets
├── .env.example               # Environment variables template
└── README.md                  # Complete documentation and deployment guide
```

---

## Quick Start

### 1. Installation

```bash
cd conceptone-labs
npm install
```

### 2. Development

Run the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build & Validation

```bash
npm run build
npm run start
```

---

## Deployment to Vercel

The application is structured to deploy directly to [Vercel](https://vercel.com):

1. **If deploying from the repository root:**
   - In Vercel Project Settings > **General** > **Root Directory**, set to `conceptone-labs`.
2. **Environment Variables on Vercel:**
   - `NEXT_PUBLIC_SITE_URL`: `https://conceptonelabs.com`
   - `NEXT_PUBLIC_CONTACT_EMAIL`: `hello@conceptonelabs.com` (or your verified domain inbox)
   - *(Optional)* `CONTACT_WEBHOOK_URL`: Webhook URL (Slack, Discord, Zapier, Make) to receive real-time leads.
3. Deploy! Vercel will automatically detect Next.js and build with zero configuration.

---

## Configuration & Customization Guide

### How to Change Company Information

All corporate entity information, brand taglines, jurisdiction, and navigation links live in a single central file:
👉 **[`lib/site-config.ts`](./lib/site-config.ts)**

```typescript
export const siteConfig = {
  legalName: "ConceptOne Labs LLC",
  brandName: "ConceptOne Labs",
  tagline: "From concept to product.",
  jurisdiction: "Wyoming, United States",
  entityType: "Limited Liability Company (LLC)",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@conceptonelabs.com",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://conceptonelabs.com",
  // ...
};
```

Updating this file automatically updates the Navbar, Footer, About page, JSON-LD schemas, and legal disclosures across the entire site.

### How to Change the Contact Email

You can change the email in two ways:
1. Set the environment variable in `.env.local` or your Vercel Dashboard:
   ```env
   NEXT_PUBLIC_CONTACT_EMAIL=contact@yourdomain.com
   ```
2. Or change the fallback email in [`lib/site-config.ts`](./lib/site-config.ts).

### How to Add or Edit Products

Products are defined in the `products` array inside [`lib/site-config.ts`](./lib/site-config.ts):

```typescript
products: [
  {
    name: "ExamGhost",
    url: "https://examghost.com/",
    status: "Active",
    type: "SaaS Platform / Web Application",
    tagline: "Intelligent examination assistance and academic workflow software.",
    description: "ExamGhost is a dedicated software platform and SaaS application engineered and operated under ConceptOne Labs LLC...",
    highlights: [
      "Cloud-native SaaS infrastructure",
      "High-reliability real-time processing",
      "Modern responsive user dashboard",
      "Secure account authentication & data privacy"
    ],
    ownershipDisclosure: "ExamGhost is an independent commercial software product owned, operated, and maintained by ConceptOne Labs LLC.",
    role: "Owned & Operated SaaS Product"
  },
  // Add new products here...
]
```

### How to Change Legal Information

- **Privacy Policy**: Edit [`app/privacy/page.tsx`](./app/privacy/page.tsx)
- **Terms of Service**: Edit [`app/terms/page.tsx`](./app/terms/page.tsx)
- **Refund Policy**: Edit [`app/refund-policy/page.tsx`](./app/refund-policy/page.tsx)

### Where SEO Metadata Lives

- Global defaults and OpenGraph tags: [`app/layout.tsx`](./app/layout.tsx)
- Schema.org JSON-LD (Organization, WebSite, SoftwareApplication): [`components/JsonLd.tsx`](./components/JsonLd.tsx)
- Individual page titles and meta descriptions: In each `app/**/page.tsx` via `export const metadata: Metadata`
- XML Sitemap: [`app/sitemap.ts`](./app/sitemap.ts)
- Robots.txt: [`app/robots.ts`](./app/robots.ts)

### How the Contact Form Works

1. Visitors fill out name, email, company, project type, budget range, and requirements in [`components/ContactForm.tsx`](./components/ContactForm.tsx).
2. The form submits a JSON `POST` request to [`app/api/contact/route.ts`](./app/api/contact/route.ts).
3. The API validates the fields, logs the submission, and (if `CONTACT_WEBHOOK_URL` is set) sends a payload to your team's Slack, Discord, or automation webhook.
4. If the visitor's network fails or API is unavailable, a prominent `mailto:` link automatically pre-fills with their exact form inputs as a zero-friction fallback.

---

## Business Verification & Compliance Notice

This website has been built adhering strictly to verification standards for business banking, merchant accounts, and payment processors (e.g. Stripe, Wise, Brex, Mercury):

- **Accurate Legal Entity:** Clearly establishes **ConceptOne Labs LLC** (Wyoming, USA) as the legal entity.
- **Product Ownership Transparency:** Explicitly clarifies that **ExamGhost** and **Elite FUT Bot** are commercial software products developed, owned, and operated under ConceptOne Labs LLC.
- **Truth in Marketing:** Contains **NO** fabricated customer logos, fake review counts, artificial testimonials, or non-existent physical office claims.
- **Clear Refund & Delivery Terms:** Transparent disclosure of milestone-based custom engineering agreements and independent product subscriptions.

---

## Pre-Launch Checklist

- [ ] Connect custom production domain (`conceptonelabs.com`) on Vercel
- [ ] Configure real business inbox (`hello@conceptonelabs.com`) in environment variables
- [ ] Confirm product ownership wording matches your banking registration records
- [ ] Review Privacy Policy with your legal advisor
- [ ] Review Terms of Service with your legal advisor
- [ ] Review Refund & Cancellation Policy
- [ ] *(Optional)* Add analytics (e.g. Vercel Web Analytics or Plausible)
- [ ] *(Optional)* Configure `CONTACT_WEBHOOK_URL` for real-time inquiry alerts to Slack or Discord
- [ ] *(Optional)* Add official social profiles in `lib/site-config.ts`
