"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

interface GalleryImage {
  id: string
  src: string
  alt: string
  title: string
  description?: string
}

interface WorkGalleryProps {
  images: GalleryImage[]
}

export function WorkGallery({ images }: WorkGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

  return (
    <div className="mb-12">
      <h2 className="text-3xl font-black mb-6 tracking-tight">GALLERY</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image) => (
          <div
            key={image.id}
            className="border-2 border-black cursor-pointer hover:border-neon-green transition-all"
            onClick={() => setSelectedImage(image)}
          >
            <div className="relative w-full" style={{ aspectRatio: "1/1" }}>
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>
            <div className="p-2 bg-white">
              <h3 className="font-bold text-sm truncate">{image.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <button
            className="absolute top-4 right-4 text-white hover:text-neon-green"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <div className="max-w-4xl w-full">
            <div className="relative w-full" style={{ maxHeight: "80vh" }}>
              <Image
                src={selectedImage.src || "/placeholder.svg"}
                alt={selectedImage.alt}
                width={1200}
                height={800}
                className="object-contain mx-auto max-h-[70vh]"
              />
            </div>
            <div className="bg-white p-4 mt-2">
              <h3 className="text-xl font-bold">{selectedImage.title}</h3>
              {selectedImage.description && <p className="mt-2">{selectedImage.description}</p>}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
