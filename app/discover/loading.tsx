export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="h-8 w-64 bg-gray-200 mb-6 animate-pulse"></div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/4">
          <div className="border-2 border-gray-200 p-4 bg-white h-96 animate-pulse"></div>
        </div>

        <div className="w-full md:w-3/4">
          <div className="mb-6 h-12 bg-gray-200 animate-pulse"></div>

          <div className="flex justify-between items-center mb-6">
            <div className="h-8 w-32 bg-gray-200 animate-pulse"></div>
            <div className="h-8 w-24 bg-gray-200 animate-pulse"></div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array(8)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="flex flex-col h-full border-2 border-gray-200">
                  <div className="relative w-full bg-gray-200" style={{ aspectRatio: "51/80" }}></div>
                  <div className="p-3 bg-white">
                    <div className="h-4 bg-gray-200 mb-1 animate-pulse"></div>
                    <div className="h-3 w-12 bg-gray-200 animate-pulse"></div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
