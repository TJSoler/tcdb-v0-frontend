import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Edit, Trash2, Lock, Globe, Grid, List } from "lucide-react"

export default function CollectionPage({ params }: { params: { id: string } }) {
  // Mock collection data
  const collection = {
    id: params.id,
    name: "Marvel Collection",
    description: "My collection of Marvel comics, focusing on Spider-Man and X-Men series.",
    isPublic: true,
    comicCount: 42,
    lastUpdated: "2 days ago",
    comics: [
      {
        id: "1",
        title: "Spider-Man",
        issueNumber: "1",
        coverImage: "/images/cover2.jpg",
        publisher: "Marvel",
        releaseDate: "April 16, 2025",
      },
      {
        id: "3",
        title: "Gwenpool",
        issueNumber: "25",
        coverImage: "/images/cover3.jpg",
        publisher: "Marvel",
        releaseDate: "April 16, 2025",
      },
      {
        id: "4",
        title: "Harley Quinn",
        issueNumber: "75",
        coverImage: "/images/cover4.jpg",
        publisher: "DC Comics",
        releaseDate: "April 16, 2025",
      },
      {
        id: "5",
        title: "Gwenpool Strikes Back",
        issueNumber: "3",
        coverImage: "/images/cover5.jpg",
        publisher: "Marvel",
        releaseDate: "April 16, 2025",
      },
    ],
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <Link
          href="/profile"
          className="inline-flex items-center gap-2 mb-6 font-bold hover:text-neon-green transition-colors group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to profile
        </Link>

        <div className="bg-white border-2 border-black p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 border-b-2 border-black pb-4">
            <div>
              <h1 className="text-3xl font-black">{collection.name}</h1>
              <div className="flex items-center gap-2 mt-1">
                {collection.isPublic ? (
                  <div className="flex items-center text-sm text-gray-600">
                    <Globe size={16} className="mr-1" /> Public
                  </div>
                ) : (
                  <div className="flex items-center text-sm text-gray-600">
                    <Lock size={16} className="mr-1" /> Private
                  </div>
                )}
                <span className="text-sm text-gray-600">•</span>
                <span className="text-sm text-gray-600">{collection.comicCount} comics</span>
                <span className="text-sm text-gray-600">•</span>
                <span className="text-sm text-gray-600">Updated {collection.lastUpdated}</span>
              </div>
            </div>

            <div className="flex gap-2">
              <Link
                href={`/profile/collections/${collection.id}/edit`}
                className="flex items-center gap-2 border-2 border-black px-4 py-2 font-bold hover:border-neon-green hover:text-neon-green transition-colors"
              >
                <Edit size={18} />
                Edit
              </Link>
              <button className="flex items-center gap-2 border-2 border-black px-4 py-2 font-bold hover:border-red-500 hover:text-red-500 transition-colors">
                <Trash2 size={18} />
                Delete
              </button>
            </div>
          </div>

          {collection.description && <p className="mb-6">{collection.description}</p>}

          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Comics in this collection</h2>
            <div className="flex items-center gap-2">
              <button className="p-2 border-2 border-black bg-black text-white" aria-label="Grid view">
                <Grid size={18} />
              </button>
              <button className="p-2 border-2 border-black" aria-label="List view">
                <List size={18} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {collection.comics.map((comic) => (
              <Link href={`/comic/${comic.id}`} key={comic.id} className="group">
                <div className="flex flex-col h-full border-2 border-black bg-white transition-all duration-200 group-hover:border-neon-green group-hover:shadow-card group-hover:translate-y-[-2px]">
                  <div className="relative w-full" style={{ aspectRatio: "51/80" }}>
                    <Image
                      src={comic.coverImage || "/placeholder.svg"}
                      alt={`${comic.title} #${comic.issueNumber} Cover`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
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
            ))}
          </div>

          <div className="mt-8 pt-4 border-t-2 border-gray-200 flex justify-center">
            <Link
              href={`/profile/collections/${collection.id}/add`}
              className="bg-black text-neon-green border-2 border-neon-green px-6 py-2 font-bold hover:bg-neon-green hover:text-black transition-colors"
            >
              ADD COMICS TO COLLECTION
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
