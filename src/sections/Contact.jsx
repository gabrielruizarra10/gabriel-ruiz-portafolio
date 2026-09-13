import Reveal from '../components/Reveal.jsx'

const CHANNELS = [
  {
    label: 'Email',
    value: 'jose.ruiz@keyinstitute.edu.sv',
    href: 'mailto:jose.ruiz@keyinstitute.edu.sv',
    external: false,
  },
  {
    label: 'Phone / WhatsApp',
    value: '+503 7548-7361',
    href: 'tel:+50375487361',
    external: false,
  },
  {
    label: 'GitHub',
    value: 'github.com/gabrielruizarra10',
    href: 'https://github.com/gabrielruizarra10',
    external: true,
    note: "This website will be the first repo — link activates once it is published.",
  },
  {
    label: 'Instagram',
    value: '@gabrielruiz10_',
    href: 'https://www.instagram.com/gabrielruiz10_',
    external: true,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-ink" aria-label="Contact">
      <div className="engineering-grid absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:py-36">
        <Reveal>
          <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-blue">
            <span className="h-px w-10 bg-blue" aria-hidden="true" />07 — Contact
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-6 max-w-3xl text-5xl font-extrabold leading-[1.02] tracking-tightest text-white sm:text-6xl lg:text-7xl">
            Let&apos;s build <span className="text-blue">something.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/60">
            I&apos;m always interested in meeting people who are building, learning, experimenting,
            and pushing what is possible.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-px border border-line bg-line sm:grid-cols-2">
          {CHANNELS.map((c, i) => (
            <Reveal key={c.label} delay={0.06 * i}>
              <a
                href={c.href}
                {...(c.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                className="group block h-full bg-ink p-7 transition-colors hover:bg-[#0a0a0a]"
              >
                <p className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.25em] text-white/40">
                  {c.label}
                  <span aria-hidden="true" className="text-blue opacity-0 transition-opacity group-hover:opacity-100">↗</span>
                </p>
                <p className="mt-3 break-all text-base font-semibold text-white transition-colors group-hover:text-blue sm:break-normal">
                  {c.value}
                </p>
                {c.note && <p className="mt-2 text-xs text-white/35">{c.note}</p>}
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <a
            href="mailto:jose.ruiz@keyinstitute.edu.sv"
            className="group mt-12 inline-flex items-center gap-3 bg-blue px-8 py-4 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-[#1746c0]"
          >
            Get in touch
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </Reveal>
      </div>
    </section>
  )
}
