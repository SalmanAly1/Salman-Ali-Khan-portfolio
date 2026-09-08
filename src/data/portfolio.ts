import { Project, MetricItem, ExperienceItem, EducationItem, CertificationItem, UiUxConcept, FrontendProject, UiUxFigmaProject, WordPressProject, AiProject } from '../types';

export const PERSONAL_INFO = {
  name: 'SALMAN ALI KHAN',
  firstName: 'SALMAN',
  lastName: 'ALI KHAN',
  headline: 'UI/UX DESIGNER | REACT FRONTEND DEVELOPER',
  role: 'UI/UX Designer & React Frontend Developer',
  location: 'Hyderabad, Pakistan',
  status: 'OPEN TO REMOTE WORK',
  availability: 'AVAILABLE FOR REMOTE WORK',
  email: 'salmanalyy101@gmail.com',
  phone: '03330265927',
  githubUrl: 'https://github.com/SalmanAly1',
  linkedinUrl: 'https://www.linkedin.com/in/salman-aly1-b4588b315/',
  summary:
    'UI/UX Designer and React Frontend Developer with 3+ years of professional experience building responsive, high-performance web applications and designing intuitive user experiences. Skilled in React, JavaScript (ES6+), Figma, REST APIs, and performance optimization. Open to remote and international opportunities.',
  manifesto:
    'I DESIGN DIGITAL EXPERIENCES AND BUILD THEM INTO HIGH-PERFORMANCE PRODUCTS.',
  subManifesto:
    'I combine UI/UX thinking with frontend development to create digital products that are visually refined, responsive and functional.',
};

export const METRICS: MetricItem[] = [
  {
    id: 'exp',
    value: '3+',
    label: 'YEARS EXPERIENCE',
    subtext: 'Product UI/UX design & modern React frontend background.',
  },
  {
    id: 'screens',
    value: '50+',
    label: 'HIGH-FIDELITY SCREENS',
    subtext: 'Component-driven UI screens and interactive prototypes.',
  },
  {
    id: 'disciplines',
    value: '03',
    label: 'CORE DISCIPLINES',
    subtext: 'UI/UX Design, React Frontend, and Bespoke WordPress.',
  },
  {
    id: 'standards',
    value: '100%',
    label: 'RESPONSIVE QUALITY',
    subtext: 'Fluid multi-device parity across mobile, tablet, and desktop.',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'chauffeur',
    number: '01',
    year: '2023',
    title: 'LUXURY CHAUFFEUR BOOKING PLATFORM',
    category: 'UI/UX DESIGN · REACT DEVELOPMENT',
    projectType: 'REAL PROJECT',
    isRealProject: true,
    role: 'Frontend Developer & UI/UX Designer',
    description:
      'A full-featured chauffeur booking platform featuring real-time ride tracking, interactive Google Maps location services, and seamless reservation workflows.',
    fullCaseStudy:
      'Led the frontend development of an end-to-end luxury chauffeur booking platform at Pixxel House. Integrated Google Maps API for real-time ride tracking and dynamic route calculations, and implemented Stripe for secure payment processing. The application supported 500+ bookings per week in production and achieved a 4.8/5 user satisfaction rating with a 95+ Lighthouse performance score.',
    challenge:
      'Designing a premium booking flow that simplifies complex multi-step reservations, real-time vehicle selection, and location waypoints on both mobile and desktop screens without cognitive overload.',
    solution:
      'Built a component-driven React application with decoupled state management, intuitive progressive disclosure steps, Google Maps API integration for live mapping, and Stripe checkout verification.',
    approach:
      'Began with Figma wireframes prioritizing one action per screen, created an interactive prototype to test booking friction, then engineered modular React components with custom hooks for GPS tracking.',
    impact:
      'The platform scaled to handle 500+ bookings weekly with 4.8/5 user satisfaction feedback and 95+ Lighthouse audit scores across mobile and desktop.',
    technologies: ['React.js', 'Google Maps API', 'Stripe', 'REST APIs', 'Tailwind CSS'],
    metrics: [
      { label: 'WEEKLY BOOKINGS', value: '500+' },
      { label: 'CLIENT RATING', value: '4.8 / 5.0' },
      { label: 'LIGHTHOUSE SCORE', value: '95+' },
      { label: 'STATUS', value: 'Production App' },
    ],
    githubUrl: 'https://github.com/SalmanAly1/luxury-chauffeur-app',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD9k9jA9SD00LmXG4R7pHp88PXLk3Xesp5xr89fGYUR49VUsa5h1KTOVZmzMNHYmrlFn3QxN2axcoVz6DDhnNEkmGCWxmnl1Rtbj3ofTHEdvFeVFP7XdLhUw9wzfqHF1g9LUyUlBzMyDWEjk-VYYkTfKYwcH1OXzoh88qraW3PIYDqyNaqDENrbky_rze0r0XbnVFK3-y1wSKzn1u3_PKsP2YsH3w-NKm8HfaJQsaagMM8sNP-_zvkh',
    statusBadge: 'REAL PRODUCTION PROJECT',
    keyFeatures: [
      'Real-time booking and vehicle reservation flow',
      'Google Maps API integration with live location tracking',
      'Stripe checkout integration for secure payment processing',
      'Fully responsive mobile and desktop booking interface',
      'Real-time ride tracking with clear dispatch status',
    ],
    screens: [
      {
        id: 'screen-1',
        title: 'Main Reservation & Fleet Selection',
        type: 'hero',
        screenType: 'browser',
        description: 'Interactive map interface with real-time luxury vehicle class selection, route duration, and dynamic rate estimates.',
      },
      {
        id: 'screen-2',
        title: 'Passenger Details & Scheduling',
        type: 'floating',
        screenType: 'browser',
        description: 'Multi-step scheduling modal with flight number detection and luggage specification.',
      },
      {
        id: 'screen-3',
        title: 'Secure Checkout & Payment Verification',
        type: 'full',
        screenType: 'browser',
        description: 'Stripe-powered checkout modal with invoice generation and instant SMS confirmation dispatch.',
      },
      {
        id: 'screen-4',
        title: 'Mobile Driver Dispatch & Live Waypoints',
        type: 'mobile',
        screenType: 'phone',
        description: 'Responsive smartphone interface for tracking driver arrival in real time with quick contact triggers.',
      },
    ],
  },
  {
    id: 'nexus-analytics',
    number: '02',
    year: '2024',
    title: 'NEXUS ANALYTICS',
    category: 'FRONTEND · WEB APP · CONCEPT',
    projectType: 'CONCEPT PROJECT',
    isRealProject: false,
    role: 'Lead UI/UX & Frontend Architecture (Concept Exploration)',
    description:
      'A conceptual business intelligence web application designed for teams to monitor revenue, customer cohort growth, and high-frequency operational metrics.',
    fullCaseStudy:
      'Nexus Analytics is a personal design and frontend exploration investigating how complex analytical datasets—such as recurring revenue breakdowns, user retention matrices, and real-time query metrics—can be presented with typographic discipline, zero visual clutter, and accessible responsive layouts. This is a personal exploration, not in production.',
    challenge:
      'Avoiding the generic look of conventional SaaS admin dashboards, which are often overloaded with flashy gradients, nested cards, and unreadable dense tables.',
    solution:
      'Developed a modular component hierarchy paired with clean typographic scale, generous negative space, synchronized crosshair charts, and an accessible high-contrast palette.',
    approach:
      'Defined strict tabular typography scales and minimal monospaced metrics, then engineered reusable React charting components with sorting, filtering, and responsive state wrappers.',
    designGoal:
      'Demonstrate how Swiss-style grid systems and strict component modularity elevate enterprise SaaS analytics into an editorial, high-performance web experience.',
    technologies: ['React.js', 'JavaScript (ES6+)', 'REST APIs', 'Component Architecture', 'Data Visualization', 'Tailwind CSS'],
    metrics: [
      { label: 'SCOPE', value: 'Personal Exploration' },
      { label: 'STATUS', value: 'Not in Production' },
      { label: 'DESIGN SYSTEM', value: 'Swiss Minimalist' },
      { label: 'ARCHITECTURE', value: 'Modular React' },
    ],
    githubUrl: 'https://github.com/SalmanAly1',
    imageUrl:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80',
    statusBadge: 'CONCEPT EXPLORATION',
    keyFeatures: [
      'Interactive executive analytics dashboard with live revenue metrics',
      'Cohort retention matrices and user activity velocity charts',
      'Filterable, sortable responsive data tables with keyboard navigation',
      'Refined typographic hierarchy inspired by Swiss editorial principles',
      'Responsive desktop, tablet, and mobile interface parity',
    ],
    screens: [
      {
        id: 'screen-1',
        title: 'Executive Intelligence & Revenue Stream',
        type: 'hero',
        screenType: 'browser',
        description: 'Main overview screen showing annualized run-rate, active subscriber velocity, and MRR expansion graphs.',
      },
      {
        id: 'screen-2',
        title: 'Customer Cohort & Retention Analysis',
        type: 'floating',
        screenType: 'browser',
        description: 'Interactive retention grid with heatmap coloring and time-slice filtering.',
      },
      {
        id: 'screen-3',
        title: 'High-Frequency Performance & Query Inspector',
        type: 'full',
        screenType: 'browser',
        description: 'Sortable transaction data table with search filters and column toggle controls.',
      },
      {
        id: 'screen-4',
        title: 'Mobile Executive Snapshot View',
        type: 'mobile',
        screenType: 'phone',
        description: 'Compact mobile dashboard presenting primary KPIs with sparklines and swipeable date ranges.',
      },
    ],
  },
  {
    id: 'nomad',
    number: '03',
    year: '2024',
    title: 'NOMAD TRAVEL PLATFORM',
    category: 'REACT · TRAVEL · CONCEPT',
    projectType: 'CONCEPT PROJECT',
    isRealProject: false,
    role: 'Frontend Developer & UI/UX Designer (Concept Exploration)',
    description:
      'An editorial travel discovery and itinerary planning platform where explorers curate journeys, save cultural landmarks, and build synchronized daily schedules.',
    fullCaseStudy:
      'Nomad is a conceptual travel planning platform uniting the visual romance of an editorial travel publication with the functional precision of modern itinerary software. Designed with asymmetrical typography, generous margins, and subtle 3D card perspective, this personal exploration demonstrates how storytelling and transactional product design can harmoniously coexist. This is an independent concept study, not deployed to production.',
    challenge:
      'Balancing large-format editorial photography with structured trip planning tools (day-by-day itineraries, waypoint notes, budget trackers) without compromising speed or clarity.',
    solution:
      'Constructed an asymmetric layout system using CSS Grid and React state machines, enabling users to seamlessly transition from browsing inspiration to drag-and-drop itinerary creation.',
    approach:
      'Explored editorial magazine layouts in Figma, then implemented a responsive component system with fluid aspect ratios, smooth view transitions, and persistent local state management.',
    designGoal:
      'Prove that travel tools can feel sophisticated and visually breathtaking without sacrificing the practical utility of planning complex multi-city trips.',
    technologies: ['React.js', 'JavaScript (ES6+)', 'REST APIs', 'Asymmetrical Grid', 'Component Architecture', 'Tailwind CSS'],
    metrics: [
      { label: 'SCOPE', value: 'Personal Exploration' },
      { label: 'STATUS', value: 'Not in Production' },
      { label: 'LAYOUT', value: 'Asymmetrical Grid' },
      { label: 'INTERACTION', value: 'Interactive Planning' },
    ],
    githubUrl: 'https://github.com/SalmanAly1',
    imageUrl:
      'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1600&q=80',
    statusBadge: 'CONCEPT EXPLORATION',
    keyFeatures: [
      'Destination curation with high-resolution imagery and cultural briefs',
      'Interactive day-by-day itinerary builder with time-slot allocations',
      'Saved places collection with geographical tags and custom collections',
      'Asymmetrical editorial typography paired with modern digital UI controls',
      'Responsive layout optimized for inspiration on desktop and logistics on mobile',
    ],
    screens: [
      {
        id: 'screen-1',
        title: 'Editorial Discovery & Curated Guides',
        type: 'hero',
        screenType: 'browser',
        description: 'Immersive landing view spotlighting regional discoveries, climate cues, and cultural itineraries.',
      },
      {
        id: 'screen-2',
        title: 'Destination Detail & Waypoint Notes',
        type: 'floating',
        screenType: 'browser',
        description: 'Destination deep-dive featuring local highlights, architectural landmarks, and curated restaurant spots.',
      },
      {
        id: 'screen-3',
        title: 'Interactive Multi-Day Itinerary Planner',
        type: 'full',
        screenType: 'browser',
        description: 'Split-screen itinerary workspace coordinating daily activity schedules with transit duration estimations.',
      },
      {
        id: 'screen-4',
        title: 'On-the-Go Mobile Companion View',
        type: 'mobile',
        screenType: 'phone',
        description: 'Handheld trip view providing quick access to booked passes, offline notes, and next waypoint directions.',
      },
    ],
  },
];

