// ─── NAVIGATION ──────────────────────────────────────────────────────────────
export const nav = {
  name: 'Sebastian Mendo',
  links: [
    { label: 'About',      href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects',   href: '#projects' },
    { label: 'Stack',      href: '#stack' },
    { label: 'Contact',    href: '#contact' },
  ],
  social: {
    github:   'https://github.com/sebastianmendo1995',
    linkedin: 'https://linkedin.com/in/sebastian-mendo-lopez-8730b1126/',
    email:    'sebastian.mendo1995@gmail.com',
    resume:   '/Sebastian_Mendo_Lopez_Resume.html',
  },
}

// ─── HERO ─────────────────────────────────────────────────────────────────────
export const hero = {
  badge:       'Open to US Remote Roles',
  headline:    'Senior Software Engineer',
  subheadline: 'Automation systems. Frontend architecture. SaaS products.',
  description:
    'I build production-grade systems that handle real load — browser automation at scale, modern React/Next.js platforms, and full-stack SaaS products. Currently at iVisa, where I\'ve reduced manual operations by 60%+ through enterprise automation.',
}

// ─── EXPERIENCE ───────────────────────────────────────────────────────────────
export const experience = [
  {
    company:    'iVisa',
    companyUrl: 'https://ivisa.com',
    role:       'Senior Software Engineer',
    period:     '2022 – Present',
    type:       'Remote · Travel-Tech SaaS · Series B',
    bullets: [
      'Architected a fleet of production automation bots using Playwright and Puppeteer, processing government visa form submissions at scale — reducing manual operations workload by 60%+ and eliminating thousands of hours of repetitive processing annually.',
      'Owned the full product lifecycle of an internal Chrome Extension used daily by operations teams: designed the architecture, shipped 30+ production features, and maintained secure REST API bridges to the core platform.',
      'Reverse-engineered and modernized a legacy automation pipeline, improving reliability and eliminating recurring production failures that previously required manual intervention.',
      'Designed high-throughput REST API integrations between the core platform and browser automation layer, enabling real-time data flows for mission-critical, high-volume visa processing workflows.',
    ],
  },
  {
    company:    'SeguiPro',
    companyUrl: 'https://seguipro.com',
    role:       'Founder & Full Stack Engineer',
    period:     '2023 – Present',
    type:       'Independent SaaS · CRM platform for sales teams',
    bullets: [
      'Sole architect and engineer — designed and shipped an entire production CRM SaaS from zero, including multi-tenant architecture, authentication, real-time data sync, and Stripe payment infrastructure.',
      'Built the full stack with Next.js 14, TypeScript, Firebase (Firestore + Auth), and Tailwind CSS, deployed on Vercel with automated CI/CD pipelines.',
      'Integrated Stripe subscription infrastructure supporting recurring billing, plan upgrades, and full customer lifecycle management — production-ready revenue model from day one.',
      'Designed a scalable Firestore multi-tenant data model supporting isolated per-team workspaces with real-time synchronization.',
    ],
  },
  {
    company:    'Bombo Peru S.A.C.',
    companyUrl: null,
    role:       'Software Engineer',
    period:     '2020 – 2022',
    type:       'Lima, Peru · Digital product agency',
    bullets: [
      'Delivered 40+ features across multiple production web applications, consistently executing on tight startup timelines.',
      'Built type-safe, reusable component libraries in React + TypeScript that reduced frontend development time and improved engineering consistency across client projects.',
      'Engineered third-party payment API integrations ensuring transaction reliability and PCI-compliant data handling.',
    ],
  },
]

// ─── PROJECTS ─────────────────────────────────────────────────────────────────
export const projects = [
  {
    name:        'SeguiPro',
    featured:    true,
    tagline:     'Production CRM SaaS for sales teams',
    description:
      'A full-stack CRM platform purpose-built for sales teams. Designed, architected, and shipped end-to-end as a solo engineer — from multi-tenant data modeling to subscription infrastructure. Built for real users, real scale, and real revenue.',
    challenge:
      'Designed a scalable multi-tenant Firestore architecture where team data stays completely isolated, real-time sync works across all clients simultaneously, and subscription tiers cleanly gate feature access — all owned and maintained by a single engineer.',
    stack:       ['Next.js 14', 'TypeScript', 'Firebase', 'Firestore', 'Tailwind CSS', 'Stripe', 'Vercel'],
    links: {
      live:   'https://seguipro.com',
      github: null,
    },
    highlights: [
      { label: 'Architecture',  value: 'Multi-tenant SaaS' },
      { label: 'Auth',          value: 'Firebase Auth' },
      { label: 'Payments',      value: 'Stripe subscriptions' },
      { label: 'Real-time',     value: 'Firestore sync' },
      { label: 'Deployment',    value: 'Vercel + CI/CD' },
    ],
  },
]

// ─── TECH STACK ───────────────────────────────────────────────────────────────
export const stack: Record<string, string[]> = {
  Frontend:         ['React', 'Next.js 14', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS', 'HTML5', 'CSS3'],
  Backend:          ['Node.js', 'Express', 'Firebase', 'Firestore', 'Firebase Auth', 'REST APIs'],
  Automation:       ['Playwright', 'Puppeteer', 'Chrome Extensions', 'Browser Automation', 'Web Scraping'],
  'Data & Storage': ['Firestore', 'MongoDB', 'SQL', 'PostgreSQL'],
  Infrastructure:   ['Vercel', 'Git', 'CI/CD Pipelines', 'Webpack'],
  'Payments & Auth':['Stripe', 'OAuth 2.0', 'Firebase Auth'],
}

// ─── ABOUT ────────────────────────────────────────────────────────────────────
export const about = {
  paragraphs: [
    "I'm a Senior Software Engineer with 5+ years of experience building production automation systems, scalable SaaS products, and modern frontend platforms. My work sits at the intersection of engineering depth and product thinking.",
    'At iVisa, I architect the automation infrastructure that processes visa applications at global scale. Independently, I designed and shipped SeguiPro — a production CRM SaaS with multi-tenant architecture, Stripe subscriptions, and real-time sync, built and maintained as a solo engineer.',
    'I work well autonomously, move fast without cutting corners, and care about the business outcomes behind every system I build. I thrive in environments where engineering ownership is valued.',
  ],
  highlights: [
    { label: 'Location',    value: 'Peru · Open to US Remote' },
    { label: 'Currently',   value: 'iVisa (Series B)' },
    { label: 'Specialties', value: 'Automation · Frontend · SaaS' },
    { label: 'Side project', value: 'SeguiPro CRM' },
  ],
}
