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
import { Scale, TrendingUp, Leaf, Palette, GraduationCap, BarChart3 } from "lucide-react"

const categories = [
  {
    id: "legal",
    title: "Legal Tech",
    tagline: "AI-Powered Legal Solutions",
    icon: <Scale className="w-6 h-6" />,
    problemCount: 3,
    problems: [
      {
        id: "LEG001",
        title: "Legal Research Automation",
        shortDescription: "Develop an AI-driven engine that rapidly scans and contextualizes case law, statutes, and legal documents.",
        fullDescription: "Develop an AI-driven engine that rapidly scans and contextualizes case law, statutes, and legal documents to streamline case preparation and provide strategic legal insights. Aim to cut down research time drastically while improving result relevance."
      },
      {
        id: "LEG002",
        title: "Legal Aid Chatbots",
        shortDescription: "Build multilingual AI chatbots that deliver accessible legal guidance to underserved users.",
        fullDescription: "Build multilingual AI chatbots that deliver accessible legal guidance to underserved users, explain legal procedures clearly, and help evaluate case eligibility. Address language barriers and simplify complex legal concepts."
      },
      {
        id: "LEG003",
        title: "Automated Contract Analysis & Risk Flagging",
        shortDescription: "Create a tool that automatically reviews contracts, identifies risky clauses or inconsistencies.",
        fullDescription: "Create a tool that automatically reviews contracts, identifies risky clauses or inconsistencies, and suggests safer alternative language to reduce legal disputes and improve contract quality across firms."
      }
    ]
  },
  {
    id: "finance",
    title: "Finance & Market Analytics",
    tagline: "Smart Financial Solutions",
    icon: <TrendingUp className="w-6 h-6" />,
    problemCount: 3,
    problems: [
      {
        id: "FIN001",
        title: "Real-Time Market Analysis",
        shortDescription: "Design AI algorithms that instantly analyze stock market trends, social sentiment, and macroeconomic indicators.",
        fullDescription: "Design AI algorithms that instantly analyze stock market trends, social sentiment, and macroeconomic indicators to provide actionable investment signals, especially tailored for high-frequency traders and portfolio managers."
      },
      {
        id: "FIN002",
        title: "Automated Personal Finance Optimization",
        shortDescription: "Develop software that uses AI to track users' income, spending, and investment goals.",
        fullDescription: "Develop software that uses AI to track users' income, spending, and investment goals, then automatically suggests optimized budgeting, saving, and investment plans to improve financial health."
      },
      {
        id: "FIN003",
        title: "Fraud Detection & Prevention System",
        shortDescription: "Build a real-time AI-powered system that monitors transactional data to detect and prevent financial fraud.",
        fullDescription: "Build a real-time AI-powered system that monitors transactional data to detect and prevent financial fraud with high accuracy, reducing losses and improving trust for fintech companies."
      }
    ]
  },
  {
    id: "agriculture",
    title: "Agriculture & Supply Chain",
    tagline: "Smart Farming Solutions",
    icon: <Leaf className="w-6 h-6" />,
    problemCount: 3,
    problems: [
      {
        id: "AGR001",
        title: "Supply Chain Automation for Farm Produce",
        shortDescription: "Build a platform to optimize logistics, inventory, and market matching for farmers.",
        fullDescription: "Build a platform to optimize logistics, inventory, and market matching for farmers, reducing wastage and boosting incomes through data-driven decision-making and transparent supply chains."
      },
      {
        id: "AGR002",
        title: "Predictive Crop Disease Monitoring",
        shortDescription: "Create an AI tool that combines weather data, satellite imagery, and farmer inputs to predict disease outbreaks.",
        fullDescription: "Create an AI tool that combines weather data, satellite imagery, and farmer inputs to predict disease outbreaks early, enabling proactive interventions and minimizing crop loss."
      },
      {
        id: "AGR003",
        title: "Automated Farm Resource Management",
        shortDescription: "Develop a solution that uses IoT sensors and AI to monitor soil health, water usage, and fertilizer needs.",
        fullDescription: "Develop a solution that uses IoT sensors and AI to monitor soil health, water usage, and fertilizer needs, recommending precise resource application to maximize yield and reduce environmental impact."
      }
    ]
  },
  {
    id: "content",
    title: "Content & Creative",
    tagline: "Automated Creative Solutions",
    icon: <Palette className="w-6 h-6" />,
    problemCount: 3,
    problems: [
      {
        id: "CON001",
        title: "Content Creation Automation",
        shortDescription: "Design a tool to automatically generate high-quality marketing, legal, or technical content.",
        fullDescription: "Design a tool to automatically generate high-quality marketing, legal, or technical content based on input parameters and relevant datasets, empowering users to produce tailored content rapidly."
      },
      {
        id: "CON002",
        title: "Creative Design Automation",
        shortDescription: "Create an AI-assisted platform that helps users design logos, UI/UX prototypes, or artistic visuals.",
        fullDescription: "Create an AI-assisted platform that helps users design logos, UI/UX prototypes, or artistic visuals with minimal manual effort, accelerating creative workflows for businesses and designers."
      },
      {
        id: "CON003",
        title: "AI-Based Video and Audio Editing Assistant",
        shortDescription: "Develop software that automates post-production editing tasks like cutting, color correction, and sound balancing.",
        fullDescription: "Develop software that automates post-production editing tasks like cutting, color correction, and sound balancing using generative AI, streamlining the content creation pipeline."
      }
    ]
  },
  {
    id: "education",
    title: "Education & Training",
    tagline: "Personalized Learning Systems",
    icon: <GraduationCap className="w-6 h-6" />,
    problemCount: 3,
    problems: [
      {
        id: "EDU001",
        title: "Personalized Education & Training Systems",
        shortDescription: "Build an AI-powered platform that generates customized learning paths, interactive simulations, and real-time assessments.",
        fullDescription: "Build an AI-powered platform that generates customized learning paths, interactive simulations, and real-time assessments tailored to each learner's style and progress."
      },
      {
        id: "EDU002",
        title: "Automated Skill Gap Analysis and Course Recommendations",
        shortDescription: "Create a system that analyzes employee or student skill profiles against industry benchmarks.",
        fullDescription: "Create a system that analyzes employee or student skill profiles against industry benchmarks and recommends personalized training programs to address deficiencies."
      },
      {
        id: "EDU003",
        title: "Virtual AI Tutor for Career Counseling",
        shortDescription: "Develop an AI tutor that conducts career guidance sessions, assesses strengths and aspirations.",
        fullDescription: "Develop an AI tutor that conducts career guidance sessions, assesses strengths and aspirations, and suggests education or training pathways to optimize career growth."
      }
    ]
  },
  {
    id: "business",
    title: "Business Intelligence",
    tagline: "Data-Driven Decision Making",
    icon: <BarChart3 className="w-6 h-6" />,
    problemCount: 3,
    problems: [
      {
        id: "BIZ001",
        title: "AI-Powered Decision Support",
        shortDescription: "Design intelligent systems that digest complex datasets and present actionable insights and predictive models.",
        fullDescription: "Design intelligent systems that digest complex datasets and present actionable insights and predictive models tailored to founders and business leaders' strategic decisions."
      },
      {
        id: "BIZ002",
        title: "Data Integration & Validation Tools",
        shortDescription: "Build software to automate the integration of diverse data sources, perform cleaning and validation.",
        fullDescription: "Build software to automate the integration of diverse data sources, perform cleaning and validation, and harmonize data formats to guarantee analytics accuracy."
      },
      {
        id: "BIZ003",
        title: "Automated Competitive Analysis Dashboard",
        shortDescription: "Create a dynamic platform that continuously tracks competitors' activities, product launches, and market changes.",
        fullDescription: "Create a dynamic platform that continuously tracks competitors' activities, product launches, and market changes, delivering real-time strategic intelligence for companies."
      }
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
    <section id="problem-statements" className="bg-black">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 px-2">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              6 Categories. Infinite Possibilities.
            </span>
          </h2>
          <p className="text-base sm:text-xl text-slate-300 px-2">
            Choose your challenge. Build the future.
          </p>
        </motion.div>

        <div className="w-full">
          <div className="mb-6 sm:mb-8 flex justify-center px-2">
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
                <div className="space-y-4 sm:space-y-6">
                  <div className="text-center mb-6 sm:mb-8 px-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-300 mb-2">{current.title}</h3>
                    <p className="text-sm sm:text-base text-slate-300">{current.tagline}</p>
                  </div>
                  <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
                    {current.problems.map((problem, idx) => (
                      <AccordionItem
                        key={`${current.id}-${problem.id}-${idx}`}
                        value={problem.id}
                        className="bg-transparent border border-cyan-400/30 rounded-lg px-3 sm:px-6"
                      >
                        <AccordionTrigger className="text-left hover:no-underline py-4">
                          <div className="flex items-start sm:items-center gap-2 sm:gap-3 flex-col sm:flex-row">
                            <Badge variant="outline" className="border-cyan-400 text-cyan-400 text-[10px] sm:text-xs shrink-0">
                              {problem.id}
                            </Badge>
                            <span className="text-slate-300 text-sm sm:text-base text-left">{problem.title}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <p className="text-slate-300 text-sm sm:text-base mb-4">{problem.shortDescription}</p>
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="link" className="text-cyan-400 p-0 text-sm sm:text-base">
                                View Full Details →
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-[95vw] sm:max-w-4xl bg-transparent border-cyan-400/30 max-h-[90vh] overflow-y-auto">
                              <DialogHeader>
                                <DialogTitle className="text-slate-300 flex items-start sm:items-center gap-2 flex-col sm:flex-row text-sm sm:text-base">
                                  <Badge variant="outline" className="border-cyan-400 text-cyan-400 text-[10px] sm:text-xs">
                                    {problem.id}
                                  </Badge>
                                  <span className="text-left">{problem.title}</span>
                                </DialogTitle>
                              </DialogHeader>
                              <div className="text-slate-300">
                                <p className="mb-4 text-sm sm:text-base">{problem.fullDescription}</p>
                                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
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
      <Card className="bg-transparent border-cyan-400/30 hover:border-cyan-400/50 shadow-lg hover:shadow-cyan-400/20 transition-all duration-300 backdrop-blur-sm">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="text-cyan-400">
              {category.icon}
            </div>
            <CardTitle className="text-slate-300">{category.title}</CardTitle>
          </div>
          <p className="text-slate-300 text-sm">{category.tagline}</p>
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