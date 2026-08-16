"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useCarousel } from "@/components/ui/use-carousel";
import { CarouselArrowButton } from "@/components/ui/CarouselArrowButton";
import type { Story } from "@/data/content";

export function StoriesSection({ stories }: { stories: Story[] }) {
  const { trackRef, scrollPrev, scrollNext } = useCarousel<HTMLDivElement>();

  return (
    <section className="frame py-24">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="text-[22px] leading-[1.2] font-bold uppercase text-magenta-light">
            Stories
          </p>
          <h2 className="mt-4 text-[48px] leading-[1.17] font-semibold text-text">
            Our Stories
          </h2>
        </div>
        <div className="flex gap-1.25">
          <CarouselArrowButton
            direction="prev"
            onClick={scrollPrev}
            label="Previous story"
            variant="navy"
          />
          <CarouselArrowButton
            direction="next"
            onClick={scrollNext}
            label="Next story"
            variant="accent"
          />
        </div>
      </div>

      <div
        ref={trackRef}
        className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-10 overflow-x-auto"
      >
        {stories.map((story) => (
          <div
            key={story.slug}
            className="flex w-full shrink-0 snap-start flex-col gap-8 sm:h-[543px] sm:flex-row sm:items-start sm:gap-10"
          >
            <div className="relative box-border h-64 w-full shrink-0 overflow-hidden rounded-card sm:h-[543px] sm:w-[630px] sm:rounded-none">
              <Image
                src={story.image}
                alt={story.title}
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-contain"
              />
            </div>
            <div className="flex flex-col sm:h-[533px] sm:w-[604px] sm:gap-[100px]">
              <div className="flex flex-col items-start gap-[21px]">
                <h3 className="text-[42px] leading-[50px] font-semibold text-text">
                  {story.title}
                </h3>
                <p className="text-[22px] leading-[33px] text-text">
                  {story.excerpt}
                </p>
              </div>
              <a
                href="#"
                className="box-border inline-flex h-[56px] w-[178px] items-center justify-between border border-text bg-card p-4"
              >
                <span className="text-default leading-5.5 font-medium text-text">
                  Read Article
                </span>
                <ArrowRight className="h-6 w-6 text-text" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
