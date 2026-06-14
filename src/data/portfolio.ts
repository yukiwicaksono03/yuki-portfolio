export const meta = {
  name: 'Yuki Wicaksono',
  role: 'Full Stack Developer',
  location: 'Bandung, Indonesia',
  email: 'yukiwicaksono03@gmail.com',
  github: 'https://github.com/yukiwicaksono03',
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
    id: 'lilsala',
    name: 'Lilsala',
    description: 'Website ecommerce PT. Lilsala dengan fitur lengkap seperti Shopee.',
    longDescription:
      'Platform ecommerce milik PT. Lilsala yang dibangun dengan fitur-fitur lengkap seperti Shopee: manajemen produk, keranjang belanja, sistem pembayaran, manajemen pesanan, dan dashboard seller. Didesain untuk pengalaman belanja yang cepat dan nyaman.',
    tech: ['Laravel', 'Vue.js', 'MySQL', 'Tailwind CSS'],
    color: '#30d158',
    live: 'https://lilsala.com',
    github: 'https://github.com/airasoftware/lilsala.v2',
    modified: new Date('2024-05-10'),
    featured: true,
    type: 'folder',
  },
  {
    id: 'cat-vision-center',
    name: 'Cat Vision Center',
    description: 'Website ujian online untuk lembaga Bina Karya Cendekia.',
    longDescription:
      'Aplikasi ujian online untuk lembaga Bina Karya Cendekia. Fitur meliputi manajemen soal, timer ujian, anti-cheat, penilaian otomatis, dan laporan hasil ujian per peserta. Mendukung berbagai tipe soal seperti pilihan ganda dan esai.',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS'],
    color: '#0a84ff',
    live: 'https://cat.binakaryacendekia.id',
    github: 'https://github.com/yukiwicaksono03/catvision',
    modified: new Date('2024-03-15'),
    featured: true,
    type: 'folder',
  },
  {
    id: 'berma-yuniar',
    name: 'Berma Yuniar',
    description: 'Profile company PT. Berkah Maju Yuniar.',
    longDescription:
      'Website profil perusahaan untuk PT. Berkah Maju Yuniar. Menampilkan informasi perusahaan, layanan, portofolio proyek, dan kontak. Didesain dengan tampilan profesional dan responsif untuk meningkatkan kepercayaan klien.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    color: '#ff9f0a',
    live: 'https://www.bermayuniar.com',
    github: 'https://github.com/yukiwicaksono03/berma_profile_company',
    modified: new Date('2024-01-20'),
    featured: false,
    type: 'folder',
  },
  {
    id: 'jkie-global',
    name: 'JKIE Global Indonesia',
    description: 'Profile company dari JKIE Global Indonesia.',
    longDescription:
      'Website profil perusahaan untuk JKIE Global Indonesia. Menampilkan visi misi, layanan bisnis, tim, dan informasi kontak perusahaan. Dibangun dengan performa tinggi dan desain modern untuk representasi brand yang kuat.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    color: '#bf5af2',
    live: 'https://jkieglobal.com',
    github: 'https://github.com/yukiwicaksono03/jkie_global_profile_company',
    modified: new Date('2023-12-05'),
    featured: false,
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
