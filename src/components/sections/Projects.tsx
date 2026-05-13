import { projects } from '@/lib/data'
import { FadeIn } from '@/components/ui/FadeIn'
import { ExternalLinkIcon, ArrowUpRightIcon } from '@/components/ui/Icons'

export function Projects() {
  return (
    <section id="projects" className="section-padding border-t border-zinc-800/40">
      <div className="container-narrow">

        <FadeIn>
          <div className="flex items-center gap-4 mb-12">
            <span className="section-label">Projects</span>
            <span className="flex-1 h-px bg-zinc-800" />
          </div>
        </FadeIn>

        <div className="space-y-6">
          {projects.map((project) => (
            <FadeIn key={project.name} delay={0.1}>
              <div className="group card-base p-6 md:p-8 hover:border-zinc-700 transition-all duration-300 hover:shadow-2xl hover:shadow-black/30">

                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      {/* Featured badge */}
                      {project.featured && (
                        <span className="px-2 py-0.5 text-[10px] font-semibold tracking-wider uppercase rounded-md bg-blue-950 text-blue-400 border border-blue-900">
                          Featured
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-zinc-50 tracking-tight">{project.name}</h3>
                    <p className="text-sm text-zinc-500 mt-0.5">{project.tagline}</p>
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-2 shrink-0">
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-zinc-200 bg-zinc-800 border border-zinc-700 rounded-lg hover:bg-zinc-700 hover:border-zinc-600 transition-all"
                      >
                        <ExternalLinkIcon className="w-3.5 h-3.5" />
                        Live site
                      </a>
                    )}
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-zinc-400 border border-zinc-800 rounded-lg hover:bg-zinc-800 hover:text-zinc-200 transition-all"
                      >
                        GitHub
                        <ArrowUpRightIcon className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-zinc-400 leading-relaxed mb-6 max-w-2xl">
                  {project.description}
                </p>

                {/* Engineering challenge */}
                <div className="mb-6 p-4 rounded-xl bg-zinc-950/60 border border-zinc-800/60">
                  <p className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-2">Engineering challenge</p>
                  <p className="text-sm text-zinc-400 leading-relaxed">{project.challenge}</p>
                </div>

                {/* Highlights grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-6">
                  {project.highlights.map((h) => (
                    <div
                      key={h.label}
                      className="p-3 rounded-xl bg-zinc-950/40 border border-zinc-800/40 text-center"
                    >
                      <p className="text-[10px] text-zinc-600 uppercase tracking-widest mb-1">{h.label}</p>
                      <p className="text-xs font-semibold text-zinc-300">{h.value}</p>
                    </div>
                  ))}
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium text-zinc-400 bg-zinc-800/60 border border-zinc-700/50 rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  )
}
