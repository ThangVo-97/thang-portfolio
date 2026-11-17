// All portfolio content lives here. Edit this file to update the site.

export type Link = { label: string; href: string };

export type Project = {
  name: string;
  period: string;
  role: string;
  teamSize: string;
  summary: string;
  highlights: string[];
  stack: string[];
};

export type Job = {
  company: string;
  title: string;
  period: string;
  projects: Project[];
};

export type PersonalProject = {
  name: string;
  summary: string;
  stack: string[];
  links: Link[];
};

export const profile = {
  name: "Võ Đình Thắng",
  nameAscii: "Vo Dinh Thang",
  title: "Full-stack Developer",
  location: "Ho Chi Minh City, Vietnam",
  email: "vodinhthang26@gmail.com",
  cvPath: "/cv-vo-dinh-thang.pdf",
  headlineStack: ["React", "Next.js", "TypeScript", "Node.js", "Java · Spring Boot"],
  summary:
    "Full-stack Developer with 6+ years of experience building production web applications with React, Next.js, TypeScript and Node.js, currently developing banking systems at Galaxy Finx. Experienced in designing reusable components and APIs, integrating services and optimizing performance, as well as leading implementation, reviewing code and mentoring developers.",
  socials: [
    { label: "GitHub", href: "https://github.com/ThangVo-97" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/thang-vo-dinh/" },
  ] satisfies Link[],
  facts: [
    { value: "6+", label: "years building production web apps" },
    { value: "3", label: "companies: TMA, Titan, Galaxy Finx" },
    { value: "2", label: "banking systems currently in development" },
  ],
};

export const skills: { group: string; items: string[] }[] = [
  { group: "Core", items: ["React", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Responsive layouts"] },
  { group: "Frameworks & State", items: ["Next.js", "React Native", "Redux", "Redux Toolkit"] },
  { group: "Architecture", items: ["Reusable component libraries", "Monorepo", "REST API integration", "API contract design"] },
  { group: "Performance", items: ["React DevTools Profiler", "Chrome DevTools", "Re-render optimization", "Image optimization"] },
  { group: "Backend & Database", items: ["Node.js", "Java", "Spring Boot", "Jmix", "Microservices", ".NET", "PostgreSQL", "SQL Server", "MySQL"] },
  { group: "Tooling & DevOps", items: ["Git", "GitHub Actions", "CI/CD", "Jira", "Azure DevOps", "Figma", "Postman"] },
  { group: "AI-assisted development", items: ["Claude Code"] },
];

export const experience: Job[] = [
  {
    company: "Galaxy Finx",
    title: "Front-end Developer",
    period: "Oct 2024 – Present",
    projects: [
      {
        name: "Back Office Portal for Vikki Bank",
        period: "Oct 2024 – Present",
        role: "Front-end developer",
        teamSize: "8 members",
        summary:
          "Internal operations applications used by the bank's operations team, built with Next.js on Nuclent – a low-code platform where React components are assembled by drag-and-drop and business logic is modeled as visual flows.",
        highlights: [
          "Built reusable React components for the platform's component library, used to compose back-office screens across features",
          "Profiled rendering bottlenecks with React DevTools Profiler and Chrome DevTools, then eliminated unnecessary re-renders and optimized image assets",
          "Designed APIs and wrote API contracts with backend engineers, then integrated them into the frontend",
          "Used Claude Code for AI-assisted development while keeping all changes under normal code review",
        ],
        stack: ["Next.js", "React", "Nuclent", "GitHub Actions", "Jira"],
      },
      {
        name: "Happy Portal",
        period: "Apr 2025 – Present",
        role: "Full-stack developer",
        teamSize: "4 members",
        summary: "Banking system used by branch counter staff, covering customer, KYC and daily operations workflows.",
        highlights: [
          "Developed features across the CMD, KYC and Operations modules",
          "Integrated the system with the company's existing banking platforms in a microservices architecture",
          "Built data management screens and improved screen load times",
        ],
        stack: ["Java", "Spring Boot", "Jmix", "PostgreSQL", "Microservices"],
      },
    ],
  },
  {
    company: "Titan Technology Corporation",
    title: "Front-end Developer",
    period: "Jun 2022 – Oct 2024",
    projects: [
      {
        name: "Levia",
        period: "Jun 2022 – Oct 2024",
        role: "Full-stack developer",
        teamSize: "12 members, within a 700+ member organization",
        summary: "An audit-industry web application built with React and .NET.",
        highlights: [
          "Collaborated daily in English with an India-based team on requirements, implementation and code review",
          "Developed features in a monorepo, sharing components, types and utilities across multiple frontend apps",
          "Managed application state and data flow with Redux and Redux Toolkit",
          "Developed web services and unit tests on the .NET backend",
        ],
        stack: ["React", "Redux Toolkit", ".NET", "SQL Server", "Azure DevOps"],
      },
    ],
  },
  {
    company: "TMA Solutions",
    title: "Front-end Developer",
    period: "Jun 2020 – Jun 2022",
    projects: [
      {
        name: "Collabos",
        period: "Dec 2021 – Jun 2022",
        role: "Front-end developer",
        teamSize: "23 members",
        summary:
          "Call-center web application: administrators call customers, write memos, and monitor call status and incoming calls in real time.",
        highlights: [
          "Architected and led the implementation of frontend solutions as the team's frontend point of contact",
          "Established coding standards through code review and mentored junior developers",
          "Structured application state and data flow with Redux and Redux Toolkit",
        ],
        stack: ["React", "Redux", "JavaScript", "GitLab"],
      },
      {
        name: "One App",
        period: "Dec 2020 – Dec 2021",
        role: "Mobile developer",
        teamSize: "15 members",
        summary: "Mobile application for calling, meeting and chatting with people locally and globally.",
        highlights: ["Developed features and fixed bugs in a React Native + TypeScript codebase"],
        stack: ["React Native", "TypeScript"],
      },
      {
        name: "Longhorn",
        period: "Jun 2020 – Dec 2020",
        role: "Front-end developer",
        teamSize: "12 members",
        summary: "Hybrid mobile web application (React + Cordova) that guides users along their route.",
        highlights: ["Implemented new features and fixed bugs for the mobile web app"],
        stack: ["React", "Cordova"],
      },
    ],
  },
];

// Add your own projects here (e.g. your Node.js + PostgreSQL project).
// Each entry renders as a card in the "Projects" section.
export const personalProjects: PersonalProject[] = [
  {
    name: "This portfolio",
    summary:
      "Statically exported Next.js site with accessible, semantic markup, SEO metadata and JSON-LD, end-to-end tests with Playwright and a GitHub Actions CI pipeline.",
    stack: ["Next.js", "TypeScript", "CSS Modules", "Playwright", "GitHub Actions"],
    links: [{ label: "Source code", href: "https://github.com/ThangVo-97" }],
  },
];

export const education = {
  school: "University of Information Technology (UIT) – VNU-HCM",
  degree: "Engineer's Degree in Software Engineering",
  period: "2015 – 2020",
};
