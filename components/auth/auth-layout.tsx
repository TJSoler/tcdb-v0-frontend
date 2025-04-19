import type React from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

interface AuthLayoutProps {
  children: React.ReactNode
  title: string
  description?: string
  showBackLink?: boolean
  backLinkText?: string
  backLinkHref?: string
}

export function AuthLayout({
  children,
  title,
  description,
  showBackLink = true,
  backLinkText = "Back to home",
  backLinkHref = "/",
}: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {showBackLink && (
            <Link
              href={backLinkHref}
              className="inline-flex items-center gap-2 mb-6 font-bold hover:text-neon-green transition-colors group"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              {backLinkText}
            </Link>
          )}

          <div className="border-2 border-black bg-white p-8 shadow-card">
            <div className="flex justify-center mb-6">
              <Link href="/" className="text-2xl font-black flex items-center gap-2">
                <span className="text-neon-green">THE</span> COMIC DB
              </Link>
            </div>

            <h1 className="text-2xl font-black mb-2 text-center">{title}</h1>
            {description && <p className="text-gray-600 mb-6 text-center">{description}</p>}

            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
