"use client"

import { useEffect } from "react"
import Lenis from "@studio-freight/lenis"

export default function LenisProvider() {
  useEffect(() => {
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

    return () => {
      cancelAnimationFrame(rafId)
      // some Lenis builds have destroy
      if (typeof (lenis as any).destroy === "function") (lenis as any).destroy()
      try {
        delete (window as any).lenis
      } catch (e) {}
    }
  }, [])

  return null
}
