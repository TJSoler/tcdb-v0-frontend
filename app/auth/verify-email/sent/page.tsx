import Link from "next/link"
import { Mail, RefreshCw } from "lucide-react"
import { AuthLayout } from "@/components/auth/auth-layout"

export default function VerifyEmailSentPage() {
  return (
    <AuthLayout
      title="Check Your Email"
      description="We've sent a verification link to your email address."
      showBackLink={false}
    >
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-neon-green rounded-full flex items-center justify-center">
            <Mail size={32} className="text-black" />
          </div>
        </div>

        <p className="mb-6">
          Please check your inbox and click on the verification link to complete your registration.
        </p>

        <div className="mb-6">
          <p className="text-gray-600 mb-2">Didn't receive the email?</p>
          <button className="flex items-center justify-center gap-2 mx-auto font-bold hover:text-neon-green transition-colors">
            <RefreshCw size={16} />
            Resend verification email
          </button>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <Link href="/auth/login" className="font-bold hover:text-neon-green transition-colors">
            Back to login
          </Link>
        </div>
      </div>
    </AuthLayout>
  )
}
