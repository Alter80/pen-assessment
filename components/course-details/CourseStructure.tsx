"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { YEAR_LABELS, type Course, type YearKey } from "@/data/courses";

export function CourseStructure({ course }: { course: Course }) {
  const availableYears = (Object.keys(YEAR_LABELS) as YearKey[]).filter(
    (year) => course.structure[year]?.length
  );
  const [activeYear, setActiveYear] = useState<YearKey>(availableYears[0]);
  const modules = course.structure[activeYear] ?? [];
  const [openCode, setOpenCode] = useState<string | undefined>(modules[0]?.code);

  function selectYear(year: YearKey) {
    setActiveYear(year);
    setOpenCode(course.structure[year]?.[0]?.code);
  }

  return (
    <div>
      <div className="text-center">
        <h2 className="text-[48px] leading-[1.17] font-semibold text-text">
          Course Structure &amp; Details
        </h2>
        <p className="mt-4 text-default text-text/70">
          Explore the modules for each year and find key admissions
          information.
        </p>
      </div>

      <div className="mx-auto mt-10 flex w-fit flex-wrap justify-center gap-2 rounded-pill border border-border/50 bg-navy p-2">
        {availableYears.map((year) => (
          <button
            key={year}
            type="button"
            onClick={() => selectYear(year)}
            className={cn(
              "rounded-pill px-5 py-2.5 text-default font-medium transition-colors",
              activeYear === year
                ? "bg-plum text-white"
                : "text-text/80 hover:text-white"
            )}
          >
            / {YEAR_LABELS[year]}
          </button>
        ))}
      </div>

      <div className="mt-10 rounded-card border border-border/50 p-8">
        <p className="text-default text-text/60">Modules may include</p>
        <p className="mt-1 text-sub-heading font-bold text-white">
          Core Modules
        </p>

        <ul className="mt-8">
          {modules.map((module, i) => {
            const isOpen = openCode === module.code;
            return (
              <li key={module.code} className="border-t border-border/40 py-6 first:border-t-0">
                <button
                  type="button"
                  onClick={() => setOpenCode(isOpen ? undefined : module.code)}
                  className="flex w-full items-center justify-between gap-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-baseline gap-6">
                    <span className="text-default font-bold text-white/70">
                      /{String(i + 1).padStart(2, "0")}/
                    </span>
                    <span className="text-card-title font-semibold text-white">
                      {module.title}{" "}
                      <span className="text-default font-normal text-text/60">
                        [ {module.code} • {module.credits} credits ]
                      </span>
                    </span>
                  </span>
                  <span
                    className={cn(
                      "flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white",
                      isOpen
                        ? "bg-plum"
                        : "bg-navy"
                    )}
                  >
                    {isOpen ? (
                      <ChevronDown className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )}
                  </span>
                </button>
                {isOpen && (
                  <p className="mt-4 max-w-3xl text-default text-text/75">
                    {module.description}
                  </p>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
