'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { useFinderState } from '@/hooks/useFinderState'
import { projects } from '@/data/portfolio'
import { FolderIcon } from '@/components/ui/FolderIcon'
import { quickLookBackdrop, quickLookPanel } from '@/lib/motion'

export function QuickLook() {
  const { quickLookOpen, selectedProjectId, closeQuickLook } = useFinderState()
  const project = projects.find((p) => p.id === selectedProjectId)

  return (
    <AnimatePresence>
      {quickLookOpen && project && (
        <>
          {/* Backdrop */}
          <motion.div
            variants={quickLookBackdrop}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={closeQuickLook}
            className="absolute inset-0 z-40"
            style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)' }}
          />

          {/* Panel */}
          <motion.div
            variants={quickLookPanel}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute inset-x-0 bottom-0 z-50 mx-auto rounded-t-2xl overflow-hidden"
            style={{
              maxWidth: 680,
              background: 'var(--content-surface)',
              border: '1px solid var(--content-border)',
              boxShadow: '0 -16px 64px rgba(0,0,0,0.6)',
            }}
          >
            {/* Drag handle */}
            <div className="flex items-center justify-center py-2">
              <div className="w-8 h-1 rounded-full" style={{ background: 'var(--content-border)' }} />
            </div>

            {/* Header */}
            <div
              className="flex items-center gap-4 px-6 py-4 border-b"
              style={{ borderColor: 'var(--content-border)' }}
            >
              <FolderIcon color={project.color} size={48} isFile={project.type === 'file'} />
              <div className="flex-1">
                <h2 className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                  {project.name}
                </h2>
                <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
                  Modified {project.modified.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </p>
              </div>
              <button
                onClick={closeQuickLook}
                className="w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                style={{ background: 'var(--content-border)', color: 'var(--text-secondary)' }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--sidebar-active)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--content-border)')}
              >
                <X size={14} />
              </button>
            </div>

            {/* Body */}
            <div className="px-6 py-5 space-y-4">
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {project.longDescription || project.description}
              </p>

              {/* Tech stack */}
              <div>
                <p className="text-[10px] uppercase tracking-wider mb-2" style={{ color: 'var(--text-muted)' }}>
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 rounded text-xs"
                      style={{ background: 'var(--content-border)', color: 'var(--text-secondary)' }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Resume language picker */}
              {project.id === 'resume' ? (
                <div className="pt-2 pb-4 space-y-3">
                  <p className="text-[10px] uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                    Pilih Bahasa / Choose Language
                  </p>
                  <div className="flex gap-3">
                    <a
                      href="/resume_ID.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 rounded-lg text-center text-sm transition-opacity"
                      style={{ background: 'var(--accent)', color: '#fff' }}
                      onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
                      onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                    >
                      🇮🇩 Bahasa Indonesia
                    </a>
                    <a
                      href="/resume_EN.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 rounded-lg text-center text-sm transition-opacity"
                      style={{ background: 'var(--content-border)', color: 'var(--text-primary)' }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--sidebar-active)')}
                      onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--content-border)')}
                    >
                      🇬🇧 English
                    </a>
                  </div>
                </div>
              ) : (
                /* Links */
                <div className="flex gap-3 pt-2 pb-4">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 rounded-lg text-center text-sm transition-colors"
                      style={{ background: 'var(--accent)', color: '#fff' }}
                      onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
                      onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                    >
                      View Live ↗
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 rounded-lg text-center text-sm transition-colors"
                      style={{ background: 'var(--content-border)', color: 'var(--text-primary)' }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--sidebar-active)')}
                      onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--content-border)')}
                    >
                      GitHub ↗
                    </a>
                  )}
                </div>
              )}
            </div>

            {/* Keyboard hint */}
            <div
              className="flex justify-center pb-3 text-[10px]"
              style={{ color: 'var(--text-muted)' }}
            >
              Press Esc to close
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
