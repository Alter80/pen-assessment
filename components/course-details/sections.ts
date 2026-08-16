export const sections = [
  { id: "course-overview", label: "Course Overview" },
  { id: "course-structure", label: "Course Structure & Details" },
  { id: "admissions", label: "Admissions & Key Details" },
] as const;

export const SECTION_IDS = {
  overview: sections[0].id,
  structure: sections[1].id,
  admissions: sections[2].id,
};
