export interface Link {
  title: string;
  url: string;
}

export interface Project {
  title: string;
  year: number;
  technologies: string[];
  links: Link[];
}

export let projectData: Project[] = [
  {
    title: "Sonders",
    year: 2024,
    technologies: ["GLSL"],
    links: [
      {
        title: "Github repo",
        url: "https://github.com/masoniis/sonders",
      },
    ],
  },
  {
    title: "Portfolio V1",
    year: 2024,
    technologies: ["HTML", "CSS", "TS", "Tailwind", "SvelteKit"],
    links: [
      {
        title: "Live site",
        url: "https://masonbott.com/",
      },
      {
        title: "Github repo",
        url: "https://github.com/masoniis/portfolio",
      },
    ],
  },
  {
    title: "Sedmos",
    year: 2024,
    technologies: ["HTML", "CSS", "TS", "Tailwind"],
    links: [
      {
        title: "Live site",
        url: "https://sedmos.vercel.app/",
      },
      {
        title: "Github repo",
        url: "https://github.com/hammermonkeys/sedmos",
      },
    ],
  },
  {
    title: "Rush",
    year: 2023,
    technologies: ["Rust"],
    links: [{ title: "Github repo", url: "https://github.com/masoniis/rush" }],
  },
  {
    title: "QuantumChart",
    year: 2019,
    technologies: ["HTML", "CSS", "JS"],
    links: [
      { title: "Live site", url: "https://quantumchart.vercel.app/" },
      {
        title: "Github repo",
        url: "https://github.com/masoniis/quantum-chart",
      },
    ],
  },
];
