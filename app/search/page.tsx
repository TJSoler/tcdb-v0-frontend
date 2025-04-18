import { Pagination } from "@/components/pagination"
import { FilterSidebar } from "@/components/filter-sidebar"
import { ComicGrid } from "@/components/comic-grid"
import { SearchBar } from "@/components/search-bar"
import { Search, SlidersHorizontal, X } from "lucide-react"

export default function SearchPage({
  searchParams,
}: {
  searchParams: { q: string }
}) {
  const query = searchParams.q || ""

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-black mb-2 tracking-tight flex items-center">
        <Search size={32} className="mr-3 text-neon-green" />
        SEARCH RESULTS
      </h1>

      {query && (
        <div className="mb-6 flex items-center">
          <p className="text-xl">
            Showing results for: <span className="text-neon-green font-bold">{query}</span>
          </p>
          <button className="ml-3 text-gray-500 hover:text-neon-green transition-colors">
            <X size={18} />
          </button>
        </div>
      )}

      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/4 md:order-1 order-2">
          <div className="md:sticky md:top-24">
            <FilterSidebar />
          </div>
        </div>

        <div className="w-full md:w-3/4 md:order-2 order-1">
          <div className="mb-6">
            <SearchBar defaultValue={query} />
          </div>

          <div className="bg-white border-2 border-black p-4 mb-6 flex justify-between items-center">
            <div className="flex items-center">
              <SlidersHorizontal size={18} className="mr-2" />
              <span className="font-bold">FILTER & SORT</span>
            </div>

            <div className="flex items-center gap-4">
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

          <div className="mb-8">
            <ComicGrid />
          </div>

          <div className="flex justify-center mt-8">
            <Pagination totalPages={5} initialPage={1} />
          </div>
        </div>
      </div>
    </div>
  )
}
