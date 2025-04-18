import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className={`${inter.className} flex flex-col min-h-screen bg-gray-50`}>
        {/* Remove the border from here */}
        <Navigation />

        <main className="flex-grow">{children}</main>

        <Footer />
      </body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.dev'
    };
