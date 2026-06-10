'use client'
import { motion } from 'framer-motion'
import { TerminalCursor } from '@/components/ui/TerminalCursor'
import { meta } from '@/data/portfolio'
import { staggerContainer, staggerItem } from '@/lib/motion'

const rows = [
  { key: 'name', value: meta.name },
  { key: 'role', value: meta.role },
  { key: 'location', value: meta.location },
  { key: 'status', value: meta.available ? '● available for work' : '○ not available', highlight: meta.available },
  { key: 'email', value: meta.email },
  { key: 'github', value: meta.github.replace('https://', '') },
]

export function About() {
  return (
    <div className="h-full overflow-y-auto p-4 md:p-8">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-2xl"
      >
        {/* Column view table */}
        <motion.div
          variants={staggerItem}
          className="rounded-lg overflow-hidden border mb-8"
          style={{ borderColor: 'var(--content-border)', background: 'var(--content-surface)' }}
        >
          {rows.map((row, i) => (
            <div
              key={row.key}
              className="flex items-center border-b last:border-0"
              style={{ borderColor: 'var(--content-border)' }}
            >
              <div
                className="w-24 md:w-36 px-3 md:px-4 py-2.5 text-xs shrink-0 border-r"
                style={{
                  borderColor: 'var(--content-border)',
                  color: 'var(--text-muted)',
                  background: 'rgba(255,255,255,0.02)',
                }}
              >
                {row.key}
              </div>
              <div
                className="flex-1 px-4 py-2.5 text-xs"
                style={{
                  color: row.highlight ? 'var(--terminal-green)' : 'var(--text-primary)',
                }}
              >
                {row.value}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Terminal bio block */}
        <motion.div
          variants={staggerItem}
          className="rounded-lg p-5 font-mono text-sm space-y-4"
          style={{ background: 'var(--content-surface)', border: '1px solid var(--content-border)' }}
        >
          <div>
            <p className="text-xs mb-1" style={{ color: 'var(--text-muted)' }}>
              <span style={{ color: 'var(--terminal-green)' }}>yuki</span>
              <span style={{ color: 'var(--text-muted)' }}>@portfolio</span>
              <span style={{ color: 'var(--text-secondary)' }}> ~ %</span>
              <span style={{ color: 'var(--text-primary)' }}> whoami</span>
            </p>
            <p className="text-xs leading-relaxed pl-2" style={{ color: 'var(--text-secondary)' }}>
              {meta.bio}
            </p>
          </div>

          <div>
            <p className="text-xs mb-1" style={{ color: 'var(--text-muted)' }}>
              <span style={{ color: 'var(--terminal-green)' }}>yuki</span>
              <span style={{ color: 'var(--text-muted)' }}>@portfolio</span>
              <span style={{ color: 'var(--text-secondary)' }}> ~ %</span>
              <span style={{ color: 'var(--text-primary)' }}> currently</span>
            </p>
            <p className="text-xs leading-relaxed pl-2" style={{ color: 'var(--text-secondary)' }}>
              {meta.currentWork}
            </p>
          </div>

          <div>
            <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
              <span style={{ color: 'var(--terminal-green)' }}>yuki</span>
              <span style={{ color: 'var(--text-muted)' }}>@portfolio</span>
              <span style={{ color: 'var(--text-secondary)' }}> ~ %</span>
              <span style={{ color: 'var(--text-primary)' }}> _</span>
              <TerminalCursor />
            </p>
          </div>
        </motion.div>

        {/* Quick links */}
        <motion.div variants={staggerItem} className="flex flex-wrap gap-3 mt-6">
          {[
            { label: 'github ↗', href: meta.github },
            { label: 'linkedin ↗', href: meta.linkedin },
            { label: 'email ↗', href: `mailto:${meta.email}` },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-md text-xs transition-colors duration-150"
              style={{
                background: 'var(--content-surface)',
                border: '1px solid var(--content-border)',
                color: 'var(--accent)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--accent-dim)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--content-surface)')}
            >
              {label}
            </a>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}
