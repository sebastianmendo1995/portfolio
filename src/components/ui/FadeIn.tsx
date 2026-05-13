'use client'

import { motion, type Variants } from 'framer-motion'

const variants: Variants = {
  hidden:  { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
}

interface FadeInProps {
  children: React.ReactNode
  delay?:     number
  className?: string
  once?:      boolean
}

export function FadeIn({ children, delay = 0, className = '', once = true }: FadeInProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-80px' }}
      transition={{
        duration: 0.55,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Stagger wrapper — wraps a list and staggers children
interface StaggerProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function Stagger({ children, className = '', delay = 0 }: StaggerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ staggerChildren: 0.08, delayChildren: delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      variants={variants}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
