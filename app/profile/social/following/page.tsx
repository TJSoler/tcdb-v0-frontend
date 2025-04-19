import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, UserMinus } from "lucide-react"

export default function FollowingPage() {
  // Mock following data
  const following = [
    {
      id: "1",
      username: "marvelous_comics",
      name: "Sarah Parker",
      avatar: "/placeholder.svg?height=100&width=100",
      bio: "Comic artist and writer. Creator of 'Midnight Tales'.",
      isFollowing: true,
    },
    {
      id: "2",
      username: "comic_collector",
      name: "James Wilson",
      avatar: "/placeholder.svg?height=100&width=100",
      bio: "Vintage comic collector and historian.",
      isFollowing: true,
    },
    {
      id: "3",
      username: "ink_master",
      name: "David Chen",
      avatar: "/placeholder.svg?height=100&width=100",
      bio: "Professional comic book inker working with major publishers.",
      isFollowing: true,
    },
    {
      id: "4",
      username: "comic_guru",
      name: "Emily Rodriguez",
      avatar: "/placeholder.svg?height=100&width=100",
      bio: "Comic book reviewer and podcast host.",
      isFollowing: true,
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
            <h1 className="text-2xl font-black">Following</h1>
            <div className="flex gap-4">
              <Link href="/profile/social/following" className="font-bold text-neon-green border-b-2 border-neon-green">
                Following (128)
              </Link>
              <Link href="/profile/social/followers" className="font-bold hover:text-neon-green">
                Followers (56)
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            {following.map((user) => (
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
                    <button className="flex items-center gap-2 border-2 border-black px-4 py-2 font-bold hover:border-red-500 hover:text-red-500 transition-colors self-start">
                      <UserMinus size={18} />
                      Unfollow
                    </button>
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
