import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const educationalOrganization = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'Pondok Pesantren Darul Hijrah Kediri',
  url: 'https://www.darulhijrahkediri.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Kediri',
    addressRegion: 'Jawa Timur',
    addressCountry: 'ID',
  },
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.darulhijrahkediri.com'),
  title: {
    default: 'Pondok Pesantren Darul Hijrah Kediri | Website Resmi',
    template: '%s | Darul Hijrah Kediri',
  },
  description: 'Pondok Pesantren Darul Hijrah Kediri menyediakan program pendidikan pesantren, tahfidz Al-Qur’an, pembinaan karakter, dan pendaftaran santri baru (PPDB/PSTB).',
  keywords: [
    'Darul Hijrah Kediri',
    'Pondok Pesantren Darul Hijrah Kediri',
    'Ponpes Darul Hijrah Kediri',
    'PPDB Darul Hijrah Kediri',
    'Boarding School Kediri',
    'Pesantren Tahfidz Kediri',
  ],
  alternates: {
    canonical: 'https://www.darulhijrahkediri.com',
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://www.darulhijrahkediri.com',
    siteName: 'Darul Hijrah Kediri',
    title: 'Pondok Pesantren Darul Hijrah Kediri | Website Resmi',
    description: 'Pondok Pesantren Darul Hijrah Kediri menyediakan program pendidikan pesantren, tahfidz Al-Qur’an, pembinaan karakter, dan pendaftaran santri baru (PPDB/PSTB).',
    images: [
      {
        url: 'https://www.darulhijrahkediri.com/brosur-1.jpeg',
        alt: 'Brosur Penerimaan Santri Baru Darul Hijrah Kediri',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pondok Pesantren Darul Hijrah Kediri | Website Resmi',
    description: 'Pondok Pesantren Darul Hijrah Kediri menyediakan program pendidikan pesantren, tahfidz Al-Qur’an, pembinaan karakter, dan pendaftaran santri baru (PPDB/PSTB).',
    images: ['https://www.darulhijrahkediri.com/brosur-1.jpeg'],
  },
  generator: 'v0.app',
  verification: {
    google: 'tEpruVXV1A81eA23yLRc40N0jQ6EfxMXOV1-2vEPPwI',
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(educationalOrganization).replace(/</g, '\\u003c'),
          }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
