import Link from "next/link"
import Image from "next/image"
import { Users, Search, ChevronRight } from "lucide-react"

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
      <h1 className="text-4xl font-black mb-2 tracking-tight flex items-center">
        <Users size={32} className="mr-3 text-neon-green" /> CREDITS
      </h1>

      <p className="text-lg mb-8 max-w-3xl">
        Explore the talented creators behind your favorite comics. Browse by role or search for specific creators.
      </p>

      {/* Search bar */}
      <div className="mb-12 max-w-xl">
        <div className="relative">
          <input
            type="text"
            placeholder="Search creators..."
            className="w-full border-2 border-black dark:border-black p-3 pl-12 focus:outline-none focus:border-neon-green transition-colors dark:bg-black dark:text-white dark:placeholder:text-gray-400"
          />
          <Search
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400"
            size={20}
          />
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 border-b-2 border-black pb-2">FEATURED CREATORS</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {creators.map((creator) => (
            <Link key={creator.id} href={`/credits/${creator.slug}`} className="group">
              <div className="border-2 border-black dark:border-black bg-white dark:bg-gray-800 transition-all duration-200 group-hover:border-neon-green group-hover:shadow-card group-hover:translate-y-[-2px] h-full flex flex-col">
                <div className="relative w-full aspect-square">
                  <Image
                    src={creator.photo || "/placeholder.svg"}
                    alt={creator.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-4 flex-grow flex flex-col">
                  <h3 className="font-bold text-lg group-hover:text-neon-green transition-colors">{creator.name}</h3>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {creator.roles.map((role) => (
                      <span
                        key={role}
                        className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-black text-xs px-2 py-1 rounded"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Writers */}
        <div className="border-2 border-black dark:border-black p-6 bg-white dark:bg-gray-800 shadow-subtle">
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
              <li key={writer} className="hover:text-neon-green transition-colors">
                <a href="#" className="block py-1 flex items-center">
                  <span className="w-1 h-1 bg-black mr-2"></span>
                  {writer}
                </a>
              </li>
            ))}
            <li className="mt-4">
              <a href="#" className="font-bold hover:text-neon-green transition-colors flex items-center group">
                View All Writers
                <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </a>
            </li>
          </ul>
        </div>

        {/* Artists */}
        <div className="border-2 border-black dark:border-black p-6 bg-white dark:bg-gray-800 shadow-subtle">
          <h2 className="text-2xl font-bold mb-4 border-b-2 border-black pb-2">ARTISTS</h2>
          <ul className="space-y-2">
            {["Ryan Ottley", "Mark Bagley", "Gurihiru", "Werther Dell'Edera", "Sana Takeda", "Riley Rossmo"].map(
              (artist) => (
                <li key={artist} className="hover:text-neon-green transition-colors">
                  <a href="#" className="block py-1 flex items-center">
                    <span className="w-1 h-1 bg-black mr-2"></span>
                    {artist}
                  </a>
                </li>
              ),
            )}
            <li className="mt-4">
              <a href="#" className="font-bold hover:text-neon-green transition-colors flex items-center group">
                View All Artists
                <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </a>
            </li>
          </ul>
        </div>

        {/* Publishers */}
        <div className="border-2 border-black dark:border-black p-6 bg-white dark:bg-gray-800 shadow-subtle">
          <h2 className="text-2xl font-bold mb-4 border-b-2 border-black pb-2">PUBLISHERS</h2>
          <ul className="space-y-2">
            {["Marvel", "DC Comics", "Image Comics", "BOOM! Studios", "Viz Media", "Dark Horse"].map((publisher) => (
              <li key={publisher} className="hover:text-neon-green transition-colors">
                <a href="#" className="block py-1 flex items-center">
                  <span className="w-1 h-1 bg-black mr-2"></span>
                  {publisher}
                </a>
              </li>
            ))}
            <li className="mt-4">
              <a href="#" className="font-bold hover:text-neon-green transition-colors flex items-center group">
                View All Publishers
                <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
