import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'NomosAI - AI-Powered Legal Platform',
    template: '%s | NomosAI'
  },
  description: 'Streamline legal research, automate documentation, and enhance client services with AI-powered legal technology.',
  keywords: ['legal tech', 'AI', 'legal research', 'document automation', 'case management', 'legal assistant'],
  authors: [{ name: 'NomosAI Team' }],
  creator: 'NomosAI',
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'NomosAI - AI-Powered Legal Platform',
    description: 'Streamline legal research, automate documentation, and enhance client services with AI-powered legal technology.',
    siteName: 'NomosAI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NomosAI - AI-Powered Legal Platform',
    description: 'Streamline legal research, automate documentation, and enhance client services with AI-powered legal technology.',
    creator: '@nomosai',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0D1B2A" />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased" suppressHydrationWarning>
        <div className="relative flex min-h-screen flex-col">
          <div className="flex-1">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}