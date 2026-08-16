import { ArrowRight, FileDown } from "lucide-react";

export function CourseSpecCard({ href }: { href: string }) {
  return (
    <div className="flex flex-col items-start gap-6 rounded-card bg-card px-8 py-8 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-5">
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-plum text-white">
          <FileDown className="h-6 w-6" />
        </span>
        <div>
          <p className="text-card-title font-semibold text-white">
            Course Specification
          </p>
          <p className="mt-1 text-default text-text/70">
            Download the full course specification for detailed information.
          </p>
        </div>
      </div>
      <a
        href={href}
        className="inline-flex shrink-0 items-center gap-2 rounded-btn border border-border px-6 py-3 text-default font-medium text-white transition-colors hover:bg-card-alt"
      >
        Download PDF
        <ArrowRight className="h-4 w-4" />
      </a>
    </div>
  );
}
