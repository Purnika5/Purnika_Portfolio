export type ProjectCategory = 'all' | 'ai-ml' | 'backend-systems';

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface CodeSnippet {
  filename: string;
  language: string;
  code: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'ai-ml' | 'backend-systems';
  description: string;
  fullDescription: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  paperUrl?: string;
  liveUrl?: string;
  highlights: string[];
  metrics: ProjectMetric[];
  architecture: string[];
  codeSnippet?: CodeSnippet;
  featured: boolean;
}

export interface SkillItem {
  name: string;
  tag: string;
  iconName: string;
  context: string;
}

export interface SkillGroup {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location?: string;
  period: string;
  badge: string;
  badgeColor?: string;
  description: string;
  points: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  organization: string;
  category: 'hackathon' | 'kaggle' | 'leadership' | 'research';
  badge: string;
  badgeColor: string;
  stat?: string;
  statLabel?: string;
  description: string;
  impactPoints: string[];
  link?: {
    text: string;
    url: string;
  };
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  category: string;
  badgeText: string;
  badgeColor: string;
  description: string;
  skillsGained: string[];
  status: string;
}
