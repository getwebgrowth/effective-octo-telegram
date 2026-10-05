import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { RefreshCcw } from "lucide-react";

export const metadata: Metadata = {
  title: "Refund Policy",
  description:
    "Refund and cancellation policy for ConceptOne Labs LLC engineering services and commercial software products.",
  alternates: {
    canonical: "/refund-policy",
  },
};

export default function RefundPolicyPage() {
  const lastUpdated = "September 30, 2026";

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="border-b border-neutral-200 pb-8 mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-100 px-3 py-1 text-xs font-mono text-neutral-800 mb-4">
            <RefreshCcw className="h-3.5 w-3.5 text-cyan-600" />
            <span>Billing Documentation</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-950">
            Refund &amp; Cancellation Policy
          </h1>
          <p className="mt-2 text-xs font-mono text-neutral-500">
            ConceptOne Labs LLC · Last updated: {lastUpdated}
          </p>
        </div>

        {/* Policy Body */}
        <div className="space-y-8 text-sm sm:text-base text-neutral-700 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-neutral-950 tracking-tight">
              1. Overview
            </h2>
            <p className="text-neutral-600">
              ConceptOne Labs LLC (&quot;ConceptOne Labs&quot;) provides customized professional engineering services
              and also develops and operates independent commercial software products (such as ExamGhost
              and Elite FUT Bot). Because our operations encompass both custom product engineering contracts
              and individual software subscriptions, refund and cancellation conditions vary depending on the
              specific service or product purchased.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-neutral-950 tracking-tight">
              2. Custom Product Engineering &amp; Consulting Services
            </h2>
            <p className="text-neutral-600">
              For client product development, browser extension engineering, firmware builds, and technical
              consulting engagements:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-neutral-600 text-sm">
              <li>
                <strong className="text-neutral-900">Milestone-Based Billing:</strong> Professional services
                are typically delivered under milestone-based Statements of Work (SOW). Payments made for
                work completed and accepted under approved milestones are generally non-refundable once
                deliverables have been inspected and released.
              </li>
              <li>
                <strong className="text-neutral-900">Project Cancellation:</strong> Either party may cancel an
                active project engagement in accordance with the notice provisions set forth in the governing
                service contract. In the event of early termination, the client remains responsible for payment
                corresponding to hours worked and deliverables completed up to the date of written cancellation.
              </li>
              <li>
                <strong className="text-neutral-900">Deposits:</strong> Initial retainer deposits required to
                reserve engineering schedules are non-refundable once development or architectural scoping has
                formally commenced, except as explicitly specified in the client agreement.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-neutral-950 tracking-tight">
              3. Independent Commercial SaaS &amp; Browser Products
            </h2>
            <p className="text-neutral-600">
              ConceptOne Labs LLC operates independent commercial software products, including:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-neutral-600 text-sm">
              <li>
                <strong className="text-neutral-900">ExamGhost</strong> (examghost.com)
              </li>
              <li>
                <strong className="text-neutral-900">Proprietary Automation Tools &amp; Client Projects</strong>
              </li>
            </ul>
            <p className="text-neutral-600">
              Each commercial product features its own specific subscription tiers, license keys, and billing
              terms. Users subscribing to or purchasing licenses for these independent software products should
              refer directly to the Refund and Cancellation Policy published on the respective product website.
            </p>
            <p className="text-neutral-600">
              Subscription renewals may generally be cancelled at any time through the respective product billing
              portal prior to the start of the next billing cycle.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-neutral-950 tracking-tight">
              4. Billing Inquiries &amp; Dispute Resolution
            </h2>
            <p className="text-neutral-600">
              We strive for complete transparency and fair resolution. If you believe a billing error has
              occurred on any invoice or transaction issued by ConceptOne Labs LLC, please contact us immediately
              at <a href={`mailto:${siteConfig.email}`} className="text-cyan-700 underline font-medium">{siteConfig.email}</a>{" "}
              with your invoice number or transaction receipt so we can investigate and resolve the issue promptly.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-neutral-950 tracking-tight">
              5. Contact Us
            </h2>
            <p className="text-neutral-600">
              For any questions concerning billing, refunds, or service cancellations, please direct correspondence to:
            </p>
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4 text-xs font-mono text-neutral-700 space-y-1">
              <p className="text-neutral-950 font-bold">ConceptOne Labs LLC</p>
              <p>Jurisdiction: Wyoming, United States</p>
              <p>Email: {siteConfig.email}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
