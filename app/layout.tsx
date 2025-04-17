import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} flex flex-col min-h-screen bg-gray-100`}>
        <div className="h-1 w-full bg-gradient-to-r from-neon-green to-neon-yellow"></div>
        <Navigation />

        <main className="flex-grow">{children}</main>

        <footer className="bg-black text-white py-6 mt-auto">
          <div className="container mx-auto px-4 text-center">
            <p className="font-bold">TCDB © 2025</p>
          </div>
        </footer>
        <div className="h-1 w-full bg-gradient-to-r from-neon-yellow to-neon-green"></div>
      </body>
    </html>
  )
}


import './globals.css'

export const metadata = {
      generator: 'v0.dev'
    };
