import { nav } from '@/lib/data'
import { GithubIcon, LinkedinIcon, MailIcon } from '@/components/ui/Icons'

export function Footer() {
  return (
    <footer className="border-t border-zinc-800/60 py-10">
      <div className="max-w-5xl mx-auto px-6 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-zinc-500">
          © {new Date().getFullYear()} Sebastian Mendo Lopez
        </p>
        <div className="flex items-center gap-4">
          <a
            href={nav.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={nav.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${nav.social.email}`}
            aria-label="Email"
            className="text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            <MailIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}
