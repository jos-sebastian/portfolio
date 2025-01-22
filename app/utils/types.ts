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
