'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FolderIcon } from '@/components/ui/FolderIcon'
import { useFinderState } from '@/hooks/useFinderState'
import type { Project } from '@/data/portfolio'
import clsx from 'clsx'

interface ProjectIconProps {
  project: Project
}

export function ProjectIcon({ project }: ProjectIconProps) {
  const { selectedProjectId, setSelectedProject, openQuickLook } = useFinderState()
  const isSelected = selectedProjectId === project.id
  const [hovered, setHovered] = useState(false)

  return (
    <div className="relative flex flex-col items-center">
      <motion.button
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        onClick={() => setSelectedProject(project.id)}
        onDoubleClick={() => openQuickLook(project.id)}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className={clsx(
          'relative flex flex-col items-center gap-1.5 p-2 rounded-lg w-full transition-colors duration-100',
          isSelected ? 'outline outline-2 outline-offset-1' : ''
        )}
        style={{
          background: isSelected ? 'var(--accent-dim)' : 'transparent',
          outlineColor: isSelected ? 'var(--accent)' : 'transparent',
        }}
      >
        <FolderIcon color={project.color} size={56} isFile={project.type === 'file'} />

        <span
          className="text-[11px] text-center leading-tight max-w-full truncate w-full px-1"
          style={{ color: 'var(--text-primary)' }}
        >
          {project.name}
        </span>
        <span
          className="text-[10px] text-center leading-tight max-w-full truncate w-full px-1"
          style={{ color: 'var(--text-muted)' }}
        >
          {project.tech.slice(0, 2).join(' / ')}
        </span>
      </motion.button>

      {/* Hover tooltip */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full mt-2 z-50 w-52 rounded-lg p-3 text-left shadow-2xl"
            style={{
              background: 'var(--content-surface)',
              border: '1px solid var(--content-border)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
            }}
          >
            <p className="text-xs font-medium mb-1" style={{ color: 'var(--text-primary)' }}>
              {project.name}
            </p>
            <p className="text-[11px] mb-2 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1 mb-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-1.5 py-0.5 rounded text-[10px]"
                  style={{ background: 'var(--content-border)', color: 'var(--text-muted)' }}
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-2 text-[10px]">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--accent)' }}
                  onClick={(e) => e.stopPropagation()}
                >
                  live ↗
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--text-secondary)' }}
                  onClick={(e) => e.stopPropagation()}
                >
                  github ↗
                </a>
              )}
            </div>
            <p className="mt-2 text-[10px]" style={{ color: 'var(--text-muted)' }}>
              Double-click or Space for Quick Look
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
