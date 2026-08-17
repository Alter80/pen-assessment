"use client";

import Image from "next/image";
import { useCarousel } from "@/components/ui/use-carousel";
import type { Course } from "@/data/courses";

export function CourseGalleryStrip({ courses }: { courses: Course[] }) {
  const { trackRef } = useCarousel<HTMLDivElement>();

  if (courses.length === 0) return null;

  return (
    <section className="min-h-[782px] bg-deep py-[120px]">
      <div className="frame">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="text-[22px] leading-[1.2] font-bold uppercase text-magenta-light">
            / Our Gallery
          </p>
          <h2 className="mt-4 text-[48px] leading-[1.17] font-semibold text-text">
            Degree Courses
          </h2>
          <p className="mx-auto mt-4 max-w-[760px] text-default text-text/70">
            Join Victoria College of Arts and Design and experience
            exceptional teaching, cutting-edge facilities, and industry
            connections that prepare you for a rewarding creative career.
          </p>
        </div>
      </div>

      <div
        ref={trackRef}
        className="mt-12 flex justify-center gap-3 overflow-hidden px-4"
      >
        {Array.from({ length: 6 }, (_, index) => (
          <div
            key={index}
            className="relative h-[284px] w-[256px] shrink-0 overflow-hidden rounded-[10px]"
          >
            <Image
              src={`/images/courses-slider/courses-slider${(index % 5) + 1}.jpg`}
              alt="Course gallery image"
              fill
              sizes="256px"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
