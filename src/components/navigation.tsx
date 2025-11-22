"use client"

import { useState, useEffect, useCallback } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { HoverButton } from "@/components/ui/hover-button"
import { Home, FileText, Trophy } from 'lucide-react'

interface NavigationProps {
  sticky?: boolean
  blurOnScroll?: boolean
  className?: string
}

export function Navigation({ sticky = true, blurOnScroll = true, className = "" }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    let ticking = false
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50)

          // Update active section based on scroll position (throttled)
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
          
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (!element) return

    const lenis = (window as any).lenis
    if (lenis && typeof lenis.scrollTo === 'function') {
      const y = element.getBoundingClientRect().top + window.scrollY
      lenis.scrollTo(y)
      return
    }

    // Fallback
    element.scrollIntoView({ behavior: 'smooth' })
  }

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#problems', label: 'Problem Statements' },
    { href: '#timeline', label: 'Timeline' },
    { href: '#prizes', label: 'Prizes' },
    { href: '#faq', label: 'FAQ' },
  ]

  return (
    <>
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

          {/* Mobile: bottom navigation will render below for small screens */}
        </div>
      </div>
    </motion.nav>
    {/* Mobile bottom navigation (custom UI) */}
    <div className="flex z-[1200] items-center justify-around w-full font-medium h-16 fixed bottom-0 left-0 right-0 p-2 pt-3 md:hidden">
      <div className="absolute bottom-0 w-full h-[120%] pointer-events-none -z-10 mobile-nav-gradient" />

      <button
        onClick={() => scrollToSection('about')}
        className={`flex items-center flex-col text-xs gap-1 bubbly active:brightness-90 ${activeSection === 'about' ? 'text-cyan-400' : 'text-gray-300'}`}
      >
        <Home className="shrink-0 stroke-current" size={25} />
        <span>About</span>
      </button>

      <button
        onClick={() => scrollToSection('problem-statements')}
        className={`flex items-center flex-col text-xs gap-1 bubbly active:brightness-90 ${activeSection === 'problem-statements' ? 'text-cyan-400' : 'text-gray-300'}`}
      >
        <FileText className="shrink-0 stroke-current" size={25} />
        <span>Problems</span>
      </button>

      <button
        onClick={() => scrollToSection('hero')}
        className={`flex items-center flex-col text-xs gap-1 bubbly active:brightness-90 ${activeSection === 'hero' ? 'text-cyan-400' : 'text-gray-300'}`}
      >
        <Trophy className="shrink-0 stroke-current" size={25} />
        <span>Prizes</span>
      </button>
    </div>
    </>
  )
}