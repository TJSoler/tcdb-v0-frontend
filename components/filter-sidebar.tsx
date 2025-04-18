"use client"

import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Accordion } from "@/components/ui/accordion"
import { X, Filter, Check } from "lucide-react"

export function FilterSidebar() {
  const [activeFilters, setActiveFilters] = useState<Record<string, string[]>>({
    publishers: [],
    credits: [],
    genres: [],
    types: [],
    countries: [],
  })

  const [expandedSections, setExpandedSections] = useState<string[]>([
    "publishers", // Open by default
  ])

  const toggleFilter = (category: string, value: string) => {
    setActiveFilters((prev) => {
      const current = [...(prev[category] || [])]
      const index = current.indexOf(value)

      if (index === -1) {
        current.push(value)
      } else {
        current.splice(index, 1)
      }

      return {
        ...prev,
        [category]: current,
      }
    })
  }

  const clearFilters = () => {
    setActiveFilters({
      publishers: [],
      credits: [],
      genres: [],
      types: [],
      countries: [],
    })
  }

  const totalActiveFilters = Object.values(activeFilters).flat().length

  const toggleSection = (value: string) => {
    setExpandedSections((prev) => {
      if (prev.includes(value)) {
        return prev.filter((v) => v !== value)
      } else {
        return [...prev, value]
      }
    })
  }

  return (
    <div className="border-2 border-black p-4 bg-white shadow-subtle">
      <div className="flex justify-between items-center mb-4 border-b-2 border-black pb-2">
        <h2 className="text-xl font-bold flex items-center">
          <Filter size={18} className="mr-2" /> FILTERS
          {totalActiveFilters > 0 && (
            <span className="ml-2 bg-neon-green text-black text-xs font-bold px-2 py-0.5 rounded-full">
              {totalActiveFilters}
            </span>
          )}
        </h2>
        {totalActiveFilters > 0 && (
          <button
            onClick={clearFilters}
            className="text-sm font-medium text-gray-600 hover:text-neon-green flex items-center"
            aria-label="Clear all filters"
          >
            <X size={16} className="mr-1" /> Clear
          </button>
        )}
      </div>

      <Accordion type="multiple" className="space-y-3" value={expandedSections} onValueChange={setExpandedSections}>
        <FilterSection
          title="PUBLISHERS"
          value="publishers"
          isExpanded={expandedSections.includes("publishers")}
          onToggle={() => toggleSection("publishers")}
          items={["DC Comics", "Marvel", "Image", "Dark Horse", "IDW", "BOOM! Studios"]}
          activeItems={activeFilters.publishers}
          onToggleItem={(item) => toggleFilter("publishers", item)}
        />

        <FilterSection
          title="CREDITS"
          value="credits"
          isExpanded={expandedSections.includes("credits")}
          onToggle={() => toggleSection("credits")}
          items={["Writer", "Penciller", "Inker", "Colorist", "Letterer", "Editor"]}
          activeItems={activeFilters.credits}
          onToggleItem={(item) => toggleFilter("credits", item)}
        />

        <FilterSection
          title="GENRES"
          value="genres"
          isExpanded={expandedSections.includes("genres")}
          onToggle={() => toggleSection("genres")}
          items={["Superhero", "Sci-Fi", "Horror", "Fantasy", "Crime", "Drama", "Comedy"]}
          activeItems={activeFilters.genres}
          onToggleItem={(item) => toggleFilter("genres", item)}
        />

        <FilterSection
          title="TYPES"
          value="types"
          isExpanded={expandedSections.includes("types")}
          onToggle={() => toggleSection("types")}
          items={["Single Issue", "TPB", "Hardcover", "Omnibus", "Manga", "Graphic Novel"]}
          activeItems={activeFilters.types}
          onToggleItem={(item) => toggleFilter("types", item)}
        />

        <FilterSection
          title="COUNTRY OF ORIGIN"
          value="countries"
          isExpanded={expandedSections.includes("countries")}
          onToggle={() => toggleSection("countries")}
          items={["USA", "Japan", "France", "Italy", "UK", "Canada"]}
          activeItems={activeFilters.countries}
          onToggleItem={(item) => toggleFilter("countries", item)}
        />
      </Accordion>

      <div className="mt-6 space-y-3">
        <button
          className={`
            w-full font-bold py-2.5 px-4 flex justify-center items-center
            ${
              totalActiveFilters > 0
                ? "bg-black text-neon-green border-2 border-neon-green hover:bg-neon-green hover:text-black"
                : "bg-gray-200 text-gray-500 border-2 border-gray-300 cursor-not-allowed"
            }
            transition-colors
          `}
          disabled={totalActiveFilters === 0}
        >
          <Check size={18} className="mr-2" /> APPLY FILTERS
        </button>
        <button
          className={`
            w-full border-2 border-black font-bold py-2.5 px-4 hover:border-neon-green 
            hover:text-neon-green transition-colors
            ${totalActiveFilters === 0 ? "opacity-50 cursor-not-allowed" : ""}
          `}
          onClick={clearFilters}
          disabled={totalActiveFilters === 0}
        >
          RESET
        </button>
      </div>
    </div>
  )
}

interface FilterSectionProps {
  title: string
  value: string
  isExpanded: boolean
  onToggle: () => void
  items: string[]
  activeItems: string[]
  onToggleItem: (item: string) => void
}

function FilterSection({ title, value, isExpanded, onToggle, items, activeItems, onToggleItem }: FilterSectionProps) {
  return (
    <div className="border-2 border-black">
      <button
        className={`
          w-full text-left font-bold py-3 px-4 flex justify-between items-center
          ${isExpanded ? "bg-black text-neon-green" : "bg-white hover:text-neon-green"}
          transition-colors
        `}
        onClick={onToggle}
        aria-expanded={isExpanded}
      >
        <span>{title}</span>
        <span className="flex items-center">
          {activeItems.length > 0 && (
            <span className="mr-2 text-xs bg-neon-green text-black px-1.5 py-0.5 rounded-full">
              {activeItems.length}
            </span>
          )}
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`transform transition-transform ${isExpanded ? "rotate-180" : ""}`}
          >
            <path
              d="M4 6L8 10L12 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      {isExpanded && (
        <div className="p-4 space-y-2 bg-gray-50 border-t-2 border-black">
          {items.map((item) => (
            <div key={item} className="flex items-center space-x-2">
              <Checkbox
                id={`${value}-${item}`}
                checked={activeItems.includes(item)}
                onCheckedChange={() => onToggleItem(item)}
                className={`
                  h-4 w-4 rounded-sm border-2 border-black
                  data-[state=checked]:bg-neon-green data-[state=checked]:border-neon-green
                  focus:ring-2 focus:ring-neon-green focus:ring-opacity-50
                `}
              />
              <Label
                htmlFor={`${value}-${item}`}
                className={`
                  cursor-pointer select-none
                  ${activeItems.includes(item) ? "font-medium" : ""}
                `}
              >
                {item}
              </Label>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
