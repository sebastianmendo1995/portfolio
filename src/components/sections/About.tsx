import { about, nav } from '@/lib/data'
import { FadeIn } from '@/components/ui/FadeIn'
import { ArrowUpRightIcon } from '@/components/ui/Icons'

export function About() {
  return (
    <section id="about" className="section-padding border-t border-zinc-800/40">
      <div className="container-narrow">

        <FadeIn>
          <div className="flex items-center gap-4 mb-12">
            <span className="section-label">About</span>
            <span className="flex-1 h-px bg-zinc-800" />
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-16">

          {/* Left — text */}
          <FadeIn className="md:col-span-3 space-y-4">
            {about.paragraphs.map((p, i) => (
              <p key={i} className="text-base text-zinc-400 leading-relaxed">
                {p}
              </p>
            ))}
            <div className="pt-4">
              <a
                href={nav.social.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-200 hover:text-white transition-colors"
              >
                View full resume
                <ArrowUpRightIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </FadeIn>

          {/* Right — highlights */}
          <FadeIn delay={0.15} className="md:col-span-2">
            <div className="card-base p-5 space-y-4">
              {about.highlights.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col gap-0.5 pb-4 border-b border-zinc-800 last:pb-0 last:border-0"
                >
                  <span className="text-xs text-zinc-600 uppercase tracking-widest">{item.label}</span>
                  <span className="text-sm font-medium text-zinc-200">{item.value}</span>
                </div>
              ))}

              {/* Education compact block */}
              <div className="pt-2 border-t border-zinc-800">
                <p className="text-xs text-zinc-600 uppercase tracking-widest mb-3">Education</p>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-zinc-200">App Academy</p>
                    <p className="text-xs text-zinc-500">Fullstack Software Engineering · 2019</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-zinc-200">University of Piura</p>
                    <p className="text-xs text-zinc-500">B.S. Industrial &amp; Systems Engineering · 2018</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  )
}
