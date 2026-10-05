import React from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Button } from "@/components/Button";

interface CTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

export function CTA({
  title = "Have an idea worth building?",
  description = "Tell us what you're working on. We can help turn the concept into a working product—whether it's a high-scale SaaS, browser extension, AI workflow, or connected hardware.",
  buttonText = "Start a Project",
  buttonHref = "/contact",
}: CTAProps) {
  return (
    <section className="my-16 sm:my-24 rounded-3xl border border-neutral-200 bg-neutral-900 p-8 sm:p-12 md:p-16 text-center text-white relative overflow-hidden shadow-xl">
      <div className="relative mx-auto max-w-2xl flex flex-col items-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-neutral-700 bg-neutral-800 px-3.5 py-1 text-xs font-mono text-cyan-300 mb-6">
          <Sparkles className="h-3.5 w-3.5" />
          <span>From Concept to Product</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
          {title}
        </h2>

        <p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed max-w-xl">
          {description}
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
          <Button
            href={buttonHref}
            variant="secondary"
            size="lg"
            icon={<ArrowUpRight className="h-4 w-4" />}
          >
            {buttonText}
          </Button>

          <Button
            href="/services"
            variant="ghost"
            size="lg"
            className="text-neutral-300 hover:text-white hover:bg-neutral-800"
          >
            Explore Capabilities
          </Button>
        </div>

        <p className="mt-6 text-xs text-neutral-400 font-mono">
          Direct engineering consultation · NDA friendly · Transparent scoping
        </p>
      </div>
    </section>
  );
}
