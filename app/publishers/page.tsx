import Link from "next/link"
import Image from "next/image"
import { Building2, Search } from "lucide-react"
import { mockPublishers } from "@/lib/mock-publisher-data"

export default function PublishersPage() {
  const publishers = Object.values(mockPublishers)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-black mb-2 tracking-tight flex items-center">
        <Building2 size={32} className="mr-3 text-neon-green" /> PUBLISHERS
      </h1>

      <p className="text-lg mb-8 max-w-3xl">
        Explore comic book publishers from around the world, from major companies to independent presses.
      </p>

      {/* Search bar */}
      <div className="mb-12 max-w-xl">
        <div className="relative">
          <input
            type="text"
            placeholder="Search publishers..."
            className="w-full border-2 border-black p-3 pl-12 focus:outline-none focus:border-neon-green transition-colors"
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
        </div>
      </div>

      {/* Publishers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {publishers.map((publisher) => (
          <Link href={`/publishers/${publisher.slug}`} key={publisher.id} className="group">
            <div className="border-2 border-black bg-white transition-all duration-200 group-hover:border-neon-green group-hover:shadow-card group-hover:translate-y-[-2px] h-full flex flex-col">
              <div className="p-6 border-b-2 border-black flex items-center justify-center h-40">
                <div className="relative w-full h-full">
                  <Image
                    src={publisher.logo || "/placeholder.svg"}
                    alt={`${publisher.name} logo`}
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </div>
              <div className="p-4 flex-grow flex flex-col">
                <h2 className="text-xl font-bold mb-2 group-hover:text-neon-green transition-colors">
                  {publisher.name}
                </h2>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3 flex-grow">{publisher.description}</p>
                <div className="flex justify-between text-sm">
                  <span>Founded: {publisher.founded}</span>
                  <span className="font-bold text-neon-green">{publisher.featuredSeries.length} series</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Independent Publishers Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-black mb-6 border-b-2 border-black pb-2">INDEPENDENT PUBLISHERS</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[
            "Image Comics",
            "Dark Horse",
            "IDW",
            "BOOM! Studios",
            "Valiant",
            "Dynamite",
            "Oni Press",
            "Archie Comics",
          ].map((name) => (
            <Link
              href="#"
              key={name}
              className="border-2 border-black bg-white p-4 text-center font-bold hover:border-neon-green hover:text-neon-green transition-colors"
            >
              {name}
            </Link>
          ))}
        </div>
      </div>

      {/* International Publishers Section */}
      <div>
        <h2 className="text-2xl font-black mb-6 border-b-2 border-black pb-2">INTERNATIONAL PUBLISHERS</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {["Viz Media", "Kodansha", "Shueisha", "Glenat", "Panini Comics", "Titan Comics", "2000 AD", "Cinebook"].map(
            (name) => (
              <Link
                href="#"
                key={name}
                className="border-2 border-black bg-white p-4 text-center font-bold hover:border-neon-green hover:text-neon-green transition-colors"
              >
                {name}
              </Link>
            ),
          )}
        </div>
      </div>
    </div>
  )
}
