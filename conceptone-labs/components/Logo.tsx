import React from "react";
import Link from "next/link";

interface LogoProps {
  className?: string;
  showSubtitle?: boolean;
}

export function Logo({ className = "", showSubtitle = true }: LogoProps) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 text-neutral-900 transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded-md ${className}`}
      aria-label="ConceptOne Labs Home"
    >
      {/* Minimal clean geometric mark */}
      <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-900 shadow-sm transition-transform duration-200 group-hover:scale-105">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-white"
          aria-hidden="true"
        >
          <path
            d="M7 17.5A6.5 6.5 0 0 1 7 6.5H12"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M15 6V18"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M12.5 8.5L15 6"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </svg>
        <span className="absolute -top-0.5 -right-0.5 h-1.5 w-1.5 rounded-full bg-cyan-500" />
      </div>

      <div className="flex flex-col leading-none">
        <div className="flex items-center gap-1.5">
          <span className="font-semibold tracking-tight text-neutral-950 text-base">
            ConceptOne
          </span>
          <span className="rounded bg-neutral-100 px-1.5 py-0.5 text-[10px] font-mono font-medium tracking-wider text-neutral-700 border border-neutral-200">
            LABS
          </span>
        </div>
        {showSubtitle && (
          <span className="text-[10px] tracking-widest text-neutral-500 uppercase font-mono mt-0.5">
            Engineering &amp; R&amp;D
          </span>
        )}
      </div>
    </Link>
  );
}
