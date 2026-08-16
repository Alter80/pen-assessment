"use client";

import Image from "next/image";
import { useState } from "react";
import type { Campus } from "@/data/content";

export function CampusCarousel({ campuses }: { campuses: Campus[] }) {
  const slides = [
    { src: "/images/slider-left.png", alt: "Left campus view" },
    { src: "/images/slider-center.jpg", alt: "Canary Wharf campus" },
    { src: "/images/Slider-right.png", alt: "Right campus view" },
  ];
  const [active, setActive] = useState(1);
  const campus = campuses[[1, 0, 2][active]] ?? campuses[0];
  const move = (direction: -1 | 1) =>
    setActive(
      (current) => (current + direction + campuses.length) % campuses.length,
    );
  const slots = [
    { left: "0px", top: "168px", width: "557px", height: "448px", zIndex: 1 },
    { left: "50%", top: "0px", width: "638px", height: "528px", zIndex: 10 },
    { right: "0px", top: "168px", width: "563px", height: "448px", zIndex: 1 },
  ];

  return (
    <section className="frame relative min-h-[979px] overflow-hidden py-[120px]">
      <div className="relative z-10 flex flex-nowrap items-start justify-between">
        <div className="w-[515px] shrink-0">
          <p className="text-[22px] leading-[1.2] font-bold uppercase text-magenta-light">
            Our campuses
          </p>
          <h2 className="mt-4 whitespace-nowrap text-[48px] leading-[56px] font-semibold text-text">
            Explore our campuses
          </h2>
        </div>
        <p className="mt-0 w-[364px] shrink-0 text-base leading-6 text-white">
          Our team at Victoria College of Arts and Design is passionate about
          creating innovative projects and generating new ideas.
        </p>
      </div>

      <div className="relative z-10 mt-[72px] h-[580px]">
        {slides.map((slide, index) => {
          const slot = (index - active + 1 + slides.length) % slides.length;
          const placement = slots[slot];
          return (
            <div
              key={slide.src}
              className="absolute overflow-hidden border-[3px] border-[#103861] transition-[left,right,top,width,height] duration-500 ease-in-out"
              style={{
                ...placement,
                transform: slot === 1 ? "translateX(-50%)" : undefined,
              }}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                sizes="638px"
                className="object-cover"
              />
              {slot === 1 && (
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(75.85%_75.85%_at_50%_36.74%,rgba(3,10,46,0)_0%,#030A2E_100%)]"
                />
              )}
            </div>
          );
        })}
        <button
          type="button"
          aria-label="Previous campus"
          onClick={() => move(1)}
          className="absolute left-[calc(50%-358px)] top-[274px] z-30 flex h-[78px] w-[78px] items-center justify-center rounded-full border border-border bg-card text-2xl text-text"
        >
          ←
        </button>
        <button
          type="button"
          aria-label="Discover campus"
          className="absolute left-1/2 top-[247px] z-30 flex h-[120px] w-[120px] -translate-x-1/2 items-center justify-center rounded-[70px] bg-[rgba(224,224,224,0.3)] text-[16px] leading-[19px] font-semibold uppercase text-[#ebecf3] shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
        >
          Discover
        </button>
        <button
          type="button"
          aria-label="Next campus"
          onClick={() => move(-1)}
          className="absolute right-[calc(50%-358px)] top-[274px] z-30 flex h-[78px] w-[78px] items-center justify-center rounded-full bg-plum text-2xl text-text"
        >
          →
        </button>
        <div className="absolute bottom-0 left-1/2 z-20 flex h-[88px] w-[638px] -translate-x-1/2 items-center justify-center bg-border">
          <p className="text-2xl font-bold uppercase text-text">
            {campus?.name ?? "Canary Wharf Campus"}
          </p>
        </div>
      </div>
    </section>
  );
}
