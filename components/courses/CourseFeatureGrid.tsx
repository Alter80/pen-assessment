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

function ImageCard({
  course,
  priority,
  imageSrc,
}: {
  course: Course;
  priority?: boolean;
  imageSrc?: string;
}) {
  return (
    <Link
      href={`/courses/${course.slug}`}
      className="group relative block h-full min-h-70 overflow-hidden rounded-[20px]"
    >
      <Image
        src={imageSrc ?? course.thumbnail}
        alt={course.title}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 434px, 100vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-linear-to-t from-base via-base/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5 pb-10 pr-24 lg:p-[39px] lg:pb-[57px]">
        <h3 className="text-[20px] leading-7 font-semibold text-white">
          {course.title}
        </h3>
        <p className="mt-2 line-clamp-3 text-[12px] leading-5 text-text/80">
          {course.summary}
        </p>
      </div>
      <span className="absolute right-0 bottom-0 flex h-[78px] w-[78px] items-center justify-center rounded-full border border-[#384584] bg-[#051251]/95 text-white transition-colors group-hover:bg-card-alt">
        <ArrowRight className="h-6 w-6" />
      </span>
    </Link>
  );
}

function ExpandedCard({ course, imageSrc }: { course: Course; imageSrc?: string }) {
  return (
    <Link
      href={`/courses/${course.slug}`}
      className="group relative flex h-full min-h-70 flex-col overflow-hidden rounded-[20px] bg-card"
    >
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={imageSrc ?? course.thumbnail}
          alt={course.title}
          fill
          sizes="(min-width: 1024px) 411px, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#030A2E] via-[#030A2E]/75 to-transparent" />
      </div>
      <div className="relative mt-auto flex min-h-[300px] flex-col justify-end gap-[10px] bg-[#030A2E]/75 p-5 lg:p-[57px_39px]">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-chip bg-navy px-3 py-1 text-[9px] leading-3 font-semibold uppercase tracking-wide text-sky">
            {course.school}
          </span>
          <span className="rounded-chip bg-navy px-3 py-1 text-[9px] leading-3 font-semibold uppercase tracking-wide text-sky">
            {course.durationBadge}
          </span>
        </div>
        <h3 className="mt-4 text-[20px] leading-7 font-semibold text-white">
          {course.title}
        </h3>
        <p className="mt-2 flex-1 text-[12px] leading-5 text-text/80">
          {course.summary}
        </p>
        <p className="mt-4 pr-20 text-[12px] leading-5">
          <span className="font-semibold text-white">School: </span>
          <span className="text-text/70">{course.school}</span>
        </p>
      </div>
      <span className="absolute right-0 bottom-0 flex h-[78px] w-[78px] items-center justify-center rounded-full bg-plum text-white">
        <ArrowRight className="h-6 w-6" />
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
          <div key={groupIndex} className="flex flex-col gap-6 lg:h-[720px] lg:flex-row lg:gap-3">
            <div className="h-[520px] lg:h-[720px] lg:w-[434px] lg:shrink-0">
              <ImageCard key={`${groupIndex}-0`} course={group[0]} priority={groupIndex === 0} imageSrc="/images/courses-cards/degree-courses-card1.png" />
            </div>
            <div className="flex flex-col gap-6 lg:h-[720px] lg:w-[411px] lg:shrink-0">
              <div key={`${groupIndex}-1`} className="h-[348px] lg:h-[348px]"><ImageCard course={group[1]} imageSrc="/images/courses-cards/degree-courses-card2.png" /></div>
              <div key={`${groupIndex}-2`} className="h-[348px] lg:h-[348px]"><ImageCard course={group[2]} imageSrc="/images/courses-cards/degree-courses-card3.png" /></div>
            </div>
            <div className="h-[520px] lg:h-[720px] lg:w-[411px] lg:shrink-0">
              <ExpandedCard key={`${groupIndex}-3`} course={group[3]} imageSrc="/images/courses-cards/degree-courses-card4.png" />
            </div>
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
