'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { useFinderState } from '@/hooks/useFinderState'
import { contentVariants } from '@/lib/motion'
import { About } from '@/components/sections/About'
import { Projects } from '@/components/sections/Projects'
import { Stack } from '@/components/sections/Stack'
import { Contact } from '@/components/sections/Contact'
import { FinderToolbar } from './FinderToolbar'

export function FinderContent() {
  const { section } = useFinderState()

  const renderSection = () => {
    switch (section) {
      case 'about': return <About />
      case 'projects': return <Projects />
      case 'stack': return <Stack />
      case 'contact': return <Contact />
    }
  }

  return (
    <div
      className="flex flex-col flex-1 min-w-0 overflow-hidden"
      style={{ background: 'var(--content-bg)' }}
    >
      {section === 'projects' && <FinderToolbar />}

      <AnimatePresence mode="wait">
        <motion.div
          key={section}
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="flex-1 overflow-y-auto"
        >
          {renderSection()}
        </motion.div>
      </AnimatePresence>

      {/* Path bar */}
      <div
        className="hidden md:flex items-center px-4 h-6 border-t text-[10px] shrink-0"
        style={{ borderColor: 'var(--content-border)', color: 'var(--text-muted)' }}
      >
        <span>Portfolio</span>
        <span className="mx-1.5">›</span>
        <span style={{ color: 'var(--text-secondary)' }}>{section}</span>
      </div>
    </div>
  )
}
