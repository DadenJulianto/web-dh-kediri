import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PPDB Darul Hijrah Kediri | Tumbuh dalam Iman, Berkarya dengan Ilmu',
  description: 'Penerimaan Santri Baru Darul Hijrah Kediri. Pendidikan tahfizh, adab, ilmu, dan life skill dalam lingkungan pesantren yang hangat.',
  generator: 'v0.app',
  icons: {
    icon: '/logo-dh.png',
    apple: '/logo-dh.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
