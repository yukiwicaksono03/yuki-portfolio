'use client'
import { create } from 'zustand'
import type { Section, ViewMode } from '@/data/portfolio'

interface FinderState {
  section: Section
  viewMode: ViewMode
  selectedProjectId: string | null
  quickLookOpen: boolean
  searchQuery: string
  setSection: (section: Section) => void
  setViewMode: (mode: ViewMode) => void
  setSelectedProject: (id: string | null) => void
  openQuickLook: (id: string) => void
  closeQuickLook: () => void
  setSearchQuery: (q: string) => void
}

export const useFinderState = create<FinderState>((set) => ({
  section: 'about',
  viewMode: 'icon',
  selectedProjectId: null,
  quickLookOpen: false,
  searchQuery: '',
  setSection: (section) => set({ section, selectedProjectId: null, quickLookOpen: false }),
  setViewMode: (viewMode) => set({ viewMode }),
  setSelectedProject: (id) => set({ selectedProjectId: id }),
  openQuickLook: (id) => set({ selectedProjectId: id, quickLookOpen: true }),
  closeQuickLook: () => set({ quickLookOpen: false }),
  setSearchQuery: (searchQuery) => set({ searchQuery }),
}))
