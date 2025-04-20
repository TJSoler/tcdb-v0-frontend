"use client"

import { Moon, Sun, Monitor } from "lucide-react"
import { useTheme } from "@/providers/theme-provider"

interface ThemeToggleProps {
  variant?: "icon" | "select" | "switch"
  className?: string
}

export function ThemeToggle({ variant = "icon", className = "" }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme()

  if (variant === "select") {
    return (
      <div className={className}>
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value as "light" | "dark" | "system")}
          className="border-2 border-black dark:border-neon-green p-2 bg-white dark:bg-gray-800 focus:outline-none focus:border-neon-green transition-colors"
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="system">System</option>
        </select>
      </div>
    )
  }

  if (variant === "switch") {
    return (
      <div className={`flex items-center gap-4 ${className}`}>
        <button
          onClick={() => setTheme("light")}
          className={`flex items-center gap-2 px-3 py-2 rounded-l-md ${
            theme === "light"
              ? "bg-neon-green text-black font-bold"
              : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
          }`}
        >
          <Sun size={16} />
          <span>Light</span>
        </button>
        <button
          onClick={() => setTheme("system")}
          className={`flex items-center gap-2 px-3 py-2 ${
            theme === "system"
              ? "bg-neon-green text-black font-bold"
              : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
          }`}
        >
          <Monitor size={16} />
          <span>System</span>
        </button>
        <button
          onClick={() => setTheme("dark")}
          className={`flex items-center gap-2 px-3 py-2 rounded-r-md ${
            theme === "dark"
              ? "bg-neon-green text-black font-bold"
              : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
          }`}
        >
          <Moon size={16} />
          <span>Dark</span>
        </button>
      </div>
    )
  }

  // Default icon variant
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={`p-2 rounded-md ${className}`}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <Sun size={20} className="text-neon-green" /> : <Moon size={20} />}
    </button>
  )
}
