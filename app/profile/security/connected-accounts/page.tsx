import Link from "next/link"
import { ArrowLeft, Github, Facebook, Trash2 } from "lucide-react"

export default function ConnectedAccountsPage() {
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
          <h1 className="text-2xl font-black mb-6 border-b-2 border-black pb-2">Connected Accounts</h1>

          <div className="space-y-6">
            <p className="text-gray-600">Connect your social accounts to enable social login and sharing features.</p>

            {/* Connected Accounts List */}
            <div className="space-y-4">
              {/* GitHub */}
              <div className="border-2 border-black p-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Github size={24} />
                  <div>
                    <h3 className="font-bold">GitHub</h3>
                    <p className="text-sm text-gray-600">Connected as @comicfan42</p>
                  </div>
                </div>
                <button className="text-red-500 hover:text-red-700 transition-colors">
                  <Trash2 size={20} />
                </button>
              </div>

              {/* Facebook - Not Connected */}
              <div className="border-2 border-black p-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Facebook size={24} />
                  <div>
                    <h3 className="font-bold">Facebook</h3>
                    <p className="text-sm text-gray-600">Not connected</p>
                  </div>
                </div>
                <button className="border-2 border-black px-4 py-1 text-sm font-bold hover:border-neon-green hover:text-neon-green transition-colors">
                  Connect
                </button>
              </div>
            </div>

            <div className="pt-6 border-t-2 border-gray-200">
              <h2 className="text-xl font-bold mb-4">Account Security</h2>
              <p className="text-gray-600 mb-4">
                Connecting social accounts provides an additional layer of security and makes it easier to log in.
              </p>
              <Link
                href="/profile/security/password"
                className="font-bold text-neon-green hover:underline transition-colors"
              >
                Change your password
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
