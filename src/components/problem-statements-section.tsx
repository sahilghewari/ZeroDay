"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { AnimatedTabs } from "@/components/ui/animated-tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { HoverButton } from "@/components/ui/hover-button"
import { FileText, TrendingUp, Heart, Cpu, Building, Leaf } from "lucide-react"

const categories = [
  {
    id: "fintech",
    title: "FinTech",
    tagline: "Revolutionizing Financial Services",
    icon: <TrendingUp className="w-6 h-6" />,
    problemCount: 12,
    problems: [
      {
        id: "FIN001",
        title: "AI-Powered Credit Scoring for Rural Entrepreneurs",
        shortDescription: "Develop an AI model that assesses creditworthiness for rural small business owners using alternative data sources.",
        fullDescription: "Traditional credit scoring systems often fail rural entrepreneurs due to lack of formal financial history. Create an AI-powered solution that uses alternative data like social media activity, utility payments, and community reputation to provide fair credit assessments."
      },
      {
        id: "FIN001",
        title: "AI-Powered Credit Scoring for Rural Entrepreneurs",
        shortDescription: "Develop an AI model that assesses creditworthiness for rural small business owners using alternative data sources.",
        fullDescription: "Traditional credit scoring systems often fail rural entrepreneurs due to lack of formal financial history. Create an AI-powered solution that uses alternative data like social media activity, utility payments, and community reputation to provide fair credit assessments."
      },
      {
        id: "FIN002",
        title: "Blockchain-Based Land Registry",
        shortDescription: "Build a secure, transparent land ownership system using blockchain technology.",
        fullDescription: "India's land registry system suffers from fraud, corruption, and inefficiency. Develop a blockchain-based solution that ensures transparent, immutable land records with smart contracts for property transfers."
      }
    ]
  },
  {
    id: "health",
    title: "HealthTech",
    tagline: "Healthcare for All",
    icon: <Heart className="w-6 h-6" />,
    problemCount: 10,
    problems: [
      {
        id: "HEA001",
        title: "AI Diagnostic Assistant for Rural Clinics",
        shortDescription: "Create an AI system that helps under-resourced clinics diagnose common diseases.",
        fullDescription: "Rural healthcare facilities often lack specialist doctors. Build an AI assistant that analyzes symptoms, medical history, and basic tests to provide diagnostic suggestions and treatment recommendations."
      },
      {
        id: "HEA001",
        title: "AI Diagnostic Assistant for Rural Clinics",
        shortDescription: "Create an AI system that helps under-resourced clinics diagnose common diseases.",
        fullDescription: "Rural healthcare facilities often lack specialist doctors. Build an AI assistant that analyzes symptoms, medical history, and basic tests to provide diagnostic suggestions and treatment recommendations."
      },
      {
        id: "HEA001",
        title: "AI Diagnostic Assistant for Rural Clinics",
        shortDescription: "Create an AI system that helps under-resourced clinics diagnose common diseases.",
        fullDescription: "Rural healthcare facilities often lack specialist doctors. Build an AI assistant that analyzes symptoms, medical history, and basic tests to provide diagnostic suggestions and treatment recommendations."
      },
    ]
  },
  {
    id: "work",
    title: "Future",
    tagline: "Workforce Transformation",
    icon: <Building className="w-6 h-6" />,
    problemCount: 8,
    problems: [
      {
        id: "WOR001",
        title: "Skill Gap Analysis Platform",
        shortDescription: "Build a platform that matches job requirements with candidate skills using AI.",
        fullDescription: "The Indian job market has a significant skills gap. Create an AI-powered platform that analyzes job descriptions and candidate profiles to identify skill gaps and recommend training programs."
      },
      {
        id: "WOR001",
        title: "Skill Gap Analysis Platform",
        shortDescription: "Build a platform that matches job requirements with candidate skills using AI.",
        fullDescription: "The Indian job market has a significant skills gap. Create an AI-powered platform that analyzes job descriptions and candidate profiles to identify skill gaps and recommend training programs."
      },
      {
        id: "WOR001",
        title: "Skill Gap Analysis Platform",
        shortDescription: "Build a platform that matches job requirements with candidate skills using AI.",
        fullDescription: "The Indian job market has a significant skills gap. Create an AI-powered platform that analyzes job descriptions and candidate profiles to identify skill gaps and recommend training programs."
      },
    ]
  },
  {
    id: "civic",
    title: "CivicTech",
    tagline: "Digital Governance",
    icon: <Cpu className="w-6 h-6" />,
    problemCount: 9,
    problems: [
      {
        id: "CIV001",
        title: "Digital Voting System",
        shortDescription: "Develop a secure, accessible voting platform for local elections.",
        fullDescription: "Many Indian voters, especially in rural areas, face challenges in participating in elections. Build a digital voting system that's secure, accessible, and maintains voter privacy."
      },
      {
        id: "CIV001",
        title: "Digital Voting System",
        shortDescription: "Develop a secure, accessible voting platform for local elections.",
        fullDescription: "Many Indian voters, especially in rural areas, face challenges in participating in elections. Build a digital voting system that's secure, accessible, and maintains voter privacy."
      },
      {
        id: "CIV001",
        title: "Digital Voting System",
        shortDescription: "Develop a secure, accessible voting platform for local elections.",
        fullDescription: "Many Indian voters, especially in rural areas, face challenges in participating in elections. Build a digital voting system that's secure, accessible, and maintains voter privacy."
      },
    ]
  },
  {
    id: "sustainability",
    title: "Sustainability",
    tagline: "Green Innovation",
    icon: <Leaf className="w-6 h-6" />,
    problemCount: 11,
    problems: [
      {
        id: "SUS001",
        title: "Waste Management Optimization",
        shortDescription: "Create an AI system to optimize waste collection routes and recycling processes.",
        fullDescription: "Urban waste management is inefficient and costly. Develop an AI solution that optimizes collection routes, predicts waste generation, and improves recycling rates."
      },
      {
        id: "SUS001",
        title: "Waste Management Optimization",
        shortDescription: "Create an AI system to optimize waste collection routes and recycling processes.",
        fullDescription: "Urban waste management is inefficient and costly. Develop an AI solution that optimizes collection routes, predicts waste generation, and improves recycling rates."
      },
      {
        id: "SUS001",
        title: "Waste Management Optimization",
        shortDescription: "Create an AI system to optimize waste collection routes and recycling processes.",
        fullDescription: "Urban waste management is inefficient and costly. Develop an AI solution that optimizes collection routes, predicts waste generation, and improves recycling rates."
      },
      {
        id: "SUS001",
        title: "Waste Management Optimization",
        shortDescription: "Create an AI system to optimize waste collection routes and recycling processes.",
        fullDescription: "Urban waste management is inefficient and costly. Develop an AI solution that optimizes collection routes, predicts waste generation, and improves recycling rates."
      },
    ]
  }
]

