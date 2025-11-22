"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { HoverButton } from "@/components/ui/hover-button"
import { ArrowRight, Zap, Users, Rocket, Clock } from "lucide-react"
import { useRef } from "react"

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="relative py-32 overflow-hidden bg-gradient-to-b from-gray-900 via-black to-gray-900"
    >
      {/* Abstract Geometric Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          style={{ y, opacity }}
          className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl"
        />
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
          className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-tr from-cyan-500/20 to-pink-500/20 rounded-full blur-3xl"
        />
        
        {/* Geometric Shapes */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-40 left-1/4 w-32 h-32 border-2 border-cyan-400/30"
          style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-40 right-1/4 w-40 h-40 border-2 border-purple-400/30 rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20 space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <Badge 
              variant="secondary" 
              className="bg-cyan-400/20 text-cyan-400 border-cyan-400/50 px-6 py-2 text-sm font-medium"
            >
              🚀 Dec 25-26, 2025 • Mumbai
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            The Story of ZeroDay
          </motion.h1>
        </div>

        {/* Two Column Layout - Desktop */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg md:text-xl leading-relaxed text-gray-300 font-light">
                ZeroDay was born from one mission: <span className="font-semibold text-cyan-400">ignite the next wave of innovators</span>. 
                We're tired of passive learning and cookie-cutter tech fests. So we created an experience where{" "}
                <span className="font-semibold text-purple-400">200 of India's sharpest student minds</span> battle the clock, 
                solve real urban problems, and build futuristic solutions — all in <span className="font-bold text-pink-400">24 hours</span>.
              </p>

              <p className="text-lg md:text-xl leading-relaxed text-gray-300 font-light">
                Set in <span className="font-semibold text-cyan-400">Mumbai</span>, ZeroDay merges adrenaline, mentorship, and ambition 
                into a single pulse-pounding event. Whether you're building your first app or pitching a product that could change lives, 
                this is where <span className="font-semibold text-purple-400">future tech leaders are forged</span>.
              </p>
            </motion.div>

            {/* Key Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6 pt-6"
            >
              {[
                { icon: Users, label: "200 Innovators", value: "50 Teams" },
                { icon: Clock, label: "24 Hours", value: "Non-Stop" },
                { icon: Zap, label: "Real Problems", value: "Real Impact" },
                { icon: Rocket, label: "Build & Launch", value: "Live Products" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-gray-800/60 backdrop-blur-sm border border-cyan-400/30 rounded-2xl p-6 space-y-2 shadow-lg shadow-cyan-400/10 hover:shadow-xl hover:shadow-cyan-400/20 transition-shadow"
                >
                  <item.icon className="w-8 h-8 text-cyan-400 mb-2" />
                  <p className="text-2xl font-bold text-white">{item.value}</p>
                  <p className="text-sm font-medium text-gray-400">{item.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Animated Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-square">
              {/* Animated Code/Network Graphics Placeholder */}
              <motion.div
                animate={{ 
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.02, 1]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl shadow-2xl shadow-cyan-400/20 overflow-hidden border border-cyan-400/20"
              >
                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: `linear-gradient(to right, #22d3ee 1px, transparent 1px),
                                   linear-gradient(to bottom, #22d3ee 1px, transparent 1px)`,
                  backgroundSize: '40px 40px'
                }} />
                
                {/* Floating Elements */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                      duration: 3 + i,
                      repeat: Infinity,
                      delay: i * 0.5
                    }}
                    className="absolute w-16 h-16 bg-cyan-400/20 rounded-lg border border-cyan-400/30"
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${10 + i * 12}%`
                    }}
                  />
                ))}
                
                {/* Center Glow */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity
                    }}
                    className="w-64 h-64 bg-gradient-to-br from-cyan-400/30 to-purple-400/30 rounded-full blur-3xl"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Ready to Build the Future?
          </h3>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <HoverButton className="flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-purple-400 hover:from-cyan-300 hover:to-purple-300 text-black px-8 py-6 text-lg font-semibold rounded-xl shadow-lg shadow-cyan-400/30 hover:shadow-2xl hover:shadow-cyan-400/50 transition-all">
                Register Your Team <ArrowRight className="w-5 h-5" />
              </HoverButton>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <HoverButton 
                onClick={() => {
                  const element = document.getElementById('problem-statements');
                  element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="flex items-center gap-2 border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 px-8 py-6 text-lg font-semibold rounded-xl transition-all cursor-pointer"
              >
                View Problem Statements <Rocket className="w-5 h-5" />
              </HoverButton>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Subtle Glitch Overlay Effect */}
      <motion.div
        animate={{
          opacity: [0, 0.05, 0]
        }}
        transition={{
          duration: 0.2,
          repeat: Infinity,
          repeatDelay: 5
        }}
        className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 pointer-events-none mix-blend-overlay"
      />
    </section>
  )
}