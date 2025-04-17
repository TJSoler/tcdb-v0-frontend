"use client"

import { Search } from "lucide-react"
import { useRouter } from "next/navigation"
import { type FormEvent, useState } from "react"

export function SearchBar({ defaultValue = "" }: { defaultValue?: string }) {
  const router = useRouter()
  const [query, setQuery] = useState(defaultValue)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full">
      <input
        type="text"
        placeholder="Search comics..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-grow border-2 border-r-0 border-black p-3 focus:outline-none focus:border-neon-yellow"
      />
      <button
        type="submit"
        className="bg-black text-neon-green p-3 flex items-center justify-center border-2 border-neon-green hover:bg-neon-green hover:text-black transition-colors"
      >
        <Search size={20} />
      </button>
    </form>
  )
}
