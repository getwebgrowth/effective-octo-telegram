"use client";

import React, { useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { Send, CheckCircle2, AlertCircle, Mail, Clock, Shield } from "lucide-react";
import { Button } from "@/components/Button";

const projectTypes = [
  "Software / SaaS",
  "Browser Extension",
  "AI / Automation",
  "IoT / Embedded",
  "Hardware / Electronics",
  "Product Development",
  "Other",
];

const budgetRanges = [
  "Under $2,500",
  "$2,500–$5,000",
  "$5,000–$10,000",
  "$10,000–$25,000",
  "$25,000+",
  "Not sure yet",
];

const projectRecommendations: Record<string, string> = {
  "Software / SaaS": "Architecture recommendation: Next.js 16 App Router + Supabase/PostgreSQL + Stripe subscription & webhook entitlements.",
  "Browser Extension": "Architecture recommendation: Manifest V3 with Chrome SidePanel API + Offscreen Document keepalive + licensing server.",
  "AI / Automation": "Architecture recommendation: Multi-LLM fallback cascade (Claude 3.5 + GPT-4o) + Vector embeddings + structured function schemas.",
  "IoT / Embedded": "Architecture recommendation: ESP32/STM32 C/C++ firmware + MQTT telemetry + secure TLS hardware handshake.",
  "Hardware / Electronics": "Architecture recommendation: KiCad EDA schematic capture + multi-layer PCB layout + component BOM optimization.",
  "Product Development": "Architecture recommendation: Turnkey Concept to Launch roadmap across software, UX, and production infrastructure.",
  "Other": "Architecture recommendation: Custom technical discovery session to evaluate architectural feasibility.",
};

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "Software / SaaS",
    budgetRange: "$5,000–$10,000",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Unable to send message. Please try the mailto link below.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error occurred. Please contact us directly via email.");
    }
  };

  const mailtoLink = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
    `Project Inquiry: ${formData.projectType}`
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nProject Type: ${formData.projectType}\nBudget: ${formData.budgetRange}\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
      {/* Form Area */}
      <div className="lg:col-span-7">
        <div className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-xs">
          {status === "success" ? (
            <div className="py-12 text-center flex flex-col items-center">
              <div className="h-12 w-12 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-4">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900">Inquiry Received</h3>
              <p className="mt-2 text-sm text-neutral-600 max-w-md">
                Thank you for reaching out to ConceptOne Labs LLC. Our engineering team will review
                your project requirements and reply to <strong>{formData.email}</strong> within 1–2 business days.
              </p>
              <div className="mt-6">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setStatus("idle");
                    setFormData({
                      name: "",
                      email: "",
                      company: "",
                      projectType: "Software / SaaS",
                      budgetRange: "$5,000–$10,000",
                      message: "",
                    });
                  }}
                >
                  Send another message
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Quick Scope Presets */}
              <div className="pb-4 border-b border-neutral-100">
                <span className="text-[11px] font-mono text-neutral-500 block mb-2">
                  SELECT PROJECT TEMPLATE (OPTIONAL):
                </span>
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      setFormData((prev) => ({
                        ...prev,
                        projectType: "Browser Extension",
                        budgetRange: "$5,000–$10,000",
                        message:
                          "We need a high-performance Chrome Extension (Manifest V3) with a sidepanel interface, offscreen document for persistent processing, and Stripe subscription monetization.",
                      }))
                    }
                    className="rounded-lg bg-neutral-100 hover:bg-neutral-200 px-2.5 py-1 text-xs font-mono text-neutral-800 transition-colors cursor-pointer"
                  >
                    + Chrome MV3 + SaaS
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setFormData((prev) => ({
                        ...prev,
                        projectType: "Software / SaaS",
                        budgetRange: "$10,000–$25,000",
                        message:
                          "We are building a multi-tenant B2B SaaS web application. We need Next.js 16, Supabase/PostgreSQL schema, Stripe billing, and user management.",
                      }))
                    }
                    className="rounded-lg bg-neutral-100 hover:bg-neutral-200 px-2.5 py-1 text-xs font-mono text-neutral-800 transition-colors cursor-pointer"
                  >
                    + Full SaaS Platform
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setFormData((prev) => ({
                        ...prev,
                        projectType: "IoT / Embedded",
                        budgetRange: "$10,000–$25,000",
                        message:
                          "We need an ESP32-based embedded device with custom firmware, sensor integration, and a low-latency MQTT cloud dashboard for remote monitoring.",
                      }))
                    }
                    className="rounded-lg bg-neutral-100 hover:bg-neutral-200 px-2.5 py-1 text-xs font-mono text-neutral-800 transition-colors cursor-pointer"
                  >
                    + ESP32 IoT Device
                  </button>
                </div>
              </div>

              {status === "error" && (
                <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-xs text-red-700 flex items-start gap-2.5">
                  <AlertCircle className="h-4 w-4 shrink-0 mt-0.5 text-red-600" />
                  <div className="flex-1">
                    <p>{errorMessage}</p>
                    <a
                      href={mailtoLink}
                      className="underline font-medium hover:text-red-900 mt-1 block"
                    >
                      Click here to send via your email client ({siteConfig.email})
                    </a>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-mono font-medium text-neutral-700 mb-1.5"
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Alex Chen"
                    className="w-full rounded-xl border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900 transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-mono font-medium text-neutral-700 mb-1.5"
                  >
                    Work Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex@company.com"
                    className="w-full rounded-xl border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-xs font-mono font-medium text-neutral-700 mb-1.5"
                >
                  Company / Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Acme Corp or Independent"
                  className="w-full rounded-xl border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900 transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="projectType"
                    className="block text-xs font-mono font-medium text-neutral-700 mb-1.5"
                  >
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-neutral-900 focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900 transition-colors"
                  >
                    {projectTypes.map((type) => (
                      <option key={type} value={type} className="bg-white text-neutral-900">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="budgetRange"
                    className="block text-xs font-mono font-medium text-neutral-700 mb-1.5"
                  >
                    Anticipated Budget *
                  </label>
                  <select
                    id="budgetRange"
                    name="budgetRange"
                    value={formData.budgetRange}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-neutral-900 focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900 transition-colors"
                  >
                    {budgetRanges.map((range) => (
                      <option key={range} value={range} className="bg-white text-neutral-900">
                        {range}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Dynamic Architecture Recommendation */}
              <div className="rounded-xl border border-neutral-200 bg-neutral-50/80 p-3.5 text-xs flex items-start gap-2.5">
                <span className="h-2 w-2 rounded-full bg-cyan-600 shrink-0 mt-1" />
                <div className="text-neutral-700 leading-relaxed">
                  <span className="font-mono font-semibold text-neutral-900 block text-[11px] mb-0.5">
                    TECHNICAL ARCHITECTURE RECOMMENDATION:
                  </span>
                  <span>{projectRecommendations[formData.projectType]}</span>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-mono font-medium text-neutral-700 mb-1.5"
                >
                  Project Summary &amp; Requirements *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe what you want to build, key timeline requirements, technical constraints, or existing codebase..."
                  className="w-full rounded-xl border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900 transition-colors resize-y"
                />
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  disabled={status === "submitting"}
                  className="w-full sm:w-auto"
                  icon={<Send className="h-4 w-4" />}
                >
                  {status === "submitting" ? "Transmitting..." : "Send Project Inquiry"}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Sidebar Info Area */}
      <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
        {/* Mascot Assistant Card */}
        <div className="rounded-3xl border border-neutral-200 bg-[#FAFAFA] p-5 flex items-center gap-4 shadow-xs">
          <div className="relative h-14 w-14 rounded-2xl overflow-hidden border border-neutral-200 bg-white shrink-0 shadow-2xs">
            <Image src="/mascot.jpg" alt="Unit-01" fill className="object-contain p-1" />
          </div>
          <div>
            <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-800 font-semibold">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-600" />
              <span>Unit-01 Inbound Routing</span>
            </div>
            <p className="text-xs text-neutral-600 mt-1 leading-normal">
              Direct technical evaluation by senior product engineers. No salespeople.
            </p>
          </div>
        </div>

        <div className="rounded-3xl border border-neutral-200 bg-white p-6 space-y-6 shadow-xs">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-800 font-semibold">
              Direct Contact
            </span>
            <h3 className="text-lg font-bold text-neutral-900 mt-1">
              Engineering Consultation
            </h3>
            <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
              We discuss technical feasibility, timeline estimates, and architectural approaches directly with technical founders and product teams.
            </p>
          </div>

          <div className="space-y-4 border-t border-neutral-100 pt-5 text-sm text-neutral-700">
            <div className="flex items-start gap-3">
              <Mail className="h-4 w-4 text-cyan-600 mt-1 shrink-0" />
              <div>
                <span className="block text-xs font-mono text-neutral-500">Email Address</span>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-neutral-900 hover:text-cyan-700 underline font-mono text-xs transition-colors"
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="h-4 w-4 text-cyan-600 mt-1 shrink-0" />
              <div>
                <span className="block text-xs font-mono text-neutral-500">Response Window</span>
                <span className="text-xs text-neutral-700 font-mono">Typically within 24–48 hours</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Shield className="h-4 w-4 text-cyan-600 mt-1 shrink-0" />
              <div>
                <span className="block text-xs font-mono text-neutral-500">Confidentiality</span>
                <span className="text-xs text-neutral-600">
                  Mutual Non-Disclosure Agreements (NDAs) supported for proprietary projects prior to in-depth technical disclosure.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Context Card */}
        <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5 text-xs text-neutral-600 font-mono">
          <p className="text-neutral-900 font-bold mb-1">ConceptOne Labs LLC</p>
          <p>Jurisdiction: Wyoming, United States</p>
          <p>Company Type: Limited Liability Company</p>
          <p className="mt-2 text-[11px] text-neutral-500">
            For commercial partnerships, product inquiries, or vendor verification, please reach out via the inquiry form or official email.
          </p>
        </div>
      </div>
    </div>
  );
}
