'use client'
import { motion } from 'framer-motion'
import { Folder, Wrench, Mail, Github, FileText, User } from 'lucide-react'
import { useFinderState } from '@/hooks/useFinderState'
import type { Section } from '@/data/portfolio'
import { sidebarVariants } from '@/lib/motion'
import { meta } from '@/data/portfolio'
import clsx from 'clsx'

interface SidebarItem {
  id: Section | 'github' | 'resume'
  label: string
  icon: React.ReactNode
  isExternal?: boolean
  href?: string
}

const favorites: SidebarItem[] = [
  { id: 'about', label: 'about', icon: <User size={14} /> },
  { id: 'projects', label: 'projects', icon: <Folder size={14} /> },
  { id: 'stack', label: 'stack', icon: <Wrench size={14} /> },
  { id: 'contact', label: 'contact', icon: <Mail size={14} /> },
]

const devices: SidebarItem[] = [
  { id: 'github', label: 'github', icon: <Github size={14} />, isExternal: true, href: meta.github },
  { id: 'resume', label: 'resume.pdf', icon: <FileText size={14} />, isExternal: true },
]

function SidebarItemRow({ item, active, onClick }: { item: SidebarItem; active: boolean; onClick: () => void }) {
  return (
    <motion.button
      onClick={onClick}
      whileTap={{ scale: 0.97 }}
      className={clsx(
        'relative w-full flex items-center gap-2 px-3 py-1.5 rounded-md text-left text-xs transition-colors duration-150',
        active ? 'text-[var(--text-primary)]' : 'text-[var(--sidebar-text)]'
      )}
      style={{ background: active ? 'var(--sidebar-active)' : 'transparent' }}
      onMouseEnter={(e) => {
        if (!active) (e.currentTarget as HTMLElement).style.background = 'var(--sidebar-hover)'
      }}
      onMouseLeave={(e) => {
        if (!active) (e.currentTarget as HTMLElement).style.background = 'transparent'
      }}
    >
      {active && (
        <span
          className="absolute left-0 top-1 bottom-1 w-0.5 rounded-full"
          style={{ background: 'var(--accent)' }}
        />
      )}
      <span style={{ color: active ? 'var(--accent)' : 'var(--text-muted)' }}>{item.icon}</span>
      <span>{item.label}</span>
      {item.isExternal && (
        <span className="ml-auto text-[10px]" style={{ color: 'var(--text-muted)' }}>↗</span>
      )}
    </motion.button>
  )
}

export function FinderSidebar() {
  const { section, setSection, openQuickLook } = useFinderState()

  return (
    // Wrap in a plain div so Tailwind's display:none beats Framer Motion's inline styles
    <div className="hidden md:flex h-full shrink-0">
      <motion.aside
        variants={sidebarVariants}
        className="relative grain flex flex-col w-[200px] h-full overflow-hidden border-r"
        style={{
          background: 'var(--sidebar-bg)',
          borderColor: 'var(--content-border)',
        }}
      >
        <div className="flex-1 overflow-y-auto px-2 pt-3 pb-4">
          <div className="mb-2">
            <p className="px-3 mb-1 text-[10px] font-semibold uppercase tracking-wider" style={{ color: 'var(--sidebar-text-muted)' }}>
              Favorites
            </p>
            {favorites.map((item) => (
              <SidebarItemRow
                key={item.id}
                item={item}
                active={section === item.id}
                onClick={() => setSection(item.id as Section)}
              />
            ))}
          </div>

          <div className="mt-4">
            <p className="px-3 mb-1 text-[10px] font-semibold uppercase tracking-wider" style={{ color: 'var(--sidebar-text-muted)' }}>
              Devices
            </p>
            {devices.map((item) => (
              <SidebarItemRow
                key={item.id}
                item={item}
                active={false}
                onClick={() => {
                  if (item.id === 'resume') openQuickLook('resume')
                  else if (item.href) window.open(item.href, '_blank')
                }}
              />
            ))}
          </div>
        </div>

        <div className="px-3 py-2 border-t text-[10px]" style={{ borderColor: 'var(--content-border)', color: 'var(--text-muted)' }}>
          ↑↓ navigate sections
        </div>
      </motion.aside>
    </div>
  )
}

const mobileNavItems = [
  { id: 'about' as Section, label: 'about', icon: <User size={18} /> },
  { id: 'projects' as Section, label: 'projects', icon: <Folder size={18} /> },
  { id: 'stack' as Section, label: 'stack', icon: <Wrench size={18} /> },
  { id: 'contact' as Section, label: 'contact', icon: <Mail size={18} /> },
]

export function MobileNavBar() {
  const { section, setSection } = useFinderState()

  return (
    <motion.nav
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.25, duration: 0.3 }}
      className="shrink-0 border-t"
      style={{ background: 'var(--sidebar-bg)', borderColor: 'var(--content-border)' }}
    >
      <div className="flex items-stretch">
        {mobileNavItems.map((item) => {
          const isActive = section === item.id
          return (
            <button
              key={item.id}
              onClick={() => setSection(item.id)}
              className="flex flex-col items-center justify-center gap-1 flex-1 py-2.5 transition-colors duration-150"
              style={{
                color: isActive ? 'var(--accent)' : 'var(--text-muted)',
                background: isActive ? 'var(--accent-dim)' : 'transparent',
              }}
            >
              {item.icon}
              <span className="text-[10px] font-medium">{item.label}</span>
            </button>
          )
        })}
        <a
          href={meta.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 flex-1 py-2.5 transition-colors duration-150"
          style={{ color: 'var(--text-muted)' }}
        >
          <Github size={18} />
          <span className="text-[10px] font-medium">github</span>
        </a>
      </div>
    </motion.nav>
  )
}
