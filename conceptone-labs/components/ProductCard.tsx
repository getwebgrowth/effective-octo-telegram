import React from "react";
import { ArrowUpRight, ShieldCheck, CheckCircle2, Layers } from "lucide-react";
import { Button } from "@/components/Button";
import { ProductConfig } from "@/lib/site-config";

interface ProductCardProps {
  product: ProductConfig;
  className?: string;
}

export function ProductCard({ product, className = "" }: ProductCardProps) {
  return (
    <div
      className={`group relative flex flex-col justify-between rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8 clean-card shadow-xs ${className}`}
    >
      {/* Top Header */}
      <div>
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
            <span className="text-xs font-mono text-emerald-700 font-medium tracking-wide">
              {product.status} · Commercial Product
            </span>
          </div>
          <span className="rounded-full bg-neutral-100 px-3 py-0.5 text-xs font-mono text-neutral-700 border border-neutral-200">
            {product.type}
          </span>
        </div>

        <div className="flex items-baseline justify-between gap-4">
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950">
            {product.name}
          </h3>
          <span className="text-xs font-mono text-neutral-400 truncate max-w-[180px]">
            {product.url.replace("https://", "").replace("/", "")}
          </span>
        </div>

        <p className="mt-2 text-sm font-medium text-neutral-700">
          {product.tagline}
        </p>

        <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
          {product.description}
        </p>

        {/* Feature Highlights */}
        <div className="mt-6 rounded-2xl border border-neutral-150 bg-neutral-50/80 p-4">
          <p className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-700 mb-3 flex items-center gap-2">
            <Layers className="h-3.5 w-3.5 text-cyan-600" />
            <span>Architecture &amp; Capabilities</span>
          </p>
          <ul className="space-y-2 text-xs text-neutral-700">
            {product.highlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-cyan-600 shrink-0 mt-0.5" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer / Legal Disclosure & Action */}
      <div className="mt-6 pt-5 border-t border-neutral-100 space-y-4">
        {/* Compliance Ownership Box */}
        <div className="flex items-start gap-2.5 rounded-xl border border-neutral-200 bg-neutral-50 p-3 text-xs text-neutral-600 leading-relaxed">
          <ShieldCheck className="h-4 w-4 text-cyan-600 shrink-0 mt-0.5" />
          <p>
            <strong className="text-neutral-900">Ownership Notice: </strong>
            {product.ownershipDisclosure}
          </p>
        </div>

        {/* Action Button */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <Button
            href={product.url}
            isExternal
            variant="primary"
            size="md"
            icon={<ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
            className="w-full sm:w-auto"
          >
            Visit {product.name}
          </Button>

          <span className="text-[11px] font-mono text-neutral-400 text-center sm:text-right">
            Operated by ConceptOne Labs LLC
          </span>
        </div>
      </div>
    </div>
  );
}
