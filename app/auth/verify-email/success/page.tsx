import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { AuthLayout } from "@/components/auth/auth-layout"

export default function VerifyEmailSuccessPage() {
  return (
    <AuthLayout title="Email Verified" description="Your email has been successfully verified." showBackLink={false}>
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-neon-green rounded-full flex items-center justify-center">
            <CheckCircle size={32} className="text-black" />
          </div>
        </div>

        <p className="mb-6">
          Thank you for verifying your email address. Your account is now active and you can start using all features.
        </p>

        <Link
          href="/auth/login"
          className="inline-block bg-black text-neon-green border-2 border-neon-green px-6 py-3 font-bold hover:bg-neon-green hover:text-black transition-colors"
        >
          LOG IN TO YOUR ACCOUNT
        </Link>
      </div>
    </AuthLayout>
  )
}
