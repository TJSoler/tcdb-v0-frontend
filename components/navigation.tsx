"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Menu,
  X,
  Search,
  BookOpen,
  Users,
  Info,
  User,
  LogIn,
  ChevronDown,
  LogOut,
  Settings,
  Compass,
  Building2,
} from "lucide-react"
import { useState, useEffect } from "react"

export function Navigation() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  // Add state for user dropdown menu
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  // Mock logged in state - in a real app this would come from auth context
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isContentMenuOpen, setIsContentMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen)
  }

  // Toggle login state for demo purposes
  const toggleLoggedIn = () => {
    setIsLoggedIn(!isLoggedIn)
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
            <div className="relative group">
              <button
                className={`flex items-center gap-2 px-4 py-2 font-bold hover:text-neon-green transition-colors ${
                  isActive("/listings") || isActive("/discover") || isActive("/credits") || isActive("/publishers")
                    ? "text-neon-green"
                    : "text-white"
                }`}
                onClick={() => setIsContentMenuOpen(!isContentMenuOpen)}
                onMouseEnter={() => setIsContentMenuOpen(true)}
                onMouseLeave={() => setIsContentMenuOpen(false)}
                aria-expanded={isContentMenuOpen}
              >
                COMICS
                <ChevronDown size={16} className={`transition-transform ${isContentMenuOpen ? "rotate-180" : ""}`} />
              </button>

              {/* Content dropdown menu */}
              {isContentMenuOpen && (
                <div
                  className="absolute left-0 mt-2 w-48 bg-white border-2 border-black shadow-lg z-50 animate-fade-in"
                  onMouseEnter={() => setIsContentMenuOpen(true)}
                  onMouseLeave={() => setIsContentMenuOpen(false)}
                >
                  <div className="py-1">
                    <Link
                      href="/listings"
                      className="block px-4 py-2 text-black hover:bg-neon-green hover:text-black font-bold transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <BookOpen size={16} />
                        <span>New Comics</span>
                      </div>
                    </Link>
                    <Link
                      href="/discover"
                      className="block px-4 py-2 text-black hover:bg-neon-green hover:text-black font-bold transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <Compass size={16} />
                        <span>Discover</span>
                      </div>
                    </Link>
                    <Link
                      href="/credits"
                      className="block px-4 py-2 text-black hover:bg-neon-green hover:text-black font-bold transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <Users size={16} />
                        <span>Credits</span>
                      </div>
                    </Link>
                    <Link
                      href="/publishers"
                      className="block px-4 py-2 text-black hover:bg-neon-green hover:text-black font-bold transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <Building2 size={16} />
                        <span>Publishers</span>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <NavLink href="/about" isActive={isActive("/about")} icon={<Info size={18} />}>
              ABOUT
            </NavLink>
            <NavLink href="/search" isActive={isActive("/search")} icon={<Search size={18} />} iconOnly>
              SEARCH
            </NavLink>

            {/* Add login/user profile button */}
            {isLoggedIn ? (
              <div className="relative">
                <button
                  onClick={toggleUserMenu}
                  className="flex items-center gap-2 px-4 py-2 font-bold hover:text-neon-green transition-colors"
                  aria-expanded={isUserMenuOpen}
                >
                  <User size={18} />
                  <span className="hidden lg:inline">COMICFAN42</span>
                  <ChevronDown size={16} className={`transition-transform ${isUserMenuOpen ? "rotate-180" : ""}`} />
                </button>

                {/* User dropdown menu */}
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border-2 border-black shadow-lg z-50 animate-fade-in">
                    <div className="py-1">
                      <Link
                        href="/profile"
                        className="block px-4 py-2 text-black hover:bg-neon-green hover:text-black font-bold transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <User size={16} />
                          <span>Profile</span>
                        </div>
                      </Link>
                      <Link
                        href="/profile/collections"
                        className="block px-4 py-2 text-black hover:bg-neon-green hover:text-black font-bold transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <BookOpen size={16} />
                          <span>Collections</span>
                        </div>
                      </Link>
                      <Link
                        href="/profile/security"
                        className="block px-4 py-2 text-black hover:bg-neon-green hover:text-black font-bold transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <Settings size={16} />
                          <span>Settings</span>
                        </div>
                      </Link>
                      <div className="border-t border-gray-200 my-1"></div>
                      <button
                        onClick={toggleLoggedIn}
                        className="block w-full text-left px-4 py-2 text-black hover:bg-neon-green hover:text-black font-bold transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <LogOut size={16} />
                          <span>Log Out</span>
                        </div>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={toggleLoggedIn}
                className="flex items-center gap-2 px-4 py-2 font-bold bg-neon-green text-black hover:bg-white hover:text-black transition-colors rounded"
              >
                <LogIn size={18} />
                <span>LOG IN</span>
              </button>
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-0 border-t border-gray-700 pt-4 animate-fade-in">
            <MobileNavLink href="/listings" isActive={isActive("/listings")} onClick={() => setIsMenuOpen(false)}>
              NEW COMICS
            </MobileNavLink>
            <MobileNavLink href="/discover" isActive={isActive("/discover")} onClick={() => setIsMenuOpen(false)}>
              DISCOVER
            </MobileNavLink>
            <MobileNavLink href="/credits" isActive={isActive("/credits")} onClick={() => setIsMenuOpen(false)}>
              CREDITS
            </MobileNavLink>
            <MobileNavLink href="/publishers" isActive={isActive("/publishers")} onClick={() => setIsMenuOpen(false)}>
              PUBLISHERS
            </MobileNavLink>
            <MobileNavLink href="/about" isActive={isActive("/about")} onClick={() => setIsMenuOpen(false)}>
              ABOUT
            </MobileNavLink>
            <MobileNavLink href="/search" isActive={isActive("/search")} onClick={() => setIsMenuOpen(false)}>
              SEARCH
            </MobileNavLink>

            {/* Add login/profile link for mobile */}
            {isLoggedIn ? (
              <>
                <MobileNavLink href="/profile" isActive={isActive("/profile")} onClick={() => setIsMenuOpen(false)}>
                  PROFILE
                </MobileNavLink>
                <MobileNavLink
                  href="/profile/collections"
                  isActive={isActive("/profile/collections")}
                  onClick={() => setIsMenuOpen(false)}
                >
                  COLLECTIONS
                </MobileNavLink>
                <MobileNavLink
                  href="/profile/security"
                  isActive={isActive("/profile/security")}
                  onClick={() => setIsMenuOpen(false)}
                >
                  SETTINGS
                </MobileNavLink>
                <button
                  onClick={() => {
                    toggleLoggedIn()
                    setIsMenuOpen(false)
                  }}
                  className="block w-full text-left py-3 px-2 font-bold transition-colors border-b border-gray-700 text-white hover:bg-neon-green hover:text-black"
                >
                  LOG OUT
                </button>
              </>
            ) : (
              <button
                onClick={() => {
                  toggleLoggedIn()
                  setIsMenuOpen(false)
                }}
                className="block w-full text-left py-3 px-2 font-bold transition-colors border-b border-gray-700 bg-neon-green text-black hover:bg-white"
              >
                LOG IN
              </button>
            )}
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
