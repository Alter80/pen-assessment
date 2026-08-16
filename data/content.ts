export type Campus = {
  slug: string;
  name: string;
  image: string;
};

export const campuses: Campus[] = [
  {
    slug: "canary-wharf",
    name: "Canary Wharf Campus",
    image: "/images/campus-center.jpg",
  },
  {
    slug: "borough",
    name: "Borough Campus",
    image: "/images/campus-left.jpg",
  },
  {
    slug: "city",
    name: "City Campus",
    image: "/images/campus-right.jpg",
  },
];

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  image: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Daniel Karen",
    role: "Student of VCAD Borough campus",
    quote:
      "Our team at Victoria College of Arts and Design is passionate about creating innovative projects and generating new ideas. We work with a variety of experts and esteemed companies using a collaborative approach. Located in London's Design District, we have valuable connections within our industry.",
    image: "/images/testimonial-woman.jpg",
  },
  {
    name: "Priya Anand",
    role: "Student of VCAD Canary Wharf campus",
    quote:
      "The studios here pushed me to work in ways I never would have on my own. Tutors treat you like a working professional from day one, and the industry connections turned my final project into a real portfolio piece.",
    image: "/images/story-woman.jpg",
  },
];

export type Story = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
};

export const stories: Story[] = [
  {
    slug: "induction-canary-wharf",
    title: "Induction in VCAD Canary Wharf campus",
    excerpt:
      "If you join Victoria College of Arts and Design, you can expect the highest calibre of teaching, cutting-edge facilities, and exceptional industry connections, which will help to prepare you for a rewarding career in the creative and tech industries.",
    image: "/images/story-woman.jpg",
  },
  {
    slug: "graduate-showcase-2025",
    title: "Inside our 2025 Graduate Showcase",
    excerpt:
      "Every summer our graduating students present a year of work to press, partners and prospective employers. Here's a look behind the scenes of this year's showcase.",
    image: "/images/course-graffiti-desk.jpg",
  },
  {
    slug: "industry-partnerships",
    title: "Building industry partnerships that matter",
    excerpt:
      "From live briefs to placements, our partnerships give students a direct line into the industries they're training for. Here's how we build those relationships.",
    image: "/images/course-office-hug.jpg",
  },
];

export type Partner = {
  name: string;
  logo: string;
};

export const partners: Partner[] = [
  { name: "Ravensbourne University London", logo: "/images/RavensBourne-university-london-logo.svg" },
  {
    name: "Arts University Plymouth",
    logo: "/images/Arts-university-plymount-logo.svg",
  },
];

export type Accreditation = {
  name: string;
  logo: string;
};

export const accreditations: Accreditation[] = [
  { name: "AdvanceHE Affiliate Member", logo: "/logos/badge-advancehe.png" },
  { name: "QAA Member 2024-25", logo: "/logos/badge-qaa.png" },
  {
    name: "Cyber Essentials Certified",
    logo: "/logos/badge-cyberessentials.png",
  },
];
