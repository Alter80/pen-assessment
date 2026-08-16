"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { sections } from "./sections";

export function SectionTabsNav() {
  const [active, setActive] = useState<string>(sections[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    const elements = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="sticky top-24 z-30 flex justify-center py-6">
      <nav className="flex flex-wrap justify-center gap-1 rounded-pill border border-border/50 bg-navy/95 p-2 backdrop-blur">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={cn(
              "rounded-pill px-6 py-3 text-default font-medium transition-colors",
              active === section.id
                ? "text-pink"
                : "text-text/70 hover:text-white"
            )}
          >
            / {section.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
