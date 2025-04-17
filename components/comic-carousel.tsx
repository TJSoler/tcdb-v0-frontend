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
  const maxIndex = Math.max(0, comics.length - 2) // Show 2 comics at a time on mobile
  const carouselRef = useRef<HTMLDivElement>(null)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => Math.min(maxIndex, prevIndex + 1))
  }

  useEffect(() => {
    if (carouselRef.current) {
      const scrollAmount = currentIndex * (carouselRef.current.scrollWidth / comics.length)
      carouselRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      })
    }
  }, [currentIndex, comics.length])

  return (
    <div className="relative">
      <div className="flex items-center">
        <button
          onClick={goToPrevious}
          disabled={currentIndex === 0}
          className={`absolute left-0 z-10 p-1 bg-white border-2 border-black ${
            currentIndex === 0 ? "opacity-50 cursor-not-allowed" : "hover:border-neon-green"
          }`}
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
                <div className="flex flex-col h-full border-2 border-black transition-all group-hover:border-neon-green">
                  <div className="relative w-full" style={{ aspectRatio: "51/80" }}>
                    <Image
                      src={comic.coverImage || "/placeholder.svg"}
                      alt={`${comic.title} #${comic.issueNumber} Cover`}
                      fill
                      className="object-cover"
                      sizes="50vw"
                    />
                  </div>
                  <div className="p-2 bg-white">
                    <h3 className="font-bold text-sm line-clamp-1">{comic.title}</h3>
                    <p className="text-xs">#{comic.issueNumber}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <button
          onClick={goToNext}
          disabled={currentIndex === maxIndex}
          className={`absolute right-0 z-10 p-1 bg-white border-2 border-black ${
            currentIndex === maxIndex ? "opacity-50 cursor-not-allowed" : "hover:border-neon-green"
          }`}
          aria-label="Next"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  )
}
