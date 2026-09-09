import Link from "next/link";
import { ArrowUpRight, CheckCircle2, MessageSquare, ShieldCheck, Zap } from "lucide-react";
import { Icons } from "@/components/icons";

interface ClientHireCardProps {
  headline?: string;
  subheadline?: string;
  rate?: string;
}

export function ClientHireCard({
  headline = "Need a High-Speed Bot or Browser Automation SaaS?",
  subheadline = "I engineer high-frequency web automation, custom Chrome extensions, and monetized SaaS monorepos that handle massive scale without getting banned.",
  rate = "$20/hr on Upwork",
}: ClientHireCardProps) {
  return (
    <div className="not-prose my-8 relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-card to-background p-6 sm:p-8 shadow-xl">
      {/* Ambient background glow */}
      <div className="absolute -top-16 -right-16 size-48 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 size-48 rounded-full bg-emerald-500/15 blur-3xl pointer-events-none" />

      <div className="relative flex flex-col gap-6">
        {/* Availability Badge */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-800 dark:text-emerald-400 text-xs font-semibold">
            <span className="relative flex size-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full size-2 bg-emerald-500" />
            </span>
            Available For New Projects &bull; Direct Senior Engineer
          </div>

          <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground">
            <ShieldCheck className="size-4 text-primary" />
            <span>Top Rated Upwork &bull; 100% Job Success</span>
          </div>
        </div>

        {/* Headlines */}
        <div className="space-y-2">
          <h3 className="text-xl sm:text-2xl font-black tracking-tight text-foreground leading-snug">
            {headline}
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl">
            {subheadline}
          </p>
        </div>

        {/* Proof Points */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 py-1">
          <div className="flex items-start gap-2 text-xs sm:text-sm text-foreground/90">
            <CheckCircle2 className="size-4 text-emerald-500 shrink-0 mt-0.5" />
            <span><strong>100k+ Users & $1M+ Revenue</strong>: Proven real-world SaaS monetization</span>
          </div>
          <div className="flex items-start gap-2 text-xs sm:text-sm text-foreground/90">
            <CheckCircle2 className="size-4 text-emerald-500 shrink-0 mt-0.5" />
            <span><strong>Anti-Ban Guarantee</strong>: Humanization++ mouse physics (&lt; 0.01% ban rate)</span>
          </div>
          <div className="flex items-start gap-2 text-xs sm:text-sm text-foreground/90">
            <CheckCircle2 className="size-4 text-emerald-500 shrink-0 mt-0.5" />
            <span><strong>Transparent Upwork Rate</strong>: Tracked {rate} or fixed-price milestones</span>
          </div>
          <div className="flex items-start gap-2 text-xs sm:text-sm text-foreground/90">
            <CheckCircle2 className="size-4 text-emerald-500 shrink-0 mt-0.5" />
            <span><strong>Fast MVP Delivery</strong>: Working prototype in 1–2 weeks with 100% IP ownership</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href="https://www.upwork.com/freelancers/pasindupiumal"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-primary text-primary-foreground font-bold text-sm shadow-lg hover:shadow-primary/25 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <Icons.upwork className="size-4 fill-current" />
            <span>Hire on Upwork ({rate})</span>
            <ArrowUpRight className="size-4" />
          </a>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-border bg-card/80 hover:bg-muted text-foreground font-semibold text-sm transition-all"
          >
            <MessageSquare className="size-4" />
            <span>Get Project Estimate</span>
          </Link>

          <a
            href="mailto:pasindupiumal0123@gmail.com"
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors ml-auto"
          >
            <span>or email directly:</span>
            <span className="font-mono font-medium text-foreground underline underline-offset-4">pasindupiumal0123@gmail.com</span>
          </a>
        </div>
      </div>
    </div>
  );
}
