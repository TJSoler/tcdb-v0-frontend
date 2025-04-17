import { Pagination } from "@/components/pagination"
import { FilterSidebar } from "@/components/filter-sidebar"
import { ComicGrid } from "@/components/comic-grid"
import { SearchBar } from "@/components/search-bar"

export default function DiscoverPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-black mb-6 tracking-tight">DISCOVER COMICS</h1>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/4">
          <FilterSidebar />
        </div>

        <div className="w-full md:w-3/4">
          <div className="mb-6">
            <SearchBar />
          </div>

          <div className="flex justify-between items-center mb-6">
            <Pagination />
            <div className="flex items-center gap-2">
              <span className="font-bold">Show:</span>
              <select className="border-2 border-neon-green p-2 bg-white focus:outline-none">
                <option>24</option>
                <option>48</option>
                <option>96</option>
              </select>
            </div>
          </div>

          <ComicGrid />
        </div>
      </div>
    </div>
  )
}
