import { TextLayout } from "@/components/text-layout/text-layout"
import { TableOfContents } from "@/components/text-layout/table-of-contents"
import { H1, H3, Paragraph, List, Blockquote } from "@/components/text-layout/typography"
import Image from "next/image"

export default function AboutPage() {
  // Table of contents items
  const tocItems = [
    { id: "our-story", text: "Our Story", level: 1 },
    { id: "mission", text: "Our Mission", level: 1 },
    { id: "team", text: "Our Team", level: 1 },
    { id: "values", text: "Our Values", level: 1 },
    { id: "community", text: "Community", level: 1 },
    { id: "partners", text: "Our Partners", level: 1 },
    { id: "contact", text: "Contact Us", level: 1 },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <TextLayout title="About The Comic DB">
        <TableOfContents items={tocItems} />

        <H1 id="our-story">Our Story</H1>
        <Paragraph>
          The Comic DB was founded in 2023 by a group of passionate comic book enthusiasts who wanted to create a
          comprehensive database of comics from around the world. What started as a small project among friends has
          grown into one of the most extensive comic book databases on the web.
        </Paragraph>
        <Paragraph>
          Our journey began when we realized how difficult it was to track our own comic collections and discover new
          titles across different publishers and genres. We wanted to build something that would serve both casual
          readers and dedicated collectors alike.
        </Paragraph>

        <div className="my-8 border-2 border-black p-2">
          <div className="relative w-full" style={{ height: "300px" }}>
            <Image
              src="/placeholder.svg?height=600&width=1200"
              alt="The Comic DB team at Comic-Con 2023"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-sm text-center mt-2">The Comic DB team at Comic-Con 2023</p>
        </div>

        <H1 id="mission">Our Mission</H1>
        <Paragraph>
          At The Comic DB, our mission is to create the most comprehensive, accessible, and user-friendly comic book
          database in the world. We aim to:
        </Paragraph>
        <List
          items={[
            "Catalog every comic book ever published",
            "Provide accurate and detailed information about comics, creators, and publishers",
            "Help readers discover new comics based on their interests",
            "Build tools that make collecting and reading comics more enjoyable",
            "Foster a community of comic book enthusiasts",
          ]}
        />
        <Blockquote citation="John Smith, Founder">
          Comics are more than just entertainment—they're an art form, a cultural touchstone, and for many of us, a
          lifelong passion. The Comic DB exists to celebrate and preserve this medium in all its forms.
        </Blockquote>

        <H1 id="team">Our Team</H1>
        <Paragraph>
          The Comic DB is powered by a dedicated team of comic book lovers, developers, and data specialists. Our
          diverse team brings together expertise from the worlds of publishing, technology, and fandom.
        </Paragraph>
        <Paragraph>
          We're a remote-first company with team members across the globe, united by our love for comics and our
          commitment to building the best possible resource for the comic book community.
        </Paragraph>

        <H1 id="values">Our Values</H1>
        <Paragraph>These core values guide everything we do at The Comic DB:</Paragraph>
        <H3 id="accuracy">Accuracy</H3>
        <Paragraph>
          We're committed to providing the most accurate information possible. Our data is meticulously researched and
          regularly updated.
        </Paragraph>
        <H3 id="inclusivity">Inclusivity</H3>
        <Paragraph>
          Comics come from all over the world and speak to diverse audiences. We strive to represent the full spectrum
          of comics, creators, and readers.
        </Paragraph>
        <H3 id="community">Community-Driven</H3>
        <Paragraph>
          We believe in the power of community. Many of our features and improvements come directly from user feedback
          and contributions.
        </Paragraph>
        <H3 id="accessibility">Accessibility</H3>
        <Paragraph>
          We're dedicated to making The Comic DB accessible to everyone, regardless of ability or experience with
          comics.
        </Paragraph>

        <H1 id="community">Community</H1>
        <Paragraph>
          The Comic DB wouldn't be possible without our amazing community of users. From casual readers to dedicated
          collectors, our users contribute reviews, corrections, and suggestions that help make our database better
          every day.
        </Paragraph>
        <Paragraph>
          We're proud to host forums, reading groups, and virtual events that bring comic fans together. Our community
          is respectful, knowledgeable, and always welcoming to newcomers.
        </Paragraph>

        <H1 id="partners">Our Partners</H1>
        <Paragraph>
          We work with publishers, creators, and retailers to ensure our database is as comprehensive and up-to-date as
          possible. Our partnerships allow us to provide exclusive content, early information about new releases, and
          special features for our users.
        </Paragraph>
        <Paragraph>
          If you're interested in partnering with The Comic DB, please reach out to our partnerships team.
        </Paragraph>

        <H1 id="contact">Contact Us</H1>
        <Paragraph>
          We love hearing from our users! Whether you have a question, suggestion, or just want to chat about comics,
          you can reach us through any of the following channels:
        </Paragraph>
        <List
          items={[
            "Email: info@thecomicdb.com",
            "Twitter: @TheComicDB",
            "Instagram: @thecomicdb",
            "Discord: discord.gg/thecomicdb",
          ]}
        />
        <Paragraph>For press inquiries, please contact press@thecomicdb.com.</Paragraph>
      </TextLayout>
    </div>
  )
}
