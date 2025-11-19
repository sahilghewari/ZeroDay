"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { HoverButton } from "@/components/ui/hover-button"
import { ArrowRight, FileText } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-8 py-6 lg:py-20 items-center justify-center flex-col">
          <div>
            <Badge variant="secondary" className="bg-cyan-400/20 text-cyan-400 border-cyan-400/50">
              Dec 25-26, 2025
            </Badge>
          </div>
          <div className="flex gap-4 flex-col">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            >
              What is ZeroDay?
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl leading-relaxed tracking-tight text-gray-300 max-w-2xl text-center"
            >
              ZeroDay is where innovation meets impact. Over 24 intense hours,
              50 elite college teams will tackle India's most pressing challenges
              using AI, ML, and cutting-edge technology. Build solutions that matter.
              Create products with real revenue potential. Join a community of changemakers
              redefining technology's role in society.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-row gap-3"
          >
            <HoverButton className="bg-gradient-to-r from-cyan-400 to-purple-400 hover:from-cyan-300 hover:to-purple-300 text-black">
              Register Your Team <ArrowRight className="w-4 h-4" />
            </HoverButton>
            <HoverButton className="border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10">
              View Problem Statements <FileText className="w-4 h-4" />
            </HoverButton>
          </motion.div>
        </div>
      </div>
    </section>
  )
}