import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Course } from "@/data/courses";
import { CoursesEmptyState } from "./CoursesEmptyState";

function chunk<T>(items: T[], size: number): T[][] {
  const groups: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    groups.push(items.slice(i, i + size));
  }
  return groups;
}

const SLOT_CLASSES = [
  "sm:col-start-1 sm:row-start-1 sm:row-span-2",
  "sm:col-start-2 sm:row-start-1",
  "sm:col-start-2 sm:row-start-2",
  "sm:col-start-3 sm:row-start-1 sm:row-span-2",
];

function ImageCard({
  course,
  priority,
}: {
  course: Course;
  priority?: boolean;
}) {
  return (
    <Link
      href={`/courses/${course.slug}`}
      className="group relative block h-full min-h-70 overflow-hidden rounded-card"
    >
      <Image
        src={course.thumbnail}
        alt={course.title}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 33vw, 100vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-linear-to-t from-base via-base/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6 pr-24">
        <h3 className="text-card-title font-semibold text-white">
          {course.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-default text-text/75">
          {course.summary}
        </p>
      </div>
      <span className="absolute bottom-6 right-6 flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-navy/90 text-white transition-colors group-hover:bg-card-alt">
        <ArrowRight className="h-5 w-5" />
      </span>
    </Link>
  );
}

function ExpandedCard({ course }: { course: Course }) {
  return (
    <Link
      href={`/courses/${course.slug}`}
      className="group relative flex h-full min-h-70 flex-col overflow-hidden rounded-card border border-border/60 bg-card"
    >
      <div className="relative h-40 shrink-0 overflow-hidden sm:h-48">
        <Image
          src={course.thumbnail}
          alt={course.title}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-chip bg-navy px-3 py-1 text-meta font-semibold uppercase tracking-wide text-sky">
            {course.school}
          </span>
          <span className="rounded-chip bg-navy px-3 py-1 text-meta font-semibold uppercase tracking-wide text-sky">
            {course.durationBadge}
          </span>
        </div>
        <h3 className="mt-4 text-card-title font-semibold text-white">
          {course.title}
        </h3>
        <p className="mt-2 flex-1 text-default text-text/75">
          {course.summary}
        </p>
        <p className="mt-4 pr-20 text-default">
          <span className="font-semibold text-white">School: </span>
          <span className="text-text/70">{course.school}</span>
        </p>
      </div>
      <span className="absolute bottom-6 right-6 flex h-14 w-14 items-center justify-center rounded-full bg-plum text-white">
        <ArrowRight className="h-5 w-5" />
      </span>
    </Link>
  );
}

export function CourseFeatureGrid({ courses }: { courses: Course[] }) {
  if (courses.length === 0) {
    return <CoursesEmptyState />;
  }

  const groups = chunk(courses, 4);

  return (
    <div className="flex flex-col gap-6">
      {groups.map((group, groupIndex) =>
        group.length === 4 ? (
          <div
            key={groupIndex}
            className="grid grid-cols-1 gap-6 sm:auto-rows-47.5 sm:grid-cols-3 lg:auto-rows-52.5"
          >
            {group.map((course, i) =>
              i === 3 ? (
                <div key={course.slug} className={SLOT_CLASSES[i]}>
                  <ExpandedCard course={course} />
                </div>
              ) : (
                <div key={course.slug} className={SLOT_CLASSES[i]}>
                  <ImageCard course={course} priority={groupIndex === 0 && i === 0} />
                </div>
              )
            )}
          </div>
        ) : (
          <div
            key={groupIndex}
            className="grid grid-cols-1 gap-6 sm:grid-cols-3"
          >
            {group.map((course, i) =>
              i === group.length - 1 ? (
                <ExpandedCard key={course.slug} course={course} />
              ) : (
                <ImageCard key={course.slug} course={course} />
              )
            )}
          </div>
        )
      )}
    </div>
  );
}
