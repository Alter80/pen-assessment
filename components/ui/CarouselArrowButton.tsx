"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  direction: "prev" | "next";
  onClick: () => void;
  label: string;
  variant?: "navy" | "accent";
  className?: string;
};

export function CarouselArrowButton({
  direction,
  onClick,
  label,
  variant = direction === "prev" ? "navy" : "accent",
  className,
}: Props) {
  const Icon = direction === "prev" ? ArrowLeft : ArrowRight;

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={cn(
        "flex h-19.5 w-19.5 shrink-0 items-center justify-center rounded-full text-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink",
        variant === "accent" ? "bg-plum" : "border border-border bg-card",
        className
      )}
    >
      <Icon className="h-6 w-6" />
    </button>
  );
}
