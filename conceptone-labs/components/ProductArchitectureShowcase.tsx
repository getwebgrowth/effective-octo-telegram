"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  AppWindow,
  Cpu,
  Layers,
  ShieldCheck,
  Zap,
  Activity,
  ArrowUpRight,
  Sparkles,
  Terminal,
  Code2,
  RefreshCw,
  EyeOff,
  Gauge,
  CheckCircle2,
  Lock,
} from "lucide-react";

export function ProductArchitectureShowcase() {
  const [activeProduct, setActiveProduct] = useState<"elite" | "exam">("elite");
  const [eliteMode, setEliteMode] = useState<"snipe" | "relist" | "scanner">("snipe");
  const [examMode, setExamMode] = useState<"overlay" | "multillm" | "stealth">("overlay");

  return (
    <div className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-xs">
      {/* Top Header & Product Selector Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-100 pb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-0.5 text-[11px] font-mono text-neutral-700 mb-2">
            <Cpu className="h-3 w-3 text-cyan-600" />
            <span>Interactive Engineering Blueprint</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-neutral-950 tracking-tight">
            Production Architecture &amp; Telemetry
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600 mt-1">
            Explore how we build and operate commercial software with zero-compromise reliability.
          </p>
        </div>

        {/* Tab switchers */}
        <div className="flex items-center bg-neutral-100 p-1 rounded-2xl border border-neutral-200 shrink-0">
          <button
            type="button"
            onClick={() => setActiveProduct("elite")}
            className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-mono font-semibold transition-all cursor-pointer ${
              activeProduct === "elite"
                ? "bg-white text-neutral-950 shadow-xs border border-neutral-200/80"
                : "text-neutral-500 hover:text-neutral-900"
            }`}
          >
            <AppWindow className="h-3.5 w-3.5 text-cyan-600" />
            <span>FUT Snipe Engine (MV3)</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveProduct("exam")}
            className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-mono font-semibold transition-all cursor-pointer ${
              activeProduct === "exam"
                ? "bg-white text-neutral-950 shadow-xs border border-neutral-200/80"
                : "text-neutral-500 hover:text-neutral-900"
            }`}
          >
            <Sparkles className="h-3.5 w-3.5 text-indigo-600" />
            <span>ExamGhost (AI SaaS)</span>
          </button>
        </div>
      </div>

      {/* Content for Elite FUT Bot */}
      {activeProduct === "elite" && (
        <div className="pt-6">
          {/* Sub-navigation pill filters */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-mono text-neutral-500 mr-1">SIMULATE SUBSYSTEM:</span>
              <button
                type="button"
                onClick={() => setEliteMode("snipe")}
                className={`rounded-lg px-2.5 py-1 text-xs font-mono font-medium transition-colors cursor-pointer ${
                  eliteMode === "snipe"
                    ? "bg-neutral-900 text-white"
                    : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                }`}
              >
                Fast Snipe Engine
              </button>
              <button
                type="button"
                onClick={() => setEliteMode("relist")}
                className={`rounded-lg px-2.5 py-1 text-xs font-mono font-medium transition-colors cursor-pointer ${
                  eliteMode === "relist"
                    ? "bg-neutral-900 text-white"
                    : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                }`}
              >
                Automated Relisting
              </button>
              <button
                type="button"
                onClick={() => setEliteMode("scanner")}
                className={`rounded-lg px-2.5 py-1 text-xs font-mono font-medium transition-colors cursor-pointer ${
                  eliteMode === "scanner"
                    ? "bg-neutral-900 text-white"
                    : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                }`}
              >
                Market Price Scanner
              </button>
            </div>

            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] font-mono text-emerald-700 font-semibold">
                CHROME MV3 READY
              </span>
            </div>
          </div>

          {/* Interactive Visual Blueprint & Telemetry Display */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left 7 cols: Architectural Mechanism */}
            <div className="lg:col-span-7 rounded-2xl border border-neutral-200 bg-neutral-50/50 p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-cyan-800">
                    {eliteMode === "snipe" && "01 // SUB-50MS DOM INTERCEPTION"}
                    {eliteMode === "relist" && "02 // OFFSCREEN BACKGROUND KEEPALIVE"}
                    {eliteMode === "scanner" && "03 // ASYNC PRICE AGGREGATION PIPELINE"}
                  </span>
                  <span className="text-[11px] font-mono text-neutral-500">v4.2.1-production</span>
                </div>

                <h4 className="text-base font-bold text-neutral-950 mb-2">
                  {eliteMode === "snipe" && "High-Frequency Sniper with Micro-Jitter Humanization"}
                  {eliteMode === "relist" && "Resilient 24/7 Automation via Offscreen Documents"}
                  {eliteMode === "scanner" && "Real-Time Market Depth Scanner & Algorithmic Valuations"}
                </h4>

                <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                  {eliteMode === "snipe" &&
                    "Uses Chrome's declarativeNetRequest and mutated shadow DOM observers to detect new market listings in under 18ms. Mouse coordinates simulate human hand movement using cubic Bézier curves and randomized pause delays to eliminate anti-bot detection."}
                  {eliteMode === "relist" &&
                    "Manifest V3 imposes a 30-second execution cap on background service workers. Our proprietary architectural bridge creates an ephemeral audio-less Offscreen Document that maintains continuous state synchronization without violating Chrome Web Store policy."}
                  {eliteMode === "scanner" &&
                    "Continuously streams price histograms through authenticated WebSockets, caching recent sales into chrome.storage.local to calculate optimal buy thresholds with automated profit margin protections."}
                </p>

                {/* Micro Spec Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-mono">
                  <div className="rounded-xl border border-neutral-200 bg-white p-2.5">
                    <span className="text-neutral-500 block text-[10px]">EXECUTION SPEED</span>
                    <span className="font-bold text-neutral-900">
                      {eliteMode === "snipe" ? "18–42 ms" : eliteMode === "relist" ? "120 ms" : "65 ms"}
                    </span>
                  </div>
                  <div className="rounded-xl border border-neutral-200 bg-white p-2.5">
                    <span className="text-neutral-500 block text-[10px]">MEMORY OVERHEAD</span>
                    <span className="font-bold text-neutral-900">&lt; 14.8 MB</span>
                  </div>
                  <div className="rounded-xl border border-neutral-200 bg-white p-2.5 col-span-2 sm:col-span-1">
                    <span className="text-neutral-500 block text-[10px]">ANTI-CHEAT AUDIT</span>
                    <span className="font-bold text-emerald-600">PASS (0 FLAGGED)</span>
                  </div>
                </div>
              </div>

              {/* Bottom direct link to product */}
              <div className="mt-5 pt-4 border-t border-neutral-200/80 flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="text-neutral-500">Commercial URL:</span>
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-neutral-200/80 text-neutral-700 font-mono text-[11px]">
                    <Lock className="h-3 w-3 text-amber-500" />
                    <span className="blur-xs select-none tracking-widest font-mono">••••••••••••.com</span>
                    <span className="text-[10px] text-neutral-500 font-sans">(Stealth)</span>
                  </span>
                </div>
                <div className="inline-flex items-center gap-1.5 font-semibold text-neutral-500">
                  <Lock className="h-3.5 w-3.5 text-amber-500" />
                  <span>Private Commercial SaaS</span>
                </div>
              </div>
            </div>

            {/* Right 5 cols: Live Simulated Telemetry Card */}
            <div className="lg:col-span-5 rounded-2xl border border-neutral-200 bg-neutral-900 text-white p-5 flex flex-col justify-between font-mono">
              <div>
                <div className="flex items-center justify-between border-b border-neutral-800 pb-3 mb-3 text-xs">
                  <span className="text-neutral-400">TELEMETRY CONSOLE</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <Activity className="h-3 w-3" />
                    STREAM ACTIVE
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between text-neutral-400">
                    <span>Target Interface:</span>
                    <span className="text-neutral-200">EA Sports FC Web App</span>
                  </div>
                  <div className="flex justify-between text-neutral-400">
                    <span>Engine Mode:</span>
                    <span className="text-cyan-400 uppercase">{eliteMode}</span>
                  </div>
                  <div className="flex justify-between text-neutral-400">
                    <span>DOM Hook Status:</span>
                    <span className="text-emerald-400">Attached (Isolated World)</span>
                  </div>
                  <div className="flex justify-between text-neutral-400">
                    <span>Service Worker:</span>
                    <span className="text-neutral-200">Offscreen Connected</span>
                  </div>
                  <div className="flex justify-between text-neutral-400">
                    <span>Jitter Range:</span>
                    <span className="text-neutral-200">140ms – 320ms Gaussian</span>
                  </div>
                </div>

                <div className="mt-4 rounded-xl bg-neutral-950 p-3 text-[11px] text-neutral-300 border border-neutral-800/80">
                  <p className="text-neutral-400 mb-1">// Real-time event dispatch</p>
                  <p className="text-cyan-300">
                    &gt; dispatchEvent(&apos;market:search&apos;, &#123; filter: &apos;gold_rare&apos; &#125;)
                  </p>
                  <p className="text-emerald-300">&gt; matchFound: targetPrice &lt; maxBin [18ms]</p>
                  <p className="text-neutral-400">&gt; humanBezierCurve(targetCoords, jitter=0.18)</p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-neutral-800 text-[10px] text-neutral-400 flex items-center justify-between">
                <span>OPERATED BY CONCEPT ONE LABS LLC</span>
                <span>WY, USA</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Content for ExamGhost */}
      {activeProduct === "exam" && (
        <div className="pt-6">
          {/* Sub-navigation pill filters */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-mono text-neutral-500 mr-1">SIMULATE SUBSYSTEM:</span>
              <button
                type="button"
                onClick={() => setExamMode("overlay")}
                className={`rounded-lg px-2.5 py-1 text-xs font-mono font-medium transition-colors cursor-pointer ${
                  examMode === "overlay"
                    ? "bg-neutral-900 text-white"
                    : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                }`}
              >
                Stealth DOM Overlay
              </button>
              <button
                type="button"
                onClick={() => setExamMode("multillm")}
                className={`rounded-lg px-2.5 py-1 text-xs font-mono font-medium transition-colors cursor-pointer ${
                  examMode === "multillm"
                    ? "bg-neutral-900 text-white"
                    : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                }`}
              >
                Multi-LLM Orchestration
              </button>
              <button
                type="button"
                onClick={() => setExamMode("stealth")}
                className={`rounded-lg px-2.5 py-1 text-xs font-mono font-medium transition-colors cursor-pointer ${
                  examMode === "stealth"
                    ? "bg-neutral-900 text-white"
                    : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                }`}
              >
                Zero-Tab Switch Evasion
              </button>
            </div>

            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />
              <span className="text-[11px] font-mono text-indigo-700 font-semibold">
                ENTERPRISE AI PIPELINE
              </span>
            </div>
          </div>

          {/* Interactive Visual Blueprint & Telemetry Display */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left 7 cols: Architectural Mechanism */}
            <div className="lg:col-span-7 rounded-2xl border border-neutral-200 bg-neutral-50/50 p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-indigo-800">
                    {examMode === "overlay" && "01 // CLOAKED SHADOW DOM ROOT"}
                    {examMode === "multillm" && "02 // SMART RESILIENT LLM CASCADE"}
                    {examMode === "stealth" && "03 // ZERO VIEWPORT BLUR EVENT"}
                  </span>
                  <span className="text-[11px] font-mono text-neutral-500">v3.8.0-production</span>
                </div>

                <h4 className="text-base font-bold text-neutral-950 mb-2">
                  {examMode === "overlay" && "Closed Shadow DOM with Isolated Stylesheet Injection"}
                  {examMode === "multillm" && "Dynamic Multi-Model Router with Token Caching"}
                  {examMode === "stealth" && "In-Situ Answering Preventing Window Focus Lost Triggers"}
                </h4>

                <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                  {examMode === "overlay" &&
                    "Renders an invisible or floating HUD anchored to a closed-mode Shadow DOM root. Because it is sealed from standard querySelector calls and page JavaScript contexts, hostile inspection scripts cannot scan or detect UI presence."}
                  {examMode === "multillm" &&
                    "Orchestrates inference across Claude 3.5 Sonnet, OpenAI GPT-4o, and DeepSeek, routing complex logic and mathematical proofs to the best suited engine while maintaining fallback redundancy and prompt compression."}
                  {examMode === "stealth" &&
                    "Traditional AI assistants require opening separate tabs or windows, immediately triggering tab-switch, blur, and focus-lost telemetry on proctored interfaces. ExamGhost embeds directly inside the current active tab."}
                </p>

                {/* Micro Spec Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-mono">
                  <div className="rounded-xl border border-neutral-200 bg-white p-2.5">
                    <span className="text-neutral-500 block text-[10px]">AVG RESPONSE LATENCY</span>
                    <span className="font-bold text-neutral-900">420–780 ms</span>
                  </div>
                  <div className="rounded-xl border border-neutral-200 bg-white p-2.5">
                    <span className="text-neutral-500 block text-[10px]">DOM TRACE IMPACT</span>
                    <span className="font-bold text-emerald-600">ZERO (Closed Root)</span>
                  </div>
                  <div className="rounded-xl border border-neutral-200 bg-white p-2.5 col-span-2 sm:col-span-1">
                    <span className="text-neutral-500 block text-[10px]">TAB BLUR TRIGGER</span>
                    <span className="font-bold text-emerald-600">0 EVENTS</span>
                  </div>
                </div>
              </div>

              {/* Bottom direct link to product */}
              <div className="mt-5 pt-4 border-t border-neutral-200/80 flex items-center justify-between text-xs font-mono">
                <span className="text-neutral-600">Commercial URL: examghost.com</span>
                <Link
                  href="https://examghost.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-indigo-700 hover:text-indigo-900 transition-colors"
                >
                  <span>Visit ExamGhost</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Right 5 cols: Live Simulated Telemetry Card */}
            <div className="lg:col-span-5 rounded-2xl border border-neutral-200 bg-neutral-900 text-white p-5 flex flex-col justify-between font-mono">
              <div>
                <div className="flex items-center justify-between border-b border-neutral-800 pb-3 mb-3 text-xs">
                  <span className="text-neutral-400">AI WORKSPACE PIPELINE</span>
                  <span className="text-indigo-400 flex items-center gap-1">
                    <Activity className="h-3 w-3" />
                    STREAM READY
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between text-neutral-400">
                    <span>Host DOM Status:</span>
                    <span className="text-emerald-400">Unmodified (Protected)</span>
                  </div>
                  <div className="flex justify-between text-neutral-400">
                    <span>Shadow Tree:</span>
                    <span className="text-neutral-200">Mode: Closed / Isolated</span>
                  </div>
                  <div className="flex justify-between text-neutral-400">
                    <span>Primary Model:</span>
                    <span className="text-indigo-300">Claude 3.5 Sonnet</span>
                  </div>
                  <div className="flex justify-between text-neutral-400">
                    <span>Secondary Fallback:</span>
                    <span className="text-neutral-200">GPT-4o Edge Proxy</span>
                  </div>
                  <div className="flex justify-between text-neutral-400">
                    <span>Window Focus:</span>
                    <span className="text-emerald-400">100% Retained</span>
                  </div>
                </div>

                <div className="mt-4 rounded-xl bg-neutral-950 p-3 text-[11px] text-neutral-300 border border-neutral-800/80">
                  <p className="text-neutral-400 mb-1">// In-situ contextual prompt inference</p>
                  <p className="text-indigo-300">&gt; captureContext(selectedBounds)</p>
                  <p className="text-emerald-300">&gt; streamTokens(route: &apos;sonnet-3.5&apos;) [480ms]</p>
                  <p className="text-neutral-400">&gt; renderOverlayHUD(alpha=0.92, blurSafe=true)</p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-neutral-800 text-[10px] text-neutral-400 flex items-center justify-between">
                <span>OPERATED BY CONCEPT ONE LABS LLC</span>
                <span>WY, USA</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
