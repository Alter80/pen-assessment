"use client";

import Image from "next/image";
import { useCarousel } from "@/components/ui/use-carousel";
import { CarouselArrowButton } from "@/components/ui/CarouselArrowButton";
import type { Testimonial } from "@/data/content";

export function TestimonialCarousel({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  const { trackRef, scrollPrev, scrollNext } = useCarousel<HTMLDivElement>();

  return (
    <section className="frame py-24">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="text-[22px] leading-[1.2] font-bold uppercase text-magenta-light">
            Students Testimonial
          </p>
          <h2 className="mt-4 text-[48px] leading-[1.17] font-semibold text-text">
            Our students sharing their thoughts
          </h2>
        </div>
        <div className="flex gap-1.25">
          <CarouselArrowButton
            direction="prev"
            onClick={scrollPrev}
            label="Previous testimonial"
            variant="navy"
          />
          <CarouselArrowButton
            direction="next"
            onClick={scrollNext}
            label="Next testimonial"
            variant="accent"
          />
        </div>
      </div>

      <div
        ref={trackRef}
        className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto"
      >
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="flex w-full shrink-0 snap-start flex-col sm:flex-row"
          >
            <div className="relative h-64 w-full shrink-0 sm:h-107.75 sm:w-102.75">
              <Image
                src={t.image}
                alt={t.name}
                fill
                sizes="411px"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center gap-10.5 border border-[#D9D9D9] p-7.75">
              <span aria-hidden className="text-5xl font-serif text-white/20">
                &ldquo;
              </span>
              <p className="text-[22px] leading-normal text-white">
                {t.quote}
              </p>
              <div className="flex flex-col gap-2">
                <p className="text-[22px] leading-normal font-medium text-white">
                  {t.name}
                </p>
                <p className="text-lg leading-normal text-white">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
