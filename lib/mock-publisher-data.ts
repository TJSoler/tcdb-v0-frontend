export interface Publisher {
  id: string
  name: string
  slug: string
  logo: string
  description: string
  founded: string
  headquarters: string
  website: string
  featuredSeries: Series[]
  popularCreators: Creator[]
}

export interface Series {
  id: string
  title: string
  coverImage: string
  issueCount: number
}

export interface Creator {
  id: string
  name: string
  role: string
  avatar: string
}

export const mockPublishers: Record<string, Publisher> = {
  marvel: {
    id: "1",
    name: "Marvel",
    slug: "marvel",
    logo: "/placeholder.svg?height=200&width=400",
    description:
      "Marvel Comics is the brand name and primary imprint of Marvel Worldwide Inc., formerly Marvel Publishing, Inc. and Marvel Comics Group, a publisher of American comic books and related media. In 2009, The Walt Disney Company acquired Marvel Entertainment, Marvel Worldwide's parent company.",
    founded: "1939",
    headquarters: "New York City, NY",
    website: "https://www.marvel.com",
    featuredSeries: [
      {
        id: "1",
        title: "Spider-Man",
        coverImage: "/images/cover2.jpg",
        issueCount: 42,
      },
      {
        id: "2",
        title: "Gwenpool",
        coverImage: "/images/cover3.jpg",
        issueCount: 25,
      },
      {
        id: "3",
        title: "X-Men",
        coverImage: "/images/cover5.jpg",
        issueCount: 37,
      },
    ],
    popularCreators: [
      {
        id: "1",
        name: "Stan Lee",
        role: "Writer",
        avatar: "/placeholder.svg?height=100&width=100",
      },
      {
        id: "2",
        name: "Jack Kirby",
        role: "Artist",
        avatar: "/placeholder.svg?height=100&width=100",
      },
      {
        id: "3",
        name: "Steve Ditko",
        role: "Artist",
        avatar: "/placeholder.svg?height=100&width=100",
      },
    ],
  },
  "dc-comics": {
    id: "2",
    name: "DC Comics",
    slug: "dc-comics",
    logo: "/placeholder.svg?height=200&width=400",
    description:
      "DC Comics, Inc. is an American comic book publisher and the flagship unit of DC Entertainment, a subsidiary of Warner Bros. Discovery. DC Comics is one of the largest and oldest American comic book companies, with their first comic under the DC banner being published in 1937.",
    founded: "1934",
    headquarters: "Burbank, CA",
    website: "https://www.dccomics.com",
    featuredSeries: [
      {
        id: "1",
        title: "Batman",
        coverImage: "/placeholder.svg?height=400&width=250",
        issueCount: 58,
      },
      {
        id: "2",
        title: "Superman",
        coverImage: "/placeholder.svg?height=400&width=250",
        issueCount: 45,
      },
      {
        id: "3",
        title: "Wonder Woman",
        coverImage: "/placeholder.svg?height=400&width=250",
        issueCount: 32,
      },
    ],
    popularCreators: [
      {
        id: "1",
        name: "Bob Kane",
        role: "Artist",
        avatar: "/placeholder.svg?height=100&width=100",
      },
      {
        id: "2",
        name: "Jerry Siegel",
        role: "Writer",
        avatar: "/placeholder.svg?height=100&width=100",
      },
      {
        id: "3",
        name: "Joe Shuster",
        role: "Artist",
        avatar: "/placeholder.svg?height=100&width=100",
      },
    ],
  },
  "image-comics": {
    id: "3",
    name: "Image Comics",
    slug: "image-comics",
    logo: "/placeholder.svg?height=200&width=400",
    description:
      "Image Comics is an American comic book publisher and is the third largest comic book and graphic novel publisher in the industry in both market share and number of titles published, after Marvel Comics and DC Comics. Unlike other large publishers such as Marvel and DC, Image Comics functions as a platform for creators to publish their material without giving up the copyrights to the characters they create.",
    founded: "1992",
    headquarters: "Portland, OR",
    website: "https://imagecomics.com",
    featuredSeries: [
      {
        id: "1",
        title: "Invincible",
        coverImage: "/images/cover7.jpg",
        issueCount: 144,
      },
      {
        id: "2",
        title: "The Walking Dead",
        coverImage: "/placeholder.svg?height=400&width=250",
        issueCount: 193,
      },
      {
        id: "3",
        title: "Saga",
        coverImage: "/placeholder.svg?height=400&width=250",
        issueCount: 54,
      },
    ],
    popularCreators: [
      {
        id: "1",
        name: "Robert Kirkman",
        role: "Writer",
        avatar: "/placeholder.svg?height=100&width=100",
      },
      {
        id: "2",
        name: "Todd McFarlane",
        role: "Artist",
        avatar: "/placeholder.svg?height=100&width=100",
      },
      {
        id: "3",
        name: "Brian K. Vaughan",
        role: "Writer",
        avatar: "/placeholder.svg?height=100&width=100",
      },
    ],
  },
}
