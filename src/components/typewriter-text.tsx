"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

interface TypewriterTextProps {
  words: string[]
  className?: string
  typeSpeed?: number
  deleteSpeed?: number
  delayBetweenWords?: number
}

export function TypewriterText({
  words,
  className = "",
  typeSpeed = 100,
  deleteSpeed = 50,
  delayBetweenWords = 2000
}: TypewriterTextProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const word = words[currentWordIndex]
    const timeout = setTimeout(() => {
      if (isDeleting) {
        setCurrentText(word.substring(0, currentText.length - 1))
        if (currentText === "") {
          setIsDeleting(false)
          setCurrentWordIndex((prev) => (prev + 1) % words.length)
        }
      } else {
        setCurrentText(word.substring(0, currentText.length + 1))
        if (currentText === word) {
          setTimeout(() => setIsDeleting(true), delayBetweenWords)
        }
      }
    }, isDeleting ? deleteSpeed : typeSpeed)

    return () => clearTimeout(timeout)
  }, [currentText, currentWordIndex, isDeleting, words, typeSpeed, deleteSpeed, delayBetweenWords])

  return (
    <motion.h1
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {currentText}
      <span className="animate-pulse">|</span>
    </motion.h1>
  )
}