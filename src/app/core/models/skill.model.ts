export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'tools';
  icon?: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}
