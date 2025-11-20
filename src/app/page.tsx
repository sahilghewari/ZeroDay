import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProblemStatementsSection } from "@/components/problem-statements-section"
import { FaqsSection } from "@/components/ui/faqs-1"

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <HeroSection variant="center-with-stats" />
      <AboutSection />
      <ProblemStatementsSection />
      <FaqsSection />
    </div>
  )
}
