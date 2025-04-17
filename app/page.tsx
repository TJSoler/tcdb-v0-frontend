import Link from "next/link"
import Image from "next/image"
import { Search } from "lucide-react"
import { mockComics } from "@/lib/mock-data"
import { ComicCarousel } from "@/components/comic-carousel"

export default function HomePage() {
  // Get subsets of comics for different sections
  const newReleases = mockComics.slice(0, 6)
  const popular = [...mockComics].sort((a, b) => Number(b.id) - Number(a.id)).slice(0, 6)
  const trending = [...mockComics].sort(() => 0.5 - Math.random()).slice(0, 6)

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section with Search */}
      <section className="mb-16">
        <div className="relative bg-black py-12 md:py-16 px-4 md:px-8 mb-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-black text-white mb-4">DISCOVER YOUR NEXT FAVORITE COMIC</h1>
            <p className="text-white mb-8 text-lg">Browse thousands of comics from all publishers, genres, and eras</p>
            <div className="flex w-full max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Search by title, creator, or publisher..."
                className="flex-grow border-2 border-r-0 border-white bg-black text-white p-3 focus:outline-none"
              />
              <button type="submit" className="bg-neon-green text-black p-3 flex items-center justify-center">
                <Search size={24} />
              </button>
            </div>
          </div>
          <div className="absolute inset-0 border-4 border-neon-green opacity-75 pointer-events-none"></div>
        </div>
      </section>

      {/* New Releases Section */}
      <section className="mb-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-black">NEW RELEASES</h2>
          <Link href="/listings" className="font-bold hover:text-neon-green transition-colors">
            VIEW ALL
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
      <section className="mb-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-black">POPULAR RELEASES</h2>
          <Link href="/listings" className="font-bold hover:text-neon-green transition-colors">
            VIEW ALL
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
      </section>

      {/* Trending Section */}
      <section className="mb-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-black">TRENDING</h2>
          <Link href="/listings" className="font-bold hover:text-neon-green transition-colors">
            VIEW ALL
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
    </div>
  )
}

// Comic Preview Component
function ComicPreview({ comic }: { comic: any }) {
  return (
    <Link href={`/comic/${comic.id}`} className="group">
      <div className="flex flex-col h-full border-2 border-black transition-all group-hover:border-neon-green">
        <div className="relative w-full" style={{ aspectRatio: "51/80" }}>
          <Image
            src={comic.coverImage || "/placeholder.svg"}
            alt={`${comic.title} #${comic.issueNumber} Cover`}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
          />
        </div>
        <div className="p-2 bg-white">
          <h3 className="font-bold text-sm line-clamp-1">{comic.title}</h3>
          <p className="text-xs">#{comic.issueNumber}</p>
        </div>
      </div>
    </Link>
  )
}
