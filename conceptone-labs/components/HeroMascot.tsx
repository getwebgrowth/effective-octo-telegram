"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, CheckCircle2, MessageSquare, Layers, Cpu, ShieldCheck } from "lucide-react";

export function HeroMascot() {
  const [activeSpeechKey, setActiveSpeechKey] = useState<string>("overview");

  const speechMessages: Record<string, { tag: string; quote: string; icon: React.ReactNode }> = {
    overview: {
      tag: "Unit-01 Assistant",
      quote: "From concept to product. We engineer high-scale SaaS, Chrome extensions, AI, and hardware under one roof.",
      icon: <Sparkles className="h-3.5 w-3.5 text-cyan-600" />,
    },
    products: {
      tag: "Operating Portfolio",
      quote: "We operate commercial products like ExamGhost & Elite FUT Bot in production under ConceptOne Labs LLC.",
      icon: <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />,
    },
    architecture: {
      tag: "Engineering Scope",
      quote: "Sub-250ms Manifest V3 extensions, Next.js multi-tenant cloud platforms, and ESP32/STM32 embedded firmware.",
      icon: <Cpu className="h-3.5 w-3.5 text-indigo-600" />,
    },
    hardware: {
      tag: "Hardware & IoT",
      quote: "Yes! We design custom PCBs in KiCad, write low-level firmware in C/C++, and connect sensors to cloud APIs.",
      icon: <Layers className="h-3.5 w-3.5 text-amber-600" />,
    },
    ip: {
      tag: "IP Ownership",
      quote: "100% full IP & repository transfer upon delivery. Clean contracts, zero licensing lock-in, your code forever.",
      icon: <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />,
    },
  };

  const currentSpeech = speechMessages[activeSpeechKey] || speechMessages.overview;

  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      {/* Clean minimalist framing */}
      <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-white p-3 sm:p-4 shadow-sm transition-all hover:shadow-md">
        {/* Top Header pill with interactive mode toggle */}
        <div className="flex items-center justify-between border-b border-neutral-100 px-3 py-2 mb-3 bg-neutral-50 rounded-xl">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-cyan-500 animate-pulse" />
            <span className="text-[11px] font-mono font-medium text-neutral-800">
              Unit-01 · Mascot
            </span>
          </div>

          <div className="flex items-center gap-1">
            {(["overview", "products", "architecture"] as const).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveSpeechKey(tab)}
                className={`rounded-md px-2 py-0.5 text-[10px] font-mono capitalize transition-colors cursor-pointer ${
                  activeSpeechKey === tab
                    ? "bg-white text-neutral-900 font-semibold shadow-2xs border border-neutral-200"
                    : "text-neutral-500 hover:text-neutral-800"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Mascot Image Container */}
        <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-[#F8F9FA] flex items-center justify-center group">
          <Image
            src="/mascot.jpg"
            alt="ConceptOne Labs Mascot - Unit-01"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 450px"
            className="object-contain p-2 transition-transform duration-300 group-hover:scale-103"
          />

          {/* Floating dynamic minimal speech bubble */}
          <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md rounded-2xl border border-neutral-200/90 p-3 shadow-md transition-all">
            <div className="flex items-center gap-1.5 text-[10px] font-mono text-neutral-600 font-semibold mb-1">
              {currentSpeech.icon}
              <span>{currentSpeech.tag}</span>
            </div>
            <p className="text-xs text-neutral-800 leading-snug font-medium">
              &ldquo;{currentSpeech.quote}&rdquo;
            </p>
          </div>
        </div>

        {/* Interactive Quick Inquiries */}
        <div className="mt-3 pt-3 border-t border-neutral-100">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-mono text-neutral-400">ASK UNIT-01:</span>
            <span className="text-[10px] font-mono text-cyan-700">CLICK TO QUERY</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            <button
              type="button"
              onClick={() => setActiveSpeechKey("hardware")}
              className={`rounded-lg px-2.5 py-1 text-[11px] font-mono border transition-all cursor-pointer ${
                activeSpeechKey === "hardware"
                  ? "bg-neutral-900 text-white border-neutral-900 shadow-2xs"
                  : "bg-neutral-50 text-neutral-700 border-neutral-200 hover:bg-neutral-100"
              }`}
            >
              Hardware &amp; IoT?
            </button>
            <button
              type="button"
              onClick={() => setActiveSpeechKey("ip")}
              className={`rounded-lg px-2.5 py-1 text-[11px] font-mono border transition-all cursor-pointer ${
                activeSpeechKey === "ip"
                  ? "bg-neutral-900 text-white border-neutral-900 shadow-2xs"
                  : "bg-neutral-50 text-neutral-700 border-neutral-200 hover:bg-neutral-100"
              }`}
            >
              IP &amp; Ownership?
            </button>
            <button
              type="button"
              onClick={() => setActiveSpeechKey("architecture")}
              className={`rounded-lg px-2.5 py-1 text-[11px] font-mono border transition-all cursor-pointer ${
                activeSpeechKey === "architecture"
                  ? "bg-neutral-900 text-white border-neutral-900 shadow-2xs"
                  : "bg-neutral-50 text-neutral-700 border-neutral-200 hover:bg-neutral-100"
              }`}
            >
              Chrome MV3?
            </button>
          </div>
        </div>

        {/* Bottom subtle capability tags */}
        <div className="mt-3 flex items-center justify-between px-1 text-[11px] font-mono text-neutral-500">
          <span className="flex items-center gap-1">
            <CheckCircle2 className="h-3 w-3 text-emerald-600" />
            SaaS &amp; Extensions
          </span>
          <span className="flex items-center gap-1">
            <CheckCircle2 className="h-3 w-3 text-emerald-600" />
            IoT &amp; Hardware R&amp;D
          </span>
        </div>
      </div>
    </div>
  );
}
