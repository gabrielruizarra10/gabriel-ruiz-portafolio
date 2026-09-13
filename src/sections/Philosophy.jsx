import { motion, useReducedMotion } from 'framer-motion'

const LINES = [
  { text: 'I used to think I needed to master something before I could start.', tone: 'dim' },
  { text: 'Now I think curiosity is enough to begin.', tone: 'white' },
  { text: 'The rest can be learned.', tone: 'blue' },
]

export default function Philosophy() {
  const reduce = useReducedMotion()

  return (
    <section className="relative bg-ink" aria-label="Personal philosophy">
      <div className="mx-auto flex min-h-[85vh] max-w-5xl flex-col items-center justify-center px-5 py-28 text-center sm:px-8">
        {LINES.map((l, i) => (
          <motion.p
            key={l.text}
            initial={reduce ? false : { opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 0.9, delay: i * 0.18, ease: [0.22, 1, 0.36, 1] }}
            className={`my-3 text-3xl font-bold leading-tight tracking-tightest sm:text-5xl lg:text-6xl ${
              l.tone === 'blue' ? 'text-blue' : l.tone === 'dim' ? 'text-white/40' : 'text-white'
            }`}
          >
            {l.text}
          </motion.p>
        ))}
        <motion.span
          initial={reduce ? false : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-10 h-px w-24 origin-left bg-blue"
          aria-hidden="true"
        />
      </div>
    </section>
  )
}
