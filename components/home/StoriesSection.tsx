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
            className="grid w-full shrink-0 snap-start gap-8 sm:grid-cols-2 sm:items-center"
          >
            <div className="relative aspect-4/3 overflow-hidden rounded-card">
              <Image
                src={story.image}
                alt={story.title}
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl leading-[1.2] font-semibold text-text">
                {story.title}
              </h3>
              <p className="mt-4 text-lg leading-[1.6] text-text">
                {story.excerpt}
              </p>
              <a
                href="#"
                className="box-border mt-8 inline-flex h-14 w-47.5 items-center justify-between border border-text bg-card p-4"
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
