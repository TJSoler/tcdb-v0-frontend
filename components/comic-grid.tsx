import Image from "next/image"
import Link from "next/link"
import { mockComics } from "@/lib/mock-data"

export function ComicGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
      {mockComics.map((comic) => (
        <Link href={`/comic/${comic.id}`} key={comic.id} className="group">
          <div className="flex flex-col h-full border-2 border-black bg-white transition-all duration-200 group-hover:border-neon-green group-hover:shadow-card group-hover:translate-y-[-2px] group-focus-visible:border-neon-green">
            <div className="relative w-full" style={{ aspectRatio: "51/80" }}>
              <Image
                src={comic.coverImage || "/placeholder.svg"}
                alt={`${comic.title} #${comic.issueNumber} Cover`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                priority={Number.parseInt(comic.id) <= 4}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Move NEW tag to top right corner */}
              {comic.id % 3 === 0 && (
                <span className="absolute top-2 right-2 bg-neon-green text-black text-xs font-bold px-2 py-0.5 z-10">
                  NEW
                </span>
              )}
            </div>
            <div className="p-4 bg-white flex-grow flex flex-col">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-bold text-lg line-clamp-1 group-hover:text-neon-green transition-colors">
                  {comic.title}
                </h3>
                {/* Removed NEW tag from here */}
              </div>
              <p className="text-sm mb-2 text-gray-700">#{comic.issueNumber}</p>
              <div className="text-xs text-gray-600 mt-auto">
                <p className="line-clamp-1 mb-0.5">
                  <span className="font-semibold">W:</span> {comic.credits.writer}
                </p>
                <p className="line-clamp-1">
                  <span className="font-semibold">A:</span> {comic.credits.artist}
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
