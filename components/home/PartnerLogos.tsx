import Image from "next/image";
import type { Partner } from "@/data/content";

export function PartnerLogos({ partners }: { partners: Partner[] }) {
  return (
    <section className="relative min-h-[584px] overflow-hidden bg-deep py-[120px]">
      <Image src="/images/our-partner-bg-circle.svg" alt="" width={665} height={584} aria-hidden className="pointer-events-none absolute right-[220px] top-0 h-[584px] w-[665px] opacity-100" />
      <div className="frame relative z-10 flex items-center justify-between gap-[76px]">

        <div className="w-[744px] shrink-0">
          <p className="text-[22px] leading-[1.2] font-bold uppercase text-magenta-light">
            Our partners
          </p>
          <h2 className="mt-[21px] text-[48px] leading-[56px] font-semibold text-text">
            Partner Institutions
          </h2>
          <p className="mt-[76px] max-w-[744px] text-[22px] leading-[33px] text-white">
            Our team at Victoria College of Arts and Design is passionate
            about creating innovative projects and generating new ideas. We
            work with a variety of experts and esteemed companies using a
            collaborative approach. Located in London&apos;s Design District,
            we have valuable connections within our industry.
          </p>
        </div>

        <div className="flex h-[344px] w-[446px] shrink-0 flex-col justify-center items-start gap-6">
          {partners.map((partner, index) => (
            <div key={partner.name} className={index === 0 ? "relative h-[86px] w-[352px]" : "relative h-[86px] w-[254px]"}>
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
