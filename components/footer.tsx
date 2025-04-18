import type React from "react"
import Link from "next/link"
import { Github, Twitter, Instagram, Mail, Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-neon-green">THE COMIC DB</h3>
            <p className="text-gray-400 mb-4">
              Your ultimate resource for comic book information, tracking, and discovery.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://github.com" icon={<Github size={20} />} label="GitHub" />
              <SocialLink href="https://twitter.com" icon={<Twitter size={20} />} label="Twitter" />
              <SocialLink href="https://instagram.com" icon={<Instagram size={20} />} label="Instagram" />
              <SocialLink href="mailto:info@thecomicdb.com" icon={<Mail size={20} />} label="Email" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-3">Explore</h4>
            <ul className="space-y-2">
              <FooterLink href="/listings">New Releases</FooterLink>
              <FooterLink href="/discover">Discover</FooterLink>
              <FooterLink href="/publishers">Publishers</FooterLink>
              <FooterLink href="/series">Series</FooterLink>
              <FooterLink href="/characters">Characters</FooterLink>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-3">Resources</h4>
            <ul className="space-y-2">
              <FooterLink href="/credits">Credits</FooterLink>
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/faq">FAQ</FooterLink>
              <FooterLink href="/api">API</FooterLink>
              <FooterLink href="/contribute">Contribute</FooterLink>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-3">Legal</h4>
            <ul className="space-y-2">
              <FooterLink href="/terms-of-service">Terms of Service</FooterLink>
              <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
              <FooterLink href="/copyright">Copyright</FooterLink>
              <FooterLink href="/accessibility">Accessibility</FooterLink>
              <FooterLink href="/contact">Contact Us</FooterLink>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">© {currentYear} The Comic DB. All rights reserved.</p>
          <p className="text-gray-400 text-sm flex items-center">
            Made with <Heart size={14} className="mx-1 text-neon-green" /> for comic lovers
          </p>
        </div>
      </div>
      <div className="h-1 w-full bg-gradient-to-r from-neon-yellow to-neon-green mt-6"></div>
    </footer>
  )
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-neon-green transition-colors"
      aria-label={label}
    >
      {icon}
    </a>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-gray-400 hover:text-neon-green transition-colors">
        {children}
      </Link>
    </li>
  )
}
