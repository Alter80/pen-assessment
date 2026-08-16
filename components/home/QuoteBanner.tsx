import Image from "next/image";

export function QuoteBanner() {
  return (
    <section className="frame relative mx-auto h-[979px] w-full max-w-[1440px] overflow-hidden bg-base py-[120px]">
      <div className="pointer-events-none absolute inset-y-0 left-1/2 z-0 w-screen -translate-x-1/2 bg-[repeating-linear-gradient(90deg,transparent_0,transparent_319px,rgba(56,69,132,0.28)_320px,transparent_321px)]" />
      <Image
        src="/images/middle-section-circle-bg.svg"
        alt=""
        aria-hidden
        width={1072}
        height={797}
        className="pointer-events-none absolute right-0 top-[180px] z-0 h-[797px] w-[1072px] object-contain"
      />

      <div className="relative z-20 flex h-auto w-full max-w-[832px] flex-wrap content-start items-start lg:h-[210px] lg:w-[832px]">
        <Image
          src="/images/for-quote.svg"
          alt=""
          aria-hidden
          width={67}
          height={51}
          className="absolute -left-[27px] -top-[17px] z-20 hidden h-[51px] w-[67px] object-contain lg:block"
        />
        <h2 className="relative z-10 flex w-full max-w-[765px] items-center text-5xl leading-tight font-bold text-white sm:text-[64px] sm:leading-[70px] lg:h-[210px] lg:w-[765px]">
          <span>
            A world where <span className="text-magenta">everyone</span>{" "}
            <span className="text-magenta">has the opportunity</span> to fulfil
            their potential
          </span>
        </h2>
        <Image
          src="/images/for-quote.svg"
          alt=""
          aria-hidden
          width={67}
          height={51}
          className="absolute left-[597px] top-[177px] z-20 hidden h-[51px] w-[67px] rotate-180 object-contain lg:block"
        />
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

        <div className="absolute left-42 top-0 z-20 h-75 w-70 sm:left-56 sm:h-[537px] sm:w-[493px] lg:left-[-518px] lg:top-[231px]">
          <Image
            src="/images/watercolor-woman.png"
            alt="A VCAD student painting with watercolours"
            fill
            sizes="493px"
            className="object-contain"
          />
        </div>

        <div className="absolute right-0 top-0 z-10 h-full w-[46%] overflow-hidden sm:h-[600px] sm:w-[460px]">
          <Image
            src="/images/tailoring-table.jpg"
            alt="VCAD fashion students working at a tailoring table"
            fill
            sizes="460px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
