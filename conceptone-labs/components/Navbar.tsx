"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/Button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        scrolled
          ? "border-b border-neutral-200 bg-white/90 backdrop-blur-md shadow-xs"
          : "border-b border-neutral-100 bg-white/80 backdrop-blur-xs"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-1 rounded-full border border-neutral-200 bg-neutral-50/80 px-3 py-1"
          aria-label="Main Navigation"
        >
          {siteConfig.navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative rounded-full px-3.5 py-1 text-xs font-medium transition-colors ${
                  isActive
                    ? "text-neutral-950 bg-white shadow-xs font-semibold"
                    : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100/60"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            href="/contact"
            variant="primary"
            size="sm"
            icon={<ArrowUpRight className="h-3.5 w-3.5" />}
          >
            Start a Project
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900"
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="fixed inset-0 top-16 z-40 flex flex-col bg-white/98 backdrop-blur-xl md:hidden px-6 py-6 border-t border-neutral-200">
          <nav className="flex flex-col gap-2" aria-label="Mobile Navigation">
            {siteConfig.navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-neutral-100 text-neutral-950 font-semibold"
                      : "text-neutral-700 hover:bg-neutral-50 hover:text-black"
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="h-1.5 w-1.5 rounded-full bg-cyan-600" />}
                </Link>
              );
            })}
          </nav>

          <div className="mt-8 pt-6 border-t border-neutral-200 flex flex-col gap-3">
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              className="w-full justify-center"
              icon={<ArrowUpRight className="h-4 w-4" />}
            >
              Start a Project
            </Button>
            <p className="text-center text-xs text-neutral-500 font-mono mt-2">
              ConceptOne Labs LLC · Wyoming, USA
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
