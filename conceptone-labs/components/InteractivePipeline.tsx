"use client";

import React, { useState } from "react";
import {
  Compass,
  Layers,
  Code2,
  ShieldCheck,
  Rocket,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Terminal,
  FileCode,
} from "lucide-react";

interface StepDetail {
  number: string;
  name: string;
  tagline: string;
  description: string;
  deliverables: string[];
  tools: string[];
  safeguard: string;
}

export function InteractivePipeline() {
  const steps: StepDetail[] = [
    {
      number: "01",
      name: "Discover",
      tagline: "Technical Feasibility & Requirement Scoping",
      description:
        "We dissect your product vision down to architectural fundamentals. We analyze technical feasibility, API availability, hardware constraints, browser extension policy risks, and timeline projections.",
      deliverables: [
        "Product Requirement Document (PRD)",
        "Technical Feasibility Matrix",
        "System Architecture Map",
        "API & Regulatory Risk Assessment",
      ],
      tools: ["System Modeling", "Threat Analysis", "Chrome MV3 Policy Check", "BOM Cost Estimator"],
      safeguard: "Early elimination of unviable architectures before code is written.",
    },
    {
      number: "02",
      name: "Design",
      tagline: "High-Fidelity UX & Schema Modeling",
      description:
        "We model clean user interactions alongside database schemas and hardware pinouts. Clean UI layouts and micro-interactions ensure the product is intuitive, while structured schemas prevent technical debt.",
      deliverables: [
        "Component Design System & Wireframes",
        "Relational & Document Database Schemas",
        "KiCad Hardware Schematic & Gerber Files",
        "State Management & Telemetry Blueprint",
      ],
      tools: ["Figma", "KiCad EDA", "Prisma / PostgreSQL", "OpenAPI Specification"],
      safeguard: "Zero ambiguity between design mockups and underlying API schemas.",
    },
    {
      number: "03",
      name: "Build",
      tagline: "Full-Stack Software, AI & Embedded Firmware",
      description:
        "Our core engineering execution. We write production TypeScript across Next.js and Chrome Manifest V3 extensions, integrate modern LLM orchestration, and flash high-efficiency C/C++ firmware onto ESP32/STM32 microcontrollers.",
      deliverables: [
        "Strict TypeScript Next.js 16 Web Application",
        "Manifest V3 Chrome/Edge Extension Monorepo",
        "Embedded C/C++ Firmware with OTA Update Support",
        "Stripe Billing & User Entitlement Hooks",
      ],
      tools: ["Next.js 16", "TypeScript", "Tailwind CSS", "ESP-IDF / FreeRTOS", "Docker"],
      safeguard: "Automated linting, strict typing, and end-to-end repository traceability.",
    },
    {
      number: "04",
      name: "Test",
      tagline: "Rigorous QA, Anti-Bot & Real-World Stress",
      description:
        "Every build undergoes extensive verification. We test browser extensions across diverse viewport resolutions, validate zero memory leaks in offscreen documents, and run real-world electrical stress tests on hardware boards.",
      deliverables: [
        "Automated Integration & E2E Test Suite",
        "Manifest V3 Memory & Performance Audit",
        "Penetration & Auth Bypass Verification",
        "Hardware Thermal & Current Draw Profiling",
      ],
      tools: ["Playwright", "Jest", "Chrome DevTools Memory Profiler", "Logic Analyzer"],
      safeguard: "Zero known critical bugs or memory leaks prior to production release.",
    },
    {
      number: "05",
      name: "Launch",
      tagline: "Production Deployment & Store Approvals",
      description:
        "We guide the product into live production. We manage Chrome Web Store submissions and review appeals, provision automated Vercel/AWS infrastructure, and ensure payment webhooks process cleanly.",
      deliverables: [
        "Chrome Web Store & Edge Add-ons Certification",
        "Vercel / Cloudflare Edge Production Cluster",
        "Stripe Production Payment & Webhook Setup",
        "Complete Source Code & Repository Transfer",
      ],
      tools: ["Chrome Developer Dashboard", "Vercel", "Stripe API", "GitHub Actions CI/CD"],
      safeguard: "Zero downtime deployments with automated rollback safety guards.",
    },
    {
      number: "06",
      name: "Scale",
      tagline: "Continuous Optimization & Feature Expansion",
      description:
        "Post-launch telemetry and iterative product growth. We monitor user sessions, query latencies, and device telemetry to proactively resolve edge cases and roll out iterative improvements.",
      deliverables: [
        "Automated Error & Session Telemetry Dashboard",
        "Sub-100ms Query Latency Optimizations",
        "Firmware Over-The-Air (OTA) Fleet Management",
        "Feature Sprint Roadmapping & SLA Maintenance",
      ],
      tools: ["PostHog", "Sentry", "AWS IoT Core", "Grafana Metrics"],
      safeguard: "Proactive alerting before users or hardware devices experience faults.",
    },
  ];

  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const currentStep = steps[activeStepIndex];

  return (
    <div className="w-full">
      {/* Step selector horizontal tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-8">
        {steps.map((step, idx) => {
          const isActive = activeStepIndex === idx;
          return (
            <button
              key={step.number}
              type="button"
              onClick={() => setActiveStepIndex(idx)}
              className={`rounded-2xl p-3.5 text-left border transition-all cursor-pointer ${
                isActive
                  ? "bg-neutral-900 text-white border-neutral-900 shadow-md ring-2 ring-neutral-900/10"
                  : "bg-white text-neutral-800 border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50"
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span
                  className={`text-xs font-mono font-bold ${
                    isActive ? "text-cyan-300" : "text-cyan-700"
                  }`}
                >
                  PHASE {step.number}
                </span>
                {isActive && <div className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />}
              </div>
              <h4 className="text-sm font-bold truncate">{step.name}</h4>
            </button>
          );
        })}
      </div>

      {/* Active Phase Deep Dive Card */}
      <div className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Description & Safegaurd */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="rounded-md bg-neutral-100 px-2 py-0.5 text-xs font-mono font-bold text-neutral-800 border border-neutral-200">
                  STEP {currentStep.number} OF 06
                </span>
                <span className="text-xs font-mono text-neutral-500">
                  {currentStep.tagline}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 tracking-tight mb-4">
                {currentStep.name}: {currentStep.tagline}
              </h3>

              <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                {currentStep.description}
              </p>

              {/* Safeguard Box */}
              <div className="rounded-2xl border border-neutral-200 bg-neutral-50/70 p-4">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-neutral-900 mb-1">
                  <ShieldCheck className="h-4 w-4 text-cyan-600" />
                  <span>ENGINEERING SAFEGUARD</span>
                </div>
                <p className="text-xs text-neutral-600 leading-normal">
                  {currentStep.safeguard}
                </p>
              </div>
            </div>

            {/* Stepper navigation */}
            <div className="mt-8 pt-6 border-t border-neutral-100 flex items-center justify-between">
              <button
                type="button"
                onClick={() =>
                  setActiveStepIndex((prev) => (prev > 0 ? prev - 1 : steps.length - 1))
                }
                className="text-xs font-mono font-medium text-neutral-500 hover:text-neutral-900 px-3 py-1.5 rounded-lg border border-neutral-200 hover:bg-neutral-50 transition-colors cursor-pointer"
              >
                ← Previous Phase
              </button>

              <span className="text-xs font-mono text-neutral-400">
                {activeStepIndex + 1} / {steps.length}
              </span>

              <button
                type="button"
                onClick={() =>
                  setActiveStepIndex((prev) => (prev < steps.length - 1 ? prev + 1 : 0))
                }
                className="text-xs font-mono font-semibold text-neutral-900 hover:text-cyan-800 px-3 py-1.5 rounded-lg border border-neutral-200 hover:bg-neutral-50 transition-colors cursor-pointer flex items-center gap-1"
              >
                <span>Next Phase</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Deliverables & Tech Stack */}
          <div className="lg:col-span-6 space-y-6">
            {/* Deliverables Card */}
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50/40 p-5">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-neutral-900 mb-3">
                <FileCode className="h-4 w-4 text-cyan-700" />
                <span>PHASE DELIVERABLES</span>
              </div>
              <ul className="space-y-2.5">
                {currentStep.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-neutral-700">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools & Frameworks */}
            <div className="rounded-2xl border border-neutral-200 bg-white p-5">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-neutral-900 mb-3">
                <Terminal className="h-4 w-4 text-neutral-700" />
                <span>TOOLS &amp; STACK UTILIZED</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {currentStep.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="rounded-lg bg-neutral-100 px-3 py-1 text-xs font-mono text-neutral-700 border border-neutral-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
