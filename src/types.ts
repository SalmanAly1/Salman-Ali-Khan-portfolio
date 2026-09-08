export interface ProjectScreen {
  id: string;
  title: string;
  type: 'hero' | 'floating' | 'full' | 'mobile';
  description: string;
  screenType: 'browser' | 'phone';
}

export interface FrontendProject {
  id: string;
  number: string;
  year: string;
  title: string;
  subtitle: string;
  typeTag: 'WEB APP' | 'MOBILE APP';
  category: string;
  projectType: 'REAL PRODUCTION' | 'PRODUCTION PWA';
  role: string;
  description: string;
  problem: string;
  approach: string;
  features: string[];
  technologies: string[];
  process: {
    step: string;
    title: string;
    description: string;
  }[];
  metrics: {
    label: string;
    value: string;
  }[];
  githubUrl?: string;
  liveUrl?: string;
  screens: {
    id: string;
    title: string;
    badge: string;
    description: string;
  }[];
}

export interface UiUxFigmaProject {
  id: string;
  number: string;
  title: string;
  tagline: string;
  projectTypeTag: string;
  category: string;
  clientOrContext: string;
  role?: string;
  tools?: string[];
  overview: string;
  uxChallenge: string;
  designApproach: string;
  keyFeatures?: string[];
  previewMockupType?: 'multi-phone' | 'browser-dashboard' | 'saas-workspace' | 'ecommerce-editorial';
  userFlow: {
    step: number;
    name: string;
    detail: string;
  }[];
  uiSystem: {
    palette: { name: string; hex: string; role: string }[];
    typography: string;
    grid: string;
    principles: string[];
  };
  keyScreens: {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    device: 'phone' | 'browser' | 'tablet' | 'laptop';
    imageUrl?: string;
    screenBadge?: string;
  }[];
  designDecisions: {
    title: string;
    rationale: string;
  }[];
  responsiveConsiderations: string;
  statusBadge: string;
}

export interface WordPressProject {
  id: string;
  number: string;
  title: string;
  tagline: string;
  websiteType: 'PREMIUM E-COMMERCE' | 'LUXURY HOTEL & RESORT' | 'CREATIVE AGENCY';
  category: string;
  clientContext: string;
  role: string;
  overview: string;
  challenge: string;
  approach: string;
  keyFeatures: string[];
  cmsStack: string[];
  pages: {
    id: string;
    name: string;
    label: string;
    description: string;
    previewType?: 'homepage' | 'shop-archive' | 'single-product' | 'cart' | 'checkout' | 'standard';
    heroImage?: string;
  }[];
  visualAssets: {
    heroImage: string;
    gridImages: string[];
    detailImage: string;
  };
  outcome: string;
}

export interface AiProject {
  id: string;
  number: string;
  title: string;
  tagline: string;
  category: string;
  projectTypeBadge: string;
  overview: string;
  problem: string;
  uxApproach: string;
  keyFeatures: string[];
  aiArchitecture: {
    modelStrategy: string;
    humanInTheLoop: string;
    guardrails: string;
    telemetry: string;
  };
  screens: {
    id: string;
    title: string;
    badge: string;
    description: string;
    visualType: 'agent-graph' | 'approval-drawer' | 'telemetry-dashboard' | 'copilot-workbench' | 'knowledge-radar' | 'guardrail-matrix';
    keyMetrics?: { label: string; value: string }[];
  }[];
  techStack: string[];
  pythonLayer?: string;
}

export interface Project {
  id: string;
  number: string;
  year?: string;
  title: string;
  category: string;
  projectType: 'REAL PROJECT' | 'CONCEPT PROJECT' | 'UI/UX CONCEPT';
  isRealProject: boolean;
  role: string;
  description: string;
  fullCaseStudy: string;
  challenge?: string;
  solution?: string;
  approach?: string;
  impact?: string;
  designGoal?: string;
  technologies: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  statusBadge: string;
  keyFeatures: string[];
  screens: ProjectScreen[];
}

export interface UiUxConcept {
  id: string;
  number: string;
  title: string;
  tagline: string;
  category: string;
  description: string;
  designGoal: string;
  focus: string[];
  screens: {
    id: string;
    title: string;
    description: string;
  }[];
}

export interface MetricItem {
  id: string;
  value: string;
  label: string;
  subtext: string;
}

export interface ExperienceItem {
  period: string;
  company: string;
  role: string;
  achievements: string[];
  technologies: string[];
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    meta: string;
    description: string;
    projectLinks?: string[];
  }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
}

export interface CertificationItem {
  issuer: string;
  year: string;
  title: string;
  description: string;
}
