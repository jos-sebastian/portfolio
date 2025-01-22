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
      "Provided tutoring to university students on a wide range of math topics, from algebra to calculus.",
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
      "Developed a high-fidelity path tracing renderer to accurately simulate light physics, modeling global illumination to generate photorealistic images.",
  },
  {
    project: "Graphics Engine",
    description:
      "Created a real-time graphics engine featuring physically-based rendering, emulating complex scenes with realistic lighting, shadows, and materials.",
  },
  {
    project: "Personal Library",
    description:
      "Developed a full-stack, cross-platform application to efficiently track, manage, and organize personal book collections for desktop, mobile, and web platforms.",
  },
];

export const portfolio: Portfolio = {
  about: about,
  education: educations,
  experiences: experiences,
  skills: skills,
  projects: projects,
};
