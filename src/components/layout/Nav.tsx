'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { nav } from '@/lib/data'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled
          ? 'bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800/60 shadow-lg shadow-black/20'
          : 'bg-transparent border-b border-transparent'
        }
      `}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="font-semibold text-zinc-50 tracking-tight hover:text-white transition-colors"
        >
          <span className="text-blue-400">SM</span>
          <span className="hidden sm:inline text-zinc-400 font-normal ml-2 text-sm">
            / sebastianmendo
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {nav.links.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="px-3 py-1.5 text-sm text-zinc-400 hover:text-zinc-50 rounded-lg hover:bg-zinc-800/60 transition-all duration-150"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={nav.social.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 text-sm font-medium text-zinc-200 border border-zinc-700 rounded-lg hover:bg-zinc-800 hover:border-zinc-600 transition-all duration-150"
          >
            Resume
          </a>
          <a
            href={`mailto:${nav.social.email}`}
            className="px-4 py-1.5 text-sm font-medium text-zinc-950 bg-zinc-50 rounded-lg hover:bg-white transition-all duration-150"
          >
            Hire me
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-zinc-400 hover:text-zinc-50 transition-colors"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-current transition-all mb-1 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
          <span className={`block w-5 h-0.5 bg-current transition-all mb-1 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-current transition-all ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-zinc-800 bg-zinc-950/95 backdrop-blur-xl px-6 py-4 space-y-1">
          {nav.links.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="block w-full text-left px-3 py-2 text-sm text-zinc-400 hover:text-zinc-50 hover:bg-zinc-800/60 rounded-lg transition-all"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-3 border-t border-zinc-800 flex gap-2">
            <a
              href={nav.social.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-2 text-sm text-zinc-300 border border-zinc-700 rounded-lg hover:bg-zinc-800 transition-all"
            >
              Resume
            </a>
            <a
              href={`mailto:${nav.social.email}`}
              className="flex-1 text-center py-2 text-sm font-medium bg-zinc-50 text-zinc-950 rounded-lg hover:bg-white transition-all"
            >
              Hire me
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
