import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useReducedMotion, useScroll, useTransform } from 'framer-motion'

export default function Hero() {
  const ref = useRef(null)
  const reduce = useReducedMotion()

  // Mouse-reactive grid parallax (subtle, blueprint feel)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const gx = useSpring(mx, { stiffness: 40, damping: 20 })
  const gy = useSpring(my, { stiffness: 40, damping: 20 })

  const onMove = (e) => {
    if (reduce) return
    const r = ref.current.getBoundingClientRect()
    mx.set(((e.clientX - r.left) / r.width - 0.5) * 24)
    my.set(((e.clientY - r.top) / r.height - 0.5) * 24)
  }

  // Gentle fade of hero content as you scroll away
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const drift = useTransform(scrollYProgress, [0, 1], [0, 90])

  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' })

  return (
    <section
      id="home"
      ref={ref}
      onMouseMove={onMove}
      className="relative flex min-h-screen flex-col overflow-hidden bg-ink"
      aria-label="Introduction"
    >
      {/* Abstract engineering grid + coordinate motif */}
      <motion.div
        aria-hidden="true"
        className="engineering-grid absolute inset-[-60px]"
        style={reduce ? undefined : { x: gx, y: gy }}
      />
      {/* Crosshair markers */}
      <div aria-hidden="true" className="pointer-events-none absolute left-[12%] top-[22%] hidden text-white/25 md:block">
        <span className="absolute -left-2 -top-2 h-4 w-px bg-white/25" /><span className="absolute -left-2 -top-2 h-px w-4 bg-white/25" />
        <p className="ml-4 mt-3 font-mono text-[10px] tracking-widest">X.013.847 — SAN SALVADOR</p>
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute bottom-[26%] right-[10%] hidden text-white/25 md:block">
        <span className="absolute -left-2 -top-2 h-4 w-px bg-white/25" /><span className="absolute -left-2 -top-2 h-px w-4 bg-white/25" />
        <p className="ml-4 mt-3 font-mono text-[10px] tracking-widest">N 13°41′ — W 89°11′</p>
      </div>
      {/* Faint blueprint accent circle */}
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 top-1/2 hidden h-[560px] w-[560px] -translate-y-1/2 rounded-full border border-white/8 lg:block" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 top-1/2 hidden h-[340px] w-[340px] -translate-y-1/2 rounded-full border border-blue/25 lg:block" />

      <motion.div
        style={reduce ? undefined : { opacity: fade, y: drift }}
        className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-5 pt-28 sm:px-8"
      >
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-blue"
        >
          <span className="h-px w-10 bg-blue" aria-hidden="true" />
          Gabriel Ruiz — Portfolio
        </motion.p>

        <h1 className="max-w-4xl text-[11vw] font-extrabold leading-[0.98] tracking-tightest text-white sm:text-6xl lg:text-[5.25rem]">
          {['Building what I', "didn't know how to", 'build yesterday.'].map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                className="block"
                initial={reduce ? false : { y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                {i === 2 ? (
                  <>
                    build <span className="text-blue">yesterday.</span>
                  </>
                ) : (
                  line
                )}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="mt-8 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg"
        >
          Gabriel Ruiz — Industrial Engineering &amp; Advanced Manufacturing student, project manager,
          and technology enthusiast.
        </motion.p>
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-3 max-w-xl text-sm leading-relaxed text-white/45"
        >
          I&apos;m interested in engineering, AI, programming, and the process of turning ambitious
          ideas into things that actually work.
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.95 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <button
            onClick={() => go('projects')}
            className="group inline-flex items-center gap-3 bg-blue px-7 py-3.5 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-[#1746c0]"
          >
            Explore my work
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
          </button>
          <button
            onClick={() => go('contact')}
            className="inline-flex items-center gap-3 border border-white/20 px-7 py-3.5 text-sm font-semibold tracking-wide text-white transition-colors hover:border-blue hover:text-blue"
          >
            Let&apos;s connect
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => go('about')}
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        aria-label="Scroll to About section"
      >
        <motion.span
          animate={reduce ? undefined : { y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-white/40"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <span className="h-10 w-px bg-gradient-to-b from-white/50 to-transparent" aria-hidden="true" />
        </motion.span>
      </motion.button>
    </section>
  )
}
