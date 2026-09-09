import { Users, DollarSign, Zap, ShieldCheck } from "lucide-react";

interface MetricItem {
  value: string;
  label: string;
  sublabel: string;
  icon?: string;
}

interface ProjectMetricsBannerProps {
  metrics?: MetricItem[];
}

export function ProjectMetricsBanner({
  metrics = [
    {
      value: "100k+",
      label: "Active Users Scaled",
      sublabel: "Chrome Extension + Web App",
      icon: "users",
    },
    {
      value: "$1M+",
      label: "Software Revenue",
      sublabel: "Monetized SaaS Subscriptions",
      icon: "dollar",
    },
    {
      value: "< 250ms",
      label: "Buy Execution",
      sublabel: "Raw WebSocket packet interception",
      icon: "zap",
    },
    {
      value: "< 0.01%",
      label: "Account Ban Rate",
      sublabel: "Humanization++ anti-bot physics",
      icon: "shield",
    },
  ],
}: ProjectMetricsBannerProps) {
  const getIcon = (iconName?: string) => {
    switch (iconName) {
      case "users":
        return <Users className="size-5 text-blue-500" />;
      case "dollar":
        return <DollarSign className="size-5 text-emerald-500" />;
      case "zap":
        return <Zap className="size-5 text-amber-500" />;
      case "shield":
      default:
        return <ShieldCheck className="size-5 text-emerald-500" />;
    }
  };

  return (
    <div className="not-prose my-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        {metrics.map((item, idx) => (
          <div
            key={idx}
            className="relative overflow-hidden rounded-xl border border-border/80 bg-card/60 p-4 sm:p-5 flex flex-col justify-between shadow-xs hover:border-primary/40 hover:shadow-md transition-all group"
          >
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="p-2 rounded-lg bg-muted/60 text-foreground group-hover:scale-110 transition-transform">
                {getIcon(item.icon)}
              </span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                Verified
              </span>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-black tracking-tight text-foreground group-hover:text-primary transition-colors">
                {item.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-foreground/90 mt-1">
                {item.label}
              </div>
              <div className="text-[11px] text-muted-foreground mt-0.5 leading-tight">
                {item.sublabel}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
