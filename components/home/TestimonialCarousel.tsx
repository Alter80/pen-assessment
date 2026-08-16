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
    <section className="frame relative min-h-[850px] overflow-hidden py-20 lg:py-[120px]">
      <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent_0,transparent_319px,rgba(56,69,132,0.28)_320px,transparent_321px)]" />
      <div className="relative z-10 flex flex-nowrap items-center justify-between gap-6">
        <div className="w-[832px] shrink-0">
          <p className="text-[22px] leading-[1.2] font-bold uppercase text-magenta-light">
            Students Testimonial
          </p>
          <h2 className="mt-[21px] whitespace-nowrap text-[48px] leading-[56px] font-semibold text-text">
            Our students sharing their thoughts
          </h2>
        </div>
        <div className="flex w-[161px] shrink-0 gap-[5px]">
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
        className="no-scrollbar relative z-10 mt-[76px] flex snap-x snap-mandatory gap-6 overflow-x-auto"
      >
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="flex h-auto w-full shrink-0 snap-start flex-col gap-6 sm:h-[431px] sm:flex-row"
          >
            <div className="relative h-64 w-full shrink-0 sm:h-[431px] sm:w-[411px]">
              <Image
                src={t.image}
                alt={t.name}
                fill
                sizes="411px"
                className="object-cover"
              />
            </div>
            <div className="flex min-w-0 flex-1 flex-col justify-center gap-[42px] border border-[#D9D9D9] p-[31px] sm:h-[431px] sm:w-[838px] sm:flex-none">
              <span aria-hidden className="font-sans text-[67px] leading-[51px] font-bold text-white/20">
                &ldquo;
              </span>
              <p className="text-[22px] leading-[33px] text-white">
                {t.quote}
              </p>
              <div className="flex flex-col gap-2">
                <p className="text-[22px] leading-[33px] font-medium text-white">
                  {t.name}
                </p>
                <p className="text-lg leading-[27px] text-white">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
