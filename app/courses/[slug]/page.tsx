import { notFound } from "next/navigation";
import { DetailsHero } from "@/components/course-details/DetailsHero";
import { SectionTabsNav } from "@/components/course-details/SectionTabsNav";
import { SECTION_IDS } from "@/components/course-details/sections";
import { CourseInfoGrid } from "@/components/course-details/CourseInfoGrid";
import { CourseStructure } from "@/components/course-details/CourseStructure";
import { AdmissionsSection } from "@/components/course-details/AdmissionsSection";
import { CourseSpecCard } from "@/components/course-details/CourseSpecCard";
import { ReadyToApplyBanner } from "@/components/course-details/ReadyToApplyBanner";
import { getAllCourseSlugs, getCourseBySlug } from "@/data/courses";

export function generateStaticParams() {
  return getAllCourseSlugs().map((slug) => ({ slug }));
}

export default async function CourseDetailsPage(
  props: PageProps<"/courses/[slug]">
) {
  const { slug } = await props.params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  return (
    <>
      <DetailsHero course={course} />
      <SectionTabsNav />

      <section id={SECTION_IDS.overview} className="frame scroll-mt-24 py-16 text-center">
        <h2 className="text-[48px] leading-[1.17] font-semibold text-text">
          Course Information
        </h2>
        <p className="mt-4 text-default text-text/70">
          Everything you need to know about this course at a glance
        </p>
        <div className="mt-10 text-left">
          <CourseInfoGrid info={course.courseInfo} />
        </div>
      </section>

      <section id={SECTION_IDS.structure} className="frame scroll-mt-24 py-16">
        <CourseStructure course={course} />
      </section>

      <section id={SECTION_IDS.admissions} className="frame scroll-mt-24 py-16">
        <AdmissionsSection course={course} />
      </section>

      <section className="frame py-10">
        <CourseSpecCard href={course.courseSpecUrl} />
      </section>

      <section className="frame pt-10 pb-24">
        <ReadyToApplyBanner />
      </section>
    </>
  );
}
