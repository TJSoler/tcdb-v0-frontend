"use client"

import { useState } from "react"
import { ProjectCard } from "@/components/credits/project-card"
import type { Creator } from "@/lib/mock-creator-data"

interface CreditsTabsProps {
  creator: Creator
}

export function CreditsTabs({ creator }: CreditsTabsProps) {
  const [activeTab, setActiveTab] = useState<string>(Object.keys(creator.credits)[0])

  // Get all unique categories from the creator's credits
  const categories = Object.keys(creator.credits)

  return (
    <div>
      <div className="border-b-2 border-black mb-8">
        <div className="flex flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`py-3 px-6 font-bold text-lg transition-colors ${
                activeTab === category
                  ? "bg-black text-neon-green border-t-2 border-l-2 border-r-2 border-neon-green"
                  : "bg-white hover:text-neon-green border-t-2 border-l-2 border-r-2 border-black"
              }`}
              aria-selected={activeTab === category}
              role="tab"
            >
              {category.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-black mb-6 tracking-tight">
          {activeTab.toUpperCase()} CREDITS ({creator.credits[activeTab].length})
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {creator.credits[activeTab].map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}
