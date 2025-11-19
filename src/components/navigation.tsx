"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { HoverButton } from "@/components/ui/hover-button"

interface NavigationProps {
  sticky?: boolean
  blurOnScroll?: boolean
  className?: string
}

export function Navigation({ sticky = true, blurOnScroll = true, className = "" }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = ['hero', 'about', 'problems', 'timeline', 'prizes', 'sponsors', 'judges', 'faq']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#problems', label: 'Problem Statements' },
    { href: '#timeline', label: 'Timeline' },
    { href: '#prizes', label: 'Prizes' },
    { href: '#sponsors', label: 'Sponsors' },
    { href: '#judges', label: 'Judges' },
    { href: '#faq', label: 'FAQ' },
  ]

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        sticky ? 'sticky' : ''
      } ${
        blurOnScroll && isScrolled
          ? 'backdrop-blur-lg bg-black/90 border-b border-cyan-400/30 shadow-lg shadow-cyan-400/20'
          : 'bg-black/80 backdrop-blur-sm'
      } ${className}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="font-mono text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              ZeroDay
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href.slice(1))}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.href.slice(1)
                      ? 'text-cyan-400 border-b-2 border-cyan-400'
                      : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <HoverButton
              className="bg-gradient-to-r from-cyan-400 to-purple-400 hover:from-cyan-300 hover:to-purple-300 text-black font-semibold shadow-lg shadow-cyan-400/25"
            >
              Register Now
            </HoverButton>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-300 hover:text-white">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}