"use client"

import * as React from "react"
import { useEffect, useRef, useState } from "react"

export interface AnimatedTabsProps {
  tabs: { label: string; value?: string }[];
  active?: string;
  onChange?: (valueOrLabel: string) => void;
}

export function AnimatedTabs({ tabs, active, onChange }: AnimatedTabsProps) {
  const [activeTab, setActiveTab] = useState(active ?? tabs[0]?.label ?? "")
  const containerRef = useRef<HTMLDivElement>(null)
  const activeTabRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (typeof active === "string") setActiveTab(active)
  }, [active])

  useEffect(() => {
    const container = containerRef.current

    if (container && activeTab) {
      const activeTabElement = activeTabRef.current

      if (activeTabElement) {
        const containerRect = container.getBoundingClientRect()
        const tabRect = activeTabElement.getBoundingClientRect()
        
        const offsetLeft = tabRect.left - containerRect.left
        const offsetTop = tabRect.top - containerRect.top
        const { width: offsetWidth, height: offsetHeight } = tabRect

        const clipLeft = offsetLeft
        const clipRight = offsetLeft + offsetWidth
        const clipTop = offsetTop
        const clipBottom = offsetTop + offsetHeight

        container.style.clipPath = `inset(${clipTop}px ${Number(
          containerRect.width - clipRight,
        ).toFixed()}px ${Number(
          containerRect.height - clipBottom,
        ).toFixed()}px ${clipLeft}px round 17px)`
      }
    }
  }, [activeTab])

  function handleClick(tab: { label: string; value?: string }) {
    setActiveTab(tab.label)
    onChange?.(tab.value ?? tab.label)
  }

  return (
    <div className="relative bg-transparent border-2 border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.5)] mx-auto flex w-full max-w-6xl flex-col items-center rounded-2xl sm:rounded-full py-3 px-2 sm:py-2 sm:px-4">
      <div
        ref={containerRef}
        className="absolute z-10 w-full overflow-hidden [clip-path:inset(0px_75%_0px_0%_round_17px)] [transition:clip-path_0.25s_ease]"
      >
        <div className="relative grid grid-cols-2 sm:flex sm:flex-nowrap w-full justify-center gap-1 bg-linear-to-r from-cyan-500 to-blue-500">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => handleClick(tab)}
              className="flex h-9 sm:h-7 items-center justify-center rounded-full px-2 sm:px-3 py-1.5 text-[10px] sm:text-sm font-medium text-white whitespace-nowrap border border-cyan-400/40"
              tabIndex={-1}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="relative grid grid-cols-2 sm:flex sm:flex-nowrap w-full justify-center gap-1.5 sm:gap-1">
        {tabs.map((tab, index) => {
          const isActive = activeTab === tab.label

          return (
            <button
              key={index}
              ref={isActive ? activeTabRef : null}
              onClick={() => handleClick(tab)}
              className="flex h-9 sm:h-7 items-center justify-center cursor-pointer rounded-full px-2 sm:px-3 py-1.5 text-[10px] sm:text-sm font-medium text-white whitespace-nowrap border-2 border-cyan-400/60 shadow-[0_0_8px_rgba(34,211,238,0.4)] hover:shadow-[0_0_12px_rgba(34,211,238,0.6)] hover:border-cyan-400 transition-all duration-300"
            >
              {tab.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default AnimatedTabs
