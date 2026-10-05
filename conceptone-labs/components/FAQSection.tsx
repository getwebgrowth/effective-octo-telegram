"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "What is the relationship between ConceptOne Labs LLC and its proprietary software products?",
      answer:
        "ConceptOne Labs LLC is the Wyoming, USA registered legal operating entity. ExamGhost (examghost.com) and our proprietary browser automation suites are commercial software products developed, owned, and operated directly under ConceptOne Labs LLC. Operating our own commercial products gives us hands-on production depth that directly benefits our client engineering builds.",
    },
    {
      question: "Can you build both a Chrome Extension and the full SaaS ecosystem around it?",
      answer:
        "Yes, this is our core flagship specialization. We architect complete monorepos comprising Manifest V3 extensions (using Chrome SidePanel APIs and offscreen keepalive documents), paired with Next.js web management dashboards, Stripe subscription billing, automated license key generation, and resilient cloud databases.",
    },
    {
      question: "Who owns the intellectual property (IP) and code when a project is completed?",
      answer:
        "You do. 100% of custom code, repositories, infrastructure setups, and intellectual property developed for your project are fully assigned and transferred to your organization upon milestone payment. We believe in zero vendor lock-in.",
    },
    {
      question: "How does ConceptOne Labs bridge software and hardware engineering?",
      answer:
        "Our engineering team works across both domains without outsourcing. We design modern web software, APIs, and AI automation while also writing C/C++ firmware for ESP32 and STM32 chips, laying out custom PCBs in KiCad, and configuring secure MQTT telemetry pipelines to connect physical devices to cloud dashboards.",
    },
    {
      question: "How do we verify ConceptOne Labs LLC for corporate verification and banking?",
      answer:
        "ConceptOne Labs LLC is legally registered and active in good standing with the Wyoming Secretary of State, United States. Formal state registration filings, business entity search records, and corporate documentation verify our operating status for banking providers, Stripe, Wise, and enterprise vendors.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-24 border-b border-neutral-100 bg-[#FAFAFA]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3.5 py-1 text-xs font-mono text-neutral-800 mb-4 shadow-2xs">
            <HelpCircle className="h-3.5 w-3.5 text-cyan-600" />
            <span>Frequently Answered Questions</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-neutral-950">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm text-neutral-600">
            Clear answers about our engineering capabilities, product ownership, and engagement model.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-neutral-200 bg-white overflow-hidden transition-all shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 text-left text-sm sm:text-base font-bold text-neutral-900 hover:text-cyan-800 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-neutral-400 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-cyan-600" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-neutral-100 pt-3">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
