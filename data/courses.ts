export type Module = {
  code: string;
  title: string;
  credits: number;
  description: string;
};

export type YearKey = "foundation" | "first" | "second" | "third";

export const YEAR_LABELS: Record<YearKey, string> = {
  foundation: "Foundation Year",
  first: "First Year",
  second: "Second Year",
  third: "Third Year",
};

export type CourseInfo = {
  startDate: string;
  duration: string;
  studyMode: string;
  locations: string;
  tuitionFee: string;
  awardingBody: string;
};

export type ContentBlock = {
  heading?: string;
  paragraph?: string;
  bullets?: string[];
};

export type RichContent = ContentBlock[];

export type Course = {
  slug: string;
  title: string;
  school: string;
  durationBadge: string;
  category: string;
  summary: string;
  description: string;
  thumbnail: string;
  heroImages: [string, string, string];
  courseInfo: CourseInfo;
  structure: Record<YearKey, Module[]>;
  admissions: {
    entryRequirements: RichContent;
    englishLanguageRequirements: RichContent;
    additionalInfo: RichContent;
  };
  nonStandardRoute: RichContent;
  documentsRequired: RichContent;
  courseSpecUrl: string;
};

const STANDARD_ENGLISH_REQUIREMENTS: RichContent = [
  {
    paragraph:
      "IELTS 6.0 overall, with no component below 5.5 (or an equivalent Secure English Language Test).",
  },
  {
    bullets: [
      "Applicants who have completed a UK-taught qualification at Level 3 or above are normally exempt.",
      "We accept a wide range of equivalent English qualifications — contact admissions if you're unsure whether yours qualifies.",
    ],
  },
];

const STANDARD_NON_STANDARD_ROUTE: RichContent = [
  {
    paragraph:
      "We welcome applications from candidates without standard academic qualifications. Relevant work experience, a strong portfolio, or an Access to HE Diploma can all support your application.",
  },
  {
    bullets: [
      "Mature applicants (21+) are assessed on portfolio and interview as much as on prior qualifications.",
      "An Access to HE Diploma in a relevant subject is considered equivalent to standard tariff points.",
    ],
  },
];

const STANDARD_DOCUMENTS_REQUIRED: RichContent = [
  {
    bullets: [
      "Proof of identity (passport or national ID card).",
      "Academic transcripts and certificates for all qualifications listed on your application.",
      "Proof of English language proficiency, where applicable.",
      "Your personal portfolio, in one of the accepted formats.",
    ],
  },
];

const STANDARD_ADDITIONAL_INFO: RichContent = [
  {
    paragraph:
      "Applications are reviewed on a rolling basis, so we recommend applying early. Shortlisted applicants are invited to an interview and portfolio review, either on campus or online.",
  },
];

function foundationModules(prefix: string): Module[] {
  return [
    {
      code: `${prefix}01`,
      title: "Fundamentals",
      credits: 30,
      description:
        "This course introduces students to creative practice, focusing on theoretical, practical, and technical components. In early stages, students develop essential skills for academic success and personal growth, emphasizing reflection and technical skills like visual communication.",
    },
    {
      code: `${prefix}02`,
      title: "Thinking Through Making",
      credits: 30,
      description:
        "Students explore ideas through hands-on experimentation, building confidence with materials, tools and processes before applying them to self-directed briefs.",
    },
    {
      code: `${prefix}03`,
      title: "Developing Specialist Practice",
      credits: 30,
      description:
        "A focused introduction to the methods, language and conventions of the specialist subject area, preparing students for more independent study.",
    },
    {
      code: `${prefix}04`,
      title: "Specialist Project",
      credits: 30,
      description:
        "A self-directed project that consolidates the year's learning into a single resolved outcome, presented and critiqued as part of a foundation showcase.",
    },
  ];
}

function coreModules(
  prefix: string,
  year: "01" | "02" | "03",
  entries: Array<[string, string]>,
): Module[] {
  return entries.map(([title, description], i) => ({
    code: `${prefix}${year}${i + 1}`,
    title,
    credits: i === entries.length - 1 ? 40 : 20,
    description,
  }));
}

