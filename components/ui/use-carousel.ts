"use client";

import { useRef } from "react";

export function useCarousel<T extends HTMLElement>() {
  const trackRef = useRef<T>(null);

  const scrollByAmount = (direction: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const firstChild = el.firstElementChild as HTMLElement | null;
    const gap = 24;
    const amount = (firstChild?.offsetWidth ?? el.clientWidth * 0.8) + gap;
    el.scrollBy({ left: amount * direction, behavior: "smooth" });
  };

  return {
    trackRef,
    scrollPrev: () => scrollByAmount(-1),
    scrollNext: () => scrollByAmount(1),
  };
}
