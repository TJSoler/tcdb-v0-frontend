import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Upload } from "lucide-react"
import { FormInput } from "@/components/auth/form-input"

export default function EditProfilePage() {
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
          <h1 className="text-2xl font-black mb-6 border-b-2 border-black pb-2">Edit Profile</h1>

          <form className="space-y-6">
            {/* Profile Picture */}
            <div className="mb-6">
              <label className="block font-bold mb-2">Profile Picture</label>
              <div className="flex items-center gap-4">
                <div className="relative w-24 h-24 border-2 border-black">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Profile picture"
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </div>
                <div>
                  <button
                    type="button"
                    className="flex items-center gap-2 border-2 border-black px-4 py-2 font-bold hover:border-neon-green hover:text-neon-green transition-colors"
                  >
                    <Upload size={18} />
                    Upload New Picture
                  </button>
                  <p className="text-sm text-gray-600 mt-1">JPG, GIF or PNG. Max size 2MB.</p>
                </div>
              </div>
            </div>

            {/* Basic Information */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold">Basic Information</h2>
              <FormInput id="username" label="Username" required placeholder="Your username" />
              <FormInput id="name" label="Display Name" placeholder="Your full name" />
              <div className="mb-4">
                <label htmlFor="bio" className="block font-bold mb-1">
                  Bio
                </label>
                <textarea
                  id="bio"
                  rows={4}
                  className="w-full border-2 border-black p-3 focus:outline-none focus:border-neon-green transition-colors"
                  placeholder="Tell us about yourself..."
                ></textarea>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold">Contact Information</h2>
              <FormInput id="email" label="Email" type="email" required placeholder="your.email@example.com" />
              <FormInput id="website" label="Website" type="url" placeholder="https://yourwebsite.com" />
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold">Social Media</h2>
              <FormInput id="twitter" label="Twitter" placeholder="@username" />
              <FormInput id="instagram" label="Instagram" placeholder="@username" />
              <FormInput id="facebook" label="Facebook" placeholder="username or profile URL" />
            </div>

            {/* Privacy Settings */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold">Privacy Settings</h2>
              <div className="flex items-center">
                <input
                  id="public-profile"
                  name="public-profile"
                  type="checkbox"
                  className="h-4 w-4 border-2 border-black focus:ring-neon-green"
                />
                <label htmlFor="public-profile" className="ml-2 block text-sm">
                  Make my profile public
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="show-collections"
                  name="show-collections"
                  type="checkbox"
                  className="h-4 w-4 border-2 border-black focus:ring-neon-green"
                />
                <label htmlFor="show-collections" className="ml-2 block text-sm">
                  Show my collections to other users
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="show-activity"
                  name="show-activity"
                  type="checkbox"
                  className="h-4 w-4 border-2 border-black focus:ring-neon-green"
                />
                <label htmlFor="show-activity" className="ml-2 block text-sm">
                  Show my activity in the community feed
                </label>
              </div>
            </div>

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
                SAVE CHANGES
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
