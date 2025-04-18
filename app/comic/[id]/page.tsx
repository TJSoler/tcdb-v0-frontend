import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, BookOpen, Globe, Tag } from "lucide-react"
import { ComicDetail } from "@/components/comic-detail"
import { mockComics } from "@/lib/mock-data"

export default function ComicDetailPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the comic data based on the ID
  const comic = mockComics.find((c) => c.id === params.id) || mockComics[0]

  // Find related comics (same publisher or genre)
  const relatedComics = mockComics
    .filter(
      (c) => c.id !== comic.id && (c.publisher === comic.publisher || c.genre.some((g) => comic.genre.includes(g))),
    )
    .slice(0, 4)

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb navigation */}
      <nav className="breadcrumb mb-6" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center">
          <li className="breadcrumb-item">
            <Link href="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link href="/listings">Comics</Link>
          </li>
          {comic.publisher && (
            <li className="breadcrumb-item">
              <Link href={`/publishers/${comic.publisher.toLowerCase().replace(/\s+/g, "-")}`}>{comic.publisher}</Link>
            </li>
          )}
          <li className="breadcrumb-item active" aria-current="page">
            {comic.title} #{comic.issueNumber}
          </li>
        </ol>
      </nav>

      <Link
        href="/listings"
        className="inline-flex items-center gap-2 mb-6 font-bold hover:text-neon-green transition-colors group"
      >
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        Back to listings
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="md:col-span-1">
          <div className="sticky top-24">
            <div className="border-4 border-black relative w-full shadow-elevated" style={{ aspectRatio: "51/80" }}>
              <div className="absolute inset-0 border-4 border-neon-green opacity-75"></div>
              <Image
                src={comic.coverImage || "/placeholder.svg"}
                alt={`${comic.title} #${comic.issueNumber} Cover`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="flex flex-col items-center p-3 border-2 border-black bg-white">
                <Calendar size={24} className="mb-1 text-neon-green" />
                <span className="text-sm font-bold">{comic.releaseDate}</span>
              </div>
              <div className="flex flex-col items-center p-3 border-2 border-black bg-white">
                <BookOpen size={24} className="mb-1 text-neon-green" />
                <span className="text-sm font-bold">{comic.format}</span>
              </div>
              <div className="flex flex-col items-center p-3 border-2 border-black bg-white">
                <Globe size={24} className="mb-1 text-neon-green" />
                <span className="text-sm font-bold">{comic.country}</span>
              </div>
              <div className="flex flex-col items-center p-3 border-2 border-black bg-white">
                <Tag size={24} className="mb-1 text-neon-green" />
                <span className="text-sm font-bold">{comic.genre[0]}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-2">
          <ComicDetail comic={comic} />
        </div>
      </div>

      {/* Related Comics Section */}
      {relatedComics.length > 0 && (
        <div className="mt-12 pt-8 border-t-2 border-gray-200">
          <h2 className="text-2xl font-black mb-6">RELATED COMICS</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {relatedComics.map((relatedComic) => (
              <Link href={`/comic/${relatedComic.id}`} key={relatedComic.id} className="group">
                <div className="flex flex-col h-full border-2 border-black bg-white transition-all duration-200 group-hover:border-neon-green group-hover:shadow-card group-hover:translate-y-[-2px]">
                  <div className="relative w-full" style={{ aspectRatio: "51/80" }}>
                    <Image
                      src={relatedComic.coverImage || "/placeholder.svg"}
                      alt={`${relatedComic.title} #${relatedComic.issueNumber} Cover`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-3 bg-white">
                    <h3 className="font-bold text-sm line-clamp-1 group-hover:text-neon-green transition-colors">
                      {relatedComic.title}
                    </h3>
                    <p className="text-xs">#{relatedComic.issueNumber}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
