import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', '"SF Mono"', '"Fira Code"', 'Consolas', 'monospace'],
      },
      colors: {
        sidebar: {
          bg: '#1c1c1e',
          hover: '#2c2c2e',
          active: '#3a3a3c',
        },
        content: {
          bg: '#141414',
          surface: '#1e1e1e',
          border: '#3a3a3c',
        },
        accent: '#0a84ff',
        terminal: '#30d158',
        text: {
          primary: '#f5f5f7',
          secondary: '#98989d',
          muted: '#636366',
        },
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        shimmer: 'shimmer 1.5s infinite',
      },
    },
  },
  plugins: [],
}
export default config
