"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Facebook, Github } from "lucide-react"
import { AuthLayout } from "@/components/auth/auth-layout"
import { FormInput } from "@/components/auth/form-input"
import { SocialButton } from "@/components/auth/social-button"
import { PasswordStrength } from "@/components/auth/password-strength"

export default function RegisterPage() {
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
    <AuthLayout
      title="Create an account"
      description="Join The Comic DB community to track your collection, follow creators, and more."
    >
      <form className="space-y-4">
        <FormInput id="username" label="Username" required placeholder="Choose a unique username" />
        <FormInput id="email" label="Email" type="email" required placeholder="your.email@example.com" />
        <FormInput
          id="password"
          label="Password"
          type="password"
          required
          placeholder="Create a secure password"
          showPasswordToggle
        />
        <PasswordStrength strength={passwordStrength} />

        <div className="space-y-2">
          <button
            type="submit"
            className="w-full bg-black text-neon-green border-2 border-neon-green p-3 font-bold hover:bg-neon-green hover:text-black transition-colors"
          >
            CREATE ACCOUNT
          </button>
        </div>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">or continue with</span>
          </div>
        </div>

        <div className="space-y-3">
          <SocialButton icon={Github} provider="GitHub" />
          <SocialButton icon={Facebook} provider="Facebook" />
        </div>

        <div className="text-center mt-6">
          <p className="text-gray-600">
            Already have an account?{" "}
            <Link href="/auth/login" className="font-bold text-black hover:text-neon-green transition-colors">
              Log in
            </Link>
          </p>
        </div>
      </form>
    </AuthLayout>
  )
}
