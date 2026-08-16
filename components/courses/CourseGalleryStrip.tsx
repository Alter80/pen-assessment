"use client";

import Image from "next/image";
import { useCarousel } from "@/components/ui/use-carousel";
import { CarouselArrowButton } from "@/components/ui/CarouselArrowButton";
import type { Course } from "@/data/courses";

export function CourseGalleryStrip({ courses }: { courses: Course[] }) {
  const { trackRef, scrollPrev, scrollNext } = useCarousel<HTMLDivElement>();

  if (courses.length === 0) return null;

  return (
    <section className="bg-deep py-24">
      <div className="frame flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="text-[22px] leading-[1.2] font-bold uppercase text-magenta-light">
            Our Gallery
          </p>
          <h2 className="mt-4 text-[48px] leading-[1.17] font-semibold text-text">
            Degree Courses
          </h2>
          <p className="mt-4 max-w-xl text-default text-text/70">
            Join Victoria College of Arts and Design and experience
            exceptional teaching, cutting-edge facilities, and industry
            connections that prepare you for a rewarding creative career.
          </p>
        </div>
        <div className="flex gap-1.25">
          <CarouselArrowButton
            direction="prev"
            onClick={scrollPrev}
            label="Previous image"
            variant="navy"
          />
          <CarouselArrowButton
            direction="next"
            onClick={scrollNext}
            label="Next image"
            variant="accent"
          />
        </div>
      </div>

      <div
        ref={trackRef}
        className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 md:px-10 xl:px-20"
      >
        {courses.map((course) => (
          <div
            key={course.slug}
            className="relative h-64 w-56 shrink-0 snap-start overflow-hidden rounded-card sm:h-72 sm:w-64"
          >
            <Image
              src={course.thumbnail}
              alt={course.title}
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
