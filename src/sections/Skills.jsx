import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'

const CATEGORIES = [
  { name: 'Engineering', skills: ['SolidWorks', 'Siemens NX', 'CAD', 'Mechanical Design', '3D Printing'] },
  { name: 'Technology', skills: ['Python', 'Web Development', 'AI Tools', 'Digital Prototyping'] },
  { name: 'Productivity', skills: ['Excel', 'PowerPoint', 'Research', 'Project Planning'] },
  { name: 'Leadership', skills: ['Project Management', 'Public Speaking', 'Team Coordination', 'External Partnerships'] },
]

export default function Skills() {
  return (
    <section className="relative bg-mist text-ink" aria-label="Skills">
      <div className="blueprint-grid absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:py-32">
        <SectionHeading index="06" kicker="Capabilities" title="Tools I work with." dark={false} />

        <div className="mt-14 grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((cat, ci) => (
            <Reveal key={cat.name} delay={0.07 * ci}>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-blue">{cat.name}</h3>
                <ul className="mt-5 divide-y divide-ink/10 border-y border-ink/10">
                  {cat.skills.map((s) => (
                    <li
                      key={s}
                      className="cursor-default py-3 text-sm font-medium text-ink/75 transition-colors hover:text-blue"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
