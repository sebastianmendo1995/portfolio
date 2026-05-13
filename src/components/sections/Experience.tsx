import { experience } from '@/lib/data'
import { FadeIn, Stagger, StaggerItem } from '@/components/ui/FadeIn'
import { ExternalLinkIcon } from '@/components/ui/Icons'

export function Experience() {
  return (
    <section id="experience" className="section-padding border-t border-zinc-800/40">
      <div className="container-narrow">

        <FadeIn>
          <div className="flex items-center gap-4 mb-12">
            <span className="section-label">Experience</span>
            <span className="flex-1 h-px bg-zinc-800" />
          </div>
        </FadeIn>

        <Stagger className="space-y-3">
          {experience.map((job, i) => (
            <StaggerItem key={job.company}>
              <div className="group relative card-base p-6 md:p-8 hover:border-zinc-700 transition-all duration-300 hover:shadow-xl hover:shadow-black/20">

                {/* Blue left accent on hover */}
                <div className="absolute left-0 top-6 bottom-6 w-0.5 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h3 className="text-base font-semibold text-zinc-50">{job.role}</h3>
                      <span className="text-zinc-700">·</span>
                      {job.companyUrl ? (
                        <a
                          href={job.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-base font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          {job.company}
                          <ExternalLinkIcon className="w-3 h-3" />
                        </a>
                      ) : (
                        <span className="text-base font-semibold text-zinc-300">{job.company}</span>
                      )}
                    </div>
                    <p className="text-sm text-zinc-500">{job.type}</p>
                  </div>
                  <span className="shrink-0 text-sm text-zinc-500 font-mono tabular-nums">
                    {job.period}
                  </span>
                </div>

                <ul className="space-y-2.5">
                  {job.bullets.map((bullet, bi) => (
                    <li key={bi} className="flex gap-3 text-sm text-zinc-400 leading-relaxed">
                      <span className="shrink-0 mt-1.5 w-1 h-1 rounded-full bg-zinc-600" />
                      <span dangerouslySetInnerHTML={{ __html: bullet.replace(/\b(60%\+|30\+|40\+|Playwright|Puppeteer|Chrome Extension|REST API|Next\.js 14|TypeScript|Firebase|Stripe|Firestore|React \+ TypeScript)\b/g, '<strong class="text-zinc-200 font-medium">$1</strong>') }} />
                    </li>
                  ))}
                </ul>

              </div>
            </StaggerItem>
          ))}
        </Stagger>

      </div>
    </section>
  )
}
