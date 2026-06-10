'use client'
import { motion } from 'framer-motion'
import { FolderIcon } from '@/components/ui/FolderIcon'
import { useFinderState } from '@/hooks/useFinderState'
import type { Project } from '@/data/portfolio'
import clsx from 'clsx'

interface ProjectListRowProps {
  project: Project
  formatDate: (d: Date) => string
  compact?: boolean
}

export function ProjectListRow({ project, formatDate, compact }: ProjectListRowProps) {
  const { selectedProjectId, setSelectedProject, openQuickLook } = useFinderState()
  const isSelected = selectedProjectId === project.id

  if (compact) {
    return (
      <motion.button
        whileTap={{ scale: 0.98 }}
        onClick={() => setSelectedProject(project.id)}
        onDoubleClick={() => openQuickLook(project.id)}
        className="w-full flex items-center gap-2 px-3 py-2 text-left border-b"
        style={{
          borderColor: 'var(--content-border)',
          background: isSelected ? 'var(--accent-dim)' : 'transparent',
        }}
        onMouseEnter={(e) => {
          if (!isSelected) (e.currentTarget as HTMLElement).style.background = 'var(--sidebar-hover)'
        }}
        onMouseLeave={(e) => {
          if (!isSelected) (e.currentTarget as HTMLElement).style.background = 'transparent'
        }}
      >
        <FolderIcon color={project.color} size={20} isFile={project.type === 'file'} />
        <span className="text-xs truncate" style={{ color: 'var(--text-primary)' }}>
          {project.name}
        </span>
      </motion.button>
    )
  }

  return (
    <motion.button
      whileTap={{ scale: 0.99 }}
      onClick={() => setSelectedProject(project.id)}
      onDoubleClick={() => openQuickLook(project.id)}
      className="w-full grid grid-cols-[2fr_1fr_2fr_80px] items-center px-4 py-2 border-b text-left"
      style={{
        borderColor: 'var(--content-border)',
        background: isSelected ? 'var(--accent-dim)' : 'transparent',
      }}
      onMouseEnter={(e) => {
        if (!isSelected) (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.03)'
      }}
      onMouseLeave={(e) => {
        if (!isSelected) (e.currentTarget as HTMLElement).style.background = 'transparent'
      }}
    >
      {/* Name */}
      <span className="flex items-center gap-2">
        <FolderIcon color={project.color} size={18} isFile={project.type === 'file'} />
        <span className="text-xs truncate" style={{ color: 'var(--text-primary)' }}>
          {project.name}
        </span>
      </span>

      {/* Date */}
      <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>
        {formatDate(project.modified)}
      </span>

      {/* Tech */}
      <span className="text-xs truncate" style={{ color: 'var(--text-muted)' }}>
        {project.tech.join(', ')}
      </span>

      {/* Size */}
      <span className="text-xs text-right" style={{ color: 'var(--text-muted)' }}>
        {project.size ?? '—'}
      </span>
    </motion.button>
  )
}
