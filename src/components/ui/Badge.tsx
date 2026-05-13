interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'green' | 'blue' | 'muted'
  className?: string
}

const variants = {
  default: 'bg-zinc-800 text-zinc-300 border-zinc-700',
  green:   'bg-emerald-950 text-emerald-400 border-emerald-900',
  blue:    'bg-blue-950 text-blue-400 border-blue-900',
  muted:   'bg-zinc-900 text-zinc-500 border-zinc-800',
}

export function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center gap-1.5 px-3 py-1 rounded-full
        text-xs font-medium border tracking-wide
        ${variants[variant]} ${className}
      `}
    >
      {children}
    </span>
  )
}

export function GreenDot() {
  return (
    <span className="relative flex h-1.5 w-1.5">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
    </span>
  )
}
