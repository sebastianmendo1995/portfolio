import { nav } from '@/lib/data'
import { FadeIn } from '@/components/ui/FadeIn'
import { GithubIcon, LinkedinIcon, MailIcon, ArrowUpRightIcon } from '@/components/ui/Icons'

export function Contact() {
  return (
    <section id="contact" className="section-padding border-t border-zinc-800/40">
      <div className="container-narrow">

        <FadeIn>
          <div className="flex items-center gap-4 mb-12">
            <span className="section-label">Contact</span>
            <span className="flex-1 h-px bg-zinc-800" />
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-50 tracking-tight mb-4">
              Let&apos;s work together.
            </h2>
            <p className="text-base text-zinc-400 leading-relaxed mb-10">
              I&apos;m open to senior engineering roles — remote-first, US companies, SaaS startups, and
              automation-heavy teams. If you&apos;re building something interesting, I&apos;d like to hear about it.
            </p>

            {/* Email CTA */}
            <a
              href={`mailto:${nav.social.email}`}
              className="group inline-flex items-center gap-3 px-6 py-3.5 bg-zinc-50 text-zinc-950 font-semibold rounded-xl hover:bg-white transition-all duration-150 hover:shadow-lg hover:shadow-black/20 hover:-translate-y-px active:translate-y-0 mb-10"
            >
              <MailIcon className="w-4 h-4" />
              {nav.social.email}
              <ArrowUpRightIcon className="w-3.5 h-3.5 opacity-40 group-hover:opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>

            {/* Social links */}
            <div className="flex flex-wrap gap-3">
              <a
                href={nav.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-4 py-2.5 text-sm font-medium text-zinc-300 border border-zinc-700 rounded-xl hover:bg-zinc-800 hover:border-zinc-600 hover:text-zinc-50 transition-all duration-150"
              >
                <GithubIcon className="w-4 h-4" />
                GitHub
              </a>
              <a
                href={nav.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-4 py-2.5 text-sm font-medium text-zinc-300 border border-zinc-700 rounded-xl hover:bg-zinc-800 hover:border-zinc-600 hover:text-zinc-50 transition-all duration-150"
              >
                <LinkedinIcon className="w-4 h-4" />
                LinkedIn
              </a>
              <a
                href={nav.social.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-zinc-300 border border-zinc-700 rounded-xl hover:bg-zinc-800 hover:border-zinc-600 hover:text-zinc-50 transition-all duration-150"
              >
                Resume
                <ArrowUpRightIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://seguipro.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-blue-400 border border-blue-900/50 rounded-xl hover:bg-blue-950/30 hover:border-blue-800 transition-all duration-150"
              >
                SeguiPro
                <ArrowUpRightIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  )
}
