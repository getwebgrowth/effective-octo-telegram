import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  isExternal,
  children,
  icon,
  iconPosition = "right",
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none select-none cursor-pointer";

  const sizeStyles = {
    sm: "text-xs px-3 py-1.5 gap-1.5",
    md: "text-sm px-4 py-2.5 gap-2",
    lg: "text-base px-6 py-3.5 gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-neutral-900 text-white font-semibold hover:bg-neutral-800 shadow-sm border border-neutral-900",
    secondary:
      "bg-white text-neutral-900 hover:bg-neutral-50 hover:text-black border border-neutral-200 shadow-sm",
    outline:
      "bg-transparent text-neutral-700 hover:text-black border border-neutral-300 hover:border-neutral-400 hover:bg-neutral-50",
    ghost:
      "bg-transparent text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100",
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedStyles}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedStyles}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedStyles} disabled={disabled} {...props}>
      {content}
    </button>
  );
}
