import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, UserPlus, UserCheck } from "lucide-react"

export default function FollowersPage() {
  // Mock followers data
  const followers = [
    {
      id: "1",
      username: "comic_enthusiast",
      name: "Michael Brown",
      avatar: "/placeholder.svg?height=100&width=100",
      bio: "Avid comic reader and collector since 2010.",
      isFollowing: true,
    },
    {
      id: "2",
      username: "superhero_fan",
      name: "Jessica Lee",
      avatar: "/placeholder.svg?height=100&width=100",
      bio: "Superhero comics are my passion. DC and Marvel fan.",
      isFollowing: false,
    },
    {
      id: "3",
      username: "manga_lover",
      name: "Ryan Tanaka",
      avatar: "/placeholder.svg?height=100&width=100",
      bio: "Manga collector and translator.",
      isFollowing: true,
    },
    {
      id: "4",
      username: "indie_comics",
      name: "Olivia Martinez",
      avatar: "/placeholder.svg?height=100&width=100",
      bio: "Supporting independent comic creators and publishers.",
      isFollowing: false,
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/profile"
          className="inline-flex items-center gap-2 mb-6 font-bold hover:text-neon-green transition-colors group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to profile
        </Link>

        <div className="bg-white border-2 border-black p-6 mb-8">
          <div className="flex justify-between items-center mb-6 border-b-2 border-black pb-2">
            <h1 className="text-2xl font-black">Followers</h1>
            <div className="flex gap-4">
              <Link href="/profile/social/following" className="font-bold hover:text-neon-green">
                Following (128)
              </Link>
              <Link href="/profile/social/followers" className="font-bold text-neon-green border-b-2 border-neon-green">
                Followers (56)
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            {followers.map((user) => (
              <div key={user.id} className="border-2 border-black p-4 flex flex-col sm:flex-row gap-4">
                <div className="flex-shrink-0">
                  <Image
                    src={user.avatar || "/placeholder.svg"}
                    alt={user.name}
                    width={80}
                    height={80}
                    className="border-2 border-black"
                  />
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h3 className="font-bold text-lg">{user.name}</h3>
                      <p className="text-gray-600">@{user.username}</p>
                    </div>
                    {user.isFollowing ? (
                      <button className="flex items-center gap-2 border-2 border-neon-green bg-neon-green text-black px-4 py-2 font-bold hover:bg-black hover:text-neon-green transition-colors self-start">
                        <UserCheck size={18} />
                        Following
                      </button>
                    ) : (
                      <button className="flex items-center gap-2 border-2 border-black px-4 py-2 font-bold hover:border-neon-green hover:text-neon-green transition-colors self-start">
                        <UserPlus size={18} />
                        Follow Back
                      </button>
                    )}
                  </div>
                  <p className="mt-2">{user.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
