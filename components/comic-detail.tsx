import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Star, Heart, Share2, BookOpen } from "lucide-react"

interface Credit {
  role: string
  name: string
}

interface Comic {
  id: string
  title: string
  issueNumber: string
  releaseDate: string
  publisher: string
  credits: {
    writer: string
    artist: string
    inker?: string
    colorist?: string
    letterer?: string
    editor?: string
    [key: string]: string | undefined
  }
  genre: string[]
  format: string
  country: string
  synopsis: string
  coverImage: string
}

export function ComicDetail({ comic }: { comic: Comic }) {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-black mb-1 leading-tight">{comic.title}</h1>
        <h2 className="text-2xl font-bold text-gray-700">#{comic.issueNumber}</h2>
      </div>

      <div className="flex flex-wrap gap-3">
        {comic.genre.map((genre) => (
          <Badge
            key={genre}
            className="bg-neon-green text-black rounded-none px-3 py-1 text-sm font-bold hover:bg-black hover:text-neon-green transition-colors cursor-pointer"
          >
            {genre}
          </Badge>
        ))}
      </div>

      <div className="flex flex-wrap gap-3">
        <button className="flex items-center gap-2 bg-black text-neon-green px-4 py-2 font-bold hover:bg-neon-green hover:text-black transition-colors">
          <Heart size={18} /> ADD TO COLLECTION
        </button>
        <button className="flex items-center gap-2 border-2 border-black px-4 py-2 font-bold hover:border-neon-green hover:text-neon-green transition-colors">
          <BookOpen size={18} /> READ PREVIEW
        </button>
        <button className="flex items-center gap-2 border-2 border-black px-4 py-2 font-bold hover:border-neon-green hover:text-neon-green transition-colors">
          <Share2 size={18} /> SHARE
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold border-b-2 border-black mb-4 pb-1 flex items-center">
              <Star size={18} className="mr-2 text-neon-green" /> DETAILS
            </h3>
            <ul className="space-y-3">
              <li className="flex">
                <span className="font-bold w-28">Publisher:</span>
                <span className="flex-1">{comic.publisher}</span>
              </li>
              <li className="flex">
                <span className="font-bold w-28">Release Date:</span>
                <span className="flex-1">{comic.releaseDate}</span>
              </li>
              <li className="flex">
                <span className="font-bold w-28">Format:</span>
                <span className="flex-1">{comic.format}</span>
              </li>
              <li className="flex">
                <span className="font-bold w-28">Country:</span>
                <span className="flex-1">{comic.country}</span>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold border-b-2 border-black mb-4 pb-1">CREDITS</h3>
          <ul className="space-y-3">
            {Object.entries(comic.credits).map(([role, name]) => (
              <li key={role} className="flex">
                <span className="font-bold capitalize w-28">{role}:</span>
                <Link
                  href={`/credits/${name.toLowerCase().replace(/\s+/g, "-")}`}
                  className="flex-1 hover:text-neon-green transition-colors"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold border-b-2 border-black mb-4 pb-1">SYNOPSIS</h3>
        <p className="leading-relaxed text-lg">{comic.synopsis}</p>
      </div>
    </div>
  )
}
