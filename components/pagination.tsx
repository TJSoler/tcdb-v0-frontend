import { ChevronLeft, ChevronRight } from "lucide-react"

export function Pagination() {
  return (
    <div className="flex items-center space-x-1">
      <button className="p-2 border-2 border-black hover:border-neon-green hover:text-neon-green transition-colors">
        <ChevronLeft size={16} />
      </button>

      {[1, 2, 3, 4, 5].map((page) => (
        <button
          key={page}
          className={`w-10 h-10 flex items-center justify-center font-bold border-2 ${
            page === 1
              ? "bg-neon-green text-black border-neon-green"
              : "border-black hover:border-neon-green hover:text-neon-green transition-colors"
          }`}
        >
          {page}
        </button>
      ))}

      <button className="p-2 border-2 border-black hover:border-neon-green hover:text-neon-green transition-colors">
        <ChevronRight size={16} />
      </button>
    </div>
  )
}