export const UI_UX_CONCEPTS: UiUxConcept[] = [
  {
    id: 'aura',
    number: '01',
    title: 'AURA',
    tagline: 'Mindful Wellness & Daily Rhythm',
    category: 'MOBILE APP · UI/UX CONCEPT',
    description:
      'A mobile wellness and habit architecture concept designed around circadian rhythms, mindful reflections, and quiet micro-interactions.',
    designGoal:
      'Explore minimal, calm interface systems that reduce screen stress while maintaining high engagement through intuitive physical touch metaphors.',
    focus: ['UX Hierarchy', 'Visual Consistency', 'Micro-Interactions', 'Circadian Theming'],
    screens: [
      {
        id: 'aura-1',
        title: 'Calm Onboarding',
        description: 'Minimalist baseline questionnaire assessing personal circadian peaks and quiet meditation goals with zero clutter.',
      },
      {
        id: 'aura-2',
        title: 'Daily Flow Home',
        description: 'Dynamic time-of-day interface transitioning from dawn light to evening obsidian, highlighting a single daily intention.',
      },
      {
        id: 'aura-3',
        title: 'Tactile Habit Tracker',
        description: 'Circular progress gesture ring allowing one-touch ritual completion with subtle haptic vibration cues.',
      },
      {
        id: 'aura-4',
        title: 'Reflective Insights',
        description: 'Weekly rhythmic review illustrating energy patterns and mindful consistency without intimidating statistical graphs.',
      },
    ],
  },
  {
    id: 'pulse',
    number: '02',
    title: 'PULSE',
    tagline: 'Curated Cultural & Music Event Discovery',
    category: 'MOBILE APP · UI/UX CONCEPT',
    description:
      'A modern event discovery platform connecting urban culture enthusiasts with underground musical performances, art showcases, and indie screenings.',
    designGoal:
      'Replace bloated ticket marketplaces with a high-fashion, editorial aesthetic featuring tactile 3D ticket passes and fluid swipe interactions.',
    focus: ['Editorial Typography', '3D Perspective Tickets', 'Information Architecture', 'Frictionless Booking'],
    screens: [
      {
        id: 'pulse-1',
        title: 'Curated City Feed',
        description: 'Full-bleed photographic event cards paired with oversized monospaced date stamps and venue neighborhood tags.',
      },
      {
        id: 'pulse-2',
        title: 'Event Narrative & Lineup',
        description: 'Immersive detail view integrating artist bios, preview audio waveforms, and venue architectural notes.',
      },
      {
        id: 'pulse-3',
        title: 'Interactive 3D Pass',
        description: 'Realistic digital ticket pass with holographic barcode verification, subtle tilt parallax, and Apple Wallet integration.',
      },
      {
        id: 'pulse-4',
        title: 'Cultural Collector Profile',
        description: 'Personal memory archive chronicling attended shows, saved artists, and exclusive community invitations.',
      },
    ],
  },
  {
    id: 'atlas',
    number: '03',
    title: 'ATLAS',
    tagline: 'Territory Exploration & Spatial Travel',
    category: 'MOBILE APP · UI/UX CONCEPT',
    description:
      'A spatial travel discovery mobile experience engineered for independent explorers charting remote terrain, architectural wonders, and natural parks.',
    designGoal:
      'Prioritize cartographic clarity, elevation profiles, and offline navigation hierarchy for users operating in remote wilderness environments.',
    focus: ['Spatial Map UI', 'Cartographic Hierarchy', 'Offline Accessibility', 'Waypoint Navigation'],
    screens: [
      {
        id: 'atlas-1',
        title: 'Global Territory Explorer',
        description: 'Vector-styled topographical map interface highlighting off-grid trails, elevation changes, and weather fronts.',
      },
      {
        id: 'atlas-2',
        title: 'Destination Landmark Dossier',
        description: 'Structured waypoint guide detailing coordinates, optimal sunlight hours for photography, and terrain difficulty.',
      },
      {
        id: 'atlas-3',
        title: 'Offline Compass & Trail HUD',
        description: 'High-contrast heads-up display showing live compass heading, elevation gain, and distance to the next base camp.',
      },
      {
        id: 'atlas-4',
        title: 'Expedition Route Planner',
        description: 'Interactive day-by-day routing tool with automatic calculation of caloric burn, water sources, and shelter sites.',
      },
    ],
  },
  {
    id: 'orbit',
    number: '04',
    title: 'ORBIT',
    tagline: 'High-Velocity SaaS Sprint Command',
    category: 'MOBILE APP · UI/UX CONCEPT',
    description:
      'A mobile companion for high-growth product engineering teams to review pull requests, deploy status checks, and unblock team bottlenecks on the go.',
    designGoal:
      'Package enterprise-grade developer productivity into an ultra-fast, gesture-driven mobile interface with zero unnecessary navigation layers.',
    focus: ['Design Systems', 'Component Consistency', 'Responsive Behavior', 'Gesture Navigation'],
    screens: [
      {
        id: 'orbit-1',
        title: 'Team Sprint Telemetry',
        description: 'Real-time velocity dashboard tracking open blockers, build pipeline health, and code review queue length.',
      },
      {
        id: 'orbit-2',
        title: 'Active Pull Request Review',
        description: 'Compact code diff viewer optimized for mobile screens with syntax highlighting and quick inline approve gestures.',
      },
      {
        id: 'orbit-3',
        title: 'Deployment Status & Health',
        description: 'Server cluster status cards with instant rollback switches, error rate logs, and latency percentiles.',
      },
      {
        id: 'orbit-4',
        title: 'Workspace & Security Settings',
        description: 'Granular access control matrix, environment secret toggles, and team member role management.',
      },
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    period: 'JAN 2022 — DEC 2023',
    company: 'Pixxel House',
    role: 'React Frontend Developer',
    achievements: [
      'Built 25+ production-ready React components using clean component architecture and custom hooks.',
      'Integrated REST APIs using Axios and Fetch API with comprehensive loading and error states.',
      'Achieved 95+ Lighthouse performance scores through code splitting, lazy loading, and bundle optimization.',
      'Built responsive interfaces using modern CSS Flexbox, Grid, and media queries across Chrome, Firefox, Safari, and Edge.',
      'Led frontend development of the Luxury Chauffeur Booking Platform supporting 500+ bookings/week with 4.8/5 user satisfaction.',
      'Maintained version control and streamlined deployment pipelines using Git, GitHub, and Vercel.',
    ],
    technologies: ['React.js', 'JavaScript (ES6+)', 'REST APIs', 'HTML5', 'CSS3', 'Git', 'Vercel', 'Google Maps API'],
  },
  {
    period: 'JAN 2020 — DEC 2021',
    company: 'Pixxel House',
    role: 'UI/UX Designer',
    achievements: [
      'Designed 40+ high-fidelity UI mockups and interactive prototypes in Figma.',
      'Worked with 15+ e-commerce and SaaS clients to elevate interface usability and aesthetic appeal.',
      'Improved user task completion rates by 15–25% through iterative prototyping and user research.',
      'Created scalable design systems, typography scales, and component libraries that reduced developer handoff time by 35%.',
      'Conducted user research and usability testing sessions to gather qualitative user feedback.',
      'Achieved a 4.7/5 average client satisfaction rating and mentored junior designers in Figma best practices.',
    ],
    technologies: ['Figma', 'Wireframing', 'Prototyping', 'Design Systems', 'User Research', 'Usability Testing'],
  },
];

export const SKILL_CATEGORIES = [
  {
    title: 'FRONTEND DEVELOPMENT',
    skills: [
      {
        name: 'React.js',
        meta: 'Component Architecture',
        description: 'Building modular, component-driven interfaces with reusable architecture, custom hooks, and state management.',
        projectLinks: ['Luxury Chauffeur', 'Nexus Analytics', 'Nomad'],
      },
      {
        name: 'JavaScript ES6+',
        meta: 'Core Language',
        description: 'Writing modern, asynchronous JavaScript with promises, clean data transformations, and robust error boundaries.',
        projectLinks: ['Luxury Chauffeur', 'Nexus Analytics'],
      },
      {
        name: 'HTML5 & CSS3',
        meta: 'Semantic & Layout',
        description: 'Semantic markup, CSS Grid, Flexbox, media queries, and Tailwind CSS utility frameworks.',
        projectLinks: ['Luxury Chauffeur', 'Nomad'],
      },
      {
        name: 'Responsive Web Development',
        meta: 'Cross-Device Parity',
        description: 'Fluid typography, responsive spacing, and consistent UX across mobile, tablet, and desktop displays.',
        projectLinks: ['Luxury Chauffeur', 'Nexus Analytics', 'Nomad'],
      },
    ],
  },
  {
    title: 'APIS & STATE MANAGEMENT',
    skills: [
      {
        name: 'REST APIs',
        meta: 'Data Integration',
        description: 'Connecting frontend interfaces with backend services, handling asynchronous payloads, and client cache sync.',
        projectLinks: ['Luxury Chauffeur', 'Nexus Analytics'],
      },
      {
        name: 'Firebase',
        meta: 'Cloud & Database',
        description: 'Implementing real-time data sync, optimistic UI updates, and conflict-free calendar booking pipelines.',
        projectLinks: ['Pixxel House', 'Client Systems'],
      },
      {
        name: 'React Context',
        meta: 'Global State',
        description: 'Centralizing lightweight application state cleanly without unnecessary external runtime overhead.',
        projectLinks: ['Nexus Analytics', 'Nomad'],
      },
      {
        name: 'Performance Optimization',
        meta: 'Fast Load Times',
        description: 'Asset compression, code splitting, lazy loading, and bundle size reduction for rapid initial loads.',
        projectLinks: ['Luxury Chauffeur', 'Portfolio App'],
      },
    ],
  },
  {
    title: 'UI/UX DESIGN',
    skills: [
      {
        name: 'Figma',
        meta: 'Design & Prototyping',
        description: 'Building interactive prototypes, auto-layout hierarchies, reusable components, variants, and design tokens.',
        projectLinks: ['AURA', 'PULSE', 'ATLAS'],
      },
      {
        name: 'Design Systems',
        meta: 'Scalable Libraries',
        description: 'Standardizing typography scales, accessible color palettes, and component tokens to streamline developer handoff.',
        projectLinks: ['Pixxel House', 'Orbit', 'Nexus Analytics'],
      },
      {
        name: 'User Research',
        meta: 'Usability Testing',
        description: 'Identifying friction points through heuristic reviews, user interviews, and iterative testing to raise task completion.',
        projectLinks: ['Pixxel House', 'ATLAS'],
      },
      {
        name: 'Prototyping',
        meta: 'Interaction Design',
        description: 'Crafting high-fidelity interactive flow simulations to validate usability before committing to code.',
        projectLinks: ['AURA', 'Nomad'],
      },
    ],
  },
  {
    title: 'AI & MODERN PRODUCT WORKFLOWS',
    skills: [
      {
        name: 'AI-Assisted Product Design',
        meta: 'Rapid Ideation & Tokens',
        description: 'Accelerating UX exploration, edge-case analysis, and design token scaffolding while applying human design judgment.',
        projectLinks: ['Synapse OS', 'Kinetic Copilot'],
      },
      {
        name: 'AI Product Prototyping',
        meta: 'Concept Validation',
        description: 'Translating complex product concepts into functional interactive prototypes and micro-apps in rapid iteration cycles.',
        projectLinks: ['Synapse OS', 'Kinetic Copilot'],
      },
      {
        name: 'Prompt Engineering & Workflows',
        meta: 'Structured Reasoning',
        description: 'Designing structured prompts, deterministic JSON schema outputs, and multi-step reasoning chains for AI features.',
        projectLinks: ['Synapse OS', 'Kinetic Copilot'],
      },
      {
        name: 'AI-Assisted React Development',
        meta: 'Accelerated Coding',
        description: 'Using modern AI workflows to accelerate component scaffolding, custom hooks, and state logic with engineering rigor.',
        projectLinks: ['Portfolio App', 'Nexus Analytics'],
      },
      {
        name: 'AI API Integration',
        meta: 'Streaming & Inference',
        description: 'Connecting frontend client applications to LLM endpoints with real-time streaming, error boundaries, and telemetry.',
        projectLinks: ['Synapse OS', 'Kinetic Copilot'],
      },
      {
        name: 'Python for AI Prototyping',
        meta: 'Logic & Experimentation',
        description: 'Scripting rapid AI experimentation loops, prompt evaluation harnesses, and workflow automation logic.',
        projectLinks: ['Synapse OS', 'Personal AI Projects'],
      },
    ],
  },
  {
    title: 'WORKFLOW & CMS ARCHITECTURE',
    skills: [
      {
        name: 'Git & GitHub',
        meta: 'Version Control',
        description: 'Collaborative branching, pull request hygiene, structured commits, and peer code reviews.',
        projectLinks: ['GitHub / SalmanAly1'],
      },
      {
        name: 'Vercel & Netlify',
        meta: 'Deployment',
        description: 'CI/CD pipeline configuration, automated preview environments, and instant global edge distribution.',
        projectLinks: ['Production Builds'],
      },
      {
        name: 'Responsive Verification',
        meta: 'Accessibility & Quality',
        description: 'Rigorous cross-browser verification across modern browsers ensuring accessible contrast and semantic structure.',
        projectLinks: ['All Projects'],
      },
      {
        name: 'WordPress & Gutenberg FSE',
        meta: 'CMS & Custom Block Themes',
        description: 'Building bespoke WordPress block themes, ACF Pro integrations, and custom Gutenberg blocks without page-builder bloat.',
        projectLinks: ['Atelier Noir', 'Villa Serena', 'Studio Kairos'],
      },
      {
        name: 'WooCommerce & Commerce',
        meta: 'E-Commerce Architecture',
        description: 'Developing high-conversion online stores with custom cart drawers, AJAX filtering, and payment gateways.',
        projectLinks: ['Atelier Noir', 'Production Stores'],
      },
      {
        name: 'Component Architecture',
        meta: 'Modular Design',
        description: 'Structuring components with clean separation between presentation, state logic, and API data transport.',
        projectLinks: ['Nexus Analytics', 'Luxury Chauffeur', 'QFLOW'],
      },
    ],
  },
];

export const EDUCATION: EducationItem = {
  degree: 'Bachelor of Science in Information Technology',
  institution: 'University of Sindh',
  location: 'Hyderabad, Pakistan',
  period: 'MAR 2021 — FEB 2025',
  description:
    'Comprehensive study in computer science fundamentals, web technologies, database management, human-computer interaction, and software development methodologies.',
};

export const CERTIFICATIONS: CertificationItem[] = [
  {
    issuer: 'COURSERA',
    year: '2024',
    title: 'Google UX Design Certificate',
    description: 'Foundations of UX design, user empathy, wireframing, prototyping, and usability research methodologies.',
  },
  {
    issuer: 'FREECODECAMP',
    year: '2024',
    title: 'Meta React Certification',
    description: 'Core React principles, component lifecycle, hooks, state patterns, and frontend application development.',
  },
  {
    issuer: 'IXDF',
    year: '2025',
    title: 'Web Accessibility Certification',
    description: 'Practical accessibility best practices, WCAG guidelines, semantic hierarchy, and inclusive interaction design.',
  },
];

/* ==========================================================================
   01. FRONTEND DEVELOPMENT PROJECTS (2 CURATED PROJECTS: 1 WEB APP, 1 MOBILE APP)
   ========================================================================== */
export const FRONTEND_PROJECTS: FrontendProject[] = [
  {
    id: 'luxury-chauffeur',
    number: '01',
    year: '2023',
    title: 'LUXURY CHAUFFEUR SERVICE',
    subtitle: 'Real-Time Fleet Reservation & Dispatch Web App',
    typeTag: 'WEB APP',
    category: 'REACT · GOOGLE MAPS PLATFORM · STRIPE',
    projectType: 'REAL PRODUCTION',
    role: 'Frontend Developer & UI/UX Designer',
    description:
      'A full-featured commercial booking engine handling luxury vehicle class selection, real-time Google Maps route calculations, dynamic pricing, and verified Stripe payments.',
    problem:
      'High friction in multi-step chauffeur reservations, ambiguous dynamic pricing for custom waypoints, and sluggish location searching on mobile devices caused drop-offs during airport transfer booking.',
    approach:
      'Engineered a decoupled React architecture with progressive disclosure wizards, real-time Google Places & Directions API integration for instant route estimation, and seamless Stripe checkout verification with 95+ Lighthouse audit scores.',
    features: [
      'Dynamic route calculation with Google Maps Platform API',
      'Real-time luxury vehicle fleet class selector with live rate estimates',
      'Progressive 4-step reservation wizard with flight & luggage detection',
      'Stripe Payment Elements integration with instant invoice dispatch',
      'Live driver GPS dispatch tracker with responsive passenger status cards',
    ],
    technologies: ['React.js', 'Google Maps API', 'Stripe Elements', 'Tailwind CSS', 'Custom React Hooks', 'REST APIs'],
    process: [
      { step: '01', title: 'User Flow & Wireframing', description: 'Mapped booking friction points in Figma and structured a 4-step progressive disclosure checkout.' },
      { step: '02', title: 'API & Maps Architecture', description: 'Implemented custom hooks for Google Maps Autocomplete and dynamic matrix route estimation.' },
      { step: '03', title: 'Stripe & Security Handoff', description: 'Integrated PCI-compliant Stripe Payment Elements with client-side verification and fallback states.' },
      { step: '04', title: 'Performance & Cross-Device QA', description: 'Audited bundle size and Core Web Vitals, achieving 95+ Lighthouse scores and 500+ weekly bookings.' },
    ],
    metrics: [
      { label: 'WEEKLY BOOKINGS', value: '500+' },
      { label: 'CLIENT RATING', value: '4.8 / 5.0' },
      { label: 'LIGHTHOUSE SCORE', value: '95+' },
      { label: 'STATUS', value: 'Real Production' },
    ],
    githubUrl: 'https://github.com/SalmanAly1/luxury-chauffeur-app',
    liveUrl: 'https://luxurychauffeurservice.co.uk/',
    screens: [
      { id: 'fleet', title: 'Fleet Reservation & Route Matrix', badge: 'SCREEN 01', description: 'Interactive map interface with real-time luxury vehicle tier selection, distance telemetry, and dynamic pricing.' },
      { id: 'passenger', title: 'Passenger & Flight Specification', badge: 'SCREEN 02', description: 'Progressive form with automatic airline flight tracker, terminal pickup notes, and child seat configuration.' },
      { id: 'checkout', title: 'Stripe Payment & Invoice Dispatch', badge: 'SCREEN 03', description: 'Secure checkout modal with coupon verification, VAT breakdown, and instant SMS / PDF receipt confirmation.' },
      { id: 'dispatch', title: 'Driver Dispatch & Live Waypoints', badge: 'SCREEN 04', description: 'Real-time tracking interface showing assigned driver credentials, vehicle license plate, and GPS ETA updates.' },
    ],
  },
  {
    id: 'qflow-mobile',
    number: '02',
    year: '2024',
    title: 'QFLOW APPOINTMENT ENGINE',
    subtitle: 'Real-Time Mobile Scheduler & Booking PWA',
    typeTag: 'MOBILE APP',
    category: 'REACT · FIREBASE REALTIME · MOBILE-FIRST PWA',
    projectType: 'PRODUCTION PWA',
    role: 'Mobile Frontend Engineer & UI Designer',
    description:
      'A high-performance mobile scheduling application engineered for consultants and service teams, featuring conflict-free slot locking and automatic timezone normalization.',
    problem:
      'Distributed consultants and service teams battle timezone miscalculations, awkward email back-and-forths, and cumbersome desktop-only calendar schedulers that freeze on handheld mobile browsers.',
    approach:
      'Designed and engineered a mobile-first scheduling PWA using React, optimized for one-handed thumb interaction with live Firebase Realtime Database slot listeners that eliminate double-booking conflicts across timezones.',
    features: [
      'Zero-conflict slot locking powered by Firebase Realtime Database',
      'Automatic multi-timezone detection and offset calculation engine',
      'Ergonomic thumb-zone mobile UI built on an 8pt spatial grid',
      'One-tap calendar sync with auto-generated .ics & Google Calendar links',
      'Custom host buffers, custom meeting questions, and push reminder notifications',
    ],
    technologies: ['React.js', 'Firebase Realtime DB', 'Tailwind CSS', 'Date-fns', 'Web Push API', 'Mobile PWA'],
    process: [
      { step: '01', title: 'Mobile Ergonomics Research', description: 'Audited thumb-reach zones on 390px-430px viewports to eliminate reaching top corners for critical booking steps.' },
      { step: '02', title: 'Optimistic Slot Locking', description: 'Engineered optimistic concurrency control over Firebase to temporarily reserve selected slots during form entry.' },
      { step: '03', title: 'Timezone & Calendar Engine', description: 'Built robust UTC normalization logic preventing daylight savings drift and timezone confusion.' },
      { step: '04', title: 'PWA Offline & Fast Launch', description: 'Implemented service worker caching, instant app launch icon, and offline state recovery.' },
    ],
    metrics: [
      { label: 'SLOT CONFLICTS', value: '0.0%' },
      { label: 'TIME TO BOOK', value: '< 25s' },
      { label: 'MOBILE LIGHTHOUSE', value: '98/100' },
      { label: 'TECH', value: 'React + Firebase' },
    ],
    githubUrl: 'https://github.com/SalmanAly1/qflow',
    screens: [
      { id: 'availability', title: 'Weekly Availability Matrix', badge: 'SCREEN 01', description: 'Horizontal date carousel with live badge counts showing open morning, afternoon, and evening slots.' },
      { id: 'slot-select', title: 'Tactile Slot Selector', badge: 'SCREEN 02', description: 'Timezone-aware slot chips with optimistic locking counter and instant duration selector.' },
      { id: 'client-form', title: 'Client Intake & Meeting Notes', badge: 'SCREEN 03', description: 'Streamlined 3-field intake card with automatic Google Meet and Zoom video link generation.' },
      { id: 'confirmed', title: 'Instant Confirmation & Sync', badge: 'SCREEN 04', description: 'Direct calendar integration screen with one-tap Add to Apple/Google Calendar and SMS reminders.' },
    ],
  },
];

/* ==========================================================================
   02. UI/UX DESIGN & PRODUCT SYSTEMS (4 DIVERSE PRODUCT EXPERIENCES)
   ========================================================================== */
export const UIUX_FIGMA_PROJECTS: UiUxFigmaProject[] = [
  {
    id: 'aura-sleep',
    number: '01',
    title: 'AURA CIRCADIAN SLEEP',
    tagline: 'Circadian Phase Tracking & Sleep Architecture Mobile Companion',
    projectTypeTag: 'MOBILE APP DESIGN',
    category: 'MOBILE APP · iOS · DIGITAL HEALTH & WELLNESS',
    clientOrContext: 'Digital Health Exploration / Personal Project',
    role: 'Lead Mobile UI/UX & Product Designer',
    tools: ['Figma', 'Protopie', 'iOS Design Tokens', 'User Research'],
    overview:
      'A personal circadian rhythm and sleep tracking iOS application that translates biometric sleep cycles into actionable daily energy windows, optimal light exposure timing, and restorative sleep rituals.',
    uxChallenge:
      'Most sleep applications overwhelm users with clinical graphs and complex polysomnography data without providing clear, immediate guidance on what to actually do upon waking or before resting.',
    designApproach:
      'Designed an intuitive 24-hour radial circadian clock interface, paired with an eye-safe OLED dark canvas, tactile audio entrainment controls, and glanceable energy forecasting designed for one-handed thumb reach.',
    keyFeatures: [
      'Interactive 24-hour radial circadian clock highlighting cortisol peaks and melatonin onset',
      'Multi-stage sleep architecture breakdown with REM, deep, and light sleep hypnograms',
      'Binaural acoustic sleep entrainment player with customizable delta frequencies and soundscapes',
      'Rolling 7-day sleep debt recovery matrix with actionable restorative guidance',
      'Glanceable iOS lock-screen widgets and dynamic island ambient status tracking',
    ],
    previewMockupType: 'multi-phone',
    userFlow: [
      { step: 1, name: 'Morning Sync', detail: 'Inspect waking sleep score, resting HRV, and optimal morning sunlight window.' },
      { step: 2, name: 'Circadian Dip Notice', detail: 'Mid-afternoon alert calculates cognitive dip and last caffeine cutoff.' },
      { step: 3, name: 'Wind-Down Ritual', detail: 'Dimmed OLED interface with breath pacing and acoustic audio synthesizer.' },
      { step: 4, name: 'Sleep Debt Projection', detail: 'Rolling 7-day debt calculation with recovery recommendations.' },
    ],
    uiSystem: {
      palette: [
        { name: 'OLED Midnight', hex: '#090A0F', role: 'Background Canvas' },
        { name: 'Phosphor Lime', hex: '#C7FF3D', role: 'Primary Accent & Optimal Windows' },
        { name: 'Deep Indigo', hex: '#1E2235', role: 'Card & Surface Layers' },
        { name: 'Solar Amber', hex: '#FFAA33', role: 'Cortisol & Sunlight Alerts' },
      ],
      typography: 'SF Pro Rounded + JetBrains Mono for biometric figures',
      grid: '8pt spatial grid with 44pt minimum touch boundaries',
      principles: ['Zero high-frequency blue light', 'Glanceable 3-second comprehension', 'Tactile haptic reinforcement'],
    },
    keyScreens: [
      {
        id: 'aura-s1',
        title: 'Circadian Phase & Energy Clock',
        subtitle: '24-Hour Biological Cycle',
        description: 'Interactive radial dial showing peak alertness, digestion window, and melatonin onset countdown.',
        device: 'phone',
        imageUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85',
        screenBadge: 'HOME SCREEN',
      },
      {
        id: 'aura-s2',
        title: 'Sleep Architecture Breakdown',
        subtitle: 'REM, Deep & Light Stages',
        description: 'Horizontal hypnogram with stage percentage metrics and heart rate variability (HRV) overlay.',
        device: 'phone',
        imageUrl: 'https://images.unsplash.com/photo-1511295742362-92c96b124e52?auto=format&fit=crop&w=1200&q=85',
        screenBadge: 'MAIN FEATURE',
      },
      {
        id: 'aura-s3',
        title: 'Acoustic Phase Synthesizer',
        subtitle: 'Binaural Sleep Entrainment',
        description: 'Soundwave generator modulating brown noise and delta frequencies tuned to user sleep depth.',
        device: 'phone',
        imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=85',
        screenBadge: 'INTERACTION STATE',
      },
      {
        id: 'aura-s4',
        title: 'Sleep Debt & Recovery Matrix',
        subtitle: '7-Day Rolling Telemetry',
        description: 'Bar trends comparing target versus actual sleep duration with compensatory weekend adjustments.',
        device: 'phone',
        imageUrl: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=1200&q=85',
        screenBadge: 'DETAIL VIEW',
      },
      {
        id: 'aura-s5',
        title: 'Chronotype Profile & Biometrics',
        subtitle: 'Resting HRV & Morning Calibration',
        description: 'Personalized chronotype calibration settings with wearable sync diagnostics and battery telemetry.',
        device: 'phone',
        imageUrl: 'https://images.unsplash.com/photo-1510519138161-58474dfab9c8?auto=format&fit=crop&w=1200&q=85',
        screenBadge: 'PROFILE & SETTINGS',
      },
    ],
    designDecisions: [
      { title: 'Full OLED Dark Canvas', rationale: 'Minimizes eye strain and photon emission during late-night and bedside interactions.' },
      { title: 'Glanceable Radial Dial', rationale: 'Replaced tabular schedules with an analog 24-hour clock that intuitively visualizes energy peaks.' },
      { title: 'Thumb-Zone Navigation', rationale: 'Critical action targets are anchored within the lower 40% of the screen for effortless one-handed use.' },
    ],
    responsiveConsiderations: 'Optimized for one-handed thumb interaction on iPhone 15/16 Pro displays with dynamic island ambient status.',
    statusBadge: 'CONCEPT PROJECT',
  },
  {
    id: 'nexus-bi',
    number: '02',
    title: 'NEXUS REVENUE INTELLIGENCE',
    tagline: 'Enterprise Revenue Intelligence & Cohort Analytics Web App',
    projectTypeTag: 'WEB APP DESIGN',
    category: 'WEB APP · ENTERPRISE SAAS · DATA VISUALIZATION',
    clientOrContext: 'B2B Revenue Analytics / Personal Project',
    role: 'Lead Web Application & UX Designer',
    tools: ['Figma', 'Design Systems', 'Data Visualization', 'High-Density Grids'],
    overview:
      'A dense, high-frequency revenue intelligence platform for B2B SaaS leadership teams to analyze recurring revenue velocity, net retention trajectories, and customer cohort health in real time.',
    uxChallenge:
      'Traditional enterprise dashboards suffer from fragmented widgets, sluggish multi-filter queries, and poor information density, forcing analysts to constantly export data into spreadsheets.',
    designApproach:
      'Built around Swiss typographic grid standards and synchronized crosshair cursors, combining tabular clarity with real-time cohort retention heatmaps and sub-millisecond query inspection.',
    keyFeatures: [
      'Executive revenue telemetry matrix with synchronized ARR velocity and expansion curves',
      'Triangular 12-month cohort retention heatmap with color-intensity drop-off thresholds',
      'Live cloud infrastructure query latency waterfall tracking p50, p95, and p99 percentiles',
      'Visual drag-and-drop custom formula constructor for blended CAC and payback periods',
      'One-click board reporting generation with custom date slicing and CSV data export',
    ],
    previewMockupType: 'browser-dashboard',
    userFlow: [
      { step: 1, name: 'Executive Overview', detail: 'Inspect ARR velocity, net revenue retention, and churn radar.' },
      { step: 2, name: 'Cohort Drilldown', detail: 'Filter customer cohorts by acquisition channel and lifetime spend.' },
      { step: 3, name: 'Query Pipeline', detail: 'Live telemetry inspector tracking millisecond query response times.' },
      { step: 4, name: 'Report Export', detail: 'One-click markdown and CSV board reporting with custom date slices.' },
    ],
    uiSystem: {
      palette: [
        { name: 'Pure Charcoal', hex: '#0F0F12', role: 'Root Workspace Canvas' },
        { name: 'Surgical Cobalt', hex: '#3B82F6', role: 'Data Series Accent' },
        { name: 'Card Surface', hex: '#18191E', role: 'Elevated Module Containers' },
        { name: 'Muted Slate', hex: '#888B94', role: 'Secondary Metadata & Grid' },
      ],
      typography: 'Inter Display paired with JetBrains Mono for all numeric values',
      grid: '12-column responsive fluid grid with 16px gutter constraints',
      principles: ['Zero decorative chart junk', 'Strict tabular numeral alignment', 'Keyboard shortcut ergonomics'],
    },
    keyScreens: [
      {
        id: 'nexus-s1',
        title: 'Executive Revenue Velocity',
        subtitle: 'ARR & Expansion Telemetry',
        description: 'Multi-series synchronized area charts showing new bookings, expansion upgrades, downgrades, and net churn.',
        device: 'browser',
        imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=85',
        screenBadge: 'EXECUTIVE DASHBOARD',
      },
      {
        id: 'nexus-s2',
        title: 'Cohort Retention Matrix',
        subtitle: '12-Month Customer Lifecycles',
        description: 'Triangular cohort retention matrix with color-intensity thresholds highlighting month-over-month drop-off.',
        device: 'browser',
        imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=85',
        screenBadge: 'COHORT ANALYTICS',
      },
      {
        id: 'nexus-s3',
        title: 'Query Latency Waterfall',
        subtitle: 'Real-Time Database Health',
        description: 'Live waterfall chart tracking API endpoint latency percentiles (p50, p95, p99) across cloud clusters.',
        device: 'browser',
        imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=85',
        screenBadge: 'INFRASTRUCTURE VIEW',
      },
      {
        id: 'nexus-s4',
        title: 'Custom Metric Formula Builder',
        subtitle: 'Logic & Cohort Constructor Modal',
        description: 'Visual logic builder allowing finance teams to calculate custom blended CAC and payback periods.',
        device: 'browser',
        imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=85',
        screenBadge: 'FORMULA BUILDER MODAL',
      },
    ],
    designDecisions: [
      { title: 'Monochrome Foundations', rationale: 'Color is reserved exclusively for meaningful variance indicators and selected data series.' },
      { title: 'Sticky Crosshairs', rationale: 'Hovering over any graph synchronizes the vertical time cursor across all visible chart widgets.' },
      { title: 'High-Density Table Cells', rationale: 'Compact 36px table rows maximize data visibility on standard 1440px displays without scrolling.' },
    ],
    responsiveConsiderations: 'Fluid multi-panel layout collapses cleanly into dual-column on tablet and stacked single-column on mobile.',
    statusBadge: 'CONCEPT PROJECT',
  },
  {
    id: 'orbit-dev',
    number: '03',
    title: 'ORBIT SPRINT COMMAND',
    tagline: 'Engineering Velocity & Pull Request Command System',
    projectTypeTag: 'PRODUCT DESIGN',
    category: 'PRODUCT DESIGN · SAAS · DEVELOPER WORKFLOW',
    clientOrContext: 'DevOps & Engineering Management / Personal Project',
    role: 'Lead Product & Interaction Designer',
    tools: ['Figma', 'Workflow Architecture', 'Component Variants', 'Developer Experience (DX)'],
    overview:
      'A modern developer productivity platform monitoring pull request review bottlenecks, CI/CD pipeline health, and sprint velocity without intrusive micromanagement.',
    uxChallenge:
      'Engineering managers struggle to spot review bottlenecks early, while developers waste hours context-switching between GitHub, Jira, and Slack notifications.',
    designApproach:
      'Synthesized git workflow telemetry into a tactile Kanban command board with automatic SLA badges, stale review radars, and focused deep-work time block indicators.',
    keyFeatures: [
      'Active sprint velocity command center with real-time story point burndown curve',
      'Visual pull request review bottleneck radar with automated SLA threshold badges',
      'Team cognitive capacity heatmap balancing active reviews and deep-work blocks',
      'Automated changelog synthesizer compiling semantic commits into release notes',
      'Keyboard-first command palette (Cmd+K) enabling sub-second navigation and triage',
    ],
    previewMockupType: 'saas-workspace',
    userFlow: [
      { step: 1, name: 'Sprint Radar', detail: 'Inspect active sprint health and pull requests awaiting review > 24h.' },
      { step: 2, name: 'PR Review Matrix', detail: 'Visual queue balancing review assignments across senior and junior staff.' },
      { step: 3, name: 'CI/CD Pipeline Pulse', detail: 'Inspect flaky test suites and build duration trends.' },
      { step: 4, name: 'Changelog Release', detail: 'Auto-compile release candidate notes grouped by semantic commit.' },
    ],
    uiSystem: {
      palette: [
        { name: 'Carbon Shell', hex: '#111215', role: 'Primary Dark Workspace' },
        { name: 'Emerald Pass', hex: '#10B981', role: 'Green Builds & Healthy PRs' },
        { name: 'Amber Stale', hex: '#F59E0B', role: 'Review Blockers & Warnings' },
        { name: 'Electric Violet', hex: '#8B5CF6', role: 'Release Candidate Tags' },
      ],
      typography: 'Geist Sans + Mono for commit SHAs and branch identifiers',
      grid: 'Modular split-screen layout with 240px collapsable sidebar',
      principles: ['Developer-first keyboard shortcuts', 'Contextual SLA indicators', 'Subtle status micro-animations'],
    },
    keyScreens: [
      {
        id: 'orbit-s1',
        title: 'Sprint Velocity Command',
        subtitle: 'Active Cycle Burndown Curve',
        description: 'Burn-down velocity curve comparing planned story points against completed PR merges in real time.',
        device: 'laptop',
        imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=85',
        screenBadge: 'SPRINT COMMAND',
      },
      {
        id: 'orbit-s2',
        title: 'Pull Request Review Radar',
        subtitle: 'SLA Bottleneck Telemetry',
        description: 'Interactive queue highlighting pull requests waiting on review with estimated review time complexity.',
        device: 'laptop',
        imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1400&q=85',
        screenBadge: 'REVIEW BOTTLENECK RADAR',
      },
      {
        id: 'orbit-s3',
        title: 'Team Cognitive Balance Heatmap',
        subtitle: 'Capacity vs Context Switching',
        description: 'Heatmap visualization tracking active reviews per engineer to prevent burnout and review fatigue.',
        device: 'laptop',
        imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1400&q=85',
        screenBadge: 'TEAM WORKLOAD HEATMAP',
      },
      {
        id: 'orbit-s4',
        title: 'Release Changelog Composer',
        subtitle: 'Automated GitHub Deployment Notes',
        description: 'Markdown release draft generated from squashed commits with one-click GitHub Release publication.',
        device: 'laptop',
        imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=85',
        screenBadge: 'CHANGELOG COMPOSER',
      },
    ],
    designDecisions: [
      { title: 'SLA Status Badges', rationale: 'Visual cues automatically shift from emerald to amber after 18h to gently nudge reviewers.' },
      { title: 'Branch Hierarchy View', rationale: 'Tree graph clarifies complex multi-repo dependencies at a single glance.' },
      { title: 'Fast Filter Presets', rationale: 'Single-click filters for "Assigned to Me", "Needs Attention", and "Ready to Merge".' },
    ],
    responsiveConsiderations: 'Optimized for high-resolution ultrawide external monitors with quick toggle drawers for 13" laptop screens.',
    statusBadge: 'CONCEPT PROJECT',
  },
  {
    id: 'monolith-audio',
    number: '04',
    title: 'MONOLITH AUDIO OBJECTS',
    tagline: 'High-Fidelity Audiophile Acoustic Objects & Digital Flagship Store',
    projectTypeTag: 'E-COMMERCE EXPERIENCE',
    category: 'E-COMMERCE · LUXURY COMMERCE · INDUSTRIAL DESIGN',
    clientOrContext: 'Bespoke Industrial Audio / Personal Project',
    role: 'Digital Art Director & E-Commerce Designer',
    tools: ['Figma', 'Editorial Art Direction', 'Luxury E-Commerce Systems', '3D Prototyping'],
    overview:
      'An editorial digital flagship store for handcrafted acoustic monitors, featuring 360-degree material configurators, anechoic chamber frequency dispersion curves, and white-glove concierge checkout.',
    uxChallenge:
      'E-commerce platforms for $5,000+ luxury audio equipment often look like dry spec sheets, failing to convey the physical acoustic heft, tactile hand-finished materials, and emotional listening experience.',
    designApproach:
      'Crafted a museum-grade editorial layout combining high-contrast typography, interactive material swatches (brushed brass, fluted obsidian, smoked oak), and verifiable acoustic response curves.',
    keyFeatures: [
      'Sculptural editorial lookbook hero highlighting floorstanding acoustic monitor craftsmanship',
      'Interactive 360-degree material configurator updating cabinet grain and brass hardware',
      'Anechoic chamber frequency dispersion curves detailing 20Hz - 35kHz laboratory fidelity',
      'Curated monograph collection catalog with bespoke desktop monitors and solid brass spikes',
      'White-glove concierge checkout drawer with complimentary in-home acoustic room tuning',
    ],
    previewMockupType: 'ecommerce-editorial',
    userFlow: [
      { step: 1, name: 'Editorial Lookbook', detail: 'Explore the architectural acoustic philosophy and design heritage.' },
      { step: 2, name: 'Material Configurator', detail: 'Customize cabinet finish, acoustic grille cloth, and base metal.' },
      { step: 3, name: 'Acoustic Room Tuning', detail: 'Enter room dimensions to calculate recommended speaker positioning.' },
      { step: 4, name: 'Concierge Checkout', detail: 'Reserve numbered edition with private listening session appointment.' },
    ],
    uiSystem: {
      palette: [
        { name: 'Warm Parchment', hex: '#F5F3ED', role: 'Editorial Light Canvas' },
        { name: 'Obsidian Black', hex: '#161514', role: 'Display Typography & Frame' },
        { name: 'Brushed Brass', hex: '#C8A265', role: 'Material Accent & CTAs' },
        { name: 'Raw Limestone', hex: '#E2DFD6', role: 'Borders & Structural Dividers' },
      ],
      typography: 'Editorial Serif Display paired with Monospaced acoustic specifications',
      grid: 'Asymmetric editorial magazine grid with generous 96px whitespace margins',
      principles: ['Museum-grade photography framing', 'Tactile material feedback', 'Uncluttered luxury typography'],
    },
    keyScreens: [
      {
        id: 'mono-s1',
        title: 'Architectural Speaker Hero',
        subtitle: 'Flagship Floorstanding Monolith',
        description: 'Immersive editorial hero with zoomable high-resolution material close-ups and acoustic driver specs.',
        device: 'browser',
        imageUrl: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=1400&q=85',
        screenBadge: 'HOMEPAGE LOOKBOOK',
      },
      {
        id: 'mono-s2',
        title: '360 Material Configurator',
        subtitle: 'Handcrafted Finishes & Brass Hardware',
        description: 'Interactive material selector updating cabinet wood grain, brushed anodized trim, and acoustic dampeners.',
        device: 'browser',
        imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1400&q=85',
        screenBadge: 'PRODUCT DETAIL & CONFIGURATOR',
      },
      {
        id: 'mono-s3',
        title: 'Anechoic Frequency Dispersion',
        subtitle: 'Anechoic Chamber Laboratory Plots',
        description: 'Smooth response curve chart detailing decibel fidelity from 20Hz sub-bass to 35kHz ultra-treble.',
        device: 'browser',
        imageUrl: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1400&q=85',
        screenBadge: 'ACOUSTIC LAB SPECS',
      },
      {
        id: 'mono-s4',
        title: 'Curated Monograph Shop Grid',
        subtitle: 'Bespoke Acoustic Monitors & Subwoofers',
        description: 'Clean luxury shop grid featuring handcrafted bookshelf monitors, isolation plinths, and acoustic spikes.',
        device: 'browser',
        imageUrl: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1400&q=85',
        screenBadge: 'COLLECTION SHOPPING',
      },
      {
        id: 'mono-s5',
        title: 'White-Glove Concierge Checkout',
        subtitle: 'Numbered Edition Reservation',
        description: 'Minimalist checkout drawer with complimentary acoustic room calibration and scheduled delivery booking.',
        device: 'browser',
        imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85',
        screenBadge: 'CONCIERGE CHECKOUT',
      },
    ],
    designDecisions: [
      { title: 'Editorial Serif Headlines', rationale: 'Evokes the tactile warmth of luxury architectural publications rather than cold tech SaaS.' },
      { title: 'Interactive Frequency Curves', rationale: 'Demystifies acoustic performance for audiophiles with verifiable laboratory plots.' },
      { title: 'Sticky Micro-Cart Drawer', rationale: 'Keeps checkout effortless without ever breaking the visual continuity of the product showcase.' },
    ],
    responsiveConsiderations: 'Retains editorial magazine proportions on desktop while adapting smoothly to vertical touch swiping on mobile.',
    statusBadge: 'CONCEPT PROJECT',
  },
];

/* ==========================================================================
   03. WORDPRESS WEBSITES (3 BESPOKE WEBSITE-STYLE PROJECTS)
   ========================================================================== */
export const WORDPRESS_PROJECTS: WordPressProject[] = [
  {
    id: 'atelier-noir',
    number: '01',
    title: 'ATELIER NOIR',
    tagline: 'Contemporary Haute Couture & Minimalist Apparel',
    websiteType: 'PREMIUM E-COMMERCE',
    category: 'WORDPRESS · WOOCOMMERCE · EDITORIAL FASHION',
    clientContext: 'Luxury Fashion Brand Concept Website',
    role: 'WordPress Theme Developer & Art Director',
    overview:
      'A bespoke WordPress e-commerce website built with custom WooCommerce architecture, fluid micro-interactions, and high-impact fashion editorial layouts designed for a contemporary couture label.',
    challenge:
      'Commercial fashion stores often compromise brand aesthetics with cluttered promotional banners, clunky filters, and slow checkout flows that dilute luxury brand perception.',
    approach:
      'Engineered a lightweight custom WordPress block theme prioritizing high-resolution editorial photography, seamless AJAX product filtering, slide-out cart drawers, and sub-second page transitions.',
    keyFeatures: [
      'Custom WooCommerce catalog with instant AJAX category filtering',
      'Editorial lookbook integration with Shoppable Product Tags',
      'Interactive product detail page with zoomable high-res garment photography',
      'Streamlined slide-out cart drawer with free shipping threshold progress',
      'Mobile-optimized express checkout supporting Apple Pay and Stripe',
      'Custom Gutenberg blocks with Advanced Custom Fields (ACF Pro)',
    ],
    cmsStack: ['WordPress 6.5+', 'WooCommerce', 'ACF Pro', 'Custom Block Theme', 'PHP 8.2', 'Tailwind CSS', 'WP Rocket'],
    pages: [
      {
        id: 'an-p1',
        name: 'Editorial Campaign & Brand Narrative',
        label: 'HOME PAGE',
        description: 'Full-bleed seasonal fashion editorial imagery, avant-garde typography, brand manifesto, and curated capsule collection showcase.',
        previewType: 'homepage',
        heroImage: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1600&q=85',
      },
      {
        id: 'an-p2',
        name: 'Ready-To-Wear Catalog & Filter Matrix',
        label: 'SHOP ARCHIVE',
        description: 'Multi-product browsing catalog with real-time AJAX filters for material, size, and silhouette, featuring hover lookbook swaps and pricing.',
        previewType: 'shop-archive',
        heroImage: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=1200&q=85',
      },
      {
        id: 'an-p3',
        name: 'Virgin Wool Belted Trench Coat — Product Detail',
        label: 'SINGLE PRODUCT',
        description: 'Prominent single product showcase with high-res garment photography, Italian wool specs, size selector, and persistent Add-to-Cart area.',
        previewType: 'single-product',
        heroImage: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=85',
      },
      {
        id: 'an-p4',
        name: 'Shopping Bag & Selected Garments',
        label: 'CART',
        description: 'Shopping cart interface with selected product thumbnails, quantity steppers, free shipping threshold meter, promo code input, and order subtotal.',
        previewType: 'cart',
        heroImage: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=85',
      },
      {
        id: 'an-p5',
        name: 'Express Checkout & Encrypted Payment',
        label: 'CHECKOUT',
        description: 'Professional two-column checkout interface with Apple Pay/Stripe gateways, customer shipping details, order summary, and purchase confirmation CTA.',
        previewType: 'checkout',
        heroImage: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1200&q=85',
      },
    ],
    visualAssets: {
      heroImage: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1600&q=85',
      gridImages: [
        'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=85',
        'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=85',
        'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=85',
      ],
      detailImage: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=1200&q=85',
    },
    outcome:
      'Demonstrates the ability to design and build high-conversion, luxury e-commerce experiences on WordPress that match bespoke headless stores in speed and aesthetics.',
  },
  {
    id: 'villa-serena',
    number: '02',
    title: 'VILLA SERENA RESORT',
    tagline: 'Mediterranean Cliffside Suites & Private Villas',
    websiteType: 'LUXURY HOTEL & RESORT',
    category: 'WORDPRESS · CUSTOM THEME · HOSPITALITY',
    clientContext: 'Boutique Coastal Resort Concept Website',
    role: 'WordPress Theme Developer & UI Designer',
    overview:
      'A digital experience for a boutique Mediterranean cliffside resort, combining cinematic location photography, custom room showcase post types, and an intuitive direct reservation engine.',
    challenge:
      'Hospitality websites frequently lose direct bookings to OTAs (Booking.com, Expedia) because their own booking funnels are clunky, lack room transparency, and fail to evoke the physical property.',
    approach:
      'Designed an evocative editorial layout featuring panoramic suite visuals, interactive amenity filters, integrated reservation calendar widgets, and local experience itineraries.',
    keyFeatures: [
      'Custom Post Types for Suites, Private Villas, and Dining Experiences',
      'Interactive reservation bar with date pickers, guest counts, and promo code inputs',
      'Virtual suite walkthroughs with floor plans, terrace orientation, and private pool specs',
      'Culinary dining reservation and private boat charter booking add-ons',
      'Multilingual architecture ready for international travelers (WPML compatible)',
      'High-speed WebP image pipeline achieving sub-second TTFB on edge hosting',
    ],
    cmsStack: ['WordPress 6.5+', 'Custom Theme (FSE)', 'ACF Pro', 'Booking Engine API', 'CSS Grid', 'WP Engine'],
    pages: [
      {
        id: 'vs-p1',
        name: 'Homepage & Oceanfront Sanctuary',
        label: 'HERO & INTRO',
        description: 'Panoramic cliffside pool hero with sticky reservation bar, welcome manifesto, and Mediterranean property accolades.',
        heroImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=85',
      },
      {
        id: 'vs-p2',
        name: 'Suites & Private Villas Collection',
        label: 'ROOMS DIRECTORY',
        description: 'Visual cards showcasing suite square footage, private terrace view orientation, and direct nightly rates across all tiers.',
        heroImage: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1600&q=85',
      },
      {
        id: 'vs-p3',
        name: 'Grand Cliff Pool Villa Showcase',
        label: 'VILLA DETAIL',
        description: 'Dedicated villa suite showcase with interior bedroom, private infinity plunge pool, Carrara marble bath, and cliff terrace lounge.',
        heroImage: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1600&q=85',
      },
      {
        id: 'vs-p4',
        name: 'Direct Booking & Availability Engine',
        label: 'BOOKING',
        description: 'Elegant reservation interface with date pickers, guest selection, guaranteed best rates, and scenic coastal landscape backdrop.',
        heroImage: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1600&q=85',
      },
      {
        id: 'vs-p5',
        name: 'Curated Coastal Experiences & Wellness',
        label: 'EXPERIENCE',
        description: 'Private sunset catamaran charters, cliffside Michelin tasting menus, and thalassotherapy spa rituals for hotel guests.',
        heroImage: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1600&q=85',
      },
    ],
    visualAssets: {
      heroImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=85',
      gridImages: [
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=85',
        'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1000&q=85',
        'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=85',
      ],
      detailImage: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=85',
    },
    outcome:
      'Showcases sophisticated hospitality branding and custom WordPress architecture engineered to maximize high-margin direct bookings over third-party platforms.',
  },
  {
    id: 'studio-kairos',
    number: '03',
    title: 'STUDIO KAIROS ARCHITECTURE',
    tagline: 'Spatial Design & Architectural Identity Agency',
    websiteType: 'CREATIVE AGENCY',
    category: 'WORDPRESS · GUTENBERG FSE · CREATIVE STUDIO',
    clientContext: 'Design & Architecture Practice Concept Website',
    role: 'Full-Stack WordPress Developer & Digital Art Director',
    overview:
      'A brutalist-inspired, clean digital portfolio website for an international architecture and spatial design practice, featuring fluid typography, project case study archives, and service breakdowns.',
    challenge:
      'Creative agencies often default to heavy third-party page builders like Elementor that bloat code, hurt Google SEO rankings, and produce generic non-custom layouts.',
    approach:
      'Developed 100% custom Gutenberg blocks with semantic HTML5, fluid CSS clamp typography, and performant scroll interactions that keep page weight under 400kb without external libraries.',
    keyFeatures: [
      '100% custom Gutenberg FSE block architecture with zero page builder bloat',
      'Filterable architectural project showcase with grid/list view toggles',
      'Interactive disciplines accordion breaking down spatial planning and brand architecture',
      'Studio philosophy section with leadership team bios and sustainability pledge',
      'Integrated project inquiry form with budget brackets and automated notification dispatch',
      'Sub-second page load speeds across both desktop and mobile devices',
    ],
    cmsStack: ['WordPress 6.5+', 'Full Site Editing (FSE)', 'ACF Blocks', 'Modern Vanilla JS', 'Zero Bloat', 'WP Engine'],
    pages: [
      {
        id: 'sk-p1',
        name: 'Agency Hero & Monolithic Typography',
        label: 'AGENCY HERO',
        description: 'Monumental architectural headline, live world clocks (London, Tokyo, Berlin), and concrete pavilion composition.',
        heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
      },
      {
        id: 'sk-p2',
        name: 'Disciplines & Architectural Methodology',
        label: 'SERVICES',
        description: 'Schematic blueprints, scale drafting tables, material research, and volumetric spatial planning breakdowns.',
        heroImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=85',
      },
      {
        id: 'sk-p3',
        name: 'Curated Architectural Works Portfolio',
        label: 'SELECTED WORKS',
        description: 'Filterable portfolio archive showcasing built civic institutions, private residences, and commercial towers.',
        heroImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=85',
      },
      {
        id: 'sk-p4',
        name: 'Practice Manifesto & Atelier Culture',
        label: 'ABOUT',
        description: 'Architectural model making, material library, and collaborative studio workspace in London.',
        heroImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=85',
      },
      {
        id: 'sk-p5',
        name: 'Atelier Inquiries & Commission Form',
        label: 'CONTACT',
        description: 'Minimalist stone atelier entrance and direct commission consultation form for new architectural projects.',
        heroImage: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1600&q=85',
      },
    ],
    visualAssets: {
      heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
      gridImages: [
        'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=85',
        'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=85',
        'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=900&q=85',
      ],
      detailImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
    },
    outcome:
      'Demonstrates master-level custom WordPress development with modern Gutenberg FSE, delivering sub-second speed, flawless typography, and seamless content management.',
  },
];

/* ==========================================================================
   04. AI PRODUCTS & WORKFLOW AUTOMATION (2 COMMERCIAL AI CONCEPTS)
   ========================================================================== */
export const AI_PROJECTS: AiProject[] = [
  {
    id: 'synapse-os',
    number: '01',
    title: 'SYNAPSE AGENT OS',
    tagline: 'Autonomous AI Agent Orchestration & Enterprise Workflow Engine',
    category: 'AI PRODUCT CONCEPT · SAAS & AGENT WORKFLOW',
    projectTypeBadge: 'AI PRODUCT CONCEPT',
    overview:
      'A next-generation enterprise SaaS platform designed to orchestrate autonomous multi-agent pipelines (Data Synthesis, Policy Compliance, Logic Validation, and System Dispatch) with deterministic audit gates and human-in-the-loop controls.',
    problem:
      'Enterprise operations involve complex, multi-step procedures across CRM, ERP, and communication systems. Brittle rule-based automations break on unstructured data, while unconstrained LLMs pose severe hallucination and compliance risks without human oversight.',
    uxApproach:
      'Designed a visual node-based agent orchestration canvas featuring live token streaming, agent confidence heatmaps, deterministic verification stages, and instant human intervention controls that keep operators in command.',
    keyFeatures: [
      'Interactive visual agent pipeline canvas with drag-and-drop reasoning nodes',
      'Human-in-the-loop approval drawer with structured payload diffs and one-click authorization',
      'Live token throughput, latency percentiles, and cost efficiency analytics dashboard',
      'Multi-modal context memory with vector store embeddings explorer',
      'Granular enterprise guardrail matrix with automated PII redaction and policy enforcement',
      'Zero-latency stream protocol showing intermediate reasoning steps in collapsible step cards',
      'Python-based workflow logic prototyping and REST API evaluation harness',
    ],
    pythonLayer: 'Python-based AI workflow prototyping, mock evaluation harnesses, and REST API integration for multi-agent reasoning pipelines.',
    aiArchitecture: {
      modelStrategy: 'Multi-model routing (Claude 3.5 Sonnet for deep reasoning, Gemini 1.5 Flash for high-throughput extraction)',
      humanInTheLoop: 'Mandatory cryptographic approval checkpoint for actions with financial impact > $500 or PII exposure',
      guardrails: 'Dual-pass semantic policy validation, automated regex redaction, and strict JSON schema output enforcement',
      telemetry: 'Real-time tracking of token count, p95 inference latency, cache hit ratios, and estimated cost per task',
    },
    screens: [
      {
        id: 'synapse-s1',
        title: 'Agent Pipeline Orchestrator',
        badge: 'ACTIVE RUNTIME',
        description: 'Visual node graph mapping active autonomous agents, data flow channels, confidence metrics, and parallel branch execution.',
        visualType: 'agent-graph',
        keyMetrics: [
          { label: 'ACTIVE AGENTS', value: '4 RUNNING' },
          { label: 'CONFIDENCE', value: '98.4%' },
          { label: 'P95 LATENCY', value: '340ms' },
        ],
      },
      {
        id: 'synapse-s2',
        title: 'Human-in-the-Loop Audit Gate',
        badge: 'INTERVENTION DESK',
        description: 'Side-by-side payload diff inspector displaying AI proposed actions, extracted rationale, confidence threshold, and one-click override controls.',
        visualType: 'approval-drawer',
        keyMetrics: [
          { label: 'PENDING GATES', value: '2 ACTIONS' },
          { label: 'EST. IMPACT', value: '$1,240' },
          { label: 'RISK TIER', value: 'LOW RISK' },
        ],
      },
      {
        id: 'synapse-s3',
        title: 'Token Telemetry & Cost Command',
        badge: 'ANALYTICS & HEALTH',
        description: 'Comprehensive operational command dashboard tracking cost per thousand tokens, inference bottlenecks, cache utilization, and error frequencies.',
        visualType: 'telemetry-dashboard',
        keyMetrics: [
          { label: 'CACHE SAVINGS', value: '41.8%' },
          { label: 'COST / RUN', value: '$0.0042' },
          { label: 'SUCCESS RATE', value: '99.91%' },
        ],
      },
      {
        id: 'synapse-s4',
        title: 'Guardrail & Policy Control Matrix',
        badge: 'ENTERPRISE SECURITY',
        description: 'Granular rule configurator with automated PII masking rules, output hallucination filters, and sandboxed test execution harnesses.',
        visualType: 'guardrail-matrix',
        keyMetrics: [
          { label: 'PII BLOCKS', value: '1,420 TODAY' },
          { label: 'SCHEMA DRIFT', value: '0.00%' },
          { label: 'COMPLIANCE', value: 'SOC2 / HIPAA' },
        ],
      },
    ],
    techStack: ['React.js', 'Python Prototyping', 'REST APIs', 'Tailwind CSS', 'Agent Workflow UI', 'LLM Streaming Protocol'],
  },
  {
    id: 'kinetic-ai',
    number: '02',
    title: 'KINETIC CUSTOMER COPILOT',
    tagline: 'Real-Time Customer Intelligence & Adaptive Resolution Copilot',
    category: 'AI PRODUCT CONCEPT · ENTERPRISE AI SAAS',
    projectTypeBadge: 'AI PRODUCT CONCEPT',
    overview:
      'A high-performance AI copilot for modern customer success and technical support teams that actively synthesizes conversation context, surfaces cited internal documentation, and drafts verified resolution plans in real time.',
    problem:
      'Customer support teams waste 35–45% of their working hours searching scattered knowledge bases, Jira tickets, and past conversations, resulting in high customer churn, slow response times, and inconsistent support quality.',
    uxApproach:
      'Designed a contextual split-screen workbench that listens to customer communications in real time, automatically semantically cross-references workspace repositories, and provides transparent source citations for every recommended action.',
    keyFeatures: [
      'Real-time semantic sentiment drift tracker and churn escalation predictor',
      'Zero-hallucination citation engine linking each suggested answer directly to verified internal docs',
      'Contextual response synthesizer with instant tone calibration (Technical, Empathetic, Concise)',
      'One-click automated system dispatch (create Jira defect, refund Stripe invoice, dispatch webhooks)',
      'Knowledge gap radar highlighting documentation voids based on unresolved ticket trends',
      'Keyboard-driven rapid triage workflow enabling sub-10-second ticket resolutions',
      'Python-driven prompt evaluation scripts and embedding similarity testing',
    ],
    pythonLayer: 'Python-driven prompt evaluation scripts, embedding similarity testing, and context retrieval benchmarking.',
    aiArchitecture: {
      modelStrategy: 'Hybrid RAG architecture with dense vector embeddings and BM25 hybrid search reranking',
      humanInTheLoop: 'Support specialist retains 100% edit and dispatch authority before any message reaches the client',
      guardrails: 'Strict grounding threshold: responses suppressed if semantic similarity to verified docs is below 85%',
      telemetry: 'Continuous tracking of resolution speed, draft acceptance rate, and user sentiment delta',
    },
    screens: [
      {
        id: 'kinetic-s1',
        title: 'Active Ticket Copilot Workbench',
        badge: 'LIVE WORKBENCH',
        description: 'Unified split-view interface pairing incoming live customer queries with AI-synthesized solutions, cited knowledge sources, and actionable dispatch pills.',
        visualType: 'copilot-workbench',
        keyMetrics: [
          { label: 'CITATION CONFIDENCE', value: '97.2%' },
          { label: 'SUGGESTION TIME', value: '180ms' },
          { label: 'TONE', value: 'EMPATHETIC TECH' },
        ],
      },
      {
        id: 'kinetic-s2',
        title: 'Workspace Knowledge Radar',
        badge: 'RAG ARCHITECTURE',
        description: 'Vector knowledge graph displaying live index health, semantic clusters, document freshness timestamps, and automatic conflict detection.',
        visualType: 'knowledge-radar',
        keyMetrics: [
          { label: 'INDEXED DOCS', value: '12,480' },
          { label: 'RERANK SCORE', value: '0.94' },
          { label: 'FRESHNESS', value: 'SYNCED 2M AGO' },
        ],
      },
      {
        id: 'kinetic-s3',
        title: 'Resolution Velocity & Impact Matrix',
        badge: 'PERFORMANCE DASHBOARD',
        description: 'Executive reporting dashboard visualizing first-contact resolution increases, handle-time reductions, and customer sentiment trajectory across teams.',
        visualType: 'telemetry-dashboard',
        keyMetrics: [
          { label: 'HANDLE TIME', value: '-48%' },
          { label: 'DRAFT ADOPTION', value: '88.3%' },
          { label: 'CSAT DELTA', value: '+1.4 PTS' },
        ],
      },
    ],
    techStack: ['React.js', 'Python AI Prototyping', 'REST APIs', 'Tailwind CSS', 'RAG Visualizer', 'Vector Index HUD'],
  },
];

export const AI_COLLABORATION_STATEMENT = {
  headline: 'AI AS A FORCE MULTIPLIER: HUMAN CRAFT + ACCELERATED INTELLIGENCE',
  statement:
    'I use AI as a creative and development partner to move from idea to polished digital product faster — combining AI-assisted exploration, product design, prototyping and development with human judgment, UX thinking and attention to detail.',
  formula: 'AI + UI/UX THINKING + REACT DEVELOPMENT = FASTER PRODUCT ITERATION',
  pillars: [
    {
      title: 'Product Ideation & Strategy',
      description: 'Rapidly stress-testing edge cases, synthesizing competitive landscape patterns, and identifying user problem spaces.',
      capability: 'AI-Assisted Architecture',
    },
    {
      title: 'UX Research & Rapid Exploration',
      description: 'Generating comprehensive user journey scenarios, evaluating heuristics, and analyzing qualitative feedback at scale.',
      capability: 'Data Synthesis',
    },
    {
      title: 'UI Design & System Prototyping',
      description: 'Exploring layout variations, validating accessible contrast ratios, and building cohesive design token structures.',
      capability: 'Design Systems',
    },
    {
      title: 'Frontend & React Development',
      description: 'Accelerating component scaffolding, complex data transformations, custom hooks, and comprehensive unit tests.',
      capability: 'Full-Stack Execution',
    },
    {
      title: 'Debugging & Performance Tuning',
      description: 'Pinpointing subtle race conditions, memory leaks, and Core Web Vital bottlenecks in minutes instead of hours.',
      capability: 'Optimization',
    },
    {
      title: 'Building AI-Powered Interfaces',
      description: 'Designing intuitive, trustworthy user interfaces for agentic workflows, streaming LLMs, and human-in-the-loop controls.',
      capability: 'AI Product Design',
    },
  ],
};

