import { useRef, useState, useCallback } from 'react'
import { motion, useReducedMotion, useMotionValue, useSpring } from 'framer-motion'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'

const CARDS = [
  {
    n: '01',
    title: 'Learning',
    body: 'I use AI as a thinking partner when learning difficult engineering and programming concepts.',
  },
  {
    n: '02',
    title: 'Building',
    body: 'I use AI to move from rough ideas to prototypes, code, websites, and structured projects.',
  },
  {
    n: '03',
    title: 'Research',
    body: 'I use AI to explore unfamiliar subjects, compare approaches, summarize complex information, and identify questions worth investigating.',
  },
  {
    n: '04',
    title: 'Problem Solving',
    body: 'I use AI to challenge my assumptions, debug problems, and explore alternative solutions.',
  },
]

export default function AISection() {
  const reduce = useReducedMotion()
  const glowRef = useRef(null)
  const [inside, setInside] = useState(false)
  const gx = useMotionValue(0)
  const gy = useMotionValue(0)
  const sx = useSpring(gx, { stiffness: 60, damping: 18 })
  const sy = useSpring(gy, { stiffness: 60, damping: 18 })

  const onMove = useCallback(
    (e) => {
      if (reduce) return
      const r = glowRef.current?.getBoundingClientRect()
      if (!r) return
      gx.set(e.clientX - r.left)
      gy.set(e.clientY - r.top)
    },
    [reduce, gx, gy]
  )

  return (
    <section id="ai" className="relative bg-mist text-ink" aria-label="How Gabriel uses AI">
      <div className="blueprint-grid absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:py-36">
        <SectionHeading
          index="04"
          kicker="AI"
          title="AI is not replacing how I learn. It is changing how fast I can learn."
          dark={false}
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((c, i) => (
            <Reveal key={c.n} delay={0.07 * i}>
              <div className="group h-full border border-ink/10 bg-white p-7 transition-colors hover:border-blue">
                <span className="font-mono text-sm text-blue">{c.n}</span>
                <h3 className="mt-5 text-lg font-bold tracking-tight">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/60">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Central interactive statement */}
        <Reveal delay={0.1}>
          <div
            ref={glowRef}
            onMouseMove={onMove}
            onMouseEnter={() => setInside(true)}
            onMouseLeave={() => setInside(false)}
            className="relative mt-20 overflow-hidden border border-ink/10 bg-ink px-6 py-20 text-center sm:px-12 lg:py-28"
          >
            {/* pointer-follow glow */}
            {!reduce && (
              <motion.div
                aria-hidden="true"
                className="pointer-events-none absolute h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue/25 blur-[120px]"
                style={{ left: sx, top: sy, opacity: inside ? 1 : 0, transition: 'opacity 0.4s' }}
              />
            )}
            <p className="relative text-[7vw] font-extrabold leading-[1.05] tracking-tightest text-white sm:text-4xl lg:text-5xl">
              &ldquo;I don&apos;t want AI to think for me.
              <br />
              I want it to help me <span className="text-blue">think better.</span>&rdquo;
            </p>
            <p className="relative mt-6 text-[11px] font-medium uppercase tracking-[0.3em] text-white/40">
              Claude · ChatGPT · Gemini · Kimi · NotebookLM — used as tools, not shortcuts
            </p>
          </div>
        </Reveal>

        {/* Why Claude? subsection */}
        <div className="mt-24 grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <Reveal>
            <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Why <span className="text-blue">Claude?</span>
            </h3>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="text-lg leading-relaxed text-ink/80">
              Claude has become one of the AI tools I use most frequently — especially for learning,
              programming, research, and working through complex ideas.
            </p>
            <p className="mt-5 leading-relaxed text-ink/60">
              I haven&apos;t yet built a standalone application using the Claude API; my experience so
              far has been using Claude as a development and learning partner — debugging code,
              understanding unfamiliar concepts, structuring projects, and challenging my reasoning.
              One of my goals is to move from simply using AI to building more directly with it.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
