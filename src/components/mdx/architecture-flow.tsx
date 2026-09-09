interface FlowStep {
  title: string;
  items: string[];
  color?: "blue" | "emerald" | "amber" | "purple" | "zinc";
}

interface ArchitectureFlowProps {
  title?: string;
  steps: FlowStep[];
  direction?: "vertical" | "horizontal";
}

const colorMap: Record<string, { border: string; bg: string; title: string; dot: string; badge: string }> = {
  blue: {
    border: "border-blue-500/30",
    bg: "bg-blue-500/8 dark:bg-blue-500/12",
    title: "text-blue-700 dark:text-blue-300",
    dot: "bg-blue-500",
    badge: "bg-blue-500/15 text-blue-800 dark:text-blue-200",
  },
  emerald: {
    border: "border-emerald-500/30",
    bg: "bg-emerald-500/8 dark:bg-emerald-500/12",
    title: "text-emerald-700 dark:text-emerald-300",
    dot: "bg-emerald-500",
    badge: "bg-emerald-500/15 text-emerald-800 dark:text-emerald-200",
  },
  amber: {
    border: "border-amber-500/30",
    bg: "bg-amber-500/8 dark:bg-amber-500/12",
    title: "text-amber-700 dark:text-amber-300",
    dot: "bg-amber-500",
    badge: "bg-amber-500/15 text-amber-800 dark:text-amber-200",
  },
  purple: {
    border: "border-purple-500/30",
    bg: "bg-purple-500/8 dark:bg-purple-500/12",
    title: "text-purple-700 dark:text-purple-300",
    dot: "bg-purple-500",
    badge: "bg-purple-500/15 text-purple-800 dark:text-purple-200",
  },
  zinc: {
    border: "border-zinc-500/30",
    bg: "bg-zinc-500/8 dark:bg-zinc-500/12",
    title: "text-zinc-700 dark:text-zinc-300",
    dot: "bg-zinc-500",
    badge: "bg-zinc-500/15 text-zinc-800 dark:text-zinc-200",
  },
};

// Aliases for alternate names
colorMap.violet = colorMap.purple;
colorMap.green = colorMap.emerald;
colorMap.yellow = colorMap.amber;
colorMap.orange = colorMap.amber;
colorMap.cyan = colorMap.blue;
colorMap.sky = colorMap.blue;
colorMap.indigo = colorMap.blue;
colorMap.gray = colorMap.zinc;
colorMap.grey = colorMap.zinc;

const defaultColors = ["blue", "emerald", "amber", "purple", "zinc"];

export function ArchitectureFlow({ title, steps, direction = "vertical" }: ArchitectureFlowProps) {
  return (
    <div className="not-prose my-8 space-y-3">
      {title && (
        <div className="flex items-center gap-2 mb-5">
          <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            System Architecture
          </span>
          <div className="flex-1 h-px bg-border" />
          <span className="text-xs text-muted-foreground font-mono bg-muted/60 px-2 py-0.5 rounded">
            {steps?.length || 0} layers
          </span>
        </div>
      )}

      <div className={`flex ${direction === "horizontal" ? "flex-row items-start" : "flex-col"} gap-0`}>
        {(steps || []).map((step, idx) => {
          const rawColor = (step.color || "").toLowerCase().trim();
          const c = colorMap[rawColor] ?? colorMap[defaultColors[idx % defaultColors.length]] ?? colorMap.blue;
          const isLast = idx === steps.length - 1;

          return (
            <div key={idx} className="flex flex-col items-stretch">
              {/* The card */}
              <div
                className={`rounded-xl border ${c.border} ${c.bg} p-4 shadow-xs transition-all hover:shadow-sm`}
              >
                <div className="flex items-center gap-2 mb-2.5">
                  <span
                    className={`size-5 rounded-md flex items-center justify-center text-[10px] font-black text-white ${c.dot}`}
                  >
                    {idx + 1}
                  </span>
                  <span className={`text-xs sm:text-sm font-bold ${c.title}`}>
                    {step.title}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {step.items.map((item, i) => (
                    <span
                      key={i}
                      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-medium ${c.badge}`}
                    >
                      <span className={`size-1 rounded-full ${c.dot} opacity-60`} />
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Connector arrow */}
              {!isLast && (
                <div className="flex flex-col items-center py-1.5">
                  <div className="w-px h-4 bg-border" />
                  <svg
                    width="12"
                    height="7"
                    viewBox="0 0 12 7"
                    className="text-muted-foreground/60"
                    fill="currentColor"
                  >
                    <path d="M6 7L0 0h12L6 7z" />
                  </svg>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
