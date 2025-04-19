import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Globe, Calendar, MapPin, ChevronRight, SlidersHorizontal } from "lucide-react"
import { Pagination } from "@/components/pagination"
import { mockPublishers } from "@/lib/mock-publisher-data"
import { mockComics } from "@/lib/mock-data"

export default function PublisherPage({ params }: { params: { slug: string } }) {
  // Get publisher data
  const publisher = mockPublishers[params.slug] || mockPublishers["marvel"]

  // Filter comics by this publisher
  const publisherComics = mockComics.filter((comic) => comic.publisher.toLowerCase() === publisher.name.toLowerCase())

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb navigation */}
      <nav className="breadcrumb mb-6" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center">
          <li className="breadcrumb-item">
            <Link href="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link href="/publishers">Publishers</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {publisher.name}
          </li>
        </ol>
      </nav>

      <Link
        href="/publishers"
        className="inline-flex items-center gap-2 mb-6 font-bold hover:text-neon-green transition-colors group"
      >
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        Back to publishers
      </Link>

      {/* Publisher Header */}
      <div className="bg-white border-2 border-black p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-1">
            <div className="relative w-full h-32 md:h-40 border-2 border-black bg-white flex items-center justify-center p-4">
              <Image
                src={publisher.logo || "/placeholder.svg"}
                alt={`${publisher.name} logo`}
                fill
                className="object-contain p-4"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
            </div>
          </div>

          <div className="md:col-span-2">
            <h1 className="text-4xl font-black mb-2">{publisher.name}</h1>
            <div className="h-1 w-full bg-gradient-to-r from-neon-green to-neon-yellow mb-4"></div>
            <p className="mb-4">{publisher.description}</p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center">
                <Calendar size={20} className="mr-2 text-neon-green" />
                <div>
                  <span className="text-sm text-gray-600">Founded</span>
                  <p className="font-bold">{publisher.founded}</p>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin size={20} className="mr-2 text-neon-green" />
                <div>
                  <span className="text-sm text-gray-600">Headquarters</span>
                  <p className="font-bold">{publisher.headquarters}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Globe size={20} className="mr-2 text-neon-green" />
                <div>
                  <span className="text-sm text-gray-600">Website</span>
                  <a
                    href={publisher.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-neon-green hover:underline"
                  >
                    Visit Site
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Series */}
      <div className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-black">FEATURED SERIES</h2>
          <Link
            href={`/publishers/${publisher.slug}/series`}
            className="font-bold hover:text-neon-green transition-colors flex items-center group"
          >
            VIEW ALL <ChevronRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {publisher.featuredSeries.map((series) => (
            <Link href={`/series/${series.id}`} key={series.id} className="group">
              <div className="border-2 border-black bg-white transition-all duration-200 group-hover:border-neon-green group-hover:shadow-card group-hover:translate-y-[-2px]">
                <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
                  <Image
                    src={series.coverImage || "/placeholder.svg"}
                    alt={series.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/70"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white text-xl font-bold">{series.title}</h3>
                    <p className="text-white text-sm">{series.issueCount} issues</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Comics List */}
      <div className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-black">LATEST COMICS</h2>
          <div className="flex items-center">
            <button className="flex items-center gap-2 border-2 border-black p-2 font-bold hover:border-neon-green hover:text-neon-green transition-colors">
              <SlidersHorizontal size={18} />
              <span className="hidden sm:inline">FILTER & SORT</span>
            </button>
          </div>
        </div>

        <div className="bg-white border-2 border-black p-4 mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <p className="font-bold">
              Showing <span className="text-neon-green">{publisherComics.length}</span> comics from{" "}
              <span className="text-neon-green">{publisher.name}</span>
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <span className="font-bold">Sort by:</span>
              <select className="border-2 border-black p-2 bg-white focus:border-neon-green transition-colors">
                <option>Newest First</option>
                <option>Oldest First</option>
                <option>A-Z</option>
                <option>Z-A</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-bold">Show:</span>
              <select className="border-2 border-black p-2 bg-white focus:border-neon-green transition-colors">
                <option>24</option>
                <option>48</option>
                <option>96</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
          {publisherComics.map((comic) => (
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
                <div className="p-3 bg-white flex-grow flex flex-col">
                  <h3 className="font-bold text-sm line-clamp-1 group-hover:text-neon-green transition-colors">
                    {comic.title}
                  </h3>
                  <p className="text-xs text-gray-600">#{comic.issueNumber}</p>
                  <p className="text-xs text-gray-600 mt-auto">{comic.releaseDate}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center">
          <Pagination totalPages={3} initialPage={1} />
        </div>
      </div>

      {/* Popular Creators */}
      <div className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-black">POPULAR CREATORS</h2>
          <Link
            href={`/publishers/${publisher.slug}/creators`}
            className="font-bold hover:text-neon-green transition-colors flex items-center group"
          >
            VIEW ALL <ChevronRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {publisher.popularCreators.map((creator) => (
            <Link href={`/credits/${creator.id}`} key={creator.id} className="group">
              <div className="border-2 border-black bg-white p-4 transition-all duration-200 group-hover:border-neon-green group-hover:shadow-card group-hover:translate-y-[-2px] flex items-center gap-4">
                <div className="relative w-16 h-16 border-2 border-black flex-shrink-0">
                  <Image
                    src={creator.avatar || "/placeholder.svg"}
                    alt={creator.name}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <div>
                  <h3 className="font-bold group-hover:text-neon-green transition-colors">{creator.name}</h3>
                  <p className="text-sm text-gray-600">{creator.role}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
