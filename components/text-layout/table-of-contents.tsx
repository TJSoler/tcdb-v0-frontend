"use client"

import { useState, useEffect } from "react"
import { ChevronDown, ChevronUp, List } from "lucide-react"
import { cn } from "@/lib/utils"

interface TOCItem {
  id: string
  text: string
  level: number
}

interface TableOfContentsProps {
  items: TOCItem[]
  className?: string
}

export function TableOfContents({ items, className }: TableOfContentsProps) {
  const [isOpen, setIsOpen] = useState(true)
  const [activeId, setActiveId] = useState<string | null>(null)

  // Track scroll position to highlight the current section
  useEffect(() => {
    const handleScroll = () => {
      const headings = items.map((item) => document.getElementById(item.id)).filter(Boolean)

      // Find the heading that's currently at the top of the viewport
      for (let i = headings.length - 1; i >= 0; i--) {
        const heading = headings[i]
        if (heading && heading.getBoundingClientRect().top <= 100) {
          setActiveId(heading.id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Call once on mount

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [items])

  return (
    <div className={cn("border-2 border-black bg-white mb-6", className)}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 font-bold bg-black text-white"
      >
        <div className="flex items-center gap-2">
          <List size={18} />
          <span>Table of Contents</span>
        </div>
        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>

      {isOpen && (
        <nav className="p-4">
          <ul className="space-y-1">
            {items.map((item) => (
              <li key={item.id} style={{ paddingLeft: `${(item.level - 1) * 1}rem` }}>
                <a
                  href={`#${item.id}`}
                  className={cn(
                    "block py-1 hover:text-neon-green transition-colors",
                    activeId === item.id ? "text-neon-green font-bold" : "",
                  )}
                  onClick={(e) => {
                    e.preventDefault()
                    const element = document.getElementById(item.id)
                    if (element) {
                      window.scrollTo({
                        top: element.offsetTop - 100,
                        behavior: "smooth",
                      })
                      setActiveId(item.id)
                    }
                  }}
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  )
}
