"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { FormInput } from "@/components/auth/form-input"
import { PasswordStrength } from "@/components/auth/password-strength"

export default function ChangePasswordPage() {
  const [passwordStrength, setPasswordStrength] = useState<"weak" | "medium" | "strong" | "none">("none")

  // This would normally be handled with actual validation logic
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value
    if (!password) {
      setPasswordStrength("none")
    } else if (password.length < 8) {
      setPasswordStrength("weak")
    } else if (password.length < 12) {
      setPasswordStrength("medium")
    } else {
      setPasswordStrength("strong")
    }
  }

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

        <div className="bg-white border-2 border-black p-6 mb-8">
          <h1 className="text-2xl font-black mb-6 border-b-2 border-black pb-2">Change Password</h1>

          <form className="space-y-6">
            <FormInput
              id="current-password"
              label="Current Password"
              type="password"
              required
              placeholder="Enter your current password"
              showPasswordToggle
            />

            <FormInput
              id="new-password"
              label="New Password"
              type="password"
              required
              placeholder="Create a new password"
              showPasswordToggle
            />
            <PasswordStrength strength={passwordStrength} />

            <FormInput
              id="confirm-password"
              label="Confirm New Password"
              type="password"
              required
              placeholder="Confirm your new password"
              showPasswordToggle
            />

            <div className="flex justify-end gap-4 pt-4 border-t-2 border-gray-200">
              <Link
                href="/profile"
                className="border-2 border-black px-6 py-2 font-bold hover:border-red-500 hover:text-red-500 transition-colors"
              >
                CANCEL
              </Link>
              <button
                type="submit"
                className="bg-black text-neon-green border-2 border-neon-green px-6 py-2 font-bold hover:bg-neon-green hover:text-black transition-colors"
              >
                UPDATE PASSWORD
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
