"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { SplineScene } from "@/components/ui/splite"
import VaporizeTextCycle, { Tag } from "@/components/ui/vapour-text-effect"
import { CountdownTimer } from "@/components/countdown-timer"
import { HoverButton } from "@/components/ui/hover-button"
import { ArrowRight, FileText } from "lucide-react"

interface HeroSectionProps {
  variant?: "center-with-stats" | "default"
  className?: string
}

export function HeroSection({ variant = "center-with-stats", className = "" }: HeroSectionProps) {
  return (
    <section className={`relative min-h-screen flex items-center justify-center px-4 bg-black ${className}`}>
      <Card className="w-full max-w-7xl h-[600px] bg-black/90 backdrop-blur-sm relative overflow-hidden border border-cyan-400/30 shadow-2xl shadow-cyan-400/20">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="cyan"
        />

        <div className="flex flex-col lg:flex-row h-full">
          {/* Left content */}
          <div className="flex-1 p-8 relative z-10 flex flex-col justify-center order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="secondary" className="mb-4 bg-cyan-400/20 text-cyan-400 border-cyan-400/50">
                Dec 25-26, 2025
              </Badge>

              <div className="mb-4">
                <VaporizeTextCycle
                  texts={['ZeroDay', 'Hack.', 'Build.', 'Transform.']}
                  font={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "36px",
                    fontWeight: 700
                  }}
                  color="rgb(34, 211, 238)"
                  spread={2}
                  density={6}
                  animation={{
                    vaporizeDuration: 2.5,
                    fadeInDuration: 1.2,
                    waitDuration: 1
                  }}
                  direction="left-to-right"
                  alignment="left"
                  tag={Tag.H1}
                />
              </div>

              <p className="text-gray-300 max-w-lg mb-6">
                India's Premier Social Impact & AI/ML Hackathon. Where innovation meets impact.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <HoverButton
                  className="bg-gradient-to-r from-cyan-400 to-purple-400 hover:from-cyan-300 hover:to-purple-300 text-black px-6 py-3 font-semibold shadow-lg shadow-cyan-400/25"
                >
                  Register Your Team
                  <ArrowRight className="ml-2 h-4 w-4" />
                </HoverButton>
                <HoverButton
                  className="border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 px-6 py-3"
                >
                  View Problem Statements
                  <FileText className="ml-2 h-4 w-4" />
                </HoverButton>
              </div>

              {variant === "center-with-stats" && (
                <div className="grid grid-cols-3 gap-4 max-w-md">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">₹1.5L</div>
                    <div className="text-sm text-gray-400">Prize Pool</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">50</div>
                    <div className="text-sm text-gray-400">Teams</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">5</div>
                    <div className="text-sm text-gray-400">Categories</div>
                  </div>
                </div>
              )}

              <CountdownTimer targetDate="2025-12-25T09:30:00" variant="compact" />
            </motion.div>
          </div>

          {/* Right content */}
          <div className="flex-1 relative order-1 lg:order-2 h-64 lg:h-full">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full scale-75 lg:scale-100"
            />
          </div>
        </div>
      </Card>
    </section>
  )
}