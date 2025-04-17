import Image from "next/image"
import Link from "next/link"
import { mockComics } from "@/lib/mock-data"

export function ComicGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
      {mockComics.map((comic) => (
        <Link href={`/comic/${comic.id}`} key={comic.id} className="group">
          <div className="flex flex-col h-full border-2 border-black transition-all group-hover:border-neon-green">
            <div className="relative w-full" style={{ aspectRatio: "51/80" }}>
              <Image
                src={comic.coverImage || "/placeholder.svg"}
                alt={`${comic.title} #${comic.issueNumber} Cover`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                priority={Number.parseInt(comic.id) <= 4}
              />
            </div>
            <div className="p-3 bg-white flex-grow">
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-lg line-clamp-1">{comic.title}</h3>
                {comic.id % 3 === 0 && (
                  <span className="bg-neon-green text-black text-xs font-bold px-1 py-0.5">NEW</span>
                )}
              </div>
              <p className="text-sm mb-1">#{comic.issueNumber}</p>
              <div className="text-xs text-gray-700">
                <p className="line-clamp-1">
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
