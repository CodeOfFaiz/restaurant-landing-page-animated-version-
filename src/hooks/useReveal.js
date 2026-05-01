import { useEffect, useRef } from 'react'

/**
 * Observes an element and adds the 'visible' class when it enters the viewport.
 * Works with .reveal, .reveal-left, .reveal-right, .reveal-scale classes.
 *
 * @param {number} threshold  - 0–1 fraction of element visible before triggering
 * @param {number} delay      - extra CSS transition-delay in ms
 */
export function useReveal(threshold = 0.12, delay = 0) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (delay) el.style.transitionDelay = `${delay}ms`

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, delay])

  return ref
}
