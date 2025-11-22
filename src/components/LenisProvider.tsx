"use client"

import { useEffect } from "react"
import Lenis from "@studio-freight/lenis"

export default function LenisProvider() {
  useEffect(() => {
    // Defer initialization to improve initial page load
    const timeoutId = setTimeout(() => {
      const lenis = new Lenis({
        duration: 1.2,
        // gentle easing by default; tweak as needed
        easing: (t: number) => Math.min(1, 1 - Math.pow(1 - t, 3)),
      } as any)

      let rafId = 0
      function raf(time: number) {
        lenis.raf(time)
        rafId = requestAnimationFrame(raf)
      }

      rafId = requestAnimationFrame(raf)

      // expose for other components (navigation) to use
      ;(window as any).lenis = lenis

      // Cleanup function
      ;(window as any).__lenisCleanup = () => {
        cancelAnimationFrame(rafId)
        if (typeof (lenis as any).destroy === "function") (lenis as any).destroy()
        try {
          delete (window as any).lenis
        } catch (e) {}
      }
    }, 100) // Defer by 100ms

    return () => {
      clearTimeout(timeoutId)
      if ((window as any).__lenisCleanup) {
        (window as any).__lenisCleanup()
      }
    }
  }, [])

  return null
}
