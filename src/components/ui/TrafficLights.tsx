'use client'

export function TrafficLights() {
  return (
    <div className="traffic-lights-group flex items-center gap-2" role="presentation">
      <button
        className="w-3 h-3 rounded-full flex items-center justify-center transition-all duration-150 focus:outline-none"
        style={{ background: 'var(--red)' }}
        aria-label="Close"
      >
        <span className="tl-symbol" style={{ color: 'rgba(0,0,0,0.5)' }}>×</span>
      </button>
      <button
        className="w-3 h-3 rounded-full flex items-center justify-center transition-all duration-150 focus:outline-none"
        style={{ background: 'var(--yellow)' }}
        aria-label="Minimize"
      >
        <span className="tl-symbol" style={{ color: 'rgba(0,0,0,0.5)' }}>−</span>
      </button>
      <button
        className="w-3 h-3 rounded-full flex items-center justify-center transition-all duration-150 focus:outline-none"
        style={{ background: 'var(--green)' }}
        aria-label="Fullscreen"
      >
        <span className="tl-symbol" style={{ color: 'rgba(0,0,0,0.5)' }}>⤢</span>
      </button>
    </div>
  )
}
