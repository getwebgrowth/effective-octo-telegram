import { Check } from "lucide-react";

interface ClientFeatureCardProps {
  number?: string;
  title: string;
  businessBenefit: string;
  description: string;
  tag?: string;
}

export function ClientFeatureCard({
  number = "01",
  title,
  businessBenefit,
  description,
  tag,
}: ClientFeatureCardProps) {
  return (
    <div className="not-prose rounded-xl border border-border/70 bg-card/40 hover:bg-card/90 p-5 shadow-xs hover:border-primary/40 hover:shadow-md transition-all flex flex-col justify-between">
      <div className="space-y-2.5">
        <div className="flex items-center justify-between gap-2">
          <span className="font-mono text-xs font-bold text-primary px-2 py-0.5 rounded-md bg-primary/10 border border-primary/20">
            {number}
          </span>
          {tag && (
            <span className="text-[10px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
              {tag}
            </span>
          )}
        </div>

        <h4 className="text-base font-bold text-foreground tracking-tight">
          {title}
        </h4>

        <p className="text-xs text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>

      <div className="mt-4 pt-3 border-t border-border/50 flex items-start gap-1.5 text-xs font-medium text-emerald-800 dark:text-emerald-300">
        <Check className="size-3.5 shrink-0 mt-0.5 text-emerald-500" />
        <span><strong>Client ROI:</strong> {businessBenefit}</span>
      </div>
    </div>
  );
}

export function ClientFeatureGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="not-prose my-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
      {children}
    </div>
  );
}
