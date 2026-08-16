import Link from "next/link";
import Image from "next/image";
import { LogoMark } from "./Logo";
import { DecorativeCircles } from "./DecorativeCircles";
import { accreditations } from "@/data/content";
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
    <footer className="relative mt-32 overflow-hidden border-t border-border/40 bg-deep">
      <DecorativeCircles className="-right-32 -top-32" />

      <div className="frame relative py-20">
        <Link href="/" className="inline-block">
          <LogoMark />
        </Link>

        <h2 className="mt-8 max-w-3xl text-[48px] leading-[1.17] font-semibold text-text">
          Get creative and{" "}
          <span className="text-pink">turn your passion</span> for the Arts
          into a rewarding career.
        </h2>

        <div className="mt-14 grid gap-10 border-t border-border/40 pt-10 lg:grid-cols-[1fr_1fr_1fr] lg:items-start">
          <div className="flex gap-3">
            {socials.map(({ Icon, label, filled }) => (
              <Link
                key={label}
                href="#"
                aria-label={label}
                className={
                  filled
                    ? "flex h-11 w-11 items-center justify-center rounded-full bg-white text-base transition-opacity hover:opacity-80"
                    : "flex h-11 w-11 items-center justify-center rounded-full bg-card text-text transition-colors hover:bg-card-alt"
                }
              >
                <Icon className="h-4 w-4" />
              </Link>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            {linkColumns.map(([a, b]) => (
              <div key={a} className="flex flex-col gap-4">
                <Link
                  href="#"
                  className="text-default text-text/80 hover:text-white"
                >
                  / {a}
                </Link>
                <Link
                  href="#"
                  className="text-default text-text/80 hover:text-white"
                >
                  / {b}
                </Link>
              </div>
            ))}
          </div>

          <div className="lg:text-right">
            <a
              href="mailto:enquiry_office@vcad.co.uk"
              className="text-card-title font-semibold text-white hover:text-pink"
            >
              enquiry_office@vcad.co.uk
            </a>
            <p className="mt-3 text-default text-text/80">020 3278 9857</p>
            <div className="mt-6 flex items-center gap-4 lg:justify-end">
              {accreditations.map((badge) => (
                <div
                  key={badge.name}
                  className="relative h-14 w-16 overflow-hidden rounded-chip"
                >
                  <Image
                    src={badge.logo}
                    alt={badge.name}
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
