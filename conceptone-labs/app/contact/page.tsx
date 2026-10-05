import React from "react";
import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Start a Project | Contact ConceptOne Labs",
  description:
    "Get in touch with ConceptOne Labs LLC to discuss your software, SaaS, Chrome extension, AI automation, or hardware product engineering project.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-100 px-3.5 py-1 text-xs font-mono text-neutral-800 mb-4">
            <span>Project Inquiry</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-950 leading-tight">
            Let&apos;s build something.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed">
            Tell us about your product concept, engineering timeline, and requirements.
            Our technical team will review your scope and provide honest feasibility feedback
            and a clear path to execution.
          </p>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
