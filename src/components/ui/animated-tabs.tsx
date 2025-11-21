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
        const { offsetLeft, offsetWidth } = activeTabElement

        const clipLeft = offsetLeft + 16
        const clipRight = offsetLeft + offsetWidth + 16

        container.style.clipPath = `inset(0 ${Number(
          100 - (clipRight / container.offsetWidth) * 100,
        ).toFixed()}% 0 ${Number(
          (clipLeft / container.offsetWidth) * 100,
        ).toFixed()}% round 17px)`
      }
    }
  }, [activeTab])

  function handleClick(tab: { label: string; value?: string }) {
    setActiveTab(tab.label)
    onChange?.(tab.value ?? tab.label)
  }

  return (
    <div className="relative bg-secondary/50 border border-primary/10 mx-auto flex w-fit flex-col items-center rounded-full py-2 px-4">
      <div
        ref={containerRef}
        className="absolute z-10 w-full overflow-hidden [clip-path:inset(0px_75%_0px_0%_round_17px)] [transition:clip-path_0.25s_ease]"
      >
        <div className="relative flex w-full justify-center bg-linear-to-r from-cyan-500 to-blue-500">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => handleClick(tab)}
              className="flex h-8 items-center rounded-full p-3 text-sm font-medium text-primary-foreground"
              tabIndex={-1}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="relative flex w-full justify-center">
        {tabs.map((tab, index) => {
          const isActive = activeTab === tab.label

          return (
            <button
              key={index}
              ref={isActive ? activeTabRef : null}
              onClick={() => handleClick(tab)}
              className="flex h-8 items-center cursor-pointer rounded-full p-3 text-sm font-medium text-muted-foreground"
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
