"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface PaginationProps {
  totalPages?: number
  initialPage?: number
  onPageChange?: (page: number) => void
}

export function Pagination({ totalPages = 10, initialPage = 1, onPageChange }: PaginationProps) {
  const [currentPage, setCurrentPage] = useState(initialPage)

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return

    setCurrentPage(page)
    onPageChange?.(page)

    // Scroll to top on page change
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Calculate visible page range
  const getVisiblePages = () => {
    const delta = 2 // Number of pages to show before and after current page
    const range = []

    // Always show first page
    range.push(1)

    // Calculate start and end of range
    const rangeStart = Math.max(2, currentPage - delta)
    const rangeEnd = Math.min(totalPages - 1, currentPage + delta)

    // Add ellipsis after first page if needed
    if (rangeStart > 2) {
      range.push("ellipsis1")
    }

    // Add pages in range
    for (let i = rangeStart; i <= rangeEnd; i++) {
      range.push(i)
    }

    // Add ellipsis before last page if needed
    if (rangeEnd < totalPages - 1) {
      range.push("ellipsis2")
    }

    // Always show last page if more than 1 page
    if (totalPages > 1) {
      range.push(totalPages)
    }

    return range
  }

  const visiblePages = getVisiblePages()

  return (
    <nav className="flex items-center space-x-1" aria-label="Pagination">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`
          p-2 border-2 border-black flex items-center justify-center
          ${
            currentPage === 1
              ? "opacity-50 cursor-not-allowed"
              : "hover:border-neon-green hover:text-neon-green transition-colors"
          }
        `}
        aria-label="Previous page"
      >
        <ChevronLeft size={16} />
      </button>

      <div className="flex items-center space-x-1">
        {visiblePages.map((page, index) => {
          if (page === "ellipsis1" || page === "ellipsis2") {
            return (
              <span key={`ellipsis-${index}`} className="w-10 h-10 flex items-center justify-center text-gray-500">
                …
              </span>
            )
          }

          return (
            <button
              key={page}
              onClick={() => handlePageChange(page as number)}
              className={`
                w-10 h-10 flex items-center justify-center font-bold border-2
                ${
                  currentPage === page
                    ? "bg-neon-green text-black border-neon-green"
                    : "border-black hover:border-neon-green hover:text-neon-green transition-colors"
                }
              `}
              aria-label={`Page ${page}`}
              aria-current={currentPage === page ? "page" : undefined}
            >
              {page}
            </button>
          )
        })}
      </div>

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`
          p-2 border-2 border-black flex items-center justify-center
          ${
            currentPage === totalPages
              ? "opacity-50 cursor-not-allowed"
              : "hover:border-neon-green hover:text-neon-green transition-colors"
          }
        `}
        aria-label="Next page"
      >
        <ChevronRight size={16} />
      </button>
    </nav>
  )
}