export function ProblemStatementsSection() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].id)

  const filteredCategories = selectedCategory === "all"
    ? categories.filter(cat => cat.id !== "all")
    : categories.filter(cat => cat.id === selectedCategory)

  const tabs = categories.map((c) => ({ label: c.title, value: c.id }))

  return (
    <section id="problems" className="h-screen bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full overflow-auto overscroll-contain py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              5 Categories. Infinite Possibilities.
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            Choose your challenge. Build the future.
          </p>
        </motion.div>

        <div className="w-full">
          <div className="mb-8 flex justify-center">
            <AnimatedTabs
              tabs={tabs}
              active={categories.find(c => c.id === selectedCategory)?.title}
              onChange={(valueOrLabel) => {
                // valueOrLabel will be the category id when available from AnimatedTabs,
                // otherwise it may be the label — handle both.
                const byId = categories.find((c) => c.id === valueOrLabel)
                if (byId) {
                  setSelectedCategory(byId.id)
                  return
                }
                const byTitle = categories.find((c) => c.title === valueOrLabel)
                if (byTitle) setSelectedCategory(byTitle.id)
              }}
            />
          </div>

          {/* Content area: render the currently selected category */}
          {
            (() => {
              const current = categories.find((c) => c.id === selectedCategory) || categories[0]
              return (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{current.title}</h3>
                    <p className="text-gray-400">{current.tagline}</p>
                  </div>
                  <Accordion type="single" collapsible className="space-y-4">
                    {current.problems.map((problem, idx) => (
                      <AccordionItem
                        key={`${current.id}-${problem.id}-${idx}`}
                        value={problem.id}
                        className="bg-gray-800/50 backdrop-blur-sm border border-cyan-400/30 rounded-lg px-6"
                      >
                        <AccordionTrigger className="text-left hover:no-underline">
                          <div className="flex items-center gap-3">
                            <Badge variant="outline" className="border-cyan-400 text-cyan-400">
                              {problem.id}
                            </Badge>
                            <span className="text-white">{problem.title}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <p className="text-gray-300 mb-4">{problem.shortDescription}</p>
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="link" className="text-cyan-400 p-0">
                                View Full Details →
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl bg-gray-900 border-cyan-400/30">
                              <DialogHeader>
                                <DialogTitle className="text-white flex items-center gap-2">
                                  <Badge variant="outline" className="border-cyan-400 text-cyan-400">
                                    {problem.id}
                                  </Badge>
                                  {problem.title}
                                </DialogTitle>
                              </DialogHeader>
                              <div className="text-gray-300">
                                <p className="mb-4">{problem.fullDescription}</p>
                                <div className="flex gap-4">
                                  <HoverButton className="bg-cyan-400 hover:bg-cyan-300 text-black">
                                    Start Building
                                  </HoverButton>
                                  <HoverButton className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10">
                                    Download Resources
                                  </HoverButton>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              )
            })()
          }
        </div>
      </div>
    </section>
  )
}

interface CategoryCardProps {
  category: typeof categories[0]
}

function CategoryCard({ category }: CategoryCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <Card className="bg-gray-800/50 border-cyan-400/30 hover:border-cyan-400/50 shadow-lg hover:shadow-cyan-400/20 transition-all duration-300 backdrop-blur-sm">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="text-cyan-400">
              {category.icon}
            </div>
            <CardTitle className="text-white">{category.title}</CardTitle>
          </div>
          <p className="text-gray-400 text-sm">{category.tagline}</p>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <Badge variant="secondary" className="bg-cyan-400/20 text-cyan-400 border-cyan-400/50">
              {category.problemCount} Problems
            </Badge>
            <Button variant="ghost" size="sm" className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-400/10">
              View All →
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}