import type React from "react"
import { cn } from "@/lib/utils"

interface HeadingProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export function H1({ children, className, id }: HeadingProps) {
  return (
    <h1 id={id} className={cn("text-3xl font-black mt-8 mb-4 border-b-2 border-black pb-2", className)}>
      {children}
    </h1>
  )
}

export function H2({ children, className, id }: HeadingProps) {
  return (
    <h2 id={id} className={cn("text-2xl font-bold mt-6 mb-3", className)}>
      {children}
    </h2>
  )
}

export function H3({ children, className, id }: HeadingProps) {
  return (
    <h3 id={id} className={cn("text-xl font-bold mt-5 mb-2", className)}>
      {children}
    </h3>
  )
}

export function H4({ children, className, id }: HeadingProps) {
  return (
    <h4 id={id} className={cn("text-lg font-bold mt-4 mb-2", className)}>
      {children}
    </h4>
  )
}

interface ParagraphProps {
  children: React.ReactNode
  className?: string
}

export function Paragraph({ children, className }: ParagraphProps) {
  return <p className={cn("mb-4", className)}>{children}</p>
}

interface ListProps {
  items: React.ReactNode[]
  className?: string
  ordered?: boolean
}

export function List({ items, className, ordered = false }: ListProps) {
  const ListComponent = ordered ? "ol" : "ul"

  return (
    <ListComponent className={cn("mb-4 pl-6", ordered ? "list-decimal" : "list-disc", className)}>
      {items.map((item, index) => (
        <li key={index} className="mb-2">
          {item}
        </li>
      ))}
    </ListComponent>
  )
}

interface BlockquoteProps {
  children: React.ReactNode
  className?: string
  citation?: string
}

export function Blockquote({ children, className, citation }: BlockquoteProps) {
  return (
    <blockquote className={cn("border-l-4 border-neon-green pl-4 py-2 my-4 italic", className)}>
      {children}
      {citation && <cite className="block text-sm mt-2 not-italic">— {citation}</cite>}
    </blockquote>
  )
}
