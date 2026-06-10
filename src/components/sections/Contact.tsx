'use client'
import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { TerminalCursor } from '@/components/ui/TerminalCursor'
import { meta } from '@/data/portfolio'
import { staggerContainer, staggerItem } from '@/lib/motion'

export function Contact() {
  const [message, setMessage] = useState('')
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!message.trim() || !email.trim()) return
    setSending(true)
    await new Promise((r) => setTimeout(r, 800))
    setSending(false)
    setSent(true)
  }

  const now = new Date()
  const loginLine = `Last login: ${now.toDateString()} ${now.toTimeString().slice(0, 8)} on ttys001`

  return (
    <div className="h-full overflow-y-auto p-4 md:p-8">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-xl"
      >
        <motion.div
          variants={staggerItem}
          className="rounded-lg overflow-hidden border"
          style={{ borderColor: 'var(--content-border)', background: 'var(--content-surface)' }}
        >
          {/* Terminal title bar */}
          <div
            className="flex items-center px-4 py-2 border-b"
            style={{ borderColor: 'var(--content-border)', background: 'rgba(255,255,255,0.03)' }}
          >
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'var(--red)' }} />
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'var(--yellow)' }} />
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'var(--green)' }} />
            </div>
            <span className="mx-auto text-[11px]" style={{ color: 'var(--text-muted)' }}>
              contact — bash — 80×24
            </span>
          </div>

          <div className="p-5 space-y-4 font-mono text-xs">
            <p style={{ color: 'var(--text-secondary)' }}>{loginLine}</p>

            {/* --help block */}
            <div className="space-y-2">
              <p>
                <span style={{ color: 'var(--terminal-green)' }}>yuki</span>
                <span style={{ color: 'var(--text-muted)' }}>@portfolio</span>
                <span style={{ color: 'var(--text-secondary)' }}> ~ % </span>
                <span style={{ color: 'var(--text-primary)' }}>contact --help</span>
              </p>
              <div className="pl-4 space-y-1" style={{ color: 'var(--text-secondary)' }}>
                <p>Usage: <span style={{ color: 'var(--text-primary)' }}>contact [OPTIONS]</span></p>
                <br />
                <p>Options:</p>
                {[
                  ['--email', meta.email],
                  ['--twitter', meta.twitter],
                  ['--github', meta.github.replace('https://', '')],
                  ['--linkedin', meta.linkedin.replace('https://', '')],
                ].map(([flag, val]) => (
                  <p key={flag} className="pl-4">
                    <span style={{ color: 'var(--accent)' }}>{flag}</span>
                    {'      '.slice(flag.length)}
                    <span style={{ color: 'var(--text-primary)' }}>{val}</span>
                  </p>
                ))}
              </div>
            </div>

            {/* Form */}
            {!sent ? (
              <form onSubmit={handleSubmit} className="space-y-3">
                <p>
                  <span style={{ color: 'var(--terminal-green)' }}>yuki</span>
                  <span style={{ color: 'var(--text-muted)' }}>@portfolio</span>
                  <span style={{ color: 'var(--text-secondary)' }}> ~ % </span>
                  <span style={{ color: 'var(--text-primary)' }}>send --message</span>
                </p>
                <div className="pl-2 space-y-2">
                  <div
                    className="flex items-center rounded px-3 py-2"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid var(--content-border)' }}
                  >
                    <span className="text-xs mr-2" style={{ color: 'var(--text-muted)' }}>›</span>
                    <input
                      type="text"
                      placeholder="type your message..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="flex-1 bg-transparent outline-none text-xs placeholder:text-[var(--text-muted)] text-[var(--text-primary)]"
                    />
                  </div>
                  <div
                    className="flex items-center rounded px-3 py-2"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid var(--content-border)' }}
                  >
                    <span className="text-xs mr-2" style={{ color: 'var(--text-muted)' }}>›</span>
                    <input
                      type="email"
                      placeholder="your email..."
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 bg-transparent outline-none text-xs placeholder:text-[var(--text-muted)] text-[var(--text-primary)]"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={sending}
                    className="flex items-center gap-2 px-3 py-2 rounded text-xs transition-colors duration-150 disabled:opacity-50"
                    style={{
                      background: 'var(--accent-dim)',
                      border: '1px solid var(--accent)',
                      color: 'var(--accent)',
                    }}
                  >
                    {sending ? (
                      <>
                        <span className="animate-pulse">sending</span>
                        <span>...</span>
                      </>
                    ) : (
                      <>SEND ↵</>
                    )}
                  </button>
                </div>
              </form>
            ) : (
              <div className="space-y-1">
                <p>
                  <span style={{ color: 'var(--terminal-green)' }}>yuki</span>
                  <span style={{ color: 'var(--text-muted)' }}>@portfolio</span>
                  <span style={{ color: 'var(--text-secondary)' }}> ~ % </span>
                  <span style={{ color: 'var(--text-primary)' }}>send --message</span>
                </p>
                <p style={{ color: 'var(--terminal-green)' }} className="pl-2">
                  ✓ Message sent. I&apos;ll get back to you soon.
                </p>
              </div>
            )}

            {/* Prompt */}
            <p>
              <span style={{ color: 'var(--terminal-green)' }}>yuki</span>
              <span style={{ color: 'var(--text-muted)' }}>@portfolio</span>
              <span style={{ color: 'var(--text-secondary)' }}> ~ % </span>
              <TerminalCursor />
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
