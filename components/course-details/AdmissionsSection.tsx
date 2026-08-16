"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Course, RichContent } from "@/data/courses";
import { RichContentBlocks } from "./RichContentBlocks";

type TabKey = "entry" | "english" | "additional";

const TABS: { key: TabKey; label: string; panelHeading?: string }[] = [
  { key: "entry", label: "Entry Requirements", panelHeading: "Standard Academic Route" },
  { key: "english", label: "English Language Requirements" },
  { key: "additional", label: "Additional Info" },
];

function AccordionRow({
  title,
  content,
}: {
  title: string;
  content: RichContent;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-t border-border/40 first:border-t-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 py-6 text-left"
        aria-expanded={open}
      >
        <span className="text-card-title font-semibold text-white">
          {title}
        </span>
        {open ? (
          <Minus className="h-5 w-5 shrink-0 text-white" />
        ) : (
          <Plus className="h-5 w-5 shrink-0 text-white" />
        )}
      </button>
      {open && <div className="pb-6">
        <RichContentBlocks content={content} />
      </div>}
    </div>
  );
}

export function AdmissionsSection({ course }: { course: Course }) {
  const [activeTab, setActiveTab] = useState<TabKey>("entry");
  const activeContent: RichContent =
    activeTab === "entry"
      ? course.admissions.entryRequirements
      : activeTab === "english"
      ? course.admissions.englishLanguageRequirements
      : course.admissions.additionalInfo;
  const activeMeta = TABS.find((t) => t.key === activeTab)!;

  return (
    <div>
      <div className="text-center">
        <h2 className="text-[48px] leading-[1.17] font-semibold text-text">
          Admissions &amp; Key Details
        </h2>
        <p className="mt-4 text-default text-text/70">
          Everything you need to know about applying and studying
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[280px_1fr]">
        <div className="flex flex-row gap-2 overflow-x-auto lg:flex-col lg:overflow-visible">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveTab(tab.key)}
              className={cn(
                "shrink-0 rounded-card px-6 py-4 text-left text-default font-medium transition-colors lg:shrink",
                activeTab === tab.key
                  ? "bg-plum text-white"
                  : "bg-card text-text/80 hover:text-white"
              )}
            >
              / {tab.label}
            </button>
          ))}
        </div>

        <div className="rounded-card border border-border/50">
          {activeMeta.panelHeading && (
            <div className="flex items-center justify-between border-b border-border/40 px-8 py-5">
              <p className="text-card-title font-semibold text-white">
                {activeMeta.panelHeading}
              </p>
              <Minus className="h-5 w-5 text-white/60" />
            </div>
          )}
          <div className="p-8">
            <RichContentBlocks content={activeContent} />
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-card border border-border/50 px-8">
        <AccordionRow
          title="Non-standard Academic Route"
          content={course.nonStandardRoute}
        />
        <AccordionRow
          title="Documents Required"
          content={course.documentsRequired}
        />
        <AccordionRow
          title="Additional Info"
          content={course.admissions.additionalInfo}
        />
      </div>
    </div>
  );
}
