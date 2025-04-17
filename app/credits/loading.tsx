export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="h-8 w-64 bg-gray-200 mb-6 animate-pulse"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array(3)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="border-2 border-gray-200 p-6">
              <div className="h-6 w-32 bg-gray-200 mb-4 animate-pulse"></div>
              <div className="space-y-2">
                {Array(6)
                  .fill(0)
                  .map((_, j) => (
                    <div key={j} className="h-4 bg-gray-200 animate-pulse"></div>
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}
