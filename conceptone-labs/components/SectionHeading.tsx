import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  children?: React.ReactNode;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
  children,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`flex flex-col ${
        isCenter ? "items-center text-center mx-auto max-w-2xl" : "items-start text-left max-w-2xl"
      } ${className}`}
    >
      {eyebrow && (
        <div className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-neutral-100 px-3 py-1 text-xs font-mono font-medium text-neutral-800 mb-4">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-600" />
          <span>{eyebrow}</span>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base text-neutral-600 leading-relaxed max-w-xl">
          {description}
        </p>
      )}
      {children && <div className="mt-6">{children}</div>}
    </div>
  );
}
