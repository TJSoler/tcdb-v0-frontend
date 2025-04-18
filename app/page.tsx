import Link from "next/link"
import Image from "next/image"
import { Search, TrendingUp, Clock, Star, ChevronRight } from "lucide-react"
import { mockComics } from "@/lib/mock-data"
import { ComicCarousel } from "@/components/comic-carousel"

export default function HomePage() {
  // Get subsets of comics for different sections
  const newReleases = mockComics.slice(0, 6)
  const popular = [...mockComics].sort((a, b) => Number(b.id) - Number(a.id)).slice(0, 6)
  const trending = [...mockComics].sort(() => 0.5 - Math.random()).slice(0, 6)

  return (
    <div>
      {/* Hero Section with Search */}
      <section className="bg-black py-16 md:py-24 mb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              DISCOVER YOUR NEXT <span className="text-neon-green">FAVORITE COMIC</span>
            </h1>
            <p className="text-white mb-8 text-lg md:text-xl">
              Browse thousands of comics from all publishers, genres, and eras
            </p>
            <div className="flex w-full max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Search by title, creator, or publisher..."
                className="flex-grow border-2 border-r-0 border-white bg-black text-white p-4 focus:outline-none focus:border-neon-green transition-colors"
              />
              <button
                type="submit"
                className="bg-neon-green text-black p-4 flex items-center justify-center hover:bg-white transition-colors"
                aria-label="Search"
              >
                <Search size={24} />
              </button>
            </div>
          </div>
          <div className="absolute inset-0 border-4 border-neon-green opacity-75 pointer-events-none"></div>
        </div>
      </section>

      {/* New Releases Section */}
      <section className="container mx-auto px-4 mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-black flex items-center">
            <Clock size={28} className="mr-3 text-neon-green" /> NEW RELEASES
          </h2>
          <Link href="/listings" className="font-bold hover:text-neon-green transition-colors flex items-center group">
            VIEW ALL <ChevronRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <div className="md:hidden">
          <ComicCarousel comics={newReleases} />
        </div>
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-6 gap-6">
          {newReleases.map((comic) => (
            <ComicPreview key={comic.id} comic={comic} />
          ))}
        </div>
      </section>

      {/* Popular Releases Section */}
      <section className="bg-gray-100 py-12 mb-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-black flex items-center">
              <Star size={28} className="mr-3 text-neon-green" /> POPULAR RELEASES
            </h2>
            <Link
              href="/listings"
              className="font-bold hover:text-neon-green transition-colors flex items-center group"
            >
              VIEW ALL <ChevronRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="md:hidden">
            <ComicCarousel comics={popular} />
          </div>
          <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {popular.map((comic) => (
              <ComicPreview key={comic.id} comic={comic} />
            ))}
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="container mx-auto px-4 mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-black flex items-center">
            <TrendingUp size={28} className="mr-3 text-neon-green" /> TRENDING
          </h2>
          <Link href="/listings" className="font-bold hover:text-neon-green transition-colors flex items-center group">
            VIEW ALL <ChevronRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <div className="md:hidden">
          <ComicCarousel comics={trending} />
        </div>
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-6 gap-6">
          {trending.map((comic) => (
            <ComicPreview key={comic.id} comic={comic} />
          ))}
        </div>
      </section>

      {/* Featured Publishers */}
      <section className="bg-black py-12 mb-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-black text-white mb-8">FEATURED PUBLISHERS</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {["Marvel", "DC Comics", "Image", "Dark Horse", "IDW", "BOOM!"].map((publisher) => (
              <Link
                key={publisher}
                href={`/publishers/${publisher.toLowerCase().replace(/\s+/g, "-")}`}
                className="bg-white border-2 border-neon-green p-4 flex items-center justify-center h-24 font-bold text-lg hover:bg-neon-green hover:text-black transition-colors"
              >
                {publisher}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

// Comic Preview Component
function ComicPreview({ comic }: { comic: any }) {
  return (
    <Link href={`/comic/${comic.id}`} className="group">
      <div className="flex flex-col h-full border-2 border-black bg-white transition-all duration-200 group-hover:border-neon-green group-hover:shadow-card group-hover:translate-y-[-2px]">
        <div className="relative w-full" style={{ aspectRatio: "51/80" }}>
          <Image
            src={comic.coverImage || "/placeholder.svg"}
            alt={`${comic.title} #${comic.issueNumber} Cover`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
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
  )
}
