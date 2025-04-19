import Link from "next/link"
import { ArrowLeft, Heart, MessageSquare, BookOpen, Plus, UserPlus } from "lucide-react"

export default function ActivityPage() {
  // Mock activity data
  const activities = [
    {
      id: "1",
      type: "collection_add",
      user: {
        username: "comicfan42",
        avatar: "/placeholder.svg?height=50&width=50",
      },
      content: {
        comic: "Deadly Tales of the Gunslinger #6",
        collection: "Western Comics",
      },
      timestamp: "2 hours ago",
    },
    {
      id: "2",
      type: "follow",
      user: {
        username: "comicfan42",
        avatar: "/placeholder.svg?height=50&width=50",
      },
      content: {
        followedUser: "marvelous_comics",
      },
      timestamp: "1 day ago",
    },
    {
      id: "3",
      type: "comment",
      user: {
        username: "comicfan42",
        avatar: "/placeholder.svg?height=50&width=50",
      },
      content: {
        comic: "Invincible #10",
        comment: "This issue was amazing! The artwork is incredible and the story keeps getting better.",
      },
      timestamp: "3 days ago",
    },
    {
      id: "4",
      type: "like",
      user: {
        username: "comicfan42",
        avatar: "/placeholder.svg?height=50&width=50",
      },
      content: {
        comic: "Gwenpool #25",
      },
      timestamp: "1 week ago",
    },
    {
      id: "5",
      type: "collection_create",
      user: {
        username: "comicfan42",
        avatar: "/placeholder.svg?height=50&width=50",
      },
      content: {
        collection: "Marvel Collection",
      },
      timestamp: "2 weeks ago",
    },
  ]

  // Function to render activity based on type
  const renderActivity = (activity: any) => {
    switch (activity.type) {
      case "collection_add":
        return (
          <div className="flex items-start gap-4">
            <div className="bg-neon-green p-2 rounded-full">
              <Plus size={20} className="text-black" />
            </div>
            <div>
              <p>
                Added{" "}
                <Link href="#" className="font-bold hover:text-neon-green">
                  {activity.content.comic}
                </Link>{" "}
                to collection{" "}
                <Link href="#" className="font-bold hover:text-neon-green">
                  {activity.content.collection}
                </Link>
              </p>
              <p className="text-sm text-gray-600">{activity.timestamp}</p>
            </div>
          </div>
        )
      case "follow":
        return (
          <div className="flex items-start gap-4">
            <div className="bg-neon-green p-2 rounded-full">
              <UserPlus size={20} className="text-black" />
            </div>
            <div>
              <p>
                Started following{" "}
                <Link href="#" className="font-bold hover:text-neon-green">
                  @{activity.content.followedUser}
                </Link>
              </p>
              <p className="text-sm text-gray-600">{activity.timestamp}</p>
            </div>
          </div>
        )
      case "comment":
        return (
          <div className="flex items-start gap-4">
            <div className="bg-neon-green p-2 rounded-full">
              <MessageSquare size={20} className="text-black" />
            </div>
            <div>
              <p>
                Commented on{" "}
                <Link href="#" className="font-bold hover:text-neon-green">
                  {activity.content.comic}
                </Link>
              </p>
              <div className="mt-2 p-3 bg-gray-100 rounded-md">
                <p className="text-sm">{activity.content.comment}</p>
              </div>
              <p className="text-sm text-gray-600 mt-1">{activity.timestamp}</p>
            </div>
          </div>
        )
      case "like":
        return (
          <div className="flex items-start gap-4">
            <div className="bg-neon-green p-2 rounded-full">
              <Heart size={20} className="text-black" />
            </div>
            <div>
              <p>
                Liked{" "}
                <Link href="#" className="font-bold hover:text-neon-green">
                  {activity.content.comic}
                </Link>
              </p>
              <p className="text-sm text-gray-600">{activity.timestamp}</p>
            </div>
          </div>
        )
      case "collection_create":
        return (
          <div className="flex items-start gap-4">
            <div className="bg-neon-green p-2 rounded-full">
              <BookOpen size={20} className="text-black" />
            </div>
            <div>
              <p>
                Created a new collection{" "}
                <Link href="#" className="font-bold hover:text-neon-green">
                  {activity.content.collection}
                </Link>
              </p>
              <p className="text-sm text-gray-600">{activity.timestamp}</p>
            </div>
          </div>
        )
      default:
        return null
    }
  }

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
          <h1 className="text-2xl font-black mb-6 border-b-2 border-black pb-2">Activity Feed</h1>

          <div className="space-y-6">
            {activities.map((activity) => (
              <div key={activity.id} className="border-2 border-black p-4">
                {renderActivity(activity)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
