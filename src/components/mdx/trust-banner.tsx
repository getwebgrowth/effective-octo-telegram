import Link from "next/link";
import { ArrowUpRight, ShieldCheck, Star } from "lucide-react";
import { Icons } from "@/components/icons";

interface TrustBannerProps {
  platform?: "fiverr" | "upwork" | "both";
  rating?: string;
  orderText?: string;
}

export function TrustBanner({
  rating = "5.0",
  orderText = "Delivered on-time with clean, scalable code and comprehensive documentation.",
}: TrustBannerProps) {
  return (
    <div className="not-prose my-6 relative overflow-hidden rounded-2xl border border-emerald-500/40 bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-transparent dark:from-emerald-500/15 dark:via-emerald-500/8 shadow-md">
      {/* Subtle glow top-right */}
      <div className="absolute -top-8 -right-8 w-32 h-32 bg-emerald-400/20 rounded-full blur-2xl pointer-events-none" />

      <div className="relative p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2.5">
            <span className="relative flex size-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full size-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs sm:text-sm font-bold text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
              <ShieldCheck className="size-4" />
              Verified Client Deliverable
            </span>
            <span className="inline-flex items-center gap-0.5 text-xs font-bold text-amber-600 dark:text-amber-400">
              <Star className="size-3 fill-current" />
              <Star className="size-3 fill-current" />
              <Star className="size-3 fill-current" />
              <Star className="size-3 fill-current" />
              <Star className="size-3 fill-current" />
              <span className="ml-0.5">{rating}</span>
            </span>
          </div>
          <p className="text-xs sm:text-sm text-foreground/75 dark:text-muted-foreground leading-relaxed max-w-sm">
            {orderText}
          </p>
        </div>

        <div className="flex items-center gap-2.5 shrink-0">
          <a
            href="https://www.fiverr.com/pasinduxyz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 dark:bg-emerald-600 dark:hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all hover:shadow-lg hover:-translate-y-px"
          >
            <Icons.fiverr className="size-3.5 fill-current" />
            <span>Order on Fiverr</span>
            <ArrowUpRight className="size-3.5" />
          </a>

          <a
            href="https://www.upwork.com/freelancers/pasindupiumal"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl border-2 border-border bg-background hover:bg-muted text-foreground font-bold text-xs transition-all hover:border-primary/30"
          >
            <Icons.upwork className="size-3.5 fill-current" />
            <span>Hire ($20/hr)</span>
          </a>
        </div>
      </div>
    </div>
  );
}
