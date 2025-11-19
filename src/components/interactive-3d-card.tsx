"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useRef } from "react"

interface Interactive3DCardProps {
  tiltMaxAngle?: number
  glowIntensity?: "low" | "medium" | "high"
  className?: string
  children?: React.ReactNode
}

export function Interactive3DCard({
  tiltMaxAngle = 15,
  glowIntensity = "medium",
  className = "",
  children
}: Interactive3DCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [tiltMaxAngle, -tiltMaxAngle])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-tiltMaxAngle, tiltMaxAngle])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height

    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5

    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const glowClasses = {
    low: "shadow-lg shadow-cyan-500/20",
    medium: "shadow-xl shadow-cyan-500/30",
    high: "shadow-2xl shadow-cyan-500/50"
  }

  return (
    <motion.div
      ref={cardRef}
      className={`relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-cyan-900/30 rounded-lg overflow-hidden ${glowClasses[glowIntensity]} transition-shadow duration-300 ${className}`}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="relative z-10 p-6">
        {children}
      </div>
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  )
}