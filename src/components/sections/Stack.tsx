import { stack } from '@/lib/data'
import { FadeIn, Stagger, StaggerItem } from '@/components/ui/FadeIn'

// Category accent colors
const categoryColors: Record<string, string> = {
  Frontend:         'text-blue-400',
  Backend:          'text-violet-400',
  Automation:       'text-amber-400',
  'Data & Storage': 'text-emerald-400',
  Infrastructure:   'text-pink-400',
  'Payments & Auth':'text-cyan-400',
}

export function Stack() {
  return (
    <section id="stack" className="section-padding border-t border-zinc-800/40">
      <div className="container-narrow">

        <FadeIn>
          <div className="flex items-center gap-4 mb-12">
            <span className="section-label">Tech Stack</span>
            <span className="flex-1 h-px bg-zinc-800" />
          </div>
        </FadeIn>

        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(stack).map(([category, techs]) => (
            <StaggerItem key={category}>
              <div className="group card-base p-5 hover:border-zinc-700 transition-all duration-300 h-full">
                <p className={`text-xs font-semibold uppercase tracking-widest mb-3.5 ${categoryColors[category] ?? 'text-zinc-400'}`}>
                  {category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium text-zinc-300 bg-zinc-800/70 border border-zinc-700/40 rounded-lg hover:border-zinc-600 hover:text-zinc-100 transition-colors duration-150 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* AI note — positioned professionally */}
        <FadeIn delay={0.3}>
          <div className="mt-6 p-4 rounded-xl border border-zinc-800/60 bg-zinc-900/30 flex items-start gap-3">
            <span className="shrink-0 mt-0.5 w-1.5 h-1.5 rounded-full bg-zinc-600 mt-1.5" />
            <p className="text-sm text-zinc-500">
              Actively leverages{' '}
              <span className="text-zinc-400 font-medium">AI-assisted development workflows</span>
              {' '}(Claude, GitHub Copilot) for engineering acceleration, rapid prototyping, and debugging — treating AI as a force-multiplier for shipping production code faster.
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  )
}
