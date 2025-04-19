"use client"

import type React from "react"

import { useState } from "react"
import { AuthLayout } from "@/components/auth/auth-layout"
import { FormInput } from "@/components/auth/form-input"
import { PasswordStrength } from "@/components/auth/password-strength"

export default function ResetPasswordPage() {
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
    <AuthLayout title="Reset Password" description="Create a new password for your account." showBackLink={false}>
      <form className="space-y-4">
        <FormInput
          id="password"
          label="New Password"
          type="password"
          required
          placeholder="Create a new password"
          showPasswordToggle
        />
        <PasswordStrength strength={passwordStrength} />

        <FormInput
          id="confirm-password"
          label="Confirm Password"
          type="password"
          required
          placeholder="Confirm your new password"
          showPasswordToggle
        />

        <div className="space-y-2">
          <button
            type="submit"
            className="w-full bg-black text-neon-green border-2 border-neon-green p-3 font-bold hover:bg-neon-green hover:text-black transition-colors"
          >
            RESET PASSWORD
          </button>
        </div>
      </form>
    </AuthLayout>
  )
}
