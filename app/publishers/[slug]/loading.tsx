export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="h-6 w-32 bg-gray-200 mb-6 animate-pulse"></div>

      <div className="h-6 w-48 bg-gray-200 mb-6 animate-pulse"></div>

      {/* Publisher Header Loading */}
      <div className="bg-white border-2 border-gray-200 p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-1">
            <div className="relative w-full h-32 md:h-40 border-2 border-gray-200 bg-gray-100 animate-pulse"></div>
          </div>

          <div className="md:col-span-2">
            <div className="h-10 w-64 bg-gray-200 mb-2 animate-pulse"></div>
            <div className="h-1 w-full bg-gray-200 mb-4 animate-pulse"></div>
            <div className="h-4 w-full bg-gray-200 mb-2 animate-pulse"></div>
            <div className="h-4 w-full bg-gray-200 mb-2 animate-pulse"></div>
            <div className="h-4 w-3/4 bg-gray-200 mb-4 animate-pulse"></div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="h-12 bg-gray-200 animate-pulse"></div>
              <div className="h-12 bg-gray-200 animate-pulse"></div>
              <div className="h-12 bg-gray-200 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Series Loading */}
      <div className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <div className="h-8 w-48 bg-gray-200 animate-pulse"></div>
          <div className="h-6 w-24 bg-gray-200 animate-pulse"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="border-2 border-gray-200 bg-white">
              <div className="relative w-full bg-gray-200 animate-pulse" style={{ aspectRatio: "16/9" }}></div>
            </div>
          ))}
        </div>
      </div>

      {/* Comics List Loading */}
      <div className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <div className="h-8 w-48 bg-gray-200 animate-pulse"></div>
          <div className="h-10 w-32 bg-gray-200 animate-pulse"></div>
        </div>

        <div className="bg-white border-2 border-gray-200 p-4 mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="h-6 w-64 bg-gray-200 animate-pulse"></div>
          <div className="flex flex-wrap gap-4">
            <div className="h-10 w-48 bg-gray-200 animate-pulse"></div>
            <div className="h-10 w-32 bg-gray-200 animate-pulse"></div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
          {Array(8)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="flex flex-col h-full border-2 border-gray-200">
                <div className="relative w-full bg-gray-200 animate-pulse" style={{ aspectRatio: "51/80" }}></div>
                <div className="p-3 bg-white">
                  <div className="h-4 bg-gray-200 mb-1 animate-pulse"></div>
                  <div className="h-3 w-12 bg-gray-200 animate-pulse"></div>
                </div>
              </div>
            ))}
        </div>

        <div className="flex justify-center">
          <div className="h-10 w-48 bg-gray-200 animate-pulse"></div>
        </div>
      </div>

      {/* Popular Creators Loading */}
      <div className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <div className="h-8 w-48 bg-gray-200 animate-pulse"></div>
          <div className="h-6 w-24 bg-gray-200 animate-pulse"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="border-2 border-gray-200 bg-white p-4 flex items-center gap-4">
              <div className="w-16 h-16 bg-gray-200 animate-pulse flex-shrink-0"></div>
              <div>
                <div className="h-5 w-32 bg-gray-200 mb-1 animate-pulse"></div>
                <div className="h-4 w-16 bg-gray-200 animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
