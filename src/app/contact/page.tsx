import BlurFade from "@/components/magicui/blur-fade";
import { ContactForm } from "@/components/contact-form";
import { Mail, MapPin, Send, ArrowUpRight } from "lucide-react";
import { DATA } from "@/data/resume";
import { Icons } from "@/components/icons";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Hire | Freelance Chrome Extension Developer",
  description:
    "Get in touch with Pasindu Piumal for freelance Chrome Extension development (Manifest V3), browser automation, web scraping, and custom web applications.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact & Hire Pasindu Piumal | Chrome Extension Developer",
    description:
      "Get in touch with Pasindu Piumal for freelance Chrome Extension development (Manifest V3), browser automation, web scraping, and custom web applications.",
    url: `${DATA.url}/contact`,
    siteName: `${DATA.name} Portfolio`,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "Contact & Hire Pasindu Piumal | Chrome Extension Developer",
    description:
      "Get in touch with Pasindu Piumal for freelance Chrome Extension development (Manifest V3), browser automation, web scraping, and custom web applications.",
    card: "summary_large_image",
  },
};

const contactJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": `${DATA.url}/contact#contact`,
      name: "Contact Pasindu Piumal | Chrome Extension Developer",
      description:
        "Get in touch with Pasindu Piumal for freelance Chrome Extension development (Manifest V3), browser automation, and web scraping projects.",
      url: `${DATA.url}/contact`,
      mainEntity: {
        "@type": "Person",
        "@id": `${DATA.url}/#person`,
        name: DATA.name,
        email: DATA.contact.email,
        telephone: DATA.contact.tel,
        jobTitle: "Freelance Chrome Extension Developer",
        url: DATA.url,
        availableLanguage: ["English", "Sinhala"],
        areaServed: {
          "@type": "GeoShape",
          name: "Worldwide",
        },
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${DATA.url}/contact#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: DATA.url,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Contact",
          item: `${DATA.url}/contact`,
        },
      ],
    },
  ],
};

const BLUR_FADE_DELAY = 0.04;

