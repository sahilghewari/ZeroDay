"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { SplineScene } from "@/components/ui/splite";
import VaporizeTextCycle, { Tag } from "@/components/ui/vapour-text-effect";
import { CountdownTimer } from "@/components/countdown-timer";
import { HoverButton } from "@/components/ui/hover-button";
import { ArrowRight, FileText } from "lucide-react";
import RotatingText from "./RotatingText";

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
          <div className="absolute inset-0 z-0 pointer-events-none"></div>
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
                    <RotatingText
                      texts={["ZeroDay", "Hack.", "Build.", "Transform."]}
                      mainClassName="px-2 sm:px-2 md:px-3 text-6xl text-[#00D3F3] overflow-hidden py-0.5 sm:py-1 md:py-2 justify-start font-bold rounded-lg"
                      staggerFrom={"last"}
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "-120%" }}
                      staggerDuration={0.025}
                      splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                      transition={{
                        type: "spring",
                        damping: 30,
                        stiffness: 400,
                      }}
                      rotationInterval={2000}
                    />
                  </div>

                  <p className="text-gray-300 max-w-lg mb-6">
                    India's Premier Social Impact & AI/ML Hackathon. Where
                    innovation meets impact.
                  </p>

                  <div className="flex flex-row gap-2 lg:gap-4 mb-6 w-full">
                    <HoverButton className="flex-1 min-w-0 flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-400 to-purple-400 hover:from-cyan-300 hover:to-purple-300 text-black  font-semibold shadow-lg shadow-cyan-400/25">
                      <span>Register</span>
                      <ArrowRight className="ml-1 h-6 w-6" />
                    </HoverButton>
                    <HoverButton className="flex-1 min-w-0 flex items-center justify-center gap-2 border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 px-6 py-3">
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
