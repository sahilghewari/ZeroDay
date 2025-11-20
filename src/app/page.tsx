import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProblemStatementsSection } from "@/components/problem-statements-section"
import { FaqsSection } from "@/components/ui/faqs-1"
import GradualBlur from '../components/GradualBlur';

export default function Home() {
  return (
    <section>

    <div className="min-h-screen bg-black pb-24">
      <Navigation />
      <HeroSection variant="center-with-stats" />
      <AboutSection />
      <ProblemStatementsSection />
      <FaqsSection />
    </div>
    <GradualBlur
      target="page"
      position="bottom"
      height="7rem"
      strength={3}
      divCount={5}
      curve="bezier"
      exponential={true}
      opacity={1}
      className="pointer-events-none"
    />
    </section>
  )
}
