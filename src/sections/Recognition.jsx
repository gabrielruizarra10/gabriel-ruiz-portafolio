import Reveal from '../components/Reveal.jsx'

export default function Recognition() {
  return (
    <section className="border-y border-line bg-ink" aria-label="Academic recognition">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <Reveal>
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-8">
            <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-blue">
              <span className="h-px w-8 bg-blue" aria-hidden="true" />
              Academic Excellence
            </p>
            <p className="max-w-3xl text-sm leading-relaxed text-white/55">
              Recognized for academic excellence at the 2025 Eco Verde National Excellence Encounter,
              part of the Programa Nacional de Cultura &ldquo;Leer es Vivir&rdquo; of Costa Rica and El Salvador.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
