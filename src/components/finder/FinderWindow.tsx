'use client'
import { motion } from 'framer-motion'
import { FinderTitleBar } from './FinderTitleBar'
import { FinderSidebar } from './FinderSidebar'
import { FinderContent } from './FinderContent'
import { FinderStatusBar } from './FinderStatusBar'
import { QuickLook } from '@/components/projects/QuickLook'
import { windowVariants } from '@/lib/motion'
import { useKeyboard } from '@/hooks/useKeyboard'

export default function FinderWindow() {
  useKeyboard()

  return (
    <motion.div
      variants={windowVariants}
      initial="hidden"
      animate="visible"
      className="relative flex flex-col overflow-hidden"
      style={{
        width: '100vw',
        height: '100vh',
        borderRadius: 0,
        background: 'var(--content-bg)',
        border: '1px solid var(--content-border)',
        boxShadow: '0 32px 80px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.05)',
      }}
    >
      <FinderTitleBar />

      <div className="flex flex-1 min-h-0">
        <FinderSidebar />
        <FinderContent />
      </div>

      <FinderStatusBar />
      <QuickLook />
    </motion.div>
  )
}
