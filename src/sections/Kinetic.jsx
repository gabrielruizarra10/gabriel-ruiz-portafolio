import { motion, useReducedMotion } from 'framer-motion'
import { useRef, useState } from 'react'
import Reveal from '../components/Reveal.jsx'

const TIMELINE = [
  { year: '2026', title: 'Project begins', current: true },
  { year: '2026', title: 'Team formation & project planning', current: true },
  { year: '2026', title: 'Chassis development', current: true, done: true },
  { year: '2026', title: 'Industry partnerships', current: true },
  { year: '2027+', title: 'Vehicle development & testing', current: false },
  { year: '2028', title: 'Target Formula SAE competition', current: false },
]

export default function Kinetic() {
  const reduce = useReducedMotion()
  const galleryRef = useRef(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const onMove = (e) => {
    if (reduce) return
    const r = galleryRef.current?.getBoundingClientRect()
    if (!r) return
    setTilt({
      x: ((e.clientX - r.left) / r.width - 0.5) * 8,
      y: ((e.clientY - r.top) / r.height - 0.5) * -8,
    })
  }

  return (
    <section id="kinetic" className="relative bg-ink" aria-label="Kinetic Racing — flagship project">
      {/* Section opener */}
      <div className="mx-auto max-w-6xl px-5 pt-24 sm:px-8 lg:pt-36">
        <Reveal>
          <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-blue">
            <span className="h-px w-10 bg-blue" aria-hidden="true" />03 — Flagship Project
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-6 text-[13vw] font-extrabold leading-[0.95] tracking-tightest text-white sm:text-7xl lg:text-8xl">
            KINETIC <span className="text-blue">RACING</span>
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-4 max-w-2xl text-lg text-white/60 sm:text-xl">
            Formula SAE — Building a race car from the ground up.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <Reveal delay={0.2}>
            <p className="leading-relaxed text-white/70">
              Kinetic Racing is a 14-member student engineering team at Key Institute working toward
              Formula SAE competition. The project spans chassis development, CAD and mechanical
              design in SolidWorks and Siemens NX, 3D printing, and the long-term goal of fielding a
              competitive vehicle.
            </p>
            <p className="mt-5 leading-relaxed text-white/70">
              <span className="font-semibold text-white">Current stage:</span> We have completed the
              initial chassis and are continuing development toward a functional vehicle demonstrator
              and, ultimately, Formula SAE competition.
            </p>
          </Reveal>

          {/* My Role callout */}
          <Reveal delay={0.28}>
            <aside className="border border-blue/40 bg-blue/5 p-7" aria-label="My role in Kinetic Racing">
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-blue">My Role — Project Manager</p>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                I coordinate project development, team organization, faculty collaboration,
                administrative work, external relationships, and sponsor outreach — while working
                alongside the technical team. I&apos;m the project manager, not the founder: my job is
                to make sure 14 people, one chassis, and one ambitious deadline stay moving in the
                same direction.
              </p>
              <ul className="mt-6 grid grid-cols-2 gap-3 text-xs text-white/50">
                <li className="border-l border-white/15 pl-3">14-member multidisciplinary team</li>
                <li className="border-l border-white/15 pl-3">Formula SAE target</li>
                <li className="border-l border-white/15 pl-3">Chassis complete</li>
                <li className="border-l border-white/15 pl-3">SolidWorks · Siemens NX · 3D printing</li>
              </ul>
              <a
                href="https://www.instagram.com/kineticracing.key"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue transition-colors hover:text-white"
              >
                {/* Instagram glyph (inline SVG, no external dependency) */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
                @kineticracing.key — team updates
              </a>
            </aside>
          </Reveal>
        </div>
      </div>

      {/* Image gallery — cursor-reactive, hover zoom */}
      <div
        ref={galleryRef}
        onMouseMove={onMove}
        onMouseLeave={() => setTilt({ x: 0, y: 0 })}
        className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-4 px-5 sm:px-8 md:grid-cols-3"
      >
        {[
          {
            src: './images/kinetic-chassis.png',
            alt: 'The completed Kinetic Racing chassis photographed in the university workshop, with the seat and wheels mounted',
            label: '01 / CHASSIS — COMPLETE',
          },
          {
            src: './images/kinetic-cad.png',
            alt: 'SolidWorks CAD assembly of the Kinetic Racing car showing the tube-frame chassis with a seated driver model',
            label: '02 / CAD — SOLIDWORKS',
          },
          {
            src: './images/kinetic-nx.png',
            alt: 'Siemens NX model of the chassis frame showing the full tube geometry and part navigator feature tree',
            label: '03 / ENGINEERING — SIEMENS NX',
          },
        ].map((img, i) => (
          <Reveal key={img.label} delay={0.08 * i}>
            <motion.figure
              style={reduce ? undefined : { rotateX: tilt.y, rotateY: tilt.x, transformPerspective: 900 }}
              className="group relative overflow-hidden border border-line bg-white/5"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-ink/90 to-transparent px-4 pb-3 pt-10 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80">
                {img.label}
                <span className="text-blue" aria-hidden="true">↗</span>
              </figcaption>
            </motion.figure>
          </Reveal>
        ))}
      </div>

      {/* Timeline */}
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:py-32">
        <Reveal>
          <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">The road to Formula SAE</h3>
        </Reveal>
        <ol className="relative mt-12 border-l border-white/12 pl-8">
          {TIMELINE.map((t, i) => (
            <Reveal key={`${t.year}-${t.title}`} delay={0.06 * i}>
              <li className="relative pb-10 last:pb-0">
                <span
                  aria-hidden="true"
                  className={`absolute -left-[37px] top-1.5 h-[9px] w-[9px] rounded-full ${
                    t.done ? 'bg-blue' : t.current ? 'border border-blue bg-ink' : 'border border-white/25 bg-ink'
                  }`}
                />
                <div className="flex flex-wrap items-baseline gap-x-4">
                  <span className="font-mono text-sm text-blue">{t.year}</span>
                  <span className={`text-base ${t.done || t.current ? 'text-white' : 'text-white/40'}`}>{t.title}</span>
                  {t.done && (
                    <span className="border border-blue/50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-blue">
                      Complete
                    </span>
                  )}
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
