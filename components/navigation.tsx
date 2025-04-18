"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Search, Home, BookOpen, Users, Info } from "lucide-react"
import { useState, useEffect } from "react"

export function Navigation() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const isActive = (path: string) => {
    return pathname === path
  }

  // Add scroll detection for enhanced header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`sticky top-0 z-50 bg-black text-white transition-all duration-200 ${isScrolled ? "shadow-md" : ""}`}
    >
      {/* Add the gradient border at the top */}
      <div className="h-1 w-full bg-gradient-to-r from-neon-green to-neon-yellow"></div>

      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl font-black flex items-center gap-2 hover:text-neon-green transition-colors"
          >
            <span className="text-neon-green">THE</span> COMIC DB
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 hover:text-neon-green focus:outline-none focus:ring-2 focus:ring-neon-green focus:ring-opacity-50 transition-colors"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <NavLink href="/" isActive={isActive("/")} icon={<Home size={18} />}>
              HOME
            </NavLink>
            <NavLink href="/listings" isActive={isActive("/listings")} icon={<BookOpen size={18} />}>
              NEW COMICS
            </NavLink>
            <NavLink href="/discover" isActive={isActive("/discover")}>
              DISCOVER
            </NavLink>
            <NavLink href="/credits" isActive={isActive("/credits")} icon={<Users size={18} />}>
              CREDITS
            </NavLink>
            <NavLink href="/about" isActive={isActive("/about")} icon={<Info size={18} />}>
              ABOUT
            </NavLink>
            <NavLink href="/search" isActive={isActive("/search")} icon={<Search size={18} />} iconOnly>
              SEARCH
            </NavLink>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-0 border-t border-gray-700 pt-4 animate-fade-in">
            <MobileNavLink href="/" isActive={isActive("/")} onClick={() => setIsMenuOpen(false)}>
              HOME
            </MobileNavLink>
            <MobileNavLink href="/listings" isActive={isActive("/listings")} onClick={() => setIsMenuOpen(false)}>
              NEW COMICS
            </MobileNavLink>
            <MobileNavLink href="/discover" isActive={isActive("/discover")} onClick={() => setIsMenuOpen(false)}>
              DISCOVER
            </MobileNavLink>
            <MobileNavLink href="/credits" isActive={isActive("/credits")} onClick={() => setIsMenuOpen(false)}>
              CREDITS
            </MobileNavLink>
            <MobileNavLink href="/about" isActive={isActive("/about")} onClick={() => setIsMenuOpen(false)}>
              ABOUT
            </MobileNavLink>
            <MobileNavLink href="/search" isActive={isActive("/search")} onClick={() => setIsMenuOpen(false)}>
              SEARCH
            </MobileNavLink>
          </div>
        )}
      </div>
    </nav>
  )
}

// Desktop navigation link component with updated hover state
function NavLink({
  href,
  isActive,
  children,
  icon,
  iconOnly = false,
}: {
  href: string
  isActive: boolean
  children: React.ReactNode
  icon?: React.ReactNode
  iconOnly?: boolean
}) {
  return (
    <Link
      href={href}
      className={`
        relative px-4 py-2 font-bold transition-colors rounded
        ${isActive ? "text-neon-green" : "text-white hover:bg-neon-green hover:text-black"}
        ${iconOnly ? "md:px-3" : ""}
        group
      `}
      aria-current={isActive ? "page" : undefined}
    >
      <span className="flex items-center gap-2">
        {icon && <span className={`${iconOnly ? "" : "mr-1"}`}>{icon}</span>}
        {!iconOnly && <span>{children}</span>}
        {iconOnly && <span className="sr-only">{children}</span>}
      </span>
      {isActive && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-neon-green"></span>}
    </Link>
  )
}

// Mobile navigation link component
function MobileNavLink({
  href,
  isActive,
  children,
  onClick,
}: {
  href: string
  isActive: boolean
  children: React.ReactNode
  onClick: () => void
}) {
  return (
    <Link
      href={href}
      className={`
        block py-3 px-2 font-bold transition-colors border-b border-gray-700 last:border-b-0
        ${isActive ? "text-neon-green" : "text-white hover:bg-neon-green hover:text-black"}
      `}
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
    >
      {children}
    </Link>
  )
}
