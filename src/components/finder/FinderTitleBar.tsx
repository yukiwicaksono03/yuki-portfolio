'use client'
import { Search } from 'lucide-react'
import { TrafficLights } from '@/components/ui/TrafficLights'
import { useFinderState } from '@/hooks/useFinderState'
import { meta } from '@/data/portfolio'

export function FinderTitleBar() {
  const { section, searchQuery, setSearchQuery } = useFinderState()

  return (
    <div
      className="flex items-center px-4 h-11 shrink-0 relative select-none border-b"
      style={{
        background: 'var(--sidebar-bg)',
        borderColor: 'var(--content-border)',
      }}
    >
      {/* Traffic lights */}
      <div className="flex items-center gap-0 z-10">
        <TrafficLights />
      </div>

      {/* Centered title */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-xs font-medium" style={{ color: 'var(--text-secondary)' }}>
          {meta.name} — {section}
        </span>
      </div>

      {/* Search — hidden on mobile */}
      <div className="ml-auto hidden sm:flex items-center gap-1.5 z-10">
        <div
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs"
          style={{
            background: 'var(--content-surface)',
            border: '1px solid var(--content-border)',
            color: 'var(--text-muted)',
          }}
        >
          <Search size={11} />
          <input
            id="finder-search"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-28 bg-transparent outline-none text-xs placeholder:text-[var(--text-muted)] text-[var(--text-primary)]"
          />
          {!searchQuery && (
            <kbd className="text-[10px] opacity-50">⌘K</kbd>
          )}
        </div>
      </div>
    </div>
  )
}
