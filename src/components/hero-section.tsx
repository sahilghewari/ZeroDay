"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { SplineScene } from "@/components/ui/splite";
import VaporizeTextCycle, { Tag } from "@/components/ui/vapour-text-effect";
import { CountdownTimer } from "@/components/countdown-timer";
import { HoverButton } from "@/components/ui/hover-button";
import { ArrowRight, FileText } from "lucide-react";
import Hyperspeed from "./Hyperspeed";

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
        className={`relative min-h-screen flex flex-col gap-2 items-center justify-center px-4 bg-black ${className}`}
      >
        <CountdownTimer targetDate="2025-12-25T09:30:00" variant="compact" />

        <div className="w-full max-w-7xl h-[800px] relative">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Hyperspeed
              effectOptions={{
                onSpeedUp: () => {},
                onSlowDown: () => {},
                distortion: "turbulentDistortion",
                length: 400,
                roadWidth: 10,
                islandWidth: 2,
                lanesPerRoad: 4,
                fov: 90,
                fovSpeedUp: 150,
                speedUp: 2,
                carLightsFade: 0.4,
                totalSideLightSticks: 20,
                lightPairsPerRoadWay: 40,
                shoulderLinesWidthPercentage: 0.05,
                brokenLinesWidthPercentage: 0.1,
                brokenLinesLengthPercentage: 0.5,
                lightStickWidth: [0.12, 0.5],
                lightStickHeight: [1.3, 1.7],
                movingAwaySpeed: [60, 80],
                movingCloserSpeed: [-120, -160],
                carLightsLength: [400 * 0.03, 400 * 0.2],
                carLightsRadius: [0.05, 0.14],
                carWidthPercentage: [0.3, 0.5],
                carShiftX: [-0.8, 0.8],
                carFloorSeparation: [0, 5],
                colors: {
                  roadColor: 0x080808,
                  islandColor: 0x0a0a0a,
                  background: 0x000000,
                  shoulderLines: 0xffffff,
                  brokenLines: 0xffffff,
                  leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
                  rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
                  sticks: 0x03b3c3,
                },
              }}
            />
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
                      spread={2}
                      density={6}
                      animation={{
                        vaporizeDuration: 2.5,
                        fadeInDuration: 1.2,
                        waitDuration: 1,
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

                  <div className="flex flex-row gap-4 mb-6 w-full">
                    <HoverButton className="flex-1 min-w-0 flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-400 to-purple-400 hover:from-cyan-300 hover:to-purple-300 text-black px-6 py-3 font-semibold shadow-lg shadow-cyan-400/25">
                      <span className="truncate">Register Team</span>
                      <ArrowRight className="ml-2 h-6 w-6" />
                    </HoverButton>
                    <HoverButton className="flex-1 min-w-0 flex items-center justify-center gap-2 border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 px-6 py-3">
                      <span className="truncate">Problem Statements</span>
                      <FileText className="ml-2 h-6 w-6" />
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
                          5
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
