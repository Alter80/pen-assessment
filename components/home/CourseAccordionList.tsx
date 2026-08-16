"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Course } from "@/data/courses";

export function CourseAccordionList({ courses }: { courses: Course[] }) {
  const [openSlug, setOpenSlug] = useState<string | undefined>(
    courses[0]?.slug,
  );
  const featured = courses.slice(0, 4);

  return (
    <section className="frame py-20">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="text-[22px] leading-[1.2] font-bold uppercase text-magenta-light">
            Our courses
          </p>
          <h2 className="mt-4 text-[47px] leading-[1.2] font-semibold text-text">
            Explore our creative courses
          </h2>
        </div>
        <Link
          href="/courses"
          className="box-border inline-flex h-14 w-47.5 shrink-0 items-center justify-between border border-text bg-card p-4"
        >
          <span className="text-default leading-5.5 font-medium text-text">
            View Courses
          </span>
          <ArrowRight className="h-6 w-6 text-text" />
        </Link>
      </div>

      <div className="mt-12 grid gap-x-22.75 gap-y-10 lg:grid-cols-2 lg:items-start">
        <ul>
          {featured.map((course) => {
            const isOpen = openSlug === course.slug;
            return (
              <li key={course.slug} className="border-b border-white">
                <button
                  type="button"
                  onClick={() => setOpenSlug(isOpen ? undefined : course.slug)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-2xl leading-[1.2] font-semibold text-text">
                    {course.title}
                  </span>
                </button>
                <div
                  className={cn(
                    "grid overflow-hidden transition-[grid-template-rows] duration-300",
                    isOpen ? "grid-rows-[1fr] pb-4" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="min-h-0">
                    <div className="flex items-start gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center">
                        <ArrowRight className="h-9 w-9 stroke-2 text-magenta" />
                      </span>
                      <p className="text-lg leading-[1.6] text-text">
                        {course.summary}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="relative aspect-558/476 overflow-hidden rounded-[13px]">
          <Image
            src="/images/lecture-hall.png"
            alt="A VCAD lecturer presenting to a class"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
