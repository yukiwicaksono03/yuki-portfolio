import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Yuki Wicaksono — Portfolio',
  description: 'Full Stack Developer — Portfolio',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="h-screen w-screen overflow-hidden bg-[#0a0a0a] font-mono">
        {children}
      </body>
    </html>
  )
}
