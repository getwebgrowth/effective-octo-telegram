import React from "react";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { HeroMascot } from "@/components/HeroMascot";
import { ProductCard } from "@/components/ProductCard";
import { ProductArchitectureShowcase } from "@/components/ProductArchitectureShowcase";
import { ServiceCard } from "@/components/ServiceCard";
import { InteractivePipeline } from "@/components/InteractivePipeline";
import { FAQSection } from "@/components/FAQSection";
import { CTA } from "@/components/CTA";

export default function HomePage() {
  const whyUsPoints = [
    {
      title: "End-to-End Thinking",
      description:
        "We look at the complete product instead of isolated pieces. We bridge user experience, database architecture, extensions, and hardware.",
    },
    {
      title: "Software + Hardware",
      description:
        "Our scope extends from cloud software, web applications, and browser extensions all the way down to microcontrollers and physical IoT systems.",
    },
    {
      title: "Product-Focused Engineering",
      description:
        "Technology choices are driven by real-world usability, maintainability, and commercial reliability, not unnecessary complexity.",
    },
    {
      title: "Flexible Engagement",
      description:
        "Partner with us for a turnkey end-to-end product build, or engage our engineering team to solve a specific technical bottleneck.",
    },
  ];

  return (
    <div className="bg-white">
      {/* =========================================================================
          HERO SECTION - Clean, Airy, Minimal with White Mascot
          ========================================================================= */}
      <section className="pt-12 pb-16 sm:pt-20 sm:pb-24 border-b border-neutral-100">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3.5 py-1 text-xs font-mono text-neutral-700 mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-600" />
                <span>ConceptOne Labs · Wyoming, USA</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-neutral-950 leading-[1.08]">
                From concept <br />
                <span className="text-neutral-500">to product.</span>
              </h1>

              <p className="mt-6 text-base sm:text-lg text-neutral-600 max-w-xl leading-relaxed">
                ConceptOne Labs designs, develops, and launches software and technology products—from
                high-scale SaaS platforms and browser extensions to AI automation and connected devices.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  icon={<ArrowUpRight className="h-4 w-4" />}
                >
                  Start a Project
                </Button>
                <Button href="#products" variant="secondary" size="lg">
                  Explore Our Products
                </Button>
              </div>

              {/* Core areas pill tags */}
              <div className="mt-10 pt-6 border-t border-neutral-100 w-full">
                <div className="flex flex-wrap gap-2 text-xs font-mono text-neutral-600">
                  <span className="rounded-full bg-neutral-100 px-3 py-1 border border-neutral-200">
                    SaaS Platforms
                  </span>
                  <span className="rounded-full bg-neutral-100 px-3 py-1 border border-neutral-200">
                    Chrome Extensions (MV3)
                  </span>
                  <span className="rounded-full bg-neutral-100 px-3 py-1 border border-neutral-200">
                    AI Automation
                  </span>
                  <span className="rounded-full bg-neutral-100 px-3 py-1 border border-neutral-200">
                    IoT &amp; Hardware
                  </span>
                </div>
              </div>
            </div>

            {/* Right Mascot Visual */}
            <div className="lg:col-span-5 flex justify-center">
              <HeroMascot />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION: Our Products (ExamGhost & Elite FUT Bot)
          ========================================================================= */}
      <section id="products" className="py-16 sm:py-24 border-b border-neutral-100">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <SectionHeading
              eyebrow="Commercial Products"
              title="Our Products"
              description="ConceptOne Labs develops and operates independent commercial software products in addition to providing product engineering services."
            />
            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-cyan-700 hover:text-cyan-900 transition-colors shrink-0"
            >
              <span>View full product details</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {siteConfig.products.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>

          {/* Interactive Live Blueprint & Telemetry Subsystems */}
          <div className="mt-10">
            <ProductArchitectureShowcase />
          </div>

          <div className="mt-8 rounded-2xl border border-neutral-200 bg-neutral-50/70 p-5 text-center text-xs text-neutral-600">
            <p>
              <strong className="text-neutral-900">Commercial Operations Notice: </strong>
              ExamGhost and Elite FUT Bot are software and browser-extension products developed and operated under ConceptOne Labs LLC.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION: One engineering partner. Every stage. (Process)
          ========================================================================= */}
      <section className="py-16 sm:py-24 border-b border-neutral-100 bg-[#FAFAFA]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="Process"
            title="One engineering partner. Every stage."
            description="We support ideas from initial feasibility to production launch and ongoing scaling."
          />

          <div className="mt-12">
            <InteractivePipeline />
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION: Capabilities / What We Build
          ========================================================================= */}
      <section className="py-16 sm:py-24 border-b border-neutral-100">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <SectionHeading
              eyebrow="Capabilities"
              title="Engineering across software, hardware, and AI"
              description="Full-stack engineering capabilities to build and ship production-ready products."
            />
            <Button href="/services" variant="outline" size="sm" className="shrink-0">
              Explore All Services
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteConfig.services.map((service) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                title={service.title}
                badge={service.badge}
                description={service.description}
                deliverables={service.deliverables}
                technologies={service.technologies}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION: Why ConceptOne Labs
          ========================================================================= */}
      <section className="py-16 sm:py-24 border-b border-neutral-100 bg-[#FAFAFA]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="Why Choose Us"
            title="Why ConceptOne Labs"
            description="We combine technical depth with real-world product building experience."
          />

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {whyUsPoints.map((point) => (
              <div
                key={point.title}
                className="rounded-3xl border border-neutral-200 bg-white p-7 clean-card shadow-xs"
              >
                <h3 className="text-lg font-bold text-neutral-900">
                  {point.title}
                </h3>
                <p className="mt-2.5 text-sm text-neutral-600 leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION: Legal Verification Card
          ========================================================================= */}
      <section className="py-12 border-b border-neutral-100">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xs">
            <div className="flex items-start gap-3">
              <ShieldCheck className="h-6 w-6 text-cyan-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-base font-bold text-neutral-900">
                  Registered Legal Business Entity
                </h4>
                <p className="mt-1 text-xs text-neutral-600 max-w-2xl leading-relaxed">
                  ConceptOne Labs LLC is a Limited Liability Company registered in Wyoming, United States.
                  We operate software products (including ExamGhost and Elite FUT Bot) and provide
                  professional product engineering services.
                </p>
              </div>
            </div>

            <Link
              href="/about"
              className="text-xs font-mono font-medium text-cyan-700 hover:text-cyan-900 shrink-0 underline"
            >
              Learn more about our company →
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FAQ SECTION
          ========================================================================= */}
      <FAQSection />

      {/* =========================================================================
          FINAL CALL TO ACTION
          ========================================================================= */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <CTA />
      </div>
    </div>
  );
}
