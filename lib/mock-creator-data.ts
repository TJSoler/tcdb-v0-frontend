export interface Social {
  platform: string
  handle: string
  url: string
}

export interface Project {
  id: string
  title: string
  role: string
  year?: string
  publisher?: string
  description: string
  coverImage?: string
  link?: string
}

export interface Credits {
  [category: string]: Project[]
}

export interface Creator {
  id: string
  name: string
  slug: string
  roles: string[]
  bio: string
  photo: string
  born: string
  nationality: string
  activeSince: string
  website?: string
  social: Social[]
  credits: Credits
}

export const mockCreator: Creator = {
  id: "1",
  name: "Jane Smith",
  slug: "jane-smith",
  roles: ["Writer", "Artist", "Editor"],
  bio: "Jane Smith is an award-winning comic book creator known for her distinctive art style and compelling storytelling. With over a decade of experience in the industry, she has worked with major publishers including Marvel, DC, and Image Comics. Her work often explores themes of identity, technology, and social justice.",
  photo: "/placeholder.svg?height=800&width=800",
  born: "April 12, 1985",
  nationality: "Canadian",
  activeSince: "2008",
  website: "https://janesmith.example.com",
  social: [
    {
      platform: "Twitter",
      handle: "@janesmith",
      url: "https://twitter.com/janesmith",
    },
    {
      platform: "Instagram",
      handle: "@janesmith_art",
      url: "https://instagram.com/janesmith_art",
    },
    {
      platform: "Behance",
      handle: "janesmith",
      url: "https://behance.net/janesmith",
    },
  ],
  credits: {
    Writer: [
      {
        id: "w1",
        title: "Cosmic Odyssey",
        role: "Writer",
        year: "2023",
        publisher: "Image Comics",
        description:
          "A sci-fi epic following the journey of a diverse crew of explorers as they navigate the unknown reaches of space, encountering alien civilizations and cosmic phenomena.",
        coverImage: "/images/cover1.jpg",
        link: "/comic/1",
      },
      {
        id: "w2",
        title: "Urban Legends",
        role: "Writer",
        year: "2021",
        publisher: "Dark Horse",
        description:
          "An anthology series exploring modern urban legends and their impact on contemporary society, blending horror, mystery, and social commentary.",
        coverImage: "/images/cover2.jpg",
        link: "/comic/2",
      },
      {
        id: "w3",
        title: "The Forgotten Ones",
        role: "Writer",
        year: "2019",
        publisher: "DC Comics",
        description:
          "A limited series focusing on lesser-known characters in the DC universe, giving them depth and bringing their stories to the forefront.",
        coverImage: "/images/cover3.jpg",
        link: "/comic/3",
      },
      {
        id: "w4",
        title: "Tomorrow's Promise",
        role: "Writer",
        year: "2018",
        publisher: "Marvel",
        description:
          "A coming-of-age story set in a near-future world where technological advancements have drastically changed society and human relationships.",
        coverImage: "/images/cover4.jpg",
        link: "/comic/4",
      },
    ],
    Artist: [
      {
        id: "a1",
        title: "Neon Dreams",
        role: "Artist",
        year: "2022",
        publisher: "Image Comics",
        description:
          "A cyberpunk thriller set in a dystopian future where virtual reality and reality have become indistinguishable, featuring Jane's signature neon-infused art style.",
        coverImage: "/images/cover5.jpg",
        link: "/comic/5",
      },
      {
        id: "a2",
        title: "Heroes of Yesterday",
        role: "Artist",
        year: "2020",
        publisher: "Marvel",
        description:
          "A nostalgic look at Golden Age superheroes, reimagined for modern audiences with Jane's distinctive blend of classic and contemporary art techniques.",
        coverImage: "/images/cover6.jpg",
        link: "/comic/6",
      },
      {
        id: "a3",
        title: "Shadows and Light",
        role: "Artist",
        year: "2017",
        publisher: "DC Comics",
        description:
          "A Batman mini-series exploring the psychological aspects of the character through innovative visual storytelling and experimental page layouts.",
        coverImage: "/images/cover7.jpg",
        link: "/comic/7",
      },
    ],
    Editor: [
      {
        id: "e1",
        title: "New Voices Anthology",
        role: "Editor-in-Chief",
        year: "2023",
        publisher: "Independent",
        description:
          "A collection of short comics from emerging creators, curated and edited by Jane to showcase diverse perspectives and innovative storytelling approaches.",
        coverImage: "/images/cover8.jpg",
      },
      {
        id: "e2",
        title: "Reimagining Classics",
        role: "Editor",
        year: "2021",
        publisher: "Fantagraphics",
        description:
          "An anthology series where contemporary creators reinterpret classic literary works through the medium of comics, bringing new life to timeless stories.",
      },
      {
        id: "e3",
        title: "Digital Frontiers",
        role: "Contributing Editor",
        year: "2019",
        publisher: "BOOM! Studios",
        description:
          "A groundbreaking digital-first comics initiative exploring the possibilities of interactive and animated elements in comic storytelling.",
      },
    ],
    Colorist: [
      {
        id: "c1",
        title: "Vibrant Worlds",
        role: "Colorist",
        year: "2022",
        publisher: "Image Comics",
        description:
          "A fantasy series known for its lush, vibrant color palette that brings alien worlds and magical realms to life through Jane's innovative coloring techniques.",
      },
      {
        id: "c2",
        title: "Emotional Spectrum",
        role: "Colorist",
        year: "2020",
        publisher: "DC Comics",
        description:
          "A Green Lantern story where Jane's color work plays a crucial role in conveying the emotional spectrum powers central to the narrative.",
      },
    ],
  },
}
