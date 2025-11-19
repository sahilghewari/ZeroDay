"use client"

import { useState, useEffect } from "react"

interface CountdownTimerProps {
  targetDate: string
  className?: string
  variant?: "default" | "minimal-white" | "compact"
}

export function CountdownTimer({ targetDate, className = "", variant = "default" }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const target = new Date(targetDate).getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = target - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  const formatNumber = (num: number) => num.toString().padStart(2, '0')

  if (variant === "minimal-white") {
    return (
      <div className={`text-white text-center ${className}`}>
        <p className="text-sm opacity-80 mb-2">Registration closes in</p>
        <div className="flex gap-4 text-2xl font-mono">
          <span>{formatNumber(timeLeft.days)}d</span>
          <span>{formatNumber(timeLeft.hours)}h</span>
          <span>{formatNumber(timeLeft.minutes)}m</span>
          <span>{formatNumber(timeLeft.seconds)}s</span>
        </div>
      </div>
    )
  }

  if (variant === "compact") {
    return (
      <div className={`text-white text-center ${className}`}>
        <div className="flex gap-2 text-lg font-mono">
          <span>{timeLeft.days}d</span>
          <span>{timeLeft.hours}h</span>
          <span>{timeLeft.minutes}m</span>
          <span>{timeLeft.seconds}s</span>
        </div>
      </div>
    )
  }

  return (
    <div className={`text-center ${className}`}>
      <h3 className="text-lg font-semibold mb-4 text-blue-600">Event Starts In</h3>
      <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-blue-200 shadow-lg">
          <div className="text-3xl font-mono font-bold text-gray-800">{formatNumber(timeLeft.days)}</div>
          <div className="text-sm text-blue-600">Days</div>
        </div>
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-blue-200 shadow-lg">
          <div className="text-3xl font-mono font-bold text-gray-800">{formatNumber(timeLeft.hours)}</div>
          <div className="text-sm text-blue-600">Hours</div>
        </div>
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-blue-200 shadow-lg">
          <div className="text-3xl font-mono font-bold text-gray-800">{formatNumber(timeLeft.minutes)}</div>
          <div className="text-sm text-blue-600">Minutes</div>
        </div>
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-blue-200 shadow-lg">
          <div className="text-3xl font-mono font-bold text-gray-800">{formatNumber(timeLeft.seconds)}</div>
          <div className="text-sm text-blue-600">Seconds</div>
        </div>
      </div>
    </div>
  )
}