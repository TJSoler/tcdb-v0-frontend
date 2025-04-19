"use client"

import Link from "next/link"
import { Facebook, Github } from "lucide-react"
import { AuthLayout } from "@/components/auth/auth-layout"
import { FormInput } from "@/components/auth/form-input"
import { SocialButton } from "@/components/auth/social-button"

export default function LoginPage() {
  return (
    <AuthLayout title="Log in" description="Welcome back! Log in to access your account.">
      <form className="space-y-4">
        <FormInput id="email" label="Email or Username" required placeholder="your.email@example.com" />
        <FormInput
          id="password"
          label="Password"
          type="password"
          required
          placeholder="Enter your password"
          showPasswordToggle
        />

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 border-2 border-black focus:ring-neon-green"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
              Remember me
            </label>
          </div>

          <Link href="/auth/forgot-password" className="text-sm font-bold hover:text-neon-green transition-colors">
            Forgot password?
          </Link>
        </div>

        <div className="space-y-2">
          <button
            type="submit"
            className="w-full bg-black text-neon-green border-2 border-neon-green p-3 font-bold hover:bg-neon-green hover:text-black transition-colors"
          >
            LOG IN
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
            Don't have an account?{" "}
            <Link href="/auth/register" className="font-bold text-black hover:text-neon-green transition-colors">
              Sign up
            </Link>
          </p>
        </div>
      </form>
    </AuthLayout>
  )
}
