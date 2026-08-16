import { ArrowRight } from "lucide-react";

export function ReadyToApplyBanner() {
  return (
    <div className="relative overflow-hidden rounded-card bg-card py-20 text-center">
      <div
        aria-hidden
        className="absolute -left-10 -top-10 h-56 w-56 bg-navy"
        style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
      />
      <div
        aria-hidden
        className="absolute -bottom-16 left-16 h-40 w-40 bg-card-alt"
        style={{ clipPath: "polygon(0 100%, 100% 100%, 0 0)" }}
      />
      <div
        aria-hidden
        className="absolute -right-10 -top-10 h-56 w-56 bg-plum/40"
        style={{ clipPath: "polygon(100% 0, 100% 100%, 0 0)" }}
      />

      <div className="relative">
        <h2 className="text-[48px] leading-[1.17] font-semibold text-text">
          Ready to Apply?
        </h2>
        <p className="mt-4 text-default text-text/75">
          Take the next step in your creative journey and join Victoria
          College of Arts and Design.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-btn border border-border px-6 py-3 text-default font-medium text-white transition-colors hover:bg-navy"
          >
            Apply Now
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-btn bg-plum px-6 py-3 text-default font-medium text-white"
          >
            Get more info
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
