import React from "react";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { siteConfig } from "@/lib/site-config";
import { ArrowUpRight, ShieldCheck } from "lucide-react";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="border-t border-neutral-200 bg-[#FAFAFA] text-neutral-600">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand & Entity Overview */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Logo />
            <p className="text-sm text-neutral-600 max-w-sm leading-relaxed mt-1">
              Technology and product engineering studio. We take ideas from initial concept,
              architecture, and design to high-scale software, browser extensions, AI automation,
              and connected digital/physical products.
            </p>

            <div className="flex flex-col gap-1 pt-2 text-xs text-neutral-500 font-mono">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span className="text-neutral-800 font-medium">Entity: ConceptOne Labs LLC</span>
              </div>
              <div>Jurisdiction: Wyoming, United States (LLC)</div>
              <div>Operating Scope: Software Development &amp; Product Engineering</div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-900">
              Navigation
            </span>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-neutral-950 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-neutral-950 transition-colors">
                  Engineering Services
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-neutral-950 transition-colors">
                  Our Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-neutral-950 transition-colors">
                  About ConceptOne Labs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-neutral-950 transition-colors">
                  Start a Project
                </Link>
              </li>
            </ul>
          </div>

          {/* Operated Products */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-900">
              Operated Products
            </span>
            <ul className="flex flex-col gap-2.5 text-sm">
              {siteConfig.products.map((product) => (
                <li key={product.name}>
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-neutral-800 hover:text-cyan-600 transition-colors group font-medium"
                  >
                    <span>{product.name}</span>
                    <ArrowUpRight className="h-3 w-3 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                  <p className="text-[11px] text-neutral-500 font-mono mt-0.5">
                    {product.type}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Compliance Links */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-900">
              Legal &amp; Compliance
            </span>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <Link href="/privacy" className="hover:text-neutral-950 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-neutral-950 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="hover:text-neutral-950 transition-colors">
                  Refund &amp; Cancellation Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Operating & Verification Disclosures Box */}
        <div className="mt-12 rounded-2xl border border-neutral-200 bg-white p-5 text-xs text-neutral-600 leading-relaxed shadow-xs">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-neutral-100 pb-3 mb-3">
            <div className="flex items-center gap-2 text-neutral-900 font-semibold">
              <ShieldCheck className="h-4 w-4 text-cyan-600 shrink-0" />
              <span>Legal Entity &amp; Product Relationship Statement</span>
            </div>
            <span className="text-[11px] font-mono text-neutral-500">
              ConceptOne Labs LLC · Wyoming, USA
            </span>
          </div>
          <p>
            <strong className="text-neutral-900">ConceptOne Labs LLC</strong> is the legal operating business entity registered in Wyoming,
            United States. <strong className="text-neutral-900">ExamGhost</strong> (examghost.com) and our proprietary browser automation suites
            are independent software and browser extension products developed, maintained, and operated
            directly under ConceptOne Labs LLC. ConceptOne Labs provides technology R&amp;D, custom software development,
            and product engineering services in addition to operating independent digital products.
          </p>
        </div>

        {/* Bottom copyright */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-neutral-200 pt-8 text-xs text-neutral-500 font-mono">
          <p>© {currentYear} ConceptOne Labs LLC. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Wyoming Limited Liability Company</span>
            <span>·</span>
            <span>From concept to product.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
