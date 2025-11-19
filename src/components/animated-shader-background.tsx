"use client"

import { motion } from "framer-motion"

interface AnimatedShaderBackgroundProps {
  colors: string[]
  speed?: number
  flowDirection?: "centerOut" | "leftToRight" | "topToBottom"
  blendMode?: "additive" | "multiply" | "screen"
  bandWidth?: number
  animated?: boolean
  children?: React.ReactNode
}

export function AnimatedShaderBackground({
  colors = ['#0A0E27', '#8B5CF6', '#00D9FF', '#EC4899'],
  speed = 1.2,
  flowDirection = "centerOut",
  blendMode = "additive",
  bandWidth = 2.5,
  animated = true,
  children
}: AnimatedShaderBackgroundProps) {
  const gradientStyle = {
    background: `linear-gradient(45deg, ${colors.join(', ')})`,
    backgroundSize: '400% 400%',
    animation: animated ? `gradientShift ${speed * 4}s ease infinite` : 'none',
    mixBlendMode: blendMode === 'additive' ? 'screen' : blendMode,
  }

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute inset-0"
        style={gradientStyle}
        animate={animated ? {
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        } : {}}
        transition={{
          duration: speed * 4,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      {/* Particle overlay */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      {children}
    </div>
  )
}