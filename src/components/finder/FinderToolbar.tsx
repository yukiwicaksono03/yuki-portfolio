'use client'
import { LayoutGrid, List, Columns } from 'lucide-react'
import { motion } from 'framer-motion'
import { useFinderState } from '@/hooks/useFinderState'
import type { ViewMode } from '@/data/portfolio'
import clsx from 'clsx'

const views: { mode: ViewMode; icon: React.ReactNode; label: string; shortcut: string }[] = [
  { mode: 'icon', icon: <LayoutGrid size={14} />, label: 'Icon View', shortcut: '⌘1' },
  { mode: 'list', icon: <List size={14} />, label: 'List View', shortcut: '⌘2' },
  { mode: 'column', icon: <Columns size={14} />, label: 'Column View', shortcut: '⌘3' },
]

export function FinderToolbar() {
  const { viewMode, setViewMode } = useFinderState()

  return (
    <div
      className="flex items-center gap-3 px-4 h-9 shrink-0 border-b"
      style={{ borderColor: 'var(--content-border)', background: 'var(--content-bg)' }}
    >
      {/* View toggle */}
      <div
        className="flex items-center rounded-md overflow-hidden border"
        style={{ borderColor: 'var(--content-border)' }}
      >
        {views.map(({ mode, icon, label, shortcut }) => (
          <motion.button
            key={mode}
            whileTap={{ scale: 0.92 }}
            onClick={() => setViewMode(mode)}
            title={`${label} (${shortcut})`}
            className={clsx(
              'flex items-center justify-center w-8 h-7 transition-colors duration-150',
              viewMode === mode
                ? 'text-[var(--accent)]'
                : 'text-[var(--text-muted)] hover:text-[var(--text-secondary)]'
            )}
            style={{
              background: viewMode === mode ? 'var(--accent-dim)' : 'transparent',
              borderRight: mode !== 'column' ? '1px solid var(--content-border)' : 'none',
            }}
          >
            {icon}
          </motion.button>
        ))}
      </div>

      {/* Sort indicator */}
      <div className="flex items-center gap-1 text-[11px]" style={{ color: 'var(--text-muted)' }}>
        <span>Sort by:</span>
        <span style={{ color: 'var(--text-secondary)' }}>Date Modified ▾</span>
      </div>

      {/* Keyboard hint */}
      <div className="ml-auto text-[10px]" style={{ color: 'var(--text-muted)' }}>
        Space for Quick Look
      </div>
    </div>
  )
}
