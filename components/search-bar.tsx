"use client"

import { Search } from "lucide-react"
import { useRouter } from "next/navigation"
import { type FormEvent, useState, useRef, useEffect } from "react"

export function SearchBar({ defaultValue = "" }: { defaultValue?: string }) {
  const router = useRouter()
  const [query, setQuery] = useState(defaultValue)
  const [isFocused, setIsFocused] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`)
    }
  }

  // Add keyboard shortcut (Ctrl+K or Cmd+K) to focus search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault()
        inputRef.current?.focus()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <form onSubmit={handleSubmit} className="flex w-full relative" role="search">
      <div className="absolute right-16 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs pointer-events-none">
        <kbd
          className={`px-1.5 py-0.5 bg-gray-100 border border-gray-300 rounded ${isFocused ? "opacity-100" : "opacity-0"} transition-opacity duration-200`}
        >
          Ctrl+K
        </kbd>
      </div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Search comics..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`
          flex-grow border-2 ${isFocused ? "border-neon-green" : "border-black dark:border-black"} border-r-0 p-3 
          focus:outline-none transition-colors duration-200
          placeholder:text-gray-500 dark:bg-black dark:text-white dark:placeholder:text-gray-400
        `}
        aria-label="Search comics"
      />
      <button
        type="submit"
        className="bg-black text-neon-green p-3 flex items-center justify-center border-2 border-neon-green hover:bg-neon-green hover:text-black transition-colors"
        aria-label="Submit search"
      >
        <Search size={20} />
      </button>
    </form>
  )
}
