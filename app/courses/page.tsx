import { CoursesHero } from "@/components/courses/CoursesHero";
import { CourseFeatureGrid } from "@/components/courses/CourseFeatureGrid";
import { CourseGalleryStrip } from "@/components/courses/CourseGalleryStrip";
import { getCourses } from "@/data/courses";

export default async function CoursesPage() {
  const courses = await getCourses();
  const featuredSlugs = [
    "bsc-hons-business-management",
    "ba-hons-fashion-media-and-marketing",
    "ba-hons-fashion-media-and-marketing",
    "bsc-hons-business-management",
  ];
  const featuredCourses = featuredSlugs
    .map((slug) => courses.find((course) => course.slug === slug))
    .filter((course): course is (typeof courses)[number] => Boolean(course));

  return (
    <div className="mx-auto w-full max-w-[1440px] bg-base bg-[repeating-linear-gradient(90deg,transparent_0,transparent_319px,rgba(56,69,132,0.28)_320px,transparent_321px)]">
      <CoursesHero />
      <section className="frame min-h-[1106px] pt-20 pb-24">
        <div className="flex items-start justify-between gap-10">
          <div>
            <p className="text-[22px] leading-[26px] font-bold uppercase text-magenta-light">
              / All Courses
            </p>
            <h2 className="mt-4 text-[48px] leading-[56px] font-semibold text-text">
              Degree Courses
            </h2>
          </div>
          <p className="w-[604px] pt-1 text-base leading-6 text-text">
            Join Victoria College of Arts and Design and experience exceptional
            teaching, cutting-edge facilities, and industry connections that
            prepare you for a rewarding creative career.
          </p>
        </div>
        <div className="mt-10">
          <CourseFeatureGrid courses={featuredCourses} />
        </div>
      </section>
      <CourseGalleryStrip courses={courses} />
    </div>
  );
}
