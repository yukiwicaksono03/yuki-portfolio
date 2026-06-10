'use client'
import { motion } from 'framer-motion'

interface ProgressBarProps {
  level: number // 0-100
  label?: string
}

function getLevelLabel(level: number): string {
  if (level >= 90) return 'Expert'
  if (level >= 75) return 'Advanced'
  if (level >= 55) return 'Intermediate'
  return 'Learning'
}

const blocks = 12

export function ProgressBar({ level, label }: ProgressBarProps) {
  const filled = Math.round((level / 100) * blocks)
  const levelLabel = label ?? getLevelLabel(level)

  return (
    <div className="flex items-center gap-3">
      <div className="flex gap-0.5">
        {Array.from({ length: blocks }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.03 }}
            className="w-3 h-2.5 rounded-[1px]"
            style={{
              background: i < filled ? 'var(--accent)' : 'var(--content-border)',
            }}
          />
        ))}
      </div>
      <span className="text-[11px]" style={{ color: 'var(--text-muted)' }}>
        {levelLabel}
      </span>
    </div>
  )
}
