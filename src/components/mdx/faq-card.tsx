import { ChevronDown } from "lucide-react";

interface FaqCardProps {
  question: string;
  answer: string;
}

export function FaqCard({ question, answer }: FaqCardProps) {
  return (
    <details className="not-prose group my-3 rounded-xl border border-border/80 bg-card dark:bg-card/60 shadow-xs hover:border-primary/40 hover:shadow-sm transition-all duration-200 open:border-primary/30 open:shadow-sm open:bg-primary/[0.02] dark:open:bg-primary/[0.04]">
      <summary className="flex cursor-pointer select-none items-start gap-3 p-4 sm:p-5 list-none [&::-webkit-details-marker]:hidden">
        <span className="shrink-0 mt-0.5 size-6 rounded-lg bg-primary text-primary-foreground font-black text-[11px] flex items-center justify-center shadow-sm">
          Q
        </span>
        <h3 className="flex-1 text-sm sm:text-base font-bold text-foreground tracking-tight leading-snug pr-2">
          {question}
        </h3>
        <ChevronDown className="shrink-0 size-4 text-muted-foreground mt-0.5 transition-transform duration-200 group-open:rotate-180" />
      </summary>
      <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0">
        <div className="ml-9 pl-3 border-l-2 border-primary/30">
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </details>
  );
}
