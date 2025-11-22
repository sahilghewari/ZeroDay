"use client"

import dynamic from "next/dynamic"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ScrollProgress } from "@/components/ui/scroll-progress"

// Lazy load heavy below-fold components
const AboutSection = dynamic(() => import("@/components/about-section").then(mod => ({ default: mod.AboutSection })), {
  loading: () => <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black" />
})

const ProblemStatementsSection = dynamic(() => import("@/components/problem-statements-section").then(mod => ({ default: mod.ProblemStatementsSection })), {
  loading: () => <div className="h-screen bg-black" />
})

const TimelineSection = dynamic(() => import("@/components/TimelineSection").then(mod => ({ default: mod.TimelineSection })), {
  loading: () => <div className="min-h-screen bg-black" />
})

const FaqsSection = dynamic(() => import("@/components/ui/faqs-1").then(mod => ({ default: mod.FaqsSection })), {
  loading: () => <div className="min-h-screen bg-black" />
})

const GradualBlur = dynamic(() => import('../components/GradualBlur'), {
  ssr: false
})

export default function Home() {
  
  return (
    <section>
    <div className="min-h-screen bg-black pb-24">
      <Navigation />
<ScrollProgress />
      <HeroSection variant="center-with-stats" />
      <AboutSection />
      <ProblemStatementsSection />
      <TimelineSection />
      <FaqsSection />
    </div>
    <GradualBlur
      target="page"
      position="bottom"
      height="6rem"
      strength={2}
      divCount={5}
      curve="bezier"
      exponential={true}
      opacity={1}
      className="pointer-events-none"
    />
    </section>
  )
}
