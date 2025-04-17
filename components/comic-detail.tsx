import { Badge } from "@/components/ui/badge"

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
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-black">{comic.title}</h1>
        <h2 className="text-xl font-bold">#{comic.issueNumber}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-bold border-b-2 border-black mb-2 pb-1">DETAILS</h3>
            <ul className="space-y-2">
              <li>
                <span className="font-bold">Publisher:</span> {comic.publisher}
              </li>
              <li>
                <span className="font-bold">Release Date:</span> {comic.releaseDate}
              </li>
              <li>
                <span className="font-bold">Format:</span> {comic.format}
              </li>
              <li>
                <span className="font-bold">Country:</span> {comic.country}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold border-b-2 border-black mb-2 pb-1">GENRES</h3>
            <div className="flex flex-wrap gap-2">
              {comic.genre.map((genre) => (
                <Badge key={genre} className="bg-neon-green text-black rounded-none px-2 py-1">
                  {genre}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold border-b-2 border-black mb-2 pb-1">CREDITS</h3>
          <ul className="space-y-2">
            {Object.entries(comic.credits).map(([role, name]) => (
              <li key={role}>
                <span className="font-bold capitalize">{role}:</span> {name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold border-b-2 border-black mb-2 pb-1">SYNOPSIS</h3>
        <p className="leading-relaxed">{comic.synopsis}</p>
      </div>
    </div>
  )
}
