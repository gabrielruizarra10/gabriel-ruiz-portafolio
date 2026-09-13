import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'

const TAGS = ['ENGINEERING', 'AI', 'PROGRAMMING', 'CAD', 'PROJECT MANAGEMENT', 'ENTREPRENEURSHIP', 'LEADERSHIP']

export default function About() {
  return (
    <section id="about" className="relative bg-mist text-ink" aria-label="About Gabriel">
      <div className="blueprint-grid absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl gap-14 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:py-36">
        {/* LEFT — statement typography */}
        <div>
          <SectionHeading index="01" kicker="About" title="Curiosity became my advantage." dark={false} />
        </div>

        {/* RIGHT — bio + interest tags */}
        <div className="flex flex-col justify-center">
          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed text-ink/80">
              I&apos;m studying Industrial Engineering &amp; Advanced Manufacturing at Key Institute
              in El Salvador. I got into engineering because I like understanding how things work —
              and then trying to improve or build them myself.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-5 leading-relaxed text-ink/60">
              I&apos;m constantly picking up new tools. My interests sit at the intersection of
              engineering, AI, programming, leadership, and entrepreneurship. The biggest thing
              university has taught me is that I don&apos;t need to already know everything before
              starting something hard — I can learn what I need along the way. That mindset is what
              led me into projects I initially didn&apos;t know how to build.
            </p>
          </Reveal>
          <Reveal delay={0.26}>
            <ul className="mt-10 flex flex-wrap gap-2.5" aria-label="Interests">
              {TAGS.map((t) => (
                <li
                  key={t}
                  className="cursor-default border border-ink/15 px-4 py-2 text-[11px] font-semibold tracking-[0.15em] text-ink/70 transition-colors hover:border-blue hover:text-blue"
                >
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
