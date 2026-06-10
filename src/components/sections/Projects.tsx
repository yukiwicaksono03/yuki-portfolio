'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { useFinderState } from '@/hooks/useFinderState'
import { projects } from '@/data/portfolio'
import { ProjectIcon } from '@/components/projects/ProjectIcon'
import { ProjectListRow } from '@/components/projects/ProjectListRow'
import { staggerContainer, staggerItem } from '@/lib/motion'

function formatRelativeDate(date: Date): string {
  const now = new Date()
  const diff = now.getTime() - date.getTime()
  const days = Math.floor(diff / 86400000)
  if (days === 0) return 'Today'
  if (days === 1) return 'Yesterday'
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

export function Projects() {
  const { viewMode, searchQuery } = useFinderState()

  const filtered = projects.filter((p) =>
    searchQuery
      ? p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tech.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
      : true
  )

  return (
    <div className="h-full overflow-y-auto">
      <AnimatePresence mode="wait">
        {viewMode === 'icon' && (
          <motion.div
            key="icon"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="p-4 md:p-6 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4"
          >
            {filtered.length === 0 ? (
              <EmptyState />
            ) : (
              filtered.map((project) => (
                <motion.div key={project.id} variants={staggerItem}>
                  <ProjectIcon project={project} />
                </motion.div>
              ))
            )}
          </motion.div>
        )}

        {viewMode === 'list' && (
          <motion.div
            key="list"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* List header */}
            <div
              className="grid grid-cols-[1fr_1fr] md:grid-cols-[2fr_1fr_2fr_80px] px-4 py-1.5 border-b text-[10px] font-semibold uppercase tracking-wider sticky top-0"
              style={{
                borderColor: 'var(--content-border)',
                color: 'var(--text-muted)',
                background: 'var(--content-bg)',
              }}
            >
              <span>Name</span>
              <span className="hidden md:block">Date Modified</span>
              <span className="md:hidden">Tech</span>
              <span className="hidden md:block">Tech</span>
              <span className="hidden md:block text-right">Size</span>
            </div>

            {filtered.length === 0 ? (
              <EmptyState />
            ) : (
              filtered.map((project) => (
                <motion.div key={project.id} variants={staggerItem}>
                  <ProjectListRow project={project} formatDate={formatRelativeDate} />
                </motion.div>
              ))
            )}
          </motion.div>
        )}

        {viewMode === 'column' && (
          <motion.div
            key="column"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex h-full"
          >
            {/* Left column: project list */}
            <div
              className="w-64 h-full overflow-y-auto border-r shrink-0"
              style={{ borderColor: 'var(--content-border)' }}
            >
              {filtered.map((project) => (
                <motion.div key={project.id} variants={staggerItem}>
                  <ProjectListRow project={project} formatDate={formatRelativeDate} compact />
                </motion.div>
              ))}
            </div>

            {/* Right column: detail */}
            <ColumnDetail projects={filtered} formatDate={formatRelativeDate} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function ColumnDetail({
  projects: ps,
  formatDate,
}: {
  projects: typeof projects
  formatDate: (d: Date) => string
}) {
  const { selectedProjectId } = useFinderState()
  const project = ps.find((p) => p.id === selectedProjectId) ?? ps[0]
  if (!project) return null

  return (
    <div className="flex-1 p-6 overflow-y-auto">
      <div className="space-y-4">
        <div className="flex items-start gap-4">
          <div
            className="w-14 h-12 rounded-lg flex items-center justify-center shrink-0"
            style={{ background: `${project.color}22` }}
          >
            <span style={{ color: project.color }} className="text-2xl">📁</span>
          </div>
          <div>
            <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
              {project.name}
            </p>
            <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
              Modified {formatDate(project.modified)}
            </p>
          </div>
        </div>

        <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          {project.longDescription || project.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 rounded text-[10px]"
              style={{ background: 'var(--content-border)', color: 'var(--text-secondary)' }}
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-2">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded text-xs"
              style={{ background: 'var(--accent-dim)', color: 'var(--accent)', border: '1px solid var(--accent)' }}
            >
              live ↗
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded text-xs"
              style={{ background: 'var(--content-surface)', color: 'var(--text-secondary)', border: '1px solid var(--content-border)' }}
            >
              github ↗
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

function EmptyState() {
  return (
    <div className="col-span-full flex flex-col items-center justify-center py-24 gap-3">
      <div className="text-4xl opacity-20">📂</div>
      <p className="text-sm" style={{ color: 'var(--text-muted)' }}>No Items</p>
    </div>
  )
}
