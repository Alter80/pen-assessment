import Image from "next/image";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export function CoursesHero() {
  return (
    <section className="frame relative h-[580px] overflow-hidden pt-[140px] text-center">
      <Image
        src="/images/footer/footer-circle-bg.svg"
        alt=""
        aria-hidden
        width={545}
        height={375}
        className="pointer-events-none absolute right-[-20px] top-[-60px] z-0 lg:block"
      />
      <div className="absolute left-[55px] top-0 hidden h-[195px] w-[208px] overflow-hidden lg:block">
        <Image
          src="/images/explore-hero-left.jpg"
          alt="VCAD students on campus"
          fill
          sizes="224px"
          className="object-cover"
        />
      </div>
      <div className="absolute right-[60px] top-[96px] hidden h-[195px] w-[195px] overflow-hidden lg:block">
        <Image
          src="/images/explore-hero-right.jpg"
          alt="A VCAD student sketching"
          fill
          sizes="192px"
          className="object-cover"
        />
      </div>

      <div className="relative z-10">
        <Breadcrumbs
          items={[{ label: "Home", href: "/" }, { label: "Courses" }]}
        />
        <h1 className="mt-6 text-[64px] leading-[70px] font-semibold text-white">
          Explore Our Courses
        </h1>
        <p className="mx-auto mt-6 max-w-[800px] text-[22px] leading-[33px] text-text">
          Join Victoria College of Arts and Design and experience exceptional
          teaching, cutting-edge facilities, and industry connections that
          prepare you for a rewarding creative career.
        </p>
      </div>
    </section>
  );
}
