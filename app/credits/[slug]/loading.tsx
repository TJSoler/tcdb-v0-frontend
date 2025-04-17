export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="h-8 w-32 bg-gray-200 mb-6 animate-pulse"></div>

      {/* Creator Hero Section Loading */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="md:col-span-1">
          <div className="border-4 border-gray-200 relative w-full aspect-square bg-gray-200 animate-pulse"></div>
        </div>

        <div className="md:col-span-2">
          <div className="h-10 w-64 bg-gray-200 mb-2 animate-pulse"></div>
          <div className="flex gap-2 mb-4">
            <div className="h-6 w-20 bg-gray-200 animate-pulse"></div>
            <div className="h-6 w-20 bg-gray-200 animate-pulse"></div>
            <div className="h-6 w-20 bg-gray-200 animate-pulse"></div>
          </div>
          <div className="mb-6">
            <div className="h-1 w-full bg-gray-200 mb-4 animate-pulse"></div>
            <div className="h-4 w-full bg-gray-200 mb-2 animate-pulse"></div>
            <div className="h-4 w-full bg-gray-200 mb-2 animate-pulse"></div>
            <div className="h-4 w-3/4 bg-gray-200 animate-pulse"></div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="h-6 w-32 bg-gray-200 mb-2 animate-pulse"></div>
              <div className="space-y-2">
                <div className="h-4 w-full bg-gray-200 animate-pulse"></div>
                <div className="h-4 w-full bg-gray-200 animate-pulse"></div>
                <div className="h-4 w-full bg-gray-200 animate-pulse"></div>
              </div>
            </div>
            <div>
              <div className="h-6 w-32 bg-gray-200 mb-2 animate-pulse"></div>
              <div className="space-y-2">
                <div className="h-4 w-full bg-gray-200 animate-pulse"></div>
                <div className="h-4 w-full bg-gray-200 animate-pulse"></div>
                <div className="h-4 w-full bg-gray-200 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Loading */}
      <div className="border-b-2 border-gray-200 mb-8">
        <div className="flex">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-12 w-32 bg-gray-200 animate-pulse mr-2"></div>
          ))}
        </div>
      </div>

      {/* Projects Loading */}
      <div className="h-8 w-64 bg-gray-200 mb-6 animate-pulse"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array(6)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="border-2 border-gray-200 h-80">
              <div className="w-full bg-gray-200 animate-pulse" style={{ aspectRatio: "16/9" }}></div>
              <div className="p-4">
                <div className="h-6 w-3/4 bg-gray-200 mb-2 animate-pulse"></div>
                <div className="h-4 w-1/2 bg-gray-200 mb-3 animate-pulse"></div>
                <div className="h-4 w-full bg-gray-200 mb-2 animate-pulse"></div>
                <div className="h-4 w-full bg-gray-200 mb-2 animate-pulse"></div>
                <div className="h-4 w-1/3 bg-gray-200 animate-pulse"></div>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}
