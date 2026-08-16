import Image from "next/image";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export function CoursesHero() {
  return (
    <section className="frame relative pt-16 pb-20 text-center lg:pt-20">
      <div className="absolute left-0 top-16 hidden h-40 w-56 -rotate-3 overflow-hidden rounded-card border-4 border-white shadow-xl lg:block">
        <Image
          src="/images/explore-hero-left.jpg"
          alt="VCAD students on campus"
          fill
          sizes="224px"
          className="object-cover"
        />
      </div>
      <div className="absolute right-0 top-24 hidden h-44 w-48 rotate-3 overflow-hidden rounded-card border-4 border-white shadow-xl lg:block">
        <Image
          src="/images/explore-hero-right.jpg"
          alt="A VCAD student sketching"
          fill
          sizes="192px"
          className="object-cover"
        />
      </div>

      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Courses" }]} />
      <h1 className="mt-6 text-page-title font-bold text-white">
        Explore Our Courses
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-body text-text/75">
        Join Victoria College of Arts and Design and experience exceptional
        teaching, cutting-edge facilities, and industry connections that
        prepare you for a rewarding creative career.
      </p>
    </section>
  );
}
