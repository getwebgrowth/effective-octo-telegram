import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service governing the use of the ConceptOne Labs LLC website and engagement with our technology engineering services.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  const lastUpdated = "September 30, 2026";

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="border-b border-neutral-200 pb-8 mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-100 px-3 py-1 text-xs font-mono text-neutral-800 mb-4">
            <FileText className="h-3.5 w-3.5 text-cyan-600" />
            <span>Legal Documentation</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-950">
            Terms of Service
          </h1>
          <p className="mt-2 text-xs font-mono text-neutral-500">
            ConceptOne Labs LLC · Last updated: {lastUpdated}
          </p>
        </div>

        {/* Policy Body */}
        <div className="space-y-8 text-sm sm:text-base text-neutral-700 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-neutral-950 tracking-tight">
              1. Acceptance of Terms
            </h2>
            <p className="text-neutral-600">
              By accessing or using the website operated by ConceptOne Labs LLC (&quot;ConceptOne Labs&quot;, &quot;we&quot;,
              &quot;us&quot;, or &quot;our&quot;) at conceptonelabs.com or submitting inquiries through our platform, you
              agree to be bound by these Terms of Service. If you do not agree to these terms, please do
              not use this website.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-neutral-950 tracking-tight">
              2. Nature of Services
            </h2>
            <p className="text-neutral-600">
              ConceptOne Labs LLC provides technology research and development, custom software engineering,
              browser extension development, AI workflow automation, and physical product engineering
              services. Engagements for professional engineering, development, or consulting services are
              governed by specific Statements of Work (SOW), master services agreements, or project contracts
              executed separately between ConceptOne Labs LLC and the client.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-neutral-950 tracking-tight">
              3. Independent Commercial Products
            </h2>
            <p className="text-neutral-600">
              ConceptOne Labs LLC is the legal parent entity that develops, owns, and operates independent
              commercial software products, including <strong>ExamGhost</strong> (examghost.com) and proprietary automation platforms.
            </p>
            <p className="text-neutral-600">
              Each independent product may provide its own end-user terms of service, subscription agreements,
              and usage guidelines applicable to its specific software features and user accounts. Accessing
              or using those individual products constitutes agreement with their respective terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-neutral-950 tracking-tight">
              4. Intellectual Property
            </h2>
            <p className="text-neutral-600">
              All content, code, logos, visual marks, graphics, and text on this website are the intellectual
              property of ConceptOne Labs LLC or its licensors and are protected by applicable copyright,
              trademark, and intellectual property laws.
            </p>
            <p className="text-neutral-600">
              For client engineering projects, intellectual property assignment, licensing terms, and code
              ownership are defined in the governing client agreement. Upon full payment for agreed milestones,
              clients typically receive complete ownership of custom deliverables as specified in their contract.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-neutral-950 tracking-tight">
              5. Third-Party Links &amp; Integrations
            </h2>
            <p className="text-neutral-600">
              Our website may contain links to third-party websites or services that are not owned or controlled
              by ConceptOne Labs LLC. We assume no responsibility for the content, privacy policies, or practices
              of any third-party websites or services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-neutral-950 tracking-tight">
              6. Disclaimer of Warranties
            </h2>
            <p className="text-neutral-600">
              This website and its contents are provided on an &quot;as is&quot; and &quot;as available&quot; basis without
              warranties of any kind, whether express or implied, including but not limited to implied
              warranties of merchantability, fitness for a particular purpose, or non-infringement.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-neutral-950 tracking-tight">
              7. Limitation of Liability
            </h2>
            <p className="text-neutral-600">
              To the maximum extent permitted by applicable law, ConceptOne Labs LLC, its members, managers,
              employees, or contractors shall not be liable for any indirect, incidental, special, consequential,
              or punitive damages arising out of or related to your use of this website or communications.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-neutral-950 tracking-tight">
              8. Governing Law &amp; Jurisdiction
            </h2>
            <p className="text-neutral-600">
              These Terms shall be governed by and construed in accordance with the laws of the State of
              Wyoming, United States, without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-neutral-950 tracking-tight">
              9. Contact
            </h2>
            <p className="text-neutral-600">
              For legal inquiries regarding these Terms of Service, please contact:
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
