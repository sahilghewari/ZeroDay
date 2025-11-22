"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import VaporizeTextCycle, { Tag } from "@/components/ui/vapour-text-effect";
import { CountdownTimer } from "@/components/countdown-timer";
import { HoverButton } from "@/components/ui/hover-button";
import { ArrowRight, FileText } from "lucide-react";

// Lazy load heavy 3D/WebGL components with no SSR
const SplineScene = dynamic(() => import("@/components/ui/splite").then(mod => ({ default: mod.SplineScene })), {
  ssr: false,
  loading: () => <div className="w-full h-full flex items-center justify-center"><div className="animate-pulse text-cyan-400">Loading 3D...</div></div>
});

const AnoAI = dynamic(() => import("@/components/ui/animated-shader-background"), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-gradient-to-br from-black via-purple-900/20 to-cyan-900/20" />
});

interface HeroSectionProps {
  variant?: "center-with-stats" | "default";
  className?: string;
}

export function HeroSection({
  variant = "center-with-stats",
  className = "",
}: HeroSectionProps) {
  return (
    <>
      <section
        id="hero"
        className={`relative min-h-screen flex flex-col gap-2 items-center justify-center px-4 bg-black ${className}`}
      >
        <CountdownTimer targetDate="2025-12-25T09:30:00" variant="compact" />

        <div className="w-full max-w-7xl h-[800px] relative">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="w-full h-full">
              <AnoAI />
            </div>
          </div>
          <Card className="relative z-10 w-full h-full bg-transparent backdrop-blur-lg bg-clip-padding overflow-hidden border border-cyan-400/30 shadow-2xl shadow-cyan-400/20">
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
                  <Badge
                    variant="secondary"
                    className="mb-4 bg-cyan-400/20 text-cyan-400 border-cyan-400/50"
                  >
                    Dec 25-26, 2025
                  </Badge>

                  <div className="">
                    <VaporizeTextCycle
                      texts={["ZeroDay", "Hack.", "Build.", "Transform."]}
                      className="font-sans font-extrabold text-[clamp(20px,6.5vw,60px)] leading-tight"
                      color="rgb(34, 211, 238)"
                      spread={3}
                      density={8}
                      animation={{
                        vaporizeDuration: 2.0,
                        fadeInDuration: 1.5,
                        waitDuration: 2.0,
                      }}
                      direction="left-to-right"
                      alignment="left"
                      tag={Tag.H1}
                    />
                  </div>

                  <p className="text-gray-300 max-w-lg mb-6">
                    India's Premier Social Impact & AI/ML Hackathon. Where
                    innovation meets impact.
                  </p>

                  <div className="flex flex-row gap-2 lg:gap-4 mb-6 w-full">
                    <HoverButton className="flex-1 min-w-0 flex items-center justify-center gap-2 bg-linear-to-r from-cyan-400 to-purple-400 hover:from-cyan-300 hover:to-purple-300 text-black  font-semibold shadow-lg shadow-cyan-400/25">
                      <span>Register</span>
                      <ArrowRight className="ml-1 h-6 w-6" />
                    </HoverButton>
                    <HoverButton 
                      onClick={() => document.getElementById('problem-statements')?.scrollIntoView({ behavior: 'smooth' })}
                      className="flex-1 min-w-0 flex items-center justify-center gap-2 border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 px-6 py-3 cursor-pointer"
                    >
                      <span>Problems</span>
                      <FileText className="ml-1 h-6 w-6" />
                    </HoverButton>
                  </div>

                  {variant === "center-with-stats" && (
                    <div className="grid grid-cols-3 gap-4 max-w-md">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-cyan-400">
                          ₹1.5L
                        </div>
                        <div className="text-sm text-gray-400">Prize Pool</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-cyan-400">
                          50
                        </div>
                        <div className="text-sm text-gray-400">Teams</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-cyan-400">
                          6
                        </div>
                        <div className="text-sm text-gray-400">Categories</div>
                      </div>
                    </div>
                  )}
                </motion.div>
              </div>

              {/* Right content */}
              <div className="flex-1 relative order-2 lg:order-2 h-64 lg:h-[900px] w-screen">
                <SplineScene
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="w-full h-full scale-140 lg:scale-80"
                />
              </div>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}
