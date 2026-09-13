import Reveal from './Reveal.jsx'

/**
 * Consistent section opener: small numbered kicker + large title.
 */
export default function SectionHeading({ index, kicker, title, dark = true, className = '' }) {
  return (
    <div className={className}>
      <Reveal>
        <p className={`flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] ${dark ? 'text-blue' : 'text-blue'}`}>
          <span className={`h-px w-10 ${dark ? 'bg-blue' : 'bg-blue'}`} aria-hidden="true" />
          {index} — {kicker}
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className={`mt-5 text-4xl font-bold leading-[1.05] tracking-tightest sm:text-5xl lg:text-6xl ${dark ? 'text-white' : 'text-ink'}`}>
          {title}
        </h2>
      </Reveal>
    </div>
  )
}
