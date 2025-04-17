"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Search } from "lucide-react"
import { useState } from "react"

export function Navigation() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <nav className="bg-black text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-black">
            THE COMIC DB
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <Link
              href="/listings"
              className={`font-bold hover:text-neon-green transition-colors ${
                isActive("/listings") ? "text-neon-green" : ""
              }`}
            >
              NEW COMICS
            </Link>
            <Link
              href="/discover"
              className={`font-bold hover:text-neon-green transition-colors ${
                isActive("/discover") ? "text-neon-green" : ""
              }`}
            >
              DISCOVER
            </Link>
            <Link
              href="/credits"
              className={`font-bold hover:text-neon-green transition-colors ${
                isActive("/credits") ? "text-neon-green" : ""
              }`}
            >
              CREDITS
            </Link>
            <Link
              href="/search"
              className={`font-bold hover:text-neon-green transition-colors ${
                isActive("/search") ? "text-neon-green" : ""
              }`}
            >
              <Search size={20} />
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 border-t border-gray-700 pt-4">
            <Link
              href="/listings"
              className={`block font-bold hover:text-neon-green transition-colors ${
                isActive("/listings") ? "text-neon-green" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              NEW COMICS
            </Link>
            <Link
              href="/discover"
              className={`block font-bold hover:text-neon-green transition-colors ${
                isActive("/discover") ? "text-neon-green" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              DISCOVER
            </Link>
            <Link
              href="/credits"
              className={`block font-bold hover:text-neon-green transition-colors ${
                isActive("/credits") ? "text-neon-green" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              CREDITS
            </Link>
            <Link
              href="/search"
              className={`block font-bold hover:text-neon-green transition-colors ${
                isActive("/search") ? "text-neon-green" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              SEARCH
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
