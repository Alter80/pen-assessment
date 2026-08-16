import Link from "next/link";
import Image from "next/image";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TiktokIcon,
  XIcon,
  YoutubeIcon,
} from "./SocialIcons";

const linkColumns = [
  ["About VCAD", "Career"],
  ["Our Story", "Our Partners"],
  ["Campuses", "Cookies Policy"],
  ["Policies", "FAQs"],
];

const socials = [
  { Icon: FacebookIcon, label: "Facebook", filled: true },
  { Icon: XIcon, label: "X" },
  { Icon: LinkedInIcon, label: "LinkedIn" },
  { Icon: InstagramIcon, label: "Instagram" },
  { Icon: YoutubeIcon, label: "YouTube" },
  { Icon: TiktokIcon, label: "TikTok" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border/40 bg-deep bg-[repeating-linear-gradient(90deg,transparent_0,transparent_319px,rgba(56,69,132,0.28)_320px,transparent_321px)]">
      <Image src="/images/footer/footer-circle-bg.svg" alt="" width={665} height={584} aria-hidden className="pointer-events-none absolute right-0 top-0 h-[584px] w-[665px] opacity-100" />

      <div className="frame relative py-20">
        <Link href="/" className="inline-block">
          <Image src="/images/footer/footer-logo-main.svg" alt="Victoria College of Arts and Design" width={86} height={78} className="h-[78px] w-[86px] object-contain" />
        </Link>

        <h2 className="mt-8 max-w-3xl text-[48px] leading-[1.17] font-semibold text-text">
          Get creative and{" "}
          <span className="text-pink">turn your passion</span> for the Arts
          into a rewarding career.
        </h2>

        <div className="mt-14 grid gap-10 border-t border-border/40 pt-10 lg:grid-cols-[535px_1fr] lg:items-start">
          <div className="flex flex-col gap-11">
            <div className="flex gap-2">
            {socials.map(({ Icon, label, filled }) => (
              <Link
                key={label}
                href="#"
                aria-label={label}
                className={
                  filled
                    ? "flex h-10 w-10 items-center justify-center rounded-[34px] border border-[#fafdff] bg-white text-[#033d61] transition-opacity hover:opacity-80"
                    : "flex h-10 w-10 items-center justify-center rounded-[34px] bg-white/10 text-white transition-colors hover:bg-white/20"
                }
              >
                <Icon className="h-3.5 w-3.5" />
              </Link>
            ))}
            </div>

            <div className="grid grid-cols-4 gap-x-[55px] gap-y-4">
              {linkColumns.flat().map((label) => (
                <Link key={label} href="#" className="whitespace-nowrap text-base leading-[22px] font-medium text-text hover:text-white">
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:text-right">
            <a
              href="mailto:enquiry_office@vcad.co.uk"
              className="text-[30px] leading-9 font-semibold text-white hover:text-pink"
            >
              enquiry_office@vcad.co.uk
            </a>
            <p className="mt-3 text-default text-text/80">020 3278 9857</p>
            <div className="mt-6 flex items-center gap-4 lg:justify-end">
              {[
                ["footer-logo1.svg", "AdvanceHE"],
                ["footer-logo2.png", "QAA"],
                ["footer-logo3.png", "Cyber Essentials"],
              ].map(([file, name]) => (
                <div
                  key={file}
                  className="relative h-12 w-16 overflow-hidden"
                >
                  <Image
                    src={`/images/footer/${file}`}
                    alt={name}
                    fill
                    sizes="64px"
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border/40 pt-6 text-meta text-text/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Victoria College of Arts and Design.</p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
