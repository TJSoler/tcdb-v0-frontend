import Link from "next/link"
import { AuthLayout } from "@/components/auth/auth-layout"
import { FormInput } from "@/components/auth/form-input"

export default function ForgotPasswordPage() {
  return (
    <AuthLayout
      title="Forgot Password"
      description="Enter your email address and we'll send you a link to reset your password."
      backLinkText="Back to login"
      backLinkHref="/auth/login"
    >
      <form className="space-y-4">
        <FormInput id="email" label="Email" type="email" required placeholder="your.email@example.com" />

        <div className="space-y-2">
          <button
            type="submit"
            className="w-full bg-black text-neon-green border-2 border-neon-green p-3 font-bold hover:bg-neon-green hover:text-black transition-colors"
          >
            SEND RESET LINK
          </button>
        </div>

        <div className="text-center mt-6">
          <p className="text-gray-600">
            Remember your password?{" "}
            <Link href="/auth/login" className="font-bold text-black hover:text-neon-green transition-colors">
              Log in
            </Link>
          </p>
        </div>
      </form>
    </AuthLayout>
  )
}
