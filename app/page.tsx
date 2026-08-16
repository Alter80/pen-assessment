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
    <>
      <Hero />
      <CourseAccordionList courses={courses} />
      <QuoteBanner />
      <CampusCarousel campuses={campuses} />
      <TestimonialCarousel testimonials={testimonials} />
      <PartnerLogos partners={partners} />
      <StoriesSection stories={stories} />
    </>
  );
}
