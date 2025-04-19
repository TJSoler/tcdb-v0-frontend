export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="h-10 w-64 bg-gray-200 mb-2 animate-pulse"></div>
      <div className="h-6 w-full max-w-3xl bg-gray-200 mb-8 animate-pulse"></div>

      {/* Search bar loading */}
      <div className="mb-12 max-w-xl">
        <div className="h-12 bg-gray-200 animate-pulse"></div>
      </div>

      {/* Publishers Grid Loading */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {Array(6)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="border-2 border-gray-200 bg-white h-full flex flex-col">
              <div className="p-6 border-b-2 border-gray-200 h-40 bg-gray-100 animate-pulse"></div>
              <div className="p-4 flex-grow">
                <div className="h-6 w-32 bg-gray-200 mb-2 animate-pulse"></div>
                <div className="h-4 w-full bg-gray-200 mb-1 animate-pulse"></div>
                <div className="h-4 w-full bg-gray-200 mb-1 animate-pulse"></div>
                <div className="h-4 w-3/4 bg-gray-200 mb-4 animate-pulse"></div>
                <div className="flex justify-between mt-4">
                  <div className="h-4 w-20 bg-gray-200 animate-pulse"></div>
                  <div className="h-4 w-16 bg-gray-200 animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* Independent Publishers Section Loading */}
      <div className="mb-12">
        <div className="h-8 w-64 bg-gray-200 mb-6 animate-pulse"></div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {Array(8)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="h-12 border-2 border-gray-200 bg-gray-100 animate-pulse"></div>
            ))}
        </div>
      </div>

      {/* International Publishers Section Loading */}
      <div>
        <div className="h-8 w-64 bg-gray-200 mb-6 animate-pulse"></div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {Array(8)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="h-12 border-2 border-gray-200 bg-gray-100 animate-pulse"></div>
            ))}
        </div>
      </div>
    </div>
  )
}
