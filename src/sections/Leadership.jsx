import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'

const PILLARS = [
  {
    key: 'BUILD',
    items: [
      { title: 'Kinetic Racing', body: 'Project Manager of a 14-member student engineering team building a Formula SAE race car.' },
      { title: 'Peer Tutoring Platform', body: 'Designed and shipped a full-stack booking platform used by university students and tutors.' },
    ],
  },
  {
    key: 'LEAD',
    items: [
      { title: 'Project Management', body: 'Coordinating schedules, faculty collaboration, and sponsor outreach across Kinetic Racing.' },
      { title: 'University Football', body: 'Member of the university football team — leadership on and off the field.' },
    ],
  },
  {
    key: 'CONNECT',
    items: [
      { title: 'University Hackathons', body: 'Hackathon staff and event support — helping organize and run university hackathons.' },
      { title: 'University Events', body: 'Talks, interviews, and activities involving engineering, tech, entrepreneurs, and external speakers.' },
      { title: 'Public Speaking', body: 'Regular presentations and project pitches to students, faculty, and external companies.' },
    ],
  },
]

export default function Leadership() {
  return (
    <section id="leadership" className="relative bg-ink" aria-label="Leadership and community">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:py-36">
        <SectionHeading index="05" kicker="Leadership & Community" title="Build. Lead. Connect." />

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {PILLARS.map((p, pi) => (
            <Reveal key={p.key} delay={0.08 * pi}>
              <div className="flex h-full flex-col border border-line bg-white/[0.02] p-8">
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-blue">{p.key}</p>
                <ul className="mt-8 space-y-7">
                  {p.items.map((it) => (
                    <li key={it.title} className="border-l border-white/12 pl-5">
                      <h3 className="text-base font-bold text-white">{it.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-white/50">{it.body}</p>
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
