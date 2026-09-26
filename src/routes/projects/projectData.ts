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
    title: "Vantablock",
    year: 2025,
    technologies: ["Rust", "WGPU", "WGSL", "Nix"],
    links: [
      {
        title: "Github repo",
        url: "https://github.com/masoniis/vantablock",
      },
    ],
  },
  {
    title: "Object Overflow",
    year: 2025,
    technologies: ["TS", "Svelte", "Tailwind"],
    links: [
      {
        title: "Live site",
        url: "https://object-overflow.vercel.app/",
      },
      {
        title: "Github repo",
        url: "https://github.com/masoniis/object-overflow",
      },
    ],
  },
  {
    title: "Obsidian Syncable Dictionary",
    year: 2025,
    technologies: ["TS"],
    links: [
      {
        title: "Github repo",
        url: "https://github.com/masoniis/obsidian-syncable-dictionary",
      },
    ],
  },
  {
    title: "ExpenseShare",
    year: 2024,
    technologies: ["JS", "ExpressJS", "Handlebars", "PostgreSQL", "Docker"],
    links: [
      {
        title: "Github repo",
        url: "https://github.com/avery-wagner/ExpenseShare",
      },
    ],
  },
  {
    title: "masonixOS",
    year: 2024,
    technologies: ["Nix"],
    links: [
      {
        title: "Github repo",
        url: "https://github.com/masoniis/masonixOS",
      },
    ],
  },
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
    technologies: ["HTML", "CSS", "TS", "Tailwind", "Svelte"],
    links: [
      {
        title: "Live site",
        url: "https://masonbott.com/",
      },
      {
        title: "Github repo",
        url: "https://github.com/masoniis/sortfolio",
      },
    ],
  },
  {
    title: "Sedmos",
    year: 2024,
    technologies: ["HTML", "CSS", "TS", "Tailwind", "Svelte"],
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
    year: 2024,
    technologies: ["Rust"],
    links: [{ title: "Github repo", url: "https://github.com/masoniis/rush" }],
  },
  {
    title: "QuantumChart",
    year: 2022,
    technologies: ["HTML", "CSS", "JS", "Svelte"],
    links: [
      { title: "Live site", url: "https://quantumchart.vercel.app/" },
      {
        title: "Github repo",
        url: "https://github.com/masoniis/quantum-chart",
      },
    ],
  },
  {
    title: "Cubic",
    year: 2022,
    technologies: ["Svelte"],
    links: [
      { title: "Live site", url: "https://cubiconline.vercel.app/" },
      {
        title: "Github repo",
        url: "https://github.com/masoniis/Cubic",
      },
    ],
  },
];
