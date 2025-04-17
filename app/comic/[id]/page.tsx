import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { ComicDetail } from "@/components/comic-detail"
import { mockComics } from "@/lib/mock-data"

export default function ComicDetailPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the comic data based on the ID
  const comic = mockComics.find((c) => c.id === params.id) || mockComics[0]

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="flex items-center gap-2 mb-6 font-bold hover:text-neon-green transition-colors">
        <ArrowLeft size={20} />
        Back to listings
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <div className="border-4 border-black relative w-full" style={{ aspectRatio: "51/80" }}>
            <div className="absolute inset-0 border-4 border-neon-green opacity-75"></div>
            <Image
              src={comic.coverImage || "/placeholder.svg"}
              alt={`${comic.title} #${comic.issueNumber} Cover`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
            />
          </div>
        </div>

        <div className="md:col-span-2">
          <ComicDetail comic={comic} />
        </div>
      </div>
    </div>
  )
}
