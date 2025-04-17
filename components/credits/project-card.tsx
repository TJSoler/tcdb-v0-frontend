import Image from "next/image"
import Link from "next/link"
import type { Project } from "@/lib/mock-creator-data"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="border-2 border-black bg-white h-full flex flex-col transition-all hover:border-neon-green">
      <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
        <Image
          src={project.coverImage || "/placeholder.svg?height=360&width=640"}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {project.year && (
          <div className="absolute top-0 right-0 bg-neon-green text-black px-2 py-1 text-sm font-bold">
            {project.year}
          </div>
        )}
      </div>
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="text-xl font-bold mb-1">{project.title}</h3>
        <p className="text-sm mb-3 text-gray-700">
          <span className="font-semibold">{project.role}</span>
          {project.publisher && ` • ${project.publisher}`}
        </p>
        <p className="text-sm mb-4 flex-grow">{project.description}</p>
        {project.link && (
          <Link href={project.link} className="mt-auto text-sm font-bold text-neon-green hover:underline self-start">
            View Details →
          </Link>
        )}
      </div>
    </div>
  )
}
