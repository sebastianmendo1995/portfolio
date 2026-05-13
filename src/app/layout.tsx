import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Sebastian Mendo Lopez — Senior Software Engineer',
  description:
    'Senior Software Engineer specializing in browser automation systems, React/Next.js frontend architecture, and full-stack SaaS development. Based in Peru, open to US remote roles.',
  keywords: [
    'Senior Software Engineer',
    'Frontend Engineer',
    'Automation Engineer',
    'React',
    'Next.js',
    'TypeScript',
    'Playwright',
    'Puppeteer',
    'SaaS',
    'Firebase',
    'Browser Automation',
  ],
  authors: [{ name: 'Sebastian Mendo Lopez', url: 'https://sebastianmendo.com' }],
  creator: 'Sebastian Mendo Lopez',
  metadataBase: new URL('https://sebastianmendo.com'),
  openGraph: {
    type:        'website',
    locale:      'en_US',
    url:         'https://sebastianmendo.com',
    title:       'Sebastian Mendo Lopez — Senior Software Engineer',
    description: 'Senior Software Engineer specializing in browser automation, React/Next.js platforms, and SaaS development.',
    siteName:    'Sebastian Mendo Lopez',
  },
  twitter: {
    card:        'summary_large_image',
    title:       'Sebastian Mendo Lopez — Senior Software Engineer',
    description: 'Senior Software Engineer specializing in browser automation, React/Next.js platforms, and SaaS development.',
  },
  robots: {
    index:  true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#09090b',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-zinc-950 text-zinc-50 font-sans antialiased">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
