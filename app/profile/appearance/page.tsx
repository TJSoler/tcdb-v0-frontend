"use client"

import Link from "next/link"
import { ArrowLeft, Moon, Sun, Monitor } from "lucide-react"
import { useTheme } from "@/providers/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"

export default function AppearanceSettingsPage() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <Link
          href="/profile"
          className="inline-flex items-center gap-2 mb-6 font-bold hover:text-neon-green transition-colors group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to profile
        </Link>

        <div className="bg-white dark:bg-gray-800 border-2 border-black dark:border-gray-700 p-6 mb-8">
          <h1 className="text-2xl font-black mb-6 border-b-2 border-black dark:border-gray-700 pb-2">
            Appearance Settings
          </h1>

          <div className="space-y-8">
            {/* Theme Section */}
            <div className="border-2 border-black dark:border-gray-700 p-6">
              <h2 className="text-xl font-bold mb-4">Theme Preferences</h2>
              <p className="mb-6 text-gray-600 dark:text-gray-400">
                Choose how The Comic DB looks to you. Select a theme preference or let us follow your system settings.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="font-bold mb-3">Theme Mode</h3>
                  <ThemeToggle variant="switch" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div
                    className={`border-2 p-4 cursor-pointer transition-all ${
                      theme === "light"
                        ? "border-neon-green bg-white"
                        : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
                    }`}
                    onClick={() => setTheme("light")}
                  >
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-bold">Light</span>
                      <Sun size={20} className={theme === "light" ? "text-neon-green" : ""} />
                    </div>
                    <div className="h-24 bg-gray-100 border border-gray-200 flex items-center justify-center">
                      <div className="w-3/4 h-4 bg-gray-300 rounded"></div>
                    </div>
                  </div>

                  <div
                    className={`border-2 p-4 cursor-pointer transition-all ${
                      theme === "dark"
                        ? "border-neon-green bg-gray-900 text-white"
                        : "border-gray-200 dark:border-gray-700 bg-gray-900 text-white"
                    }`}
                    onClick={() => setTheme("dark")}
                  >
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-bold">Dark</span>
                      <Moon size={20} className={theme === "dark" ? "text-neon-green" : ""} />
                    </div>
                    <div className="h-24 bg-gray-800 border border-gray-700 flex items-center justify-center">
                      <div className="w-3/4 h-4 bg-gray-600 rounded"></div>
                    </div>
                  </div>

                  <div
                    className={`border-2 p-4 cursor-pointer transition-all ${
                      theme === "system" ? "border-neon-green" : "border-gray-200 dark:border-gray-700"
                    }`}
                    onClick={() => setTheme("system")}
                  >
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-bold">System</span>
                      <Monitor size={20} className={theme === "system" ? "text-neon-green" : ""} />
                    </div>
                    <div className="h-24 bg-gradient-to-r from-gray-100 to-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center">
                      <div className="w-3/4 h-4 bg-gradient-to-r from-gray-300 to-gray-600 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Accent Color Section */}
            <div className="border-2 border-black dark:border-gray-700 p-6">
              <h2 className="text-xl font-bold mb-4">Accent Color</h2>
              <p className="mb-6 text-gray-600 dark:text-gray-400">
                Choose the accent color for buttons, links, and highlights throughout the site.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="border-2 border-neon-green p-4 cursor-pointer">
                  <div className="h-12 bg-neon-green mb-2"></div>
                  <span className="font-bold">Neon Green</span>
                </div>
                <div className="border-2 border-gray-200 dark:border-gray-700 p-4 cursor-pointer">
                  <div className="h-12 bg-purple-500 mb-2"></div>
                  <span className="font-bold">Purple</span>
                </div>
                <div className="border-2 border-gray-200 dark:border-gray-700 p-4 cursor-pointer">
                  <div className="h-12 bg-pink-500 mb-2"></div>
                  <span className="font-bold">Pink</span>
                </div>
                <div className="border-2 border-gray-200 dark:border-gray-700 p-4 cursor-pointer">
                  <div className="h-12 bg-blue-500 mb-2"></div>
                  <span className="font-bold">Blue</span>
                </div>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                Note: Accent color functionality is coming soon.
              </p>
            </div>

            {/* Font Size Section */}
            <div className="border-2 border-black dark:border-gray-700 p-6">
              <h2 className="text-xl font-bold mb-4">Font Size</h2>
              <p className="mb-6 text-gray-600 dark:text-gray-400">Adjust the font size for better readability.</p>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Small</span>
                  <span>Large</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="5"
                  defaultValue="3"
                  className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
                />
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Note: Font size adjustment functionality is coming soon.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
