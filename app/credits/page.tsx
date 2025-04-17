import Link from "next/link"
import Image from "next/image"

interface Creator {
  id: string
  name: string
  slug: string
  roles: string[]
  photo: string
}

// Mock data for creators
const creators: Creator[] = [
  {
    id: "1",
    name: "Jane Smith",
    slug: "jane-smith",
    roles: ["Writer", "Artist", "Editor"],
    photo: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "2",
    name: "John Doe",
    slug: "john-doe",
    roles: ["Writer", "Penciller"],
    photo: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "3",
    name: "Alex Johnson",
    slug: "alex-johnson",
    roles: ["Colorist", "Letterer"],
    photo: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "4",
    name: "Sam Wilson",
    slug: "sam-wilson",
    roles: ["Writer", "Artist"],
    photo: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "5",
    name: "Maria Garcia",
    slug: "maria-garcia",
    roles: ["Inker", "Colorist"],
    photo: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "6",
    name: "David Kim",
    slug: "david-kim",
    roles: ["Writer", "Editor"],
    photo: "/placeholder.svg?height=400&width=400",
  },
]

export default function CreditsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-black mb-6 tracking-tight">CREDITS</h1>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 border-b-2 border-black pb-2">FEATURED CREATORS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {creators.map((creator) => (
            <Link
              key={creator.id}
              href={`/credits/${creator.slug}`}
              className="group border-2 border-black bg-white transition-all hover:border-neon-green"
            >
              <div className="relative w-full aspect-square">
                <Image
                  src={creator.photo || "/placeholder.svg"}
                  alt={creator.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                />
              </div>
              <div className="p-3">
                <h3 className="font-bold text-lg group-hover:text-neon-green transition-colors">{creator.name}</h3>
                <p className="text-sm text-gray-700">{creator.roles.join(", ")}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Writers */}
        <div className="border-2 border-black p-6">
          <h2 className="text-2xl font-bold mb-4 border-b-2 border-black pb-2">WRITERS</h2>
          <ul className="space-y-2">
            {[
              "Robert Kirkman",
              "Chip Zdarsky",
              "Leah Williams",
              "James Tynion IV",
              "Yukinobu Tatsu",
              "Stephanie Phillips",
            ].map((writer) => (
              <li key={writer} className="hover:text-neon-green">
                <a href="#" className="block py-1">
                  {writer}
                </a>
              </li>
            ))}
            <li className="mt-4">
              <a href="#" className="font-bold hover:text-neon-green">
                View All Writers →
              </a>
            </li>
          </ul>
        </div>

        {/* Artists */}
        <div className="border-2 border-black p-6">
          <h2 className="text-2xl font-bold mb-4 border-b-2 border-black pb-2">ARTISTS</h2>
          <ul className="space-y-2">
            {["Ryan Ottley", "Mark Bagley", "Gurihiru", "Werther Dell'Edera", "Sana Takeda", "Riley Rossmo"].map(
              (artist) => (
                <li key={artist} className="hover:text-neon-green">
                  <a href="#" className="block py-1">
                    {artist}
                  </a>
                </li>
              ),
            )}
            <li className="mt-4">
              <a href="#" className="font-bold hover:text-neon-green">
                View All Artists →
              </a>
            </li>
          </ul>
        </div>

        {/* Publishers */}
        <div className="border-2 border-black p-6">
          <h2 className="text-2xl font-bold mb-4 border-b-2 border-black pb-2">PUBLISHERS</h2>
          <ul className="space-y-2">
            {["Marvel", "DC Comics", "Image Comics", "BOOM! Studios", "Viz Media", "Dark Horse"].map((publisher) => (
              <li key={publisher} className="hover:text-neon-green">
                <a href="#" className="block py-1">
                  {publisher}
                </a>
              </li>
            ))}
            <li className="mt-4">
              <a href="#" className="font-bold hover:text-neon-green">
                View All Publishers →
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
