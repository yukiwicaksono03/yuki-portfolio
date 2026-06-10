'use client'
import { motion } from 'framer-motion'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { stack } from '@/data/portfolio'
import { staggerContainer, staggerItem } from '@/lib/motion'

export function Stack() {
  return (
    <div className="h-full overflow-y-auto p-8">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-2xl space-y-8"
      >
        {Object.entries(stack).map(([category, items]) => (
          <motion.div key={category} variants={staggerItem}>
            {/* Category header */}
            <p
              className="text-[10px] font-semibold uppercase tracking-wider mb-3"
              style={{ color: 'var(--text-muted)' }}
            >
              {category}
            </p>

            <div
              className="rounded-lg overflow-hidden border"
              style={{ borderColor: 'var(--content-border)', background: 'var(--content-surface)' }}
            >
              {items.map((item, i) => (
                <div
                  key={item.name}
                  className="flex items-center gap-4 px-4 py-2.5 border-b last:border-0"
                  style={{ borderColor: 'var(--content-border)' }}
                >
                  {/* Tree connector */}
                  <span className="text-xs shrink-0" style={{ color: 'var(--text-muted)' }}>
                    {i === items.length - 1 ? '└──' : '├──'}
                  </span>

                  {/* Name */}
                  <span className="w-36 text-xs shrink-0" style={{ color: 'var(--text-primary)' }}>
                    {item.name}
                  </span>

                  {/* Progress bar */}
                  <ProgressBar level={item.level} />
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
