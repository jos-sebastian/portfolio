export type About = {
  name: string;
  title: string;
  description: string;
};

export type Education = {
  time: {
    start: string;
    end: string;
  };
  degree: string;
  discipline: string;
  school: string;
};

export type Experience = {
  time: {
    start: string;
    end: string;
  };
  position: string;
  company: string;
  description: string;
};

export type Skill = {
  skill: string;
  subskills: string[];
};

export type Project = {
  project: string;
  description: string;
};

export type Portfolio = {
  about: About;
  education: Education[];
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
};
