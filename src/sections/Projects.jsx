import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'

const goKinetic = () => document.getElementById('kinetic')?.scrollIntoView({ behavior: 'smooth' })

function Tag({ children }) {
  return (
    <span className="border border-white/15 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-white/50">
      {children}
    </span>
  )
}

/** Labeled placeholder box for images not yet provided. */
function ImagePlaceholder({ label }) {
  return (
    <div
      role="img"
      aria-label={`Placeholder: ${label} — image to be added`}
      className="grid aspect-[16/10] w-full place-items-center border border-dashed border-white/20 bg-white/[0.03]"
    >
      <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-white/35">
        [ {label} ]
      </p>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative bg-ink" aria-label="Projects">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:py-36">
        <SectionHeading index="02" kicker="Projects" title="Things I've built, and things I'm building." />

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {/* 01 — Kinetic Racing (links to flagship section) */}
          <Reveal>
            <button
              onClick={goKinetic}
              className="group flex h-full w-full flex-col border border-line bg-white/[0.02] p-8 text-left transition-colors hover:border-blue/60"
              aria-label="Kinetic Racing — jump to flagship section"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-sm text-blue">01</span>
                <span aria-hidden="true" className="text-white/30 transition-all group-hover:translate-x-1 group-hover:text-blue">→</span>
              </div>
              <h3 className="mt-6 text-2xl font-bold tracking-tight text-white">Kinetic Racing</h3>
              <p className="mt-2 text-sm text-white/55">
                Formula SAE student race car — chassis complete, built by a 14-member team I manage.
              </p>
              <div className="mt-auto flex flex-wrap gap-2 pt-6">
                <Tag>Formula SAE</Tag><Tag>Engineering</Tag><Tag>Project Management</Tag>
              </div>
            </button>
          </Reveal>

          {/* 02 — Peer Tutoring Platform (runs locally only) */}
          <Reveal delay={0.08}>
            <article className="group flex h-full flex-col border border-line bg-white/[0.02] transition-colors hover:border-blue/60">
              <div className="overflow-hidden border-b border-line">
                <img
                  src="./images/tutoring-platform.png"
                  alt="Dashboard screenshot of the Peer Tutoring Platform: dark UI with session statistics, upcoming sessions table, and role-based navigation for tutor and student modes"
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex flex-1 flex-col p-8">
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-sm text-blue">02</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/35">Local build — no public demo</span>
                </div>
                <h3 className="mt-6 text-2xl font-bold tracking-tight text-white">Peer Tutoring Platform</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">
                  Full-stack web app connecting university students with peer tutors — role-based
                  dashboards, session booking with schedule-conflict detection, availability
                  management, and ratings/reviews. Built and tested locally during the 2026 academic
                  cycle; a public repo link will be added if the code is published.
                </p>
                <div className="mt-auto flex flex-wrap gap-2 pt-6">
                  <Tag>Python</Tag><Tag>Flask</Tag><Tag>SQLAlchemy</Tag><Tag>Flask-Login</Tag><Tag>Web Development</Tag>
                </div>
              </div>
            </article>
          </Reveal>

          
          {/* 03 — Aulas Frescas */}
          <Reveal delay={0.12}>
            <article className="group flex h-full flex-col border border-line bg-white/[0.02] transition-colors hover:border-blue/60">
              <div className="p-4 pb-0">
                <img 
                  src="/images/aulas-frescas.png" 
                  alt="Aulas Frescas" 
                  className="aspect-[16/9] w-full object-cover rounded" 
                />
              </div>
              <div className="flex flex-1 flex-col p-8">
                <span className="font-mono text-sm text-blue">03</span>
                <h3 className="mt-6 text-2xl font-bold tracking-tight text-white">Aulas Frescas</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">
                  Interdisciplinary solar-energy project developed in collaboration with Energy Solar
                  System, exploring a solar-panel solution for fresh, cool classrooms.
                </p>
                <div className="mt-auto flex flex-wrap gap-2 pt-6">
                  <Tag>Solar Energy</Tag><Tag>Interdisciplinary</Tag><Tag>Collaboration</Tag>
                </div>
              </div>
            </article>
          </Reveal>

          {/* 04 — Other Experiments */}
          <Reveal delay={0.16}>
            <article className="group flex h-full flex-col border border-line bg-white/[0.02] transition-colors hover:border-blue/60">
              <div className="p-4 pb-0">
                <img 
                  src="/images/other-experiments.jpg"
                  alt="Other Experiments" 
                  className="aspect-[16/9] w-full object-cover rounded" 
                />
              </div>
              <div className="flex flex-1 flex-col p-8">
                <span className="font-mono text-sm text-blue">04</span>
                <h3 className="mt-6 text-2xl font-bold tracking-tight text-white">Other Experiments</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">
                  An open slot for what's next — Python scripts, engineering tools, AI experiments,
                  and small builds that don't fit a category yet.
                </p>
                <div className="mt-auto flex flex-wrap gap-2 pt-6">
                  <Tag>Python</Tag><Tag>Engineering</Tag><Tag>AI</Tag>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
