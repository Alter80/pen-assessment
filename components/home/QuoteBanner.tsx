import Image from "next/image";
import { DecorativeCircles } from "@/components/layout/DecorativeCircles";

export function QuoteBanner() {
  return (
    <section className="frame relative overflow-hidden py-20 lg:min-h-[979px] lg:py-[120px]">
      <DecorativeCircles className="left-[319px] top-[182px] hidden h-[590px] w-[927px] rotate-[19.89deg] opacity-50 lg:block" />

      <div className="relative z-20 flex h-auto w-full max-w-[832px] flex-wrap content-start items-start lg:h-[210px] lg:w-[832px]">
        <span
          aria-hidden
          className="absolute -left-[27px] -top-[17px] z-20 hidden h-[51px] w-[67px] font-sans text-[80px] leading-[51px] font-bold text-white/20 lg:block"
        >
          &ldquo;
        </span>
        <h2 className="relative z-10 flex w-full max-w-[765px] items-center text-5xl leading-tight font-bold text-white sm:text-[64px] sm:leading-[70px] lg:h-[210px] lg:w-[765px]">
          <span>
            A world where <span className="text-magenta">everyone</span>{" "}
            <span className="text-magenta">has the opportunity</span> to fulfil
            their potential
          </span>
        </h2>
        <span
          aria-hidden
          className="absolute left-[597px] top-[177px] z-20 hidden h-[51px] w-[67px] rotate-180 font-sans text-[80px] leading-[51px] font-bold text-white/20 lg:block"
        >
          &ldquo;
        </span>
      </div>

      <div className="relative z-10 mt-16 h-[440px] sm:h-[530px] lg:absolute lg:top-[154px] lg:right-20 lg:mt-0 lg:h-[538px] lg:w-[410px]">
        <div className="absolute left-0 top-10 z-30 h-75 w-70 sm:h-[514px] sm:w-[473px] lg:left-[-929px] lg:top-[255px]">
          <Image
            src="/images/laptop-guy.png"
            alt="A VCAD student working with a laptop in a studio"
            fill
            sizes="473px"
            className="object-contain"
          />
        </div>

        <div className="absolute left-32 top-0 z-20 h-75 w-70 sm:left-56 sm:h-[537px] sm:w-[493px] lg:left-[-518px] lg:top-[231px]">
          <Image
            src="/images/watercolor-woman.png"
            alt="A VCAD student painting with watercolours"
            fill
            sizes="493px"
            className="object-contain"
          />
        </div>

        <div className="absolute right-0 top-0 z-10 h-full w-[46%] overflow-hidden sm:h-[538px] sm:w-[410px]">
          <Image
            src="/images/tailoring-table.jpg"
            alt="VCAD fashion students working at a tailoring table"
            fill
            sizes="410px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
