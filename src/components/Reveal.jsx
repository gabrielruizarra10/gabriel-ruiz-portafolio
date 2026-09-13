import { motion, useReducedMotion } from 'framer-motion'

/**
 * Scroll-triggered fade + slide reveal.
 * Automatically renders static content when the user prefers reduced motion.
 */
export default function Reveal({ children, delay = 0, y = 28, className = '' }) {
  const reduce = useReducedMotion()

  if (reduce) return <div className={className}>{children}</div>

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