export const courses: Course[] = [
  {
    slug: "ba-hons-fashion-design",
    title: "BA (Hons) Fashion Design",
    school: "School of Fashion & Textiles",
    durationBadge: "3 Years",
    category: "Fashion",
    summary:
      "This course introduces students to creative practice, focusing on theoretical, practical, and technical components.",
    description:
      "This course introduces students to creative practice, focusing on theoretical, practical, and technical components. In early stages, students develop essential skills for academic success and personal growth, emphasizing reflection and technical skills like visual communication. As they progress, they engage with methodologies, enhancing understanding of processes and fostering critical thinking, collaboration, and problem-solving.",
    thumbnail: "/images/tailoring-table.jpg",
    heroImages: [
      "/images/course-couch-women.jpg",
      "/images/tailoring-table.jpg",
      "/images/story-woman.jpg",
    ],
    courseInfo: {
      startDate: "November, February",
      duration: "3 Years",
      studyMode: "Full Time",
      locations: "Canary Wharf",
      tuitionFee: "£ 9535",
      awardingBody: "Arts University Plymouth",
    },
    structure: {
      foundation: foundationModules("FD"),
      first: coreModules("FS", "01", [
        [
          "Pattern Cutting & Construction",
          "Foundational garment construction, from flat pattern cutting to draping on the stand.",
        ],
        [
          "Textiles & Materials",
          "An introduction to fabric properties, sourcing and sustainable material choices.",
        ],
        [
          "Design Studio 1",
          "Studio-based collection development, from research and concept through to first samples.",
        ],
      ]),
      second: coreModules("FS", "02", [
        [
          "Advanced Construction Techniques",
          "Tailoring, draping and finishing techniques used in industry-standard garment production.",
        ],
        [
          "Industry Collaboration Project",
          "A live brief set by an industry partner, developed under real-world constraints.",
        ],
        [
          "Design Studio 2",
          "A self-directed mini-collection exploring a personal design signature.",
        ],
      ]),
      third: coreModules("FS", "03", [
        [
          "Critical & Contextual Studies",
          "A dissertation exploring a topic of the student's choice within fashion theory or history.",
        ],
        [
          "Portfolio & Professional Practice",
          "Building a professional portfolio, lookbook and pitch ready for industry.",
        ],
        [
          "Graduate Collection",
          "A final resolved collection presented at the graduate showcase.",
        ],
      ]),
    },
    admissions: {
      entryRequirements: [
        {
          paragraph:
            "72 UCAS tariff points (or above) or 60 Credit Ofqual qualification at Level 3.",
        },
        {
          bullets: [
            "For international qualifications, ECCTIS (formerly NARIC) will be used to establish equivalence to their comparable level in the UK.",
          ],
        },
        {
          heading:
            "All applicants must submit a personal 'portfolio', using any one of the following formats",
          bullets: [
            "A video or audio recording; using speech, animation, images, or any other appropriate content the candidate wishes. The video must be no less than one minute and no more than two minutes in length.",
            "A digital portfolio of images and writing using Word, Canva, PowerPoint or any other suitable software of the applicant's choice.",
          ],
        },
        {
          paragraph:
            "In the portfolio, applicants should clearly evidence and explain the reasons they wish to study their chosen subject and how they believe their studies can positively impact their lives in the future.",
        },
      ],
      englishLanguageRequirements: STANDARD_ENGLISH_REQUIREMENTS,
      additionalInfo: STANDARD_ADDITIONAL_INFO,
    },
    nonStandardRoute: STANDARD_NON_STANDARD_ROUTE,
    documentsRequired: STANDARD_DOCUMENTS_REQUIRED,
    courseSpecUrl: "#",
  },
  {
    slug: "ba-hons-fashion-media-and-marketing",
    title: "BA (Hons) Fashion Media and Marketing",
    school: "School of Fashion & Textiles",
    durationBadge: "3 Years",
    category: "Media",
    summary:
      "This programme provides students with a foundation in creative practice, integrating theoretical, practical, and technical elements.",
    description:
      "This programme provides students with a foundation in creative practice, integrating theoretical, practical, and technical elements. Students learn to communicate fashion ideas across editorial, social and campaign contexts, building a portfolio that spans styling, content and brand strategy.",
    thumbnail: "/images/course-couch-women.jpg",
    heroImages: [
      "/images/course-couch-women.jpg",
      "/images/course-graffiti-desk.jpg",
      "/images/watercolor-woman.jpg",
    ],
    courseInfo: {
      startDate: "September, January",
      duration: "3 Years",
      studyMode: "Full Time",
      locations: "Canary Wharf",
      tuitionFee: "£ 9535",
      awardingBody: "Arts University Plymouth",
    },
    structure: {
      foundation: foundationModules("FM"),
      first: coreModules("MM", "01", [
        [
          "Fashion Communication",
          "Core principles of visual storytelling for fashion brands, across print and digital.",
        ],
        [
          "Introduction to Marketing",
          "Brand strategy, audience research and campaign planning fundamentals.",
        ],
        [
          "Content Studio 1",
          "Hands-on shoot production: styling, art direction and editing.",
        ],
      ]),
      second: coreModules("MM", "02", [
        [
          "Digital & Social Strategy",
          "Planning and producing campaigns for social platforms, including paid and organic strategy.",
        ],
        [
          "Industry Collaboration Project",
          "A live brief with a fashion or media partner, delivered to a real deadline.",
        ],
        [
          "Content Studio 2",
          "A self-directed editorial or campaign project for a chosen brand identity.",
        ],
      ]),
      third: coreModules("MM", "03", [
        [
          "Critical & Contextual Studies",
          "A dissertation exploring a topic in fashion media, marketing or culture.",
        ],
        [
          "Professional Practice",
          "Building an agency-ready portfolio, showreel and personal brand.",
        ],
        [
          "Final Major Project",
          "A resolved campaign or publication presented at the graduate showcase.",
        ],
      ]),
    },
    admissions: {
      entryRequirements: [
        {
          paragraph:
            "64 UCAS tariff points (or above) or 60 Credit Ofqual qualification at Level 3.",
        },
        {
          bullets: [
            "For international qualifications, ECCTIS (formerly NARIC) will be used to establish equivalence to their comparable level in the UK.",
          ],
        },
        {
          heading:
            "All applicants must submit a personal 'portfolio', using any one of the following formats",
          bullets: [
            "A video or audio recording; using speech, animation, images, or any other appropriate content the candidate wishes. The video must be no less than one minute and no more than two minutes in length.",
            "A digital portfolio of images and writing using Word, Canva, PowerPoint or any other suitable software of the applicant's choice.",
          ],
        },
      ],
      englishLanguageRequirements: STANDARD_ENGLISH_REQUIREMENTS,
      additionalInfo: STANDARD_ADDITIONAL_INFO,
    },
    nonStandardRoute: STANDARD_NON_STANDARD_ROUTE,
    documentsRequired: STANDARD_DOCUMENTS_REQUIRED,
    courseSpecUrl: "#",
  },
  {
    slug: "ba-hons-graphic-design",
    title: "BA (Hons) Graphic Design",
    school: "School of Design",
    durationBadge: "3 Years",
    category: "Graphic Design",
    summary:
      "A studio-based course building skills across typography, branding, editorial and digital design.",
    description:
      "A studio-based course building skills across typography, branding, editorial and digital design. Students develop a rigorous design process — from research and concept through to finished, production-ready outcomes — while building the critical vocabulary to defend their decisions.",
    thumbnail: "/images/laptop-guy.jpg",
    heroImages: [
      "/images/laptop-guy.jpg",
      "/images/watercolor-woman.jpg",
      "/images/course-graffiti-desk.jpg",
    ],
    courseInfo: {
      startDate: "September, January",
      duration: "3 Years",
      studyMode: "Full Time",
      locations: "Canary Wharf, Borough",
      tuitionFee: "£ 9535",
      awardingBody: "Arts University Plymouth",
    },
    structure: {
      foundation: foundationModules("GD"),
      first: coreModules("GD", "01", [
        [
          "Typography",
          "The fundamentals of typesetting, hierarchy and layout across print and screen.",
        ],
        [
          "Visual Identity",
          "Designing logos, brand systems and guidelines for fictional and live briefs.",
        ],
        [
          "Design Studio 1",
          "Applied studio projects spanning editorial, packaging and digital design.",
        ],
      ]),
      second: coreModules("GD", "02", [
        [
          "Interaction & Motion",
          "Introducing motion graphics and interactive design principles for digital products.",
        ],
        [
          "Industry Collaboration Project",
          "A live brief set by a design studio or agency partner.",
        ],
        [
          "Design Studio 2",
          "A self-initiated project developing a distinct visual language.",
        ],
      ]),
      third: coreModules("GD", "03", [
        [
          "Critical & Contextual Studies",
          "A dissertation exploring a topic in design theory, culture or history.",
        ],
        [
          "Professional Practice",
          "Building a client-ready portfolio, case studies and freelance fundamentals.",
        ],
        [
          "Final Major Project",
          "A resolved body of work presented at the graduate showcase.",
        ],
      ]),
    },
    admissions: {
      entryRequirements: [
        {
          paragraph:
            "64 UCAS tariff points (or above) or 60 Credit Ofqual qualification at Level 3.",
        },
        {
          bullets: [
            "For international qualifications, ECCTIS (formerly NARIC) will be used to establish equivalence to their comparable level in the UK.",
          ],
        },
        {
          heading:
            "All applicants must submit a personal 'portfolio', using any one of the following formats",
          bullets: [
            "A video or audio recording; using speech, animation, images, or any other appropriate content the candidate wishes. The video must be no less than one minute and no more than two minutes in length.",
            "A digital portfolio of images and writing using Word, Canva, PowerPoint or any other suitable software of the applicant's choice.",
          ],
        },
      ],
      englishLanguageRequirements: STANDARD_ENGLISH_REQUIREMENTS,
      additionalInfo: STANDARD_ADDITIONAL_INFO,
    },
    nonStandardRoute: STANDARD_NON_STANDARD_ROUTE,
    documentsRequired: STANDARD_DOCUMENTS_REQUIRED,
    courseSpecUrl: "#",
  },
  {
    slug: "certhe-business-and-management",
    title: "CertHE Business & Management",
    school: "School of Business and Management",
    durationBadge: "1 Year",
    category: "Business",
    summary:
      "A one-year foundation in core business disciplines, ideal for students building toward a full degree.",
    description:
      "A one-year foundation in core business disciplines, ideal for students building toward a full degree. Students cover the essentials of management, marketing, finance and enterprise, developing the academic and professional skills needed to progress onto a BSc (Hons) route.",
    thumbnail: "/images/lecture-hall.png",
    heroImages: [
      "/images/lecture-hall.png",
      "/images/course-business-mgmt.jpg",
      "/images/course-office-hug.jpg",
    ],
    courseInfo: {
      startDate: "September",
      duration: "1 Year",
      studyMode: "Full Time",
      locations: "Canary Wharf",
      tuitionFee: "£ 8250",
      awardingBody: "Arts University Plymouth",
    },
    structure: {
      foundation: foundationModules("CH"),
      first: coreModules("CH", "01", [
        [
          "Principles of Management",
          "Core theories of organisational structure, leadership and decision-making.",
        ],
        [
          "Introduction to Marketing",
          "Foundational marketing theory, from market research to campaign planning.",
        ],
        [
          "Business Skills for Study",
          "Academic and professional skills: report writing, presentations and data literacy.",
        ],
      ]),
      second: [],
      third: [],
    },
    admissions: {
      entryRequirements: [
        {
          paragraph:
            "48 UCAS tariff points (or above), or relevant work experience considered on a case-by-case basis.",
        },
        {
          bullets: [
            "For international qualifications, ECCTIS (formerly NARIC) will be used to establish equivalence to their comparable level in the UK.",
          ],
        },
      ],
      englishLanguageRequirements: STANDARD_ENGLISH_REQUIREMENTS,
      additionalInfo: STANDARD_ADDITIONAL_INFO,
    },
    nonStandardRoute: STANDARD_NON_STANDARD_ROUTE,
    documentsRequired: STANDARD_DOCUMENTS_REQUIRED,
    courseSpecUrl: "#",
  },
  {
    slug: "bsc-hons-business-management",
    title: "BSc (Hons) Business Management",
    school: "School of Business and Management",
    durationBadge: "4 Years",
    category: "Business",
    summary:
      "The BSc (Hons) in Business Management at Victoria College of Arts and Design blends creative thinking with real-world business skills.",
    description:
      "The BSc (Hons) in Business Management at Victoria College of Arts and Design blends creative thinking with real-world business skills. Students build a grounding in management, finance and strategy alongside the collaborative, entrepreneurial mindset that comes from studying inside a creative college.",
    thumbnail: "/images/course-business-mgmt.jpg",
    heroImages: [
      "/images/course-business-mgmt.jpg",
      "/images/course-office-hug.jpg",
      "/images/lecture-hall.png",
    ],
    courseInfo: {
      startDate: "November, February",
      duration: "4 Years",
      studyMode: "Full Time",
      locations: "Canary Wharf",
      tuitionFee: "£ 9535",
      awardingBody: "Arts University Plymouth",
    },
    structure: {
      foundation: foundationModules("BM"),
      first: coreModules("BM", "01", [
        [
          "Principles of Management",
          "Core theories of organisational structure, leadership and decision-making.",
        ],
        [
          "Financial Fundamentals",
          "An introduction to accounting, budgeting and financial decision-making.",
        ],
        [
          "Business Skills for Study",
          "Academic and professional skills: report writing, presentations and data literacy.",
        ],
      ]),
      second: coreModules("BM", "02", [
        [
          "Marketing Strategy",
          "Developing and evaluating marketing strategy across sectors and channels.",
        ],
        [
          "Industry Collaboration Project",
          "A live consultancy-style brief set by a business partner.",
        ],
        [
          "Operations & Enterprise",
          "Operations management and the fundamentals of launching a new venture.",
        ],
      ]),
      third: coreModules("BM", "03", [
        [
          "Strategic Management",
          "Analysing competitive strategy and organisational change at a senior level.",
        ],
        [
          "Professional Practice & Placement",
          "A work placement or consultancy project building industry-ready experience.",
        ],
        [
          "Final Major Project",
          "A dissertation or business plan resolving a self-directed research question.",
        ],
      ]),
    },
    admissions: {
      entryRequirements: [
        {
          paragraph:
            "80 UCAS tariff points (or above) or 60 Credit Ofqual qualification at Level 3.",
        },
        {
          bullets: [
            "For international qualifications, ECCTIS (formerly NARIC) will be used to establish equivalence to their comparable level in the UK.",
          ],
        },
        {
          heading: "Applicants are also asked to submit one of the following",
          bullets: [
            "A short written personal statement outlining their interest in business and management.",
            "A record of relevant work experience or extracurricular enterprise activity.",
          ],
        },
      ],
      englishLanguageRequirements: STANDARD_ENGLISH_REQUIREMENTS,
      additionalInfo: STANDARD_ADDITIONAL_INFO,
    },
    nonStandardRoute: STANDARD_NON_STANDARD_ROUTE,
    documentsRequired: STANDARD_DOCUMENTS_REQUIRED,
    courseSpecUrl: "#",
  },
];

const SIMULATED_DELAY_MS = 700;

export async function getCourses(): Promise<Course[]> {
  await new Promise((resolve) => setTimeout(resolve, SIMULATED_DELAY_MS));
  return courses;
}

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((course) => course.slug === slug);
}

export function getAllCourseSlugs(): string[] {
  return courses.map((course) => course.slug);
}
