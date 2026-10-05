import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for ConceptOne Labs LLC detailing how we collect, handle, and protect user data across our engineering services and web properties.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "September 30, 2026";

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="border-b border-neutral-200 pb-8 mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-100 px-3 py-1 text-xs font-mono text-neutral-800 mb-4">
            <ShieldCheck className="h-3.5 w-3.5 text-cyan-600" />
            <span>Legal Documentation</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-950">
            Privacy Policy
          </h1>
          <p className="mt-2 text-xs font-mono text-neutral-500">
            ConceptOne Labs LLC · Last updated: {lastUpdated}
          </p>
        </div>

        {/* Disclaimer note */}
        <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5 text-xs text-neutral-600 mb-10 leading-relaxed">
          <p>
            <strong className="text-neutral-900">Notice:</strong> This document provides a transparent overview of data collection
            and privacy practices for ConceptOne Labs LLC and its public website. For questions or
            specific data requests, contact us at{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-cyan-700 underline font-medium">
              {siteConfig.email}
            </a>
            .
          </p>
        </div>

        {/* Policy Body */}
        <div className="space-y-8 text-sm sm:text-base text-neutral-700 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-neutral-950 tracking-tight">
              1. Overview &amp; Entity Information
            </h2>
            <p className="text-neutral-600">
              ConceptOne Labs LLC (&quot;ConceptOne Labs&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is a Limited Liability
              Company registered in Wyoming, United States. We operate technology and product engineering
              services as well as independent commercial software platforms including ExamGhost
              (examghost.com) and proprietary automation tools.
            </p>
            <p className="text-neutral-600">
              This Privacy Policy explains how we collect, process, store, and protect information
              collected through our website (conceptonelabs.com), client communications, and related services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-neutral-950 tracking-tight">
              2. Information We Collect
            </h2>
            <p className="text-neutral-600">
              We collect information that you provide directly to us, as well as limited technical data
              generated automatically during your visit:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-neutral-600 text-sm">
              <li>
                <strong className="text-neutral-900">Contact &amp; Project Inquiries:</strong> When you submit
                an inquiry through our contact form or email, we collect your name, email address, company
                name, project type, estimated budget, and the content of your message.
              </li>
              <li>
                <strong className="text-neutral-900">Technical Log Data:</strong> Standard network requests
                logged by our hosting provider (Vercel), including IP addresses, browser type, operating system,
                referring URLs, and timestamps.
              </li>
              <li>
                <strong className="text-neutral-900">Communications:</strong> Records of correspondence if
                you contact us via email, phone, or project management tools.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-neutral-950 tracking-tight">
              3. How We Use Your Information
            </h2>
            <p className="text-neutral-600">
              We process collected data exclusively for legitimate business and operational purposes:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-neutral-600 text-sm">
              <li>To evaluate project feasibility and respond to engineering inquiries.</li>
              <li>To provide, maintain, and deliver requested product engineering services.</li>
              <li>To detect and prevent fraudulent activity, unauthorized access, and security threats.</li>
              <li>To comply with applicable legal, accounting, and regulatory obligations.</li>
            </ul>
            <p className="text-neutral-600">
              We do <strong>not</strong> sell, rent, or trade your personal data to third-party data brokers
              or marketing networks.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-neutral-950 tracking-tight">
              4. Relationship with Independent Products
            </h2>
            <p className="text-neutral-600">
              ConceptOne Labs LLC develops and operates independent commercial software products, including
              ExamGhost and Elite FUT Bot. While ConceptOne Labs LLC remains the parent operating legal entity,
              each individual product may maintain its own dedicated Privacy Policy and terms tailored to its
              specific end-user features, account models, and platform integrations. Users of those individual
              products should review the respective policies on their dedicated websites.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-neutral-950 tracking-tight">
              5. Third-Party Service Providers
            </h2>
            <p className="text-neutral-600">
              We may utilize vetted third-party service providers to support our operations:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-neutral-600 text-sm">
              <li>
                <strong className="text-neutral-900">Cloud Hosting &amp; CDN:</strong> Vercel Inc. and cloud
                infrastructure providers for fast, reliable, global site delivery.
              </li>
              <li>
                <strong className="text-neutral-900">Payment Processing:</strong> Stripe and banking
                partners for billing and payment settlement. We do not store raw credit card numbers.
              </li>
              <li>
                <strong className="text-neutral-900">Communication Tools:</strong> Professional email
                services to manage client communication securely.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-neutral-950 tracking-tight">
              6. Data Security &amp; Retention
            </h2>
            <p className="text-neutral-600">
              We implement industry-standard administrative, technical, and physical safeguards designed to
              protect personal information against accidental loss, unauthorized access, alteration, and
              disclosure. Data is retained only as long as necessary to fulfill the purposes for which it was
              collected, resolve disputes, or satisfy contractual obligations.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-neutral-950 tracking-tight">
              7. Your Rights &amp; Choices
            </h2>
            <p className="text-neutral-600">
              Depending on your location, you may have rights under applicable privacy laws (such as GDPR or
              CCPA), including the right to request access to, correction of, or deletion of your personal
              information. To exercise these rights, please contact us at {siteConfig.email}.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-neutral-950 tracking-tight">
              8. Contact Information
            </h2>
            <p className="text-neutral-600">
              If you have questions, comments, or requests regarding this Privacy Policy, please contact:
            </p>
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4 text-xs font-mono text-neutral-700 space-y-1">
              <p className="text-neutral-950 font-bold">ConceptOne Labs LLC</p>
              <p>Jurisdiction: Wyoming, United States</p>
              <p>
                Email:{" "}
                <a href={`mailto:${siteConfig.email}`} className="text-cyan-700 underline font-medium">
                  {siteConfig.email}
                </a>
              </p>
              <p>Website: {siteConfig.siteUrl}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
