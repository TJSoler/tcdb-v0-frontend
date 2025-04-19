import Link from "next/link"
import { ArrowLeft, Key, Link2, Shield, Bell } from "lucide-react"

export default function SecuritySettingsPage() {
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
          <h1 className="text-2xl font-black mb-6 border-b-2 border-black pb-2">Security Settings</h1>

          <div className="space-y-8">
            {/* Password Section */}
            <div className="border-2 border-black p-4">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-neon-green p-3 rounded-full">
                  <Key size={24} className="text-black" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">Password</h2>
                  <p className="text-gray-600">Manage your account password</p>
                </div>
              </div>
              <div className="pl-14">
                <p className="mb-4">
                  Your password was last changed <strong>3 months ago</strong>. We recommend changing your password
                  regularly for security.
                </p>
                <Link
                  href="/profile/security/password"
                  className="border-2 border-black px-4 py-2 font-bold hover:border-neon-green hover:text-neon-green transition-colors inline-block"
                >
                  Change Password
                </Link>
              </div>
            </div>

            {/* Connected Accounts Section */}
            <div className="border-2 border-black p-4">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-neon-green p-3 rounded-full">
                  <Link2 size={24} className="text-black" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">Connected Accounts</h2>
                  <p className="text-gray-600">Manage your connected social accounts</p>
                </div>
              </div>
              <div className="pl-14">
                <p className="mb-4">
                  You have <strong>1 account</strong> connected to your profile. Connected accounts can be used for
                  login and sharing.
                </p>
                <Link
                  href="/profile/security/connected-accounts"
                  className="border-2 border-black px-4 py-2 font-bold hover:border-neon-green hover:text-neon-green transition-colors inline-block"
                >
                  Manage Connected Accounts
                </Link>
              </div>
            </div>

            {/* Account Activity Section */}
            <div className="border-2 border-black p-4">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-neon-green p-3 rounded-full">
                  <Shield size={24} className="text-black" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">Account Activity</h2>
                  <p className="text-gray-600">Review your recent account activity</p>
                </div>
              </div>
              <div className="pl-14">
                <p className="mb-4">
                  Monitor your recent logins and account activity to ensure your account hasn't been compromised.
                </p>
                <Link
                  href="/profile/security/activity"
                  className="border-2 border-black px-4 py-2 font-bold hover:border-neon-green hover:text-neon-green transition-colors inline-block"
                >
                  View Account Activity
                </Link>
              </div>
            </div>

            {/* Notification Settings Section */}
            <div className="border-2 border-black p-4">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-neon-green p-3 rounded-full">
                  <Bell size={24} className="text-black" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">Security Notifications</h2>
                  <p className="text-gray-600">Manage your security notification preferences</p>
                </div>
              </div>
              <div className="pl-14">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <input
                      id="login-alerts"
                      name="login-alerts"
                      type="checkbox"
                      className="h-4 w-4 border-2 border-black focus:ring-neon-green"
                      defaultChecked
                    />
                    <label htmlFor="login-alerts" className="ml-2 block">
                      Email me about new logins to my account
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="password-change"
                      name="password-change"
                      type="checkbox"
                      className="h-4 w-4 border-2 border-black focus:ring-neon-green"
                      defaultChecked
                    />
                    <label htmlFor="password-change" className="ml-2 block">
                      Email me when my password is changed
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="security-updates"
                      name="security-updates"
                      type="checkbox"
                      className="h-4 w-4 border-2 border-black focus:ring-neon-green"
                      defaultChecked
                    />
                    <label htmlFor="security-updates" className="ml-2 block">
                      Receive security tips and updates
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
