import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { SectionHeading } from "@/components/SectionHeading";
import { CTA } from "@/components/CTA";
import { ShieldCheck, Building2 } from "lucide-react";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "About ConceptOne Labs | Technology & Product Engineering",
  description:
    "Learn about ConceptOne Labs LLC: our engineering philosophy, legal registration in Wyoming, USA, and our approach to software and hardware product engineering.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  const principles = [
    {
      title: "Research before assumptions.",
      description:
        "We validate technical constraints, API boundaries, and market needs through hands-on proof-of-concepts before writing production code.",
    },
    {
      title: "Build for real-world use.",
      description:
        "Software and hardware must survive noisy inputs, intermittent networks, and real user behavior. We engineer for edge cases, not just happy paths.",
    },
    {
      title: "Keep systems maintainable.",
      description:
        "Codebases should be readable, cleanly decoupled, and straightforward to extend. We avoid unnecessary complexity and brittle dependencies.",
    },
    {
      title: "Measure before optimizing.",
      description:
        "Premature optimization creates technical debt. We profile network bottlenecks, memory footprints, and database queries with empirical metrics.",
    },
    {
      title: "Ship practical products.",
      description:
        "An idea delivers zero value until it reaches the hands of users. We prioritize rapid iteration cycles and stable, continuous delivery.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-16 sm:py-24 border-b border-neutral-100 bg-[#FAFAFA]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3.5 py-1 text-xs font-mono text-neutral-800 mb-6 shadow-xs">
            <span>About ConceptOne Labs</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-950 max-w-3xl mx-auto leading-tight">
            Engineering ideas into real products.
          </h1>

          <p className="mt-6 text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            ConceptOne Labs LLC is a US-registered technology and product engineering company
            focused on building robust software, intelligent workflows, browser utilities,
            and connected devices.
          </p>
        </div>
      </section>

      {/* Main Narrative & Operating Model */}
      <section className="py-16 sm:py-24 border-b border-neutral-100">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6 text-neutral-700 leading-relaxed text-base">
              <SectionHeading
                eyebrow="Who We Are"
                title="A modern product engineering company"
              />

              <p className="text-neutral-600 text-lg">
                ConceptOne Labs operates at the intersection of deep software engineering and physical product development. We were formed around a core belief: building a great product should not require coordinating multiple disconnected agencies.
              </p>

              <p className="text-neutral-600">
                Instead of treating frontend, backend, browser extensions, AI workflows, and hardware prototyping as separate disciplines, we unite them under one coherent engineering framework. This end-to-end perspective allows us to make smarter architectural decisions early, avoid integration bottlenecks, and ship products that work reliably in the real world.
              </p>

              <p className="text-neutral-600">
                In addition to partnering with technical founders on complex product builds, ConceptOne Labs actively develops and operates its own commercial software brands—such as <strong className="text-neutral-950">ExamGhost</strong> and <strong className="text-neutral-950">Elite FUT Bot</strong>. Operating our own products keeps our engineering sharp, practical, and constantly exposed to modern production realities.
              </p>

              <div className="pt-4 flex flex-wrap gap-3">
                <Button href="/services" variant="primary" size="md">
                  Our Engineering Services
                </Button>
                <Button href="/products" variant="secondary" size="md">
                  View Our Products
                </Button>
              </div>
            </div>

            {/* Legal Entity Card */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-neutral-200 bg-[#FAFAFA] p-6 sm:p-8 shadow-xs">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-800 mb-4 pb-2 border-b border-neutral-200">
                  <Building2 className="h-4 w-4" />
                  <span>Corporate Entity Information</span>
                </div>

                <div className="space-y-4 text-sm">
                  <div>
                    <span className="block text-xs font-mono text-neutral-500">Legal Business Name</span>
                    <span className="text-neutral-950 font-bold text-base">ConceptOne Labs LLC</span>
                  </div>

                  <div>
                    <span className="block text-xs font-mono text-neutral-500">Brand / Operating Name</span>
                    <span className="text-neutral-800 font-medium">ConceptOne Labs</span>
                  </div>

                  <div>
                    <span className="block text-xs font-mono text-neutral-500">Jurisdiction of Organization</span>
                    <span className="text-neutral-800">Wyoming, United States</span>
                  </div>

                  <div>
                    <span className="block text-xs font-mono text-neutral-500">Entity Structure</span>
                    <span className="text-neutral-800">Limited Liability Company (LLC)</span>
                  </div>

                  <div>
                    <span className="block text-xs font-mono text-neutral-500">Operating Model</span>
                    <span className="text-neutral-800">
                      Distributed technology and product engineering studio serving global clients and users
                    </span>
                  </div>

                  <div>
                    <span className="block text-xs font-mono text-neutral-500">Current Scope of Business</span>
                    <span className="text-neutral-800">
                      Software development, SaaS operations, browser extensions, AI automation, IoT &amp; product engineering
                    </span>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-neutral-200 rounded-xl bg-white p-3.5 text-xs text-neutral-600 flex items-start gap-2.5 shadow-2xs">
                  <ShieldCheck className="h-4 w-4 text-cyan-600 shrink-0 mt-0.5" />
                  <span>
                    ConceptOne Labs LLC is registered and in good standing under the laws of the State of Wyoming, USA. Official corporate filings and state records verify its legal entity status.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy / Guiding Principles */}
      <section className="py-16 sm:py-24 bg-[#FAFAFA] border-b border-neutral-100">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="Values"
            title="Our Engineering Philosophy"
            description="The core tenets that guide every architecture review, code commit, and product release."
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((item, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-7 clean-card shadow-xs flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs text-cyan-700 font-semibold mb-3 block">
                    PRINCIPLE 0{idx + 1}
                  </span>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}

            <div className="rounded-3xl border border-dashed border-neutral-300 bg-neutral-50 p-6 sm:p-7 flex flex-col justify-center">
              <h3 className="text-lg font-bold text-neutral-900 mb-2">
                Focused Execution
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                We maintain a disciplined client intake so that every product receives senior engineering focus from inception to launch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <CTA
          title="Let's build something enduring."
          description="Whether you are formulating a new software concept or need specialized product engineering execution, we're ready to collaborate."
          buttonText="Start a Project"
        />
      </div>
    </div>
  );
}
