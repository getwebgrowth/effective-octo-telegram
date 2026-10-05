import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { ProductCard } from "@/components/ProductCard";
import { ProductArchitectureShowcase } from "@/components/ProductArchitectureShowcase";
import { SectionHeading } from "@/components/SectionHeading";
import { CTA } from "@/components/CTA";
import { ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Software Products",
  description:
    "Software products and commercial applications developed, maintained, and operated under ConceptOne Labs LLC, including ExamGhost and Elite FUT Bot.",
  alternates: {
    canonical: "/products",
  },
};

export default function ProductsPage() {
  const pipelineAreas = [
    {
      title: "Browser Automation & Productivity Tools",
      description:
        "Developing specialized Manifest V3 utilities that automate complex browser workflows with minimal resource footprint.",
    },
    {
      title: "Vertical AI Workflows & Copilots",
      description:
        "Building domain-specific intelligence tools that transform messy unstructured workflows into clean, deterministic data.",
    },
    {
      title: "Connected Hardware Telemetry Systems",
      description:
        "Prototyping sensor-driven IoT nodes linked to low-latency cloud dashboards for continuous device monitoring.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-16 sm:py-24 border-b border-neutral-100 bg-[#FAFAFA]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3.5 py-1 text-xs font-mono text-neutral-800 mb-6 shadow-xs">
            <span>Operating Portfolio</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-950 max-w-3xl mx-auto leading-tight">
            Products built by ConceptOne Labs.
          </h1>

          <p className="mt-6 text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            ConceptOne Labs LLC develops, maintains, and operates commercial software products
            under independent product brands, while also delivering client product engineering services.
          </p>

          {/* Legal / Verification Notice Box */}
          <div className="mt-8 max-w-2xl mx-auto rounded-2xl border border-neutral-200 bg-white p-4 sm:p-5 text-left text-xs text-neutral-700 leading-relaxed shadow-xs">
            <div className="flex items-center gap-2 font-semibold text-neutral-900 mb-1.5">
              <ShieldCheck className="h-4 w-4 text-cyan-600 shrink-0" />
              <span>Entity &amp; Product Relationship Notice</span>
            </div>
            <p className="text-neutral-600">
              The products listed below are proprietary commercial software products owned and operated
              under <strong>ConceptOne Labs LLC</strong> (a Wyoming, USA registered Limited Liability Company).
              All subscription billing, engineering maintenance, customer data processing, and platform
              infrastructure are managed directly by ConceptOne Labs LLC.
            </p>
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="py-16 sm:py-24 border-b border-neutral-100">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Commercial Software"
            title="Active Software Products"
            description="Our live production products currently serving global users with high availability and ongoing feature development."
          />

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {siteConfig.products.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>

          <div className="mt-12">
            <ProductArchitectureShowcase />
          </div>
        </div>
      </section>

      {/* Building the Next Product Section */}
      <section className="py-16 sm:py-24 bg-[#FAFAFA]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-neutral-200 bg-white p-8 sm:p-12 shadow-xs">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-100 px-3 py-1 text-xs font-mono text-neutral-800 mb-4">
                <Sparkles className="h-3 w-3 text-cyan-600" />
                <span>R&amp;D Incubator</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
                Building the next product
              </h2>
              <p className="mt-3 text-neutral-600 text-sm sm:text-base leading-relaxed">
                ConceptOne Labs actively researches, prototypes, and validates new software,
                automation, AI, and connected-product ideas. We apply our own engineering
                rigor to validate market viability before public release.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {pipelineAreas.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-mono text-cyan-700 font-semibold mb-2 block">
                      R&amp;D FOCUS 0{idx + 1}
                    </span>
                    <h3 className="text-base font-bold text-neutral-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-neutral-200 flex items-center justify-between text-[11px] font-mono text-neutral-500">
                    <span>STATUS: ACTIVE R&amp;D</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-neutral-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-xs text-neutral-600">
                Interested in partnering on an upcoming product or exploring technical synergy?
              </p>
              <Button href="/contact" variant="outline" size="sm">
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <CTA
          title="Have a product concept you want to bring to market?"
          description="We bring the same battle-tested product development discipline to our client partnerships as we do to our own proprietary software."
          buttonText="Start a Project"
        />
      </div>
    </div>
  );
}