export default function ContactPage() {
    return (
        <main className="relative min-h-screen py-12 pb-24 sm:py-20 px-6">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(contactJsonLd).replace(/</g, "\\u003c"),
                }}
            />
            
            {/* Ambient gradients */}
            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.12),transparent_70%)] pointer-events-none -z-10" />

            <div className="max-w-2xl mx-auto space-y-10">
                <header className="space-y-4 text-center">
                    <BlurFade delay={BLUR_FADE_DELAY}>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20 text-xs font-semibold">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            <span>Available for New Projects & Contracts</span>
                        </div>
                    </BlurFade>

                    <BlurFade delay={BLUR_FADE_DELAY * 1.5}>
                        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                            Let&apos;s Build Something Great
                        </h1>
                        <p className="text-muted-foreground text-sm sm:text-base max-w-lg mx-auto pt-1 leading-relaxed">
                            Have a Chrome extension, automation bot, AI tool, or web application project? Get in touch for estimates, timelines, or fixed-milestone pricing.
                        </p>
                    </BlurFade>

                    {/* UPWORK DIRECT HIRE BANNER */}
                    <BlurFade delay={BLUR_FADE_DELAY * 2}>
                        <div className="p-4 rounded-2xl border-2 border-primary/30 bg-primary/5 dark:bg-primary/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-left">
                            <div className="space-y-0.5">
                                <div className="flex items-center gap-2">
                                    <Icons.upwork className="size-4 text-emerald-700 dark:text-emerald-400 fill-current" />
                                    <span className="text-xs font-bold text-foreground">Upwork Top Rated (100% JSS)</span>
                                </div>
                                <p className="text-xs text-foreground/80 dark:text-muted-foreground">$20/hr tracked or milestone escrows with guaranteed IP security.</p>
                            </div>
                            <Link
                                href="https://www.upwork.com/freelancers/pasindupiumal"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary text-primary-foreground text-xs font-bold shrink-0 hover:opacity-90 transition-opacity shadow-xs"
                            >
                                <span>Hire on Upwork</span>
                                <ArrowUpRight className="size-3" />
                            </Link>
                        </div>
                    </BlurFade>
                </header>

                <div className="space-y-8">
                    {/* Contact details cards */}
                    <BlurFade delay={BLUR_FADE_DELAY * 2.5}>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            {/* Email */}
                            <a
                                href={`mailto:${DATA.contact.email}`}
                                className="flex flex-col gap-1 p-3.5 rounded-xl border bg-background/60 backdrop-blur-xs transition-all hover:border-primary/40 hover:bg-muted/40"
                            >
                                <div className="size-7 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-1">
                                    <Mail size={15} />
                                </div>
                                <p className="text-[10px] font-semibold text-muted-foreground uppercase">Email</p>
                                <p className="font-semibold text-xs text-foreground truncate">{DATA.contact.email}</p>
                            </a>

                            {/* WhatsApp */}
                            <a
                                href={DATA.contact.whatsapp}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col gap-1 p-3.5 rounded-xl border border-[#25D366]/30 bg-[#25D366]/5 hover:bg-[#25D366]/10 hover:border-[#25D366]/50 backdrop-blur-xs transition-all group"
                            >
                                <div className="size-7 rounded-lg bg-[#25D366]/15 flex items-center justify-center mb-1">
                                    <svg viewBox="0 0 24 24" className="size-4 fill-[#25D366]" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                    </svg>
                                </div>
                                <p className="text-[10px] font-semibold text-[#25D366] uppercase tracking-wide">WhatsApp</p>
                                <p className="font-semibold text-xs text-foreground">Chat Directly</p>
                                <p className="text-[10px] text-muted-foreground mt-0.5 group-hover:text-[#25D366] transition-colors">Tap to open chat →</p>
                            </a>

                            {/* Location */}
                            <a
                                href={DATA.locationLink}
                                target="_blank"
                                rel="noreferrer"
                                className="flex flex-col gap-1 p-3.5 rounded-xl border bg-background/60 backdrop-blur-xs transition-all hover:border-primary/40 hover:bg-muted/40"
                            >
                                <div className="size-7 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-1">
                                    <MapPin size={15} />
                                </div>
                                <p className="text-[10px] font-semibold text-muted-foreground uppercase">Location</p>
                                <p className="font-semibold text-xs text-foreground truncate">{DATA.location}</p>
                            </a>
                        </div>
                    </BlurFade>

                    {/* Contact Form Card */}
                    <BlurFade delay={BLUR_FADE_DELAY * 3}>
                        <div className="p-6 sm:p-8 rounded-2xl border bg-background/80 backdrop-blur-md shadow-md space-y-6">
                            <div className="space-y-1">
                                <div className="flex items-center gap-2 text-primary">
                                    <Send size={15} />
                                    <span className="text-xs font-bold uppercase tracking-wider">Send a Direct Message</span>
                                </div>
                                <h2 className="text-lg font-bold text-foreground">Project Inquiry Form</h2>
                            </div>
                            <ContactForm />
                        </div>
                    </BlurFade>

                    {/* Social & Specialization Links */}
                    <BlurFade delay={BLUR_FADE_DELAY * 3.5}>
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl border bg-muted/20 text-xs text-muted-foreground">
                            <span>Prefer to review services first?</span>
                            <div className="flex items-center gap-3">
                                <Link href="/chrome-extension-developer-for-hire" className="font-semibold text-primary hover:underline">
                                    Chrome Extension Services →
                                </Link>
                                <Link href="/projects" className="font-semibold text-foreground hover:underline">
                                    Browse 113+ Projects →
                                </Link>
                            </div>
                        </div>
                    </BlurFade>
                </div>
            </div>
        </main>
    );
}
