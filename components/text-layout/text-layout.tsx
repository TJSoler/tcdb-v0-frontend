"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { ChevronUp, ChevronDown, Type, Minus, Plus } from "lucide-react"
import { cn } from "@/lib/utils"
import { PrintButton } from "./print-button"

interface TextLayoutProps {
  title: string
  children: React.ReactNode
  className?: string
}

export function TextLayout({ title, children, className }: TextLayoutProps) {
  const [fontSize, setFontSize] = useState(2) // 0: small, 1: medium, 2: large, 3: x-large
  const [lineSpacing, setLineSpacing] = useState(1) // 0: tight, 1: normal, 2: relaxed
  const [showControls, setShowControls] = useState(false)

  // Font size classes based on the selected size
  const fontSizeClasses = [
    "text-sm", // small
    "text-base", // medium
    "text-lg", // large
    "text-xl", // x-large
  ]

  // Line spacing classes based on the selected spacing
  const lineSpacingClasses = [
    "leading-snug", // tight
    "leading-relaxed", // normal
    "leading-loose", // relaxed
  ]

  const increaseFontSize = () => {
    setFontSize((prev) => Math.min(prev + 1, fontSizeClasses.length - 1))
  }

  const decreaseFontSize = () => {
    setFontSize((prev) => Math.max(prev - 1, 0))
  }

  const increaseLineSpacing = () => {
    setLineSpacing((prev) => Math.min(prev + 1, lineSpacingClasses.length - 1))
  }

  const decreaseLineSpacing = () => {
    setLineSpacing((prev) => Math.max(prev - 1, 0))
  }

  // Save preferences to localStorage
  useEffect(() => {
    localStorage.setItem("textLayout", JSON.stringify({ fontSize, lineSpacing }))
  }, [fontSize, lineSpacing])

  // Load preferences from localStorage
  useEffect(() => {
    const savedPreferences = localStorage.getItem("textLayout")
    if (savedPreferences) {
      const { fontSize: savedFontSize, lineSpacing: savedLineSpacing } = JSON.parse(savedPreferences)
      setFontSize(savedFontSize)
      setLineSpacing(savedLineSpacing)
    }
  }, [])

  return (
    <div className={cn("max-w-4xl mx-auto px-4 py-8", className)}>
      <div className="mb-8 border-b-2 border-black pb-4">
        <h1 className="text-4xl font-black mb-4">{title}</h1>

        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="flex items-center gap-4">
            <PrintButton />

            <button
              onClick={() => setShowControls(!showControls)}
              className="flex items-center gap-2 text-sm font-bold hover:text-neon-green transition-colors"
            >
              <Type size={16} />
              {showControls ? "Hide" : "Show"} Reading Options
              {showControls ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          </div>
        </div>

        {showControls && (
          <div className="mt-4 p-4 border-2 border-black bg-white">
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex-1">
                <h3 className="font-bold mb-2">Font Size</h3>
                <div className="flex items-center gap-2">
                  <button
                    onClick={decreaseFontSize}
                    disabled={fontSize === 0}
                    className="p-2 border-2 border-black hover:border-neon-green disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Decrease font size"
                  >
                    <Minus size={16} />
                  </button>
                  <div className="flex-1 h-2 bg-gray-200 relative">
                    <div
                      className="absolute top-0 left-0 h-2 bg-neon-green"
                      style={{ width: `${(fontSize / (fontSizeClasses.length - 1)) * 100}%` }}
                    ></div>
                  </div>
                  <button
                    onClick={increaseFontSize}
                    disabled={fontSize === fontSizeClasses.length - 1}
                    className="p-2 border-2 border-black hover:border-neon-green disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Increase font size"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              <div className="flex-1">
                <h3 className="font-bold mb-2">Line Spacing</h3>
                <div className="flex items-center gap-2">
                  <button
                    onClick={decreaseLineSpacing}
                    disabled={lineSpacing === 0}
                    className="p-2 border-2 border-black hover:border-neon-green disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Decrease line spacing"
                  >
                    <Minus size={16} />
                  </button>
                  <div className="flex-1 h-2 bg-gray-200 relative">
                    <div
                      className="absolute top-0 left-0 h-2 bg-neon-green"
                      style={{ width: `${(lineSpacing / (lineSpacingClasses.length - 1)) * 100}%` }}
                    ></div>
                  </div>
                  <button
                    onClick={increaseLineSpacing}
                    disabled={lineSpacing === lineSpacingClasses.length - 1}
                    className="p-2 border-2 border-black hover:border-neon-green disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Increase line spacing"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className={cn("prose prose-black max-w-none", fontSizeClasses[fontSize], lineSpacingClasses[lineSpacing])}>
        {children}
      </div>
    </div>
  )
}
