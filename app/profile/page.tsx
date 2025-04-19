import Link from "next/link"
import Image from "next/image"
import { Settings, BookOpen, Edit, LogOut } from "lucide-react"

export default function ProfilePage() {
  // Mock user data
  const user = {
    username: "comicfan42",
    name: "Alex Johnson",
    bio: "Comic book enthusiast and collector. Love everything from Marvel to indie publishers. Always looking for recommendations!",
    avatar: "/placeholder.svg?height=200&width=200",
    following: 128,
    followers: 56,
    collections: 3,
    wishlist: 24,
    joinDate: "January 2023",
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        {/* Profile Header */}
        <div className="bg-white border-2 border-black p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            <div className="relative w-32 h-32 border-4 border-black">
              <Image
                src={user.avatar || "/placeholder.svg"}
                alt={user.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 128px, 128px"
                priority
              />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-neon-green border-2 border-black flex items-center justify-center">
                <Edit size={16} className="text-black" />
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl font-black mb-1">{user.name}</h1>
              <p className="text-gray-600 mb-4">@{user.username}</p>
              <p className="mb-4">{user.bio}</p>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Link
                  href="/profile/edit"
                  className="flex items-center gap-2 border-2 border-black px-4 py-2 font-bold hover:border-neon-green hover:text-neon-green transition-colors"
                >
                  <Settings size={18} />
                  Edit Profile
                </Link>
                <button className="flex items-center gap-2 border-2 border-black px-4 py-2 font-bold hover:border-neon-green hover:text-neon-green transition-colors">
                  <LogOut size={18} />
                  Log Out
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="border-2 border-black bg-white p-4 text-center">
            <div className="text-3xl font-black text-neon-green mb-1">{user.collections}</div>
            <div className="font-bold">Collections</div>
          </div>
          <div className="border-2 border-black bg-white p-4 text-center">
            <div className="text-3xl font-black text-neon-green mb-1">{user.wishlist}</div>
            <div className="font-bold">Wishlist</div>
          </div>
          <div className="border-2 border-black bg-white p-4 text-center">
            <div className="text-3xl font-black text-neon-green mb-1">{user.following}</div>
            <div className="font-bold">Following</div>
          </div>
          <div className="border-2 border-black bg-white p-4 text-center">
            <div className="text-3xl font-black text-neon-green mb-1">{user.followers}</div>
            <div className="font-bold">Followers</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b-2 border-black mb-8">
          <div className="flex flex-wrap">
            <button
              className="py-3 px-6 font-bold text-lg transition-colors bg-black text-neon-green border-t-2 border-l-2 border-r-2 border-neon-green"
              aria-selected="true"
              role="tab"
            >
              COLLECTIONS
            </button>
            <button
              className="py-3 px-6 font-bold text-lg transition-colors bg-white hover:text-neon-green border-t-2 border-l-2 border-r-2 border-black"
              aria-selected="false"
              role="tab"
            >
              WISHLIST
            </button>
            <button
              className="py-3 px-6 font-bold text-lg transition-colors bg-white hover:text-neon-green border-t-2 border-l-2 border-r-2 border-black"
              aria-selected="false"
              role="tab"
            >
              ACTIVITY
            </button>
          </div>
        </div>

        {/* Collections */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-black">MY COLLECTIONS</h2>
            <Link
              href="/profile/collections/new"
              className="bg-black text-neon-green border-2 border-neon-green px-4 py-2 font-bold hover:bg-neon-green hover:text-black transition-colors"
            >
              NEW COLLECTION
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Collection 1 */}
            <Link href="/profile/collections/1" className="group">
              <div className="border-2 border-black bg-white transition-all duration-200 group-hover:border-neon-green group-hover:shadow-card group-hover:translate-y-[-2px]">
                <div className="p-4 border-b-2 border-black">
                  <h3 className="text-xl font-bold group-hover:text-neon-green transition-colors">Marvel Collection</h3>
                  <p className="text-gray-600 text-sm">42 comics</p>
                </div>
                <div className="p-4 flex items-center gap-4">
                  <BookOpen size={24} className="text-neon-green" />
                  <div>
                    <p className="text-sm">Last updated: 2 days ago</p>
                    <p className="text-sm text-gray-600">Public</p>
                  </div>
                </div>
              </div>
            </Link>

            {/* Collection 2 */}
            <Link href="/profile/collections/2" className="group">
              <div className="border-2 border-black bg-white transition-all duration-200 group-hover:border-neon-green group-hover:shadow-card group-hover:translate-y-[-2px]">
                <div className="p-4 border-b-2 border-black">
                  <h3 className="text-xl font-bold group-hover:text-neon-green transition-colors">
                    Independent Publishers
                  </h3>
                  <p className="text-gray-600 text-sm">18 comics</p>
                </div>
                <div className="p-4 flex items-center gap-4">
                  <BookOpen size={24} className="text-neon-green" />
                  <div>
                    <p className="text-sm">Last updated: 1 week ago</p>
                    <p className="text-sm text-gray-600">Private</p>
                  </div>
                </div>
              </div>
            </Link>

            {/* Collection 3 */}
            <Link href="/profile/collections/3" className="group">
              <div className="border-2 border-black bg-white transition-all duration-200 group-hover:border-neon-green group-hover:shadow-card group-hover:translate-y-[-2px]">
                <div className="p-4 border-b-2 border-black">
                  <h3 className="text-xl font-bold group-hover:text-neon-green transition-colors">Vintage Comics</h3>
                  <p className="text-gray-600 text-sm">7 comics</p>
                </div>
                <div className="p-4 flex items-center gap-4">
                  <BookOpen size={24} className="text-neon-green" />
                  <div>
                    <p className="text-sm">Last updated: 3 weeks ago</p>
                    <p className="text-sm text-gray-600">Public</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
