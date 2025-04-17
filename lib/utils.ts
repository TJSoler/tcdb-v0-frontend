import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

interface Heading {
  id: string
  text: string
  level: number
}

export function extractHeadings(html: string): Heading[] {
  const headingRegex = /<h([1-6])[^>]*id="([^"]+)"[^>]*>(.*?)<\/h\1>/g
  const headings: Heading[] = []

  let match
  while ((match = headingRegex.exec(html)) !== null) {
    const level = Number.parseInt(match[1], 10)
    const id = match[2]
    // Remove any HTML tags from the heading text
    const text = match[3].replace(/<[^>]*>/g, "")

    headings.push({ level, id, text })
  }

  return headings
}
