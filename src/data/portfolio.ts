export const meta = {
  name: 'Yuki Wicaksono',
  role: 'Full Stack Developer',
  location: 'Jakarta, Indonesia',
  email: 'yuki@yukidev.io',
  github: 'https://github.com/yukiwicaksono',
  linkedin: 'https://linkedin.com/in/yukiwicaksono',
  twitter: '@yukidev',
  available: true,
  bio: 'Full-stack developer who builds fast, clean, and scalable web products. Obsessed with developer experience, clean architecture, and pixel-perfect UIs.',
  currentWork: 'Building production-grade apps at scale.',
}

export type Project = {
  id: string
  name: string
  description: string
  longDescription: string
  tech: string[]
  color: string
  live?: string
  github?: string
  modified: Date
  featured: boolean
  type: 'folder' | 'file'
  size?: string
}

export const projects: Project[] = [
  {
    id: 'fintrack',
    name: 'fintrack',
    description: 'Real-time personal finance tracker with AI-powered spending insights.',
    longDescription:
      'A full-stack personal finance app with bank account syncing, automatic transaction categorization, and AI-generated spending insights. Built with Next.js 14, Prisma, and OpenAI. Handles 10k+ transactions in real time with a clean, fast UI.',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'OpenAI'],
    color: '#30d158',
    live: 'https://fintrack.demo.io',
    github: 'https://github.com/yukiwicaksono/fintrack',
    modified: new Date('2024-04-10'),
    featured: true,
    type: 'folder',
  },
  {
    id: 'devpulse',
    name: 'devpulse',
    description: 'GitHub analytics dashboard — visualize your coding activity.',
    longDescription:
      'A developer analytics dashboard that pulls data from the GitHub API to visualize commit history, language trends, PR velocity, and review turnaround time. Built as a self-hosted alternative to GitHub Wrapped.',
    tech: ['Next.js', 'TypeScript', 'Recharts', 'GitHub API'],
    color: '#0a84ff',
    live: 'https://devpulse.demo.io',
    github: 'https://github.com/yukiwicaksono/devpulse',
    modified: new Date('2024-02-20'),
    featured: true,
    type: 'folder',
  },
  {
    id: 'opendeploy',
    name: 'opendeploy',
    description: 'Lightweight self-hosted deployment platform for Node.js apps.',
    longDescription:
      'A minimal, self-hosted alternative to Vercel for Node.js apps. Supports zero-downtime deploys, environment variable management, and deploy previews. Built with Docker, Node.js, and a React dashboard.',
    tech: ['Node.js', 'Docker', 'React', 'Redis', 'SQLite'],
    color: '#ff9f0a',
    github: 'https://github.com/yukiwicaksono/opendeploy',
    modified: new Date('2023-11-15'),
    featured: false,
    type: 'folder',
  },
  {
    id: 'threadbase',
    name: 'threadbase',
    description: 'Open-source community forum engine built on Next.js.',
    longDescription:
      'A modern, open-source forum engine with markdown support, nested replies, tag filtering, and full-text search. Zero JavaScript on the read path for maximum performance.',
    tech: ['Next.js', 'TypeScript', 'tRPC', 'PostgreSQL'],
    color: '#bf5af2',
    live: 'https://threadbase.demo.io',
    github: 'https://github.com/yukiwicaksono/threadbase',
    modified: new Date('2023-08-30'),
    featured: false,
    type: 'folder',
  },
  {
    id: 'portfolio-v2',
    name: 'portfolio-v2',
    description: 'This very site — a macOS Finder-style portfolio.',
    longDescription:
      'This portfolio website. Designed to feel exactly like macOS Finder — sidebar navigation, icon grid, list view, Quick Look previews, and full keyboard shortcut support. Built with Next.js 14, Framer Motion, and Zustand.',
    tech: ['Next.js', 'TypeScript', 'Framer Motion', 'Tailwind CSS', 'Zustand'],
    color: '#ff453a',
    github: 'https://github.com/yukiwicaksono/portfolio-v2',
    modified: new Date('2024-06-08'),
    featured: true,
    type: 'folder',
  },
  {
    id: 'resume',
    name: 'resume.pdf',
    description: 'Yuki Wicaksono — Full Stack Developer resume.',
    longDescription: '',
    tech: [],
    color: '#ff453a',
    modified: new Date('2024-05-01'),
    featured: false,
    type: 'file',
    size: '248 KB',
  },
]

export type StackItem = { name: string; level: number }

export const stack: Record<string, StackItem[]> = {
  Languages: [
    { name: 'TypeScript', level: 95 },
    { name: 'JavaScript', level: 95 },
    { name: 'Python', level: 72 },
    { name: 'Go', level: 55 },
    { name: 'SQL', level: 85 },
  ],
  Frontend: [
    { name: 'Next.js', level: 95 },
    { name: 'React', level: 95 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'Framer Motion', level: 80 },
  ],
  Backend: [
    { name: 'Node.js', level: 90 },
    { name: 'Express / Hono', level: 88 },
    { name: 'PostgreSQL', level: 85 },
    { name: 'Redis', level: 78 },
    { name: 'Prisma / Drizzle', level: 88 },
  ],
  DevOps: [
    { name: 'Docker', level: 80 },
    { name: 'Vercel / Railway', level: 90 },
    { name: 'GitHub Actions', level: 82 },
    { name: 'AWS (S3, EC2, RDS)', level: 65 },
  ],
}

export type Section = 'about' | 'projects' | 'stack' | 'contact'
export type ViewMode = 'icon' | 'list' | 'column'
