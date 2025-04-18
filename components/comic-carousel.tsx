"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Comic {
  id: string
  title: string
  issueNumber: string
  coverImage: string
}

export function ComicCarousel({ comics }: { comics: Comic[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const maxIndex = Math.max(0, comics.length - 2) // Show 2 comics at a time on mobile
  const carouselRef = useRef<HTMLDivElement>(null)

  const goToPrevious = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1))
  }

  const goToNext = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => Math.min(maxIndex, prevIndex + 1))
  }

  useEffect(() => {
    if (carouselRef.current) {
      const scrollAmount = currentIndex * (carouselRef.current.scrollWidth / comics.length)
      carouselRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      })

      // Reset animation flag after transition
      const timer = setTimeout(() => {
        setIsAnimating(false)
      }, 300)

      return () => clearTimeout(timer)
    }
  }, [currentIndex, comics.length])

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < maxIndex) {
        setCurrentIndex((prev) => prev + 1)
      } else {
        setCurrentIndex(0)
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [currentIndex, maxIndex])

  return (
    <div className="relative">
      <div className="flex items-center">
        <button
          onClick={goToPrevious}
          disabled={currentIndex === 0 || isAnimating}
          className={`
            absolute left-0 z-10 p-2 bg-white border-2 border-black
            ${currentIndex === 0 || isAnimating ? "opacity-50 cursor-not-allowed" : "hover:border-neon-green hover:text-neon-green"}
            transition-colors
          `}
          aria-label="Previous"
        >
          <ChevronLeft size={20} />
        </button>

        <div
          ref={carouselRef}
          className="flex overflow-x-scroll scrollbar-hide gap-4 py-2 px-8"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {comics.map((comic) => (
            <div key={comic.id} className="flex-shrink-0 w-[calc(50%-8px)]">
              <Link href={`/comic/${comic.id}`} className="group">
                <div className="flex flex-col h-full border-2 border-black transition-all group-hover:border-neon-green group-hover:shadow-card">
                  <div className="relative w-full" style={{ aspectRatio: "51/80" }}>
                    <Image
                      src={comic.coverImage || "/placeholder.svg"}
                      alt={`${comic.title} #${comic.issueNumber} Cover`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      sizes="50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-3 bg-white">
                    <h3 className="font-bold text-sm line-clamp-1 group-hover:text-neon-green transition-colors">
                      {comic.title}
                    </h3>
                    <p className="text-xs text-gray-600">#{comic.issueNumber}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <button
          onClick={goToNext}
          disabled={currentIndex === maxIndex || isAnimating}
          className={`
            absolute right-0 z-10 p-2 bg-white border-2 border-black
            ${currentIndex === maxIndex || isAnimating ? "opacity-50 cursor-not-allowed" : "hover:border-neon-green hover:text-neon-green"}
            transition-colors
          `}
          aria-label="Next"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Pagination indicators */}
      <div className="flex justify-center mt-4 gap-2">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`
              w-2 h-2 rounded-full transition-all
              ${currentIndex === index ? "bg-neon-green w-4" : "bg-gray-300 hover:bg-gray-400"}
            `}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={currentIndex === index ? "true" : "false"}
          />
        ))}
      </div>
    </div>
  )
}
