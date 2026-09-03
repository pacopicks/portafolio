"use client"

import { useEffect, useState } from "react"
import { flushSync } from "react-dom"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { cn } from "@/lib/utils"

interface ThemeToggleProps {
  className?: string
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- standard next-themes hydration guard: must flip to true only after client mount
    setMounted(true)
  }, [])

  const isDark = mounted ? resolvedTheme === "dark" : true

  const toggleTheme = () => {
    const next = isDark ? "light" : "dark"

    if (!document.startViewTransition) {
      setTheme(next)
      return
    }

    document.startViewTransition(() => {
      flushSync(() => setTheme(next))
    })
  }

  return (
    <div
      className={cn(
        "flex w-16 h-8 p-1 rounded-full cursor-pointer transition-all duration-300",
        isDark
          ? "bg-zinc-950 border border-zinc-800"
          : "bg-white border border-zinc-200",
        className
      )}
      onClick={toggleTheme}
      role="button"
      tabIndex={0}
      aria-label="Cambiar modo oscuro"
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          toggleTheme()
        }
      }}
    >
      <div className="flex justify-between items-center w-full">
        <div
          className={cn(
            "flex justify-center items-center w-6 h-6 rounded-full transition-transform duration-300",
            isDark
              ? "transform translate-x-0 bg-zinc-800"
              : "transform translate-x-8 bg-gray-200"
          )}
        >
          {isDark ? (
            <Moon
              className="w-4 h-4 text-white"
              strokeWidth={1.5}
            />
          ) : (
            <Sun
              className="w-4 h-4 text-gray-700"
              strokeWidth={1.5}
            />
          )}
        </div>
        <div
          className={cn(
            "flex justify-center items-center w-6 h-6 rounded-full transition-transform duration-300",
            isDark
              ? "bg-transparent"
              : "transform -translate-x-8"
          )}
        >
          {isDark ? (
            <Sun
              className="w-4 h-4 text-gray-500"
              strokeWidth={1.5}
            />
          ) : (
            <Moon
              className="w-4 h-4 text-black"
              strokeWidth={1.5}
            />
          )}
        </div>
      </div>
    </div>
  )
}
