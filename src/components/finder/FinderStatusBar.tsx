'use client'
import { motion } from 'framer-motion'
import { useFinderState } from '@/hooks/useFinderState'
import { projects, meta } from '@/data/portfolio'
import { statusBarVariants } from '@/lib/motion'

const STATUS: Record<string, string> = {
  about: `1 item  •  ${meta.name}  •  ${meta.role}`,
  projects: `${projects.filter(p => p.type === 'folder').length} projects  •  ${projects.length} items total`,
  stack: `4 categories  •  ${Object.values({}).flat().length + 18} skills`,
  contact: `Available for work  •  ${meta.email}`,
}

export function FinderStatusBar() {
  const { section } = useFinderState()

  return (
    <motion.div
      variants={statusBarVariants}
      className="flex items-center justify-center px-4 h-7 shrink-0 border-t"
      style={{ borderColor: 'var(--content-border)', background: 'var(--content-bg)' }}
    >
      <motion.p
        key={section}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="text-[11px]"
        style={{ color: 'var(--text-muted)' }}
      >
        {STATUS[section]}
      </motion.p>
    </motion.div>
  )
}
