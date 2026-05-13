'use client'

import { motion } from 'framer-motion'
import { hero, nav } from '@/lib/data'
import { Badge, GreenDot } from '@/components/ui/Badge'
import { GithubIcon, LinkedinIcon, ArrowUpRightIcon } from '@/components/ui/Icons'

const ease = [0.16, 1, 0.3, 1] as const

function AnimItem({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function Hero() {
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16">

      {/* Subtle radial background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(59,130,246,0.08) 0%, transparent 70%)',
        }}
      />

      {/* Subtle dot grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="container-narrow relative z-10 py-20">

        {/* Availability badge */}
        <AnimItem delay={0.05}>
          <Badge variant="green" className="mb-8">
            <GreenDot />
            {hero.badge}
          </Badge>
        </AnimItem>

        {/* Headline */}
        <AnimItem delay={0.15}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-50 leading-none mb-4">
            {hero.headline}
          </h1>
        </AnimItem>

        {/* Subheadline */}
        <AnimItem delay={0.25}>
          <p className="text-xl sm:text-2xl md:text-3xl font-medium text-zinc-400 mb-6 tracking-tight">
            {hero.subheadline}
          </p>
        </AnimItem>

        {/* Description */}
        <AnimItem delay={0.35}>
          <p className="max-w-xl text-base md:text-lg text-zinc-500 leading-relaxed mb-10">
            {hero.description}
          </p>
        </AnimItem>

        {/* CTA Buttons */}
        <AnimItem delay={0.45}>
          <div className="flex flex-wrap items-center gap-3 mb-12">
            <button
              onClick={scrollToProjects}
              className="px-5 py-2.5 text-sm font-semibold bg-zinc-50 text-zinc-950 rounded-xl hover:bg-white transition-all duration-150 hover:shadow-lg hover:shadow-black/20 hover:-translate-y-px active:translate-y-0"
            >
              View Projects
            </button>
            <button
              onClick={scrollToContact}
              className="px-5 py-2.5 text-sm font-semibold text-zinc-200 border border-zinc-700 rounded-xl hover:bg-zinc-800 hover:border-zinc-600 transition-all duration-150 hover:-translate-y-px active:translate-y-0"
            >
              Get in touch
            </button>
            <a
              href={nav.social.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 text-sm font-semibold text-zinc-400 hover:text-zinc-200 transition-colors duration-150 flex items-center gap-1.5"
            >
              Resume
              <ArrowUpRightIcon className="w-3.5 h-3.5" />
            </a>
          </div>
        </AnimItem>

        {/* Social links */}
        <AnimItem delay={0.55}>
          <div className="flex items-center gap-5">
            <a
              href={nav.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-300 transition-colors group"
            >
              <GithubIcon className="w-4 h-4" />
              <span className="group-hover:translate-x-0.5 transition-transform">GitHub</span>
            </a>
            <span className="w-px h-4 bg-zinc-800" />
            <a
              href={nav.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-300 transition-colors group"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span className="group-hover:translate-x-0.5 transition-transform">LinkedIn</span>
            </a>
            <span className="w-px h-4 bg-zinc-800" />
            <a
              href="https://seguipro.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-zinc-500 hover:text-blue-400 transition-colors group"
            >
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span className="group-hover:translate-x-0.5 transition-transform">SeguiPro</span>
            </a>
          </div>
        </AnimItem>

      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-zinc-600 tracking-widest uppercase">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-6 bg-gradient-to-b from-zinc-600 to-transparent"
        />
      </motion.div>

    </section>
  )
}
