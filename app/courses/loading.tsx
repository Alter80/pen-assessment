import { CoursesHero } from "@/components/courses/CoursesHero";
import { CoursesSkeleton } from "@/components/courses/CoursesSkeleton";

export default function CoursesLoading() {
  return (
    <>
      <CoursesHero />
      <section className="frame pb-24">
        <p className="text-[22px] leading-[1.2] font-bold uppercase text-magenta-light">
          All Courses
        </p>
        <h2 className="mt-4 text-[48px] leading-[1.17] font-semibold text-text">
          Degree Courses
        </h2>
        <div className="mt-10">
          <CoursesSkeleton />
        </div>
      </section>
    </>
  );
}
