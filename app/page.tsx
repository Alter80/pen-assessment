import { Hero } from "@/components/home/Hero";
import { CourseAccordionList } from "@/components/home/CourseAccordionList";
import { QuoteBanner } from "@/components/home/QuoteBanner";
import { CampusCarousel } from "@/components/home/CampusCarousel";
import { TestimonialCarousel } from "@/components/home/TestimonialCarousel";
import { PartnerLogos } from "@/components/home/PartnerLogos";
import { StoriesSection } from "@/components/home/StoriesSection";
import { courses } from "@/data/courses";
import { campuses, partners, stories, testimonials } from "@/data/content";

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center bg-base">
      <Hero />
      <div className="relative w-full bg-[repeating-linear-gradient(90deg,transparent_0,transparent_319px,rgba(56,69,132,0.28)_320px,transparent_321px)]">
        <CourseAccordionList courses={courses} />
        <QuoteBanner />
        <CampusCarousel campuses={campuses} />
        <TestimonialCarousel testimonials={testimonials} />
        <PartnerLogos partners={partners} />
        <StoriesSection stories={stories} />
      </div>
    </div>
  );
}
