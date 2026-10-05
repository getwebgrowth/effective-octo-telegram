import React from "react";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

interface ServiceCardProps {
  id: string;
  title: string;
  badge?: string;
  description: string;
  deliverables: string[];
  technologies: string[];
  showLink?: boolean;
}

export function ServiceCard({
  id,
  title,
  badge,
  description,
  deliverables,
  technologies,
  showLink = true,
}: ServiceCardProps) {
  return (
    <div
      id={id}
      className="group relative flex flex-col justify-between rounded-3xl border border-neutral-200 bg-white p-6 sm:p-7 clean-card shadow-xs"
    >
      <div>
        <div className="flex items-center justify-between gap-3 mb-4">
          {badge && (
            <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-[11px] font-mono font-medium text-neutral-800 border border-neutral-200">
              {badge}
            </span>
          )}
          <span className="text-[11px] font-mono text-neutral-400">
            {id.toUpperCase().replace("-", " ")}
          </span>
        </div>

        <h3 className="text-xl font-bold text-neutral-900 tracking-tight">
          {title}
        </h3>

        <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
          {description}
        </p>

        {/* Deliverables */}
        <div className="mt-5 space-y-2 border-t border-neutral-100 pt-5">
          <p className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-700 mb-2">
            Scope &amp; Deliverables:
          </p>
          <ul className="space-y-1.5 text-xs text-neutral-600">
            {deliverables.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <Check className="h-3.5 w-3.5 text-cyan-600 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 pt-5 border-t border-neutral-100">
        <div className="flex flex-wrap gap-1.5 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-neutral-100 px-2 py-0.5 text-[11px] font-mono text-neutral-700 border border-neutral-200"
            >
              {tech}
            </span>
          ))}
        </div>

        {showLink && (
          <Link
            href={`/contact?service=${encodeURIComponent(title)}`}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-cyan-700 hover:text-cyan-900 transition-colors group/link"
          >
            <span>Inquire about this capability</span>
            <ArrowRight className="h-3.5 w-3.5 group-hover/link:translate-x-1 transition-transform" />
          </Link>
        )}
      </div>
    </div>
  );
}
