import Link from "next/link";
import { SearchX } from "lucide-react";

export function CoursesEmptyState() {
  return (
    <div className="flex flex-col items-center rounded-card border border-dashed border-border/60 bg-card/40 px-6 py-20 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-card">
        <SearchX className="h-7 w-7 text-text/60" />
      </div>
      <h3 className="mt-6 text-card-title font-semibold text-white">
        No courses to show right now
      </h3>
      <p className="mt-3 max-w-sm text-default text-text/70">
        We couldn&apos;t find any courses matching this view. Please check
        back soon, or get in touch and we&apos;ll help you find the right
        course.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-btn border border-border px-6 py-3 text-default font-medium text-white transition-colors hover:bg-card"
      >
        Back to homepage
      </Link>
    </div>
  );
}
