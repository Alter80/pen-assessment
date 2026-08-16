import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="frame flex flex-col items-start justify-center gap-1.5 py-16 lg:py-25">
      <div className="flex w-full flex-col items-center gap-16 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
        <div className="flex w-full max-w-151.25 flex-col items-start gap-10 lg:gap-15">
          <div className="flex flex-col items-start gap-8">
            <h1 className="text-6xl leading-[1.05] font-black uppercase text-text sm:text-7xl lg:text-[110px] lg:leading-33.25">
              Welcome to VCAD
            </h1>
            <p className="max-w-146.5 text-lg leading-[160%] text-[#CDD0E0]">
              Our team at Victoria College of Arts and Design is passionate about
              creating innovative projects and generating new ideas. We work with
              a variety of experts and esteemed companies using a collaborative
              approach. Located in London&apos;s Design District, we have valuable
              connections within our industry. Search our latest courses.
            </p>
          </div>
          <Link
            href="/courses"
            className="box-border flex h-14 w-80 items-center justify-between border border-text bg-card p-4"
          >
            <span className="text-default leading-5.5 font-medium text-text">
              Explore Courses
            </span>
            <ArrowRight className="h-6 w-6 text-text" />
          </Link>
        </div>

        <Image
          src="/images/hero-collage.svg"
          alt="Photo collage of VCAD students across fashion, photography, media, graphic design, business, management and marketing"
          width={714}
          height={680}
          className="h-auto w-full max-w-178.25"
          priority
        />
      </div>
    </section>
  );
}
