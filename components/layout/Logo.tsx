import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "grid h-11 w-11 shrink-0 grid-cols-2 grid-rows-2 gap-[3px] rounded-lg bg-navy p-2",
        className
      )}
    >
      <svg viewBox="0 0 21 17" className="h-full w-full">
        <path d="M0 0L10.2505 16.5645L20.4982 0H0Z" fill="#FF379E" />
      </svg>
      <svg viewBox="0 0 17 17" className="h-full w-full">
        <path
          d="M8.12165 16.5645H16.3608V0H8.12165C-2.71007 0.1857 -2.70437 16.3788 8.12165 16.5645Z"
          fill="#00FFD2"
        />
      </svg>
      <svg viewBox="0 0 21 17" className="h-full w-full">
        <path d="M0 16.5645H20.4982L10.2505 0L0 16.5645Z" fill="#8EC8EE" />
      </svg>
      <svg viewBox="0 0 17 17" className="h-full w-full">
        <path
          d="M8.23917 16.5645H0V0H8.23917C19.0709 0.1857 19.0652 16.3788 8.23917 16.5645Z"
          fill="#E018E0"
        />
      </svg>
    </div>
  );
}

export function LogoLockup({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <LogoMark />
      <div className="leading-tight">
        <div className="text-default font-bold text-white">Victoria</div>
        <div className="text-default font-bold text-white">College</div>
        <div className="text-[11px] text-text/70">of Arts and Design</div>
      </div>
    </div>
  );
}
