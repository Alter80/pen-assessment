import Image from "next/image";
import { DecorativeCircles } from "@/components/layout/DecorativeCircles";
import type { Partner } from "@/data/content";

export function PartnerLogos({ partners }: { partners: Partner[] }) {
  return (
    <section className="relative overflow-hidden bg-deep py-30">
      <div className="frame relative grid gap-10 lg:grid-cols-2 lg:items-center">
        <DecorativeCircles className="right-0 top-1/2 hidden -translate-y-1/2 lg:block" />

        <div>
          <p className="text-[22px] leading-[1.2] font-bold uppercase text-magenta-light">
            Our partners
          </p>
          <h2 className="mt-4 text-[48px] leading-[1.17] font-semibold text-text">
            Partner Institutions
          </h2>
          <p className="mt-6 max-w-md text-default text-text/75">
            Our team at Victoria College of Arts and Design is passionate
            about creating innovative projects and generating new ideas. We
            work with a variety of experts and esteemed companies using a
            collaborative approach. Located in London&apos;s Design District,
            we have valuable connections within our industry.
          </p>
        </div>

        <div className="flex flex-col items-start gap-10 sm:flex-row sm:items-center sm:gap-16">
          {partners.map((partner) => (
            <div key={partner.name} className="relative h-14 w-48">
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                sizes="192px"
                className="object-contain object-left"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
