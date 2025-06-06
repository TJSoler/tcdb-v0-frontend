import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, MapPin, Globe, ExternalLink } from "lucide-react"
import { CreditsTabs } from "@/components/credits/credits-tabs"
import { AwardsSection } from "@/components/credits/awards-section"
import { CareerTimeline } from "@/components/credits/career-timeline"
import { WorkGallery } from "@/components/credits/work-gallery"
import { mockCreator } from "@/lib/mock-creator-data"

export default function CreatorCreditsPage({ params }: { params: { slug: string } }) {
  // In a real app, you would fetch the creator data based on the slug
  const creator = mockCreator

  // Mock awards data
  const awards = [
    {
      name: "Eisner Award",
      year: "2022",
      project: "Cosmic Odyssey",
      category: "Best Writer",
    },
    {
      name: "Harvey Award",
      year: "2021",
      project: "Urban Legends",
      category: "Best Original Series",
    },
    {
      name: "Ringo Award",
      year: "2020",
      project: "Neon Dreams",
      category: "Best Artist",
    },
    {
      name: "Inkpot Award",
      year: "2019",
      category: "Excellence in Comic Book Arts",
    },
    {
      name: "GLAAD Media Award",
      year: "2018",
      project: "The Forgotten Ones",
      category: "Outstanding Comic Book",
    },
  ]

  // Mock timeline events
  const timelineEvents = [
    {
      year: "2008",
      title: "Career Beginning",
      description:
        "Started as an intern at Marvel Comics, working on background art and assisting established artists.",
    },
    {
      year: "2010",
      title: "First Published Work",
      description:
        "Published first professional work as a penciler for an indie comic 'Midnight Tales' which gained critical acclaim.",
    },
    {
      year: "2013",
      title: "Breakthrough Series",
      description:
        "Launched 'Neon Dreams' with Image Comics, establishing a unique art style that would become her signature.",
    },
    {
      year: "2016",
      title: "Expansion to Writing",
      description: "Began writing her own stories, starting with 'The Forgotten Ones' limited series for DC Comics.",
    },
    {
      year: "2019",
      title: "Editorial Role",
      description: "Took on first editorial position, mentoring new talent and curating the 'New Voices Anthology'.",
    },
    {
      year: "2022",
      title: "Industry Recognition",
      description:
        "Won Eisner Award for 'Cosmic Odyssey', cementing position as one of the industry's leading creators.",
    },
  ]

  // Mock gallery images
  const galleryImages = [
    {
      id: "g1",
      src: "/images/cover1.jpg",
      alt: "Cosmic Odyssey Cover Art",
      title: "Cosmic Odyssey Cover Art",
      description:
        "Original cover art for Cosmic Odyssey #1, featuring the main character Nova against a backdrop of stars.",
    },
    {
      id: "g2",
      src: "/images/cover2.jpg",
      alt: "Character Design - Spider-Man",
      title: "Character Design - Spider-Man",
      description:
        "Character design for a variant Spider-Man cover, showcasing Jane's unique take on the iconic character.",
    },
    {
      id: "g3",
      src: "/images/cover3.jpg",
      alt: "Gwenpool Concept Art",
      title: "Gwenpool Concept Art",
      description: "Early concept art for Gwenpool, exploring different costume designs and visual styles.",
    },
    {
      id: "g4",
      src: "/images/cover4.jpg",
      alt: "Harley Quinn Illustration",
      title: "Harley Quinn Illustration",
      description: "Special illustration of Harley Quinn created for Comic-Con 2022.",
    },
    {
      id: "g5",
      src: "/images/cover5.jpg",
      alt: "Gwenpool Action Scene",
      title: "Gwenpool Action Scene",
      description:
        "Dynamic action scene from Gwenpool Strikes Back #3, showcasing Jane's ability to capture movement and energy.",
    },
    {
      id: "g6",
      src: "/images/cover6.jpg",
      alt: "Green Lantern Concept",
      title: "Green Lantern Concept",
      description:
        "Concept art for Green Lantern: Fallen Hero, exploring the visual representation of the character's powers.",
    },
    {
      id: "g7",
      src: "/images/cover7.jpg",
      alt: "Invincible Cover Art",
      title: "Invincible Cover Art",
      description: "Guest cover art for Invincible #10, featuring Jane's distinctive style applied to the character.",
    },
    {
      id: "g8",
      src: "/images/cover8.jpg",
      alt: "Dandadan Character Design",
      title: "Dandadan Character Design",
      description:
        "Character design work for the English edition of Dandadan, adapting the manga style while maintaining its essence.",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb navigation */}
      <nav className="breadcrumb mb-6" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center">
          <li className="breadcrumb-item">
            <Link href="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link href="/credits">Credits</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {creator.name}
          </li>
        </ol>
      </nav>

      <Link
        href="/credits"
        className="inline-flex items-center gap-2 mb-6 font-bold hover:text-neon-green transition-colors group"
      >
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        Back to credits
      </Link>

      {/* Creator Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="md:col-span-1">
          <div className="sticky top-24">
            <div className="border-4 border-black relative w-full aspect-square shadow-elevated">
              <div className="absolute inset-0 border-4 border-neon-green opacity-75"></div>
              <Image
                src={creator.photo || "/placeholder.svg"}
                alt={creator.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex items-center p-3 border-2 border-black bg-white">
                <Calendar size={20} className="mr-3 text-neon-green flex-shrink-0" />
                <div>
                  <span className="text-sm text-gray-600">Born</span>
                  <p className="font-bold">{creator.born}</p>
                </div>
              </div>
              <div className="flex items-center p-3 border-2 border-black bg-white">
                <MapPin size={20} className="mr-3 text-neon-green flex-shrink-0" />
                <div>
                  <span className="text-sm text-gray-600">Nationality</span>
                  <p className="font-bold">{creator.nationality}</p>
                </div>
              </div>
              <div className="flex items-center p-3 border-2 border-black bg-white">
                <Globe size={20} className="mr-3 text-neon-green flex-shrink-0" />
                <div>
                  <span className="text-sm text-gray-600">Active Since</span>
                  <p className="font-bold">{creator.activeSince}</p>
                </div>
              </div>
              {creator.website && (
                <a
                  href={creator.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 border-2 border-black bg-white hover:border-neon-green transition-colors"
                >
                  <ExternalLink size={20} className="mr-3 text-neon-green flex-shrink-0" />
                  <div>
                    <span className="text-sm text-gray-600">Website</span>
                    <p className="font-bold text-neon-green">{creator.website.replace(/^https?:\/\//, "")}</p>
                  </div>
                </a>
              )}
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-bold border-b-2 border-black mb-4 pb-1">SOCIAL</h3>
              <div className="flex flex-wrap gap-3">
                {creator.social.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[120px] border-2 border-black p-3 text-center font-bold hover:bg-black hover:text-neon-green hover:border-neon-green transition-colors"
                  >
                    {social.platform.toUpperCase()}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="bg-white border-2 border-black p-6 shadow-card mb-8">
            <h1 className="text-4xl font-black mb-3">{creator.name.toUpperCase()}</h1>
            <div className="flex flex-wrap gap-2 mb-4">
              {creator.roles.map((role) => (
                <span key={role} className="bg-neon-green text-black px-3 py-1 text-sm font-bold">
                  {role.toUpperCase()}
                </span>
              ))}
            </div>
            <div className="mb-6">
              {/* Change gradient from neon-green to black to neon-green to neon-yellow */}
              <div className="h-1 w-full bg-gradient-to-r from-neon-green to-neon-yellow mb-4"></div>
              <p className="text-lg leading-relaxed">{creator.bio}</p>
            </div>
          </div>

          {/* Work Gallery */}
          <WorkGallery images={galleryImages} />

          {/* Career Timeline */}
          <CareerTimeline events={timelineEvents} />

          {/* Awards Section */}
          <AwardsSection awards={awards} />

          {/* Credits Tabs Section */}
          <CreditsTabs creator={creator} />
        </div>
      </div>
    </div>
  )
}
