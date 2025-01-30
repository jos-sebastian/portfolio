const about: About = {
  name: "Jos Sebastian",
  title: "Computer Engineer",
  description: "",
};

const educations: Education[] = [
  {
    time: {
      start: "August 2021",
      end: "May 2025",
    },
    degree: "Bachelor of Science",
    discipline: "Computer Engineering",
    school: "Texas A&M University",
  },
];

const experiences: Experience[] = [
  {
    time: {
      start: "August 2021",
      end: "May 2025",
    },
    position: "Mathematics Tutor",
    company: "Texas A&M University",
    description:
      "Provided tutoring to university students on a variety of math topics, ranging from algebra to calculus.",
  },
];

const skills: Skill[] = [
  {
    skill: "C++",
    subskills: ["OpenGL", "GLSL", "Vulkan", "CUDA"],
  },
  {
    skill: "Python",
    subskills: ["PyTorch", "Pandas", "NumPy", "Matplotlib"],
  },
  {
    skill: "Rust",
    subskills: ["Tauri"],
  },
  {
    skill: "SQL",
    subskills: ["PostgreSQL"],
  },
  {
    skill: "JavaScript",
    subskills: ["React", "Vue", "NodeJS", "TypeScript", "WebGL", "WebGPU"],
  },
  {
    skill: "HTML",
    subskills: [],
  },
  {
    skill: "CSS",
    subskills: ["TailwindCSS"],
  },
  {
    skill: "Git",
    subskills: ["GitHub"],
  },
];

const projects: Project[] = [
  {
    project: "Path Tracer",
    description:
      "Developed a high-fidelity path tracing renderer to generate photorealistic images, modeling global illumination by accurately simulating the physics of light.",
  },
  {
    project: "Graphics Engine",
    description:
      "Developed a real-time graphics engine featuring physically-based rendering, emulating scenes with realistic lighting, shadows, and materials.",
  },
  {
    project: "Personal Library",
    description:
      "Developed a full-stack cross-platform application to efficiently organize personal collections of books or other kinds of media for desktop, mobile, and web platforms.",
  },
];

export const portfolio: Portfolio = {
  about: about,
  education: educations,
  experiences: experiences,
  skills: skills,
  projects: projects,
};
