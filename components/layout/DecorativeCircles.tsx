import { cn } from "@/lib/utils";

export function DecorativeCircles({ className }: { className?: string }) {
  const radii = [40, 90, 140, 190, 240];

  return (
    <svg
      aria-hidden
      viewBox="0 0 500 500"
      className={cn("pointer-events-none absolute h-[500px] w-[500px]", className)}
    >
      {radii.map((r) => (
        <circle
          key={r}
          cx="250"
          cy="250"
          r={r}
          fill="none"
          stroke="#384584"
          strokeOpacity="0.5"
        />
      ))}
    </svg>
  );
}
