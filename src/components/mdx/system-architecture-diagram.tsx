"use client";

interface NodeProps {
  label: string;
  sublabel?: string;
  color?: "blue" | "purple" | "amber" | "emerald" | "zinc" | "red";
  size?: "sm" | "md" | "lg";
  icon?: string;
}

interface SystemArchitectureDiagramProps {
  title?: string;
}

const colorClasses = {
  blue: {
    border: "border-blue-500/40",
    bg: "bg-blue-500/10 dark:bg-blue-500/15",
    text: "text-blue-800 dark:text-blue-200",
    badge: "bg-blue-500",
    glow: "shadow-blue-500/20",
  },
  purple: {
    border: "border-purple-500/40",
    bg: "bg-purple-500/10 dark:bg-purple-500/15",
    text: "text-purple-800 dark:text-purple-200",
    badge: "bg-purple-500",
    glow: "shadow-purple-500/20",
  },
  amber: {
    border: "border-amber-500/40",
    bg: "bg-amber-500/10 dark:bg-amber-500/15",
    text: "text-amber-800 dark:text-amber-200",
    badge: "bg-amber-500",
    glow: "shadow-amber-500/20",
  },
  emerald: {
    border: "border-emerald-500/40",
    bg: "bg-emerald-500/10 dark:bg-emerald-500/15",
    text: "text-emerald-800 dark:text-emerald-200",
    badge: "bg-emerald-500",
    glow: "shadow-emerald-500/20",
  },
  zinc: {
    border: "border-zinc-500/40",
    bg: "bg-zinc-500/10 dark:bg-zinc-500/15",
    text: "text-zinc-700 dark:text-zinc-300",
    badge: "bg-zinc-500",
    glow: "shadow-zinc-500/20",
  },
  red: {
    border: "border-red-500/40",
    bg: "bg-red-500/10 dark:bg-red-500/15",
    text: "text-red-800 dark:text-red-200",
    badge: "bg-red-500",
    glow: "shadow-red-500/20",
  },
};

function DiagramNode({ label, sublabel, color = "zinc", size = "md" }: NodeProps) {
  const c = colorClasses[color];
  const sizeClass = size === "lg" ? "p-4" : size === "sm" ? "p-2.5" : "p-3";
  return (
    <div
      className={`rounded-xl border-2 ${c.border} ${c.bg} ${sizeClass} shadow-md ${c.glow} text-center flex flex-col items-center justify-center gap-0.5`}
    >
      <div className={`font-bold text-xs sm:text-sm ${c.text} leading-tight`}>{label}</div>
      {sublabel && (
        <div className="text-[10px] text-muted-foreground leading-tight">{sublabel}</div>
      )}
    </div>
  );
}

function Arrow({ label }: { label?: string }) {
  return (
    <div className="flex flex-col items-center gap-0.5 py-0.5 shrink-0">
      <div className="w-px h-3 bg-border/60" />
      <svg width="10" height="6" viewBox="0 0 10 6" className="text-muted-foreground/50" fill="currentColor">
        <path d="M5 6L0 0h10L5 6z" />
      </svg>
      {label && <span className="text-[9px] font-mono text-muted-foreground uppercase tracking-wide mt-0.5">{label}</span>}
    </div>
  );
}

function HorizontalArrow({ label }: { label?: string }) {
  return (
    <div className="flex items-center gap-0.5 shrink-0 px-1">
      {label && <span className="text-[9px] font-mono text-muted-foreground uppercase tracking-wide">{label}</span>}
      <div className="h-px w-4 bg-border/60" />
      <svg width="5" height="8" viewBox="0 0 5 8" className="text-muted-foreground/50" fill="currentColor">
        <path d="M5 4L0 0v8L5 4z" />
      </svg>
    </div>
  );
}

