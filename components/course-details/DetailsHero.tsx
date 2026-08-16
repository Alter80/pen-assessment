import Image from "next/image";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import type { Course } from "@/data/courses";

export function DetailsHero({ course }: { course: Course }) {
  return (
    <section className="frame pt-16 pb-16 text-center lg:pt-20">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Courses", href: "/courses" },
          { label: "Course Details Page" },
        ]}
      />
      <h1 className="mt-6 text-page-title font-bold text-white">
        {course.title}
      </h1>
      <p className="mx-auto mt-6 max-w-3xl text-body text-text/75">
        {course.description}
      </p>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {course.heroImages.map((src, i) => (
          <div
            key={src + i}
            className="relative aspect-4/3 overflow-hidden rounded-card"
          >
            <Image
              src={src}
              alt={`${course.title} — photo ${i + 1}`}
              fill
              sizes="(min-width: 640px) 33vw, 100vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
