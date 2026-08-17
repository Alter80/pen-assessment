"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronRight, X } from "lucide-react";
import { LogoLockup } from "./Logo";
import { cn } from "@/lib/utils";

const simpleNavItems = [
  { label: "About VCAD", href: "#", hasDropdown: false },
  { label: "Courses", href: "/courses", hasDropdown: false },
  { label: "Contact Us", href: "#", hasDropdown: false },
];

const fullNavItems = [
  { label: "About VCAD", href: "#", hasDropdown: true },
  { label: "Courses", href: "/courses", hasDropdown: false },
  { label: "Campuses", href: "#", hasDropdown: false },
  { label: "VCAD Life", href: "#", hasDropdown: true },
];

function HamburgerIcon() {
  return (
    <span className="flex w-8 flex-col gap-1">
      <span className="h-0.75 w-full bg-text" />
      <span className="h-0.75 w-full bg-text" />
      <span className="h-0.75 w-full bg-text" />
    </span>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomepage = pathname === "/";
  const navItems = isHomepage ? simpleNavItems : fullNavItems;

  return (
    <header className="relative z-50 bg-card-alt bg-[repeating-linear-gradient(90deg,transparent_0,transparent_319px,rgba(56,69,132,0.28)_320px,transparent_321px)]">
      <div className="frame flex h-25 items-center justify-between">
        <Link href="/" className="shrink-0">
          <LogoLockup />
        </Link>

        <div className="flex items-center justify-end gap-15.75 lg:w-[800px] lg:justify-end">
          <nav className="hidden items-center gap-13.75 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center gap-1 whitespace-nowrap text-[16px] leading-6 font-medium uppercase text-text transition-colors hover:text-white"
              >
                {!isHomepage && <span className="text-pink">/</span>}
                {item.label}
                {item.hasDropdown && <ChevronRight className="h-4 w-4" />}
              </Link>
            ))}
          </nav>

          {!isHomepage && (
            <Link
              href="#"
              className="hidden shrink-0 items-center gap-2 whitespace-nowrap border-2 border-white bg-navy px-6 py-3 text-[16px] leading-6 font-medium text-white transition-colors hover:bg-card-alt lg:inline-flex"
            >
              Apply Now
              <ArrowRight className="h-4 w-4" />
            </Link>
          )}

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className={cn(
              "inline-flex h-8 w-8 items-center justify-center text-text",
              !isHomepage && "lg:hidden",
            )}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="h-7 w-7" /> : <HamburgerIcon />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-border/40 bg-card-alt transition-[max-height] duration-300",
          isHomepage ? "" : "lg:hidden",
          menuOpen ? "max-h-96" : "max-h-0",
        )}
      >
        <nav className="frame flex flex-col gap-5 py-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 text-lead font-medium uppercase text-text"
            >
              {!isHomepage && <span className="text-pink">/</span>}
              {item.label}
            </Link>
          ))}
          {!isHomepage && (
            <Link
              href="#"
              onClick={() => setMenuOpen(false)}
              className="inline-flex w-fit items-center gap-2 rounded-btn border-2 border-white bg-navy px-6 py-3 text-default font-medium text-white"
            >
              Apply Now
              <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