export function SystemArchitectureDiagram({ title }: SystemArchitectureDiagramProps) {
  return (
    <div className="not-prose my-8 rounded-2xl border-2 border-border/60 bg-card/40 dark:bg-card/30 overflow-hidden shadow-xl">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-muted/40 border-b border-border/60">
        <div className="flex items-center gap-1.5">
          <span className="size-2.5 rounded-full bg-red-500/80" />
          <span className="size-2.5 rounded-full bg-yellow-500/80" />
          <span className="size-2.5 rounded-full bg-green-500/80" />
        </div>
        <span className="text-[11px] font-mono text-muted-foreground">{title ?? "EliteFutBot — System Architecture"}</span>
        <span className="text-[10px] uppercase font-mono text-muted-foreground tracking-wider">Manifest V3</span>
      </div>

      {/* Diagram body — min-width forces horizontal scroll on very small screens */}
      <div className="overflow-x-auto">
        <div className="p-4 sm:p-6 space-y-0 min-w-[480px]">
          {/* Layer 1: Browser-facing layer */}
          <div className="flex items-stretch gap-2 sm:gap-3 justify-center">
            <DiagramNode label="EA FC Web App" sublabel="Target website" color="zinc" size="md" />
            <HorizontalArrow label="WebSocket" />
            <DiagramNode label="Main World Script" sublabel="Injected — intercepts WS stream" color="blue" size="lg" />
            <HorizontalArrow label="postMessage" />
            <DiagramNode label="Side Panel HUD" sublabel="Native chrome.sidePanel" color="purple" size="md" />
          </div>

          {/* Arrow down */}
          <div className="flex justify-center pl-24">
            <Arrow label="raw packets" />
          </div>

          {/* Layer 2: Core Engine */}
          <div className="rounded-xl border-2 border-amber-500/30 bg-amber-500/5 dark:bg-amber-500/10 p-3 sm:p-4">
            <div className="text-[10px] font-bold uppercase tracking-widest text-amber-700 dark:text-amber-300 mb-3 text-center">
              ⚡ Background Service Worker — Core Engine
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <DiagramNode label="Sub-250ms Snipe Engine" sublabel="Atomic buy payload dispatcher" color="amber" size="sm" />
              <DiagramNode label="Humanization++ Physics" sublabel="Bézier mouse + Gaussian jitter" color="amber" size="sm" />
              <DiagramNode label="Futbin Price API" sublabel="30s live margin calculator" color="amber" size="sm" />
              <DiagramNode label="Rate-Limit Throttle" sublabel="Dynamic RPM virtualizer" color="amber" size="sm" />
            </div>
          </div>

          {/* Arrow down */}
          <div className="flex justify-center">
            <Arrow label="license + stats" />
          </div>

          {/* Layer 3: Cloud backend */}
          <div className="flex items-stretch gap-2 sm:gap-3 justify-center">
            <DiagramNode label="EliteFutBot Cloud API" sublabel="License auth · Stripe billing" color="emerald" size="md" />
            <HorizontalArrow label="webhook" />
            <DiagramNode label="Discord Alerts" sublabel="Real-time trade receipts" color="blue" size="sm" />
            <HorizontalArrow label="DB" />
            <DiagramNode label="Supabase / PostgreSQL" sublabel="100k+ user accounts" color="emerald" size="sm" />
          </div>

          {/* Legend */}
          <div className="mt-5 flex flex-wrap gap-2 sm:gap-3 justify-center pt-4 border-t border-border/40">
            {[
              { color: "bg-zinc-500", label: "Host Environment" },
              { color: "bg-blue-500", label: "Extension Layer" },
              { color: "bg-purple-500", label: "Chrome APIs" },
              { color: "bg-amber-500", label: "Core Engine" },
              { color: "bg-emerald-500", label: "Cloud Backend" },
            ].map((l) => (
              <div key={l.label} className="flex items-center gap-1.5 text-[10px] text-muted-foreground font-medium">
                <span className={`size-2.5 rounded-sm ${l.color} opacity-80`} />
                {l.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
