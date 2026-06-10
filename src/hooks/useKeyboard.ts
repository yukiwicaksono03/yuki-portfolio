'use client'
import { useEffect } from 'react'
import { useFinderState } from './useFinderState'
import type { Section } from '@/data/portfolio'

const SECTIONS: Section[] = ['about', 'projects', 'stack', 'contact']

export function useKeyboard() {
  const {
    section,
    viewMode,
    quickLookOpen,
    selectedProjectId,
    setSection,
    setViewMode,
    openQuickLook,
    closeQuickLook,
  } = useFinderState()

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const meta = e.metaKey || e.ctrlKey

      // Close Quick Look
      if (e.key === 'Escape') {
        closeQuickLook()
        return
      }

      // Quick Look on Space
      if (e.key === ' ' && selectedProjectId && !quickLookOpen) {
        e.preventDefault()
        openQuickLook(selectedProjectId)
        return
      }

      // View toggles
      if (meta && e.key === '1') { e.preventDefault(); setViewMode('icon'); return }
      if (meta && e.key === '2') { e.preventDefault(); setViewMode('list'); return }
      if (meta && e.key === '3') { e.preventDefault(); setViewMode('column'); return }

      // Sidebar navigation
      if (e.key === 'ArrowUp') {
        e.preventDefault()
        const idx = SECTIONS.indexOf(section)
        if (idx > 0) setSection(SECTIONS[idx - 1])
        return
      }
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        const idx = SECTIONS.indexOf(section)
        if (idx < SECTIONS.length - 1) setSection(SECTIONS[idx + 1])
        return
      }

      // Focus search
      if (meta && e.key === 'k') {
        e.preventDefault()
        document.getElementById('finder-search')?.focus()
        return
      }
    }

    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [section, viewMode, quickLookOpen, selectedProjectId, setSection, setViewMode, openQuickLook, closeQuickLook])
}
