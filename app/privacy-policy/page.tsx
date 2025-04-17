import { TextLayout } from "@/components/text-layout/text-layout"
import { TableOfContents } from "@/components/text-layout/table-of-contents"
import { H1, H2, Paragraph, List, Blockquote } from "@/components/text-layout/typography"

export default function PrivacyPolicyPage() {
  // Table of contents items
  const tocItems = [
    { id: "introduction", text: "Introduction", level: 1 },
    { id: "information-collection", text: "Information Collection", level: 1 },
    { id: "personal-information", text: "Personal Information", level: 2 },
    { id: "usage-data", text: "Usage Data", level: 2 },
    { id: "cookies", text: "Cookies", level: 2 },
    { id: "information-use", text: "How We Use Your Information", level: 1 },
    { id: "information-sharing", text: "Information Sharing", level: 1 },
    { id: "third-party-services", text: "Third-Party Services", level: 2 },
    { id: "legal-requirements", text: "Legal Requirements", level: 2 },
    { id: "data-security", text: "Data Security", level: 1 },
    { id: "user-rights", text: "Your Rights", level: 1 },
    { id: "children-privacy", text: "Children's Privacy", level: 1 },
    { id: "changes", text: "Changes to This Privacy Policy", level: 1 },
    { id: "contact", text: "Contact Us", level: 1 },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <TextLayout title="Privacy Policy">
        <TableOfContents items={tocItems} />

        <H1 id="introduction">Introduction</H1>
        <Paragraph>
          Welcome to The Comic DB. We respect your privacy and are committed to protecting your personal data. This
          privacy policy will inform you about how we look after your personal data when you visit our website and tell
          you about your privacy rights and how the law protects you.
        </Paragraph>
        <Paragraph>Please read this privacy policy carefully before using our Service.</Paragraph>

        <H1 id="information-collection">Information Collection</H1>
        <Paragraph>
          We collect several different types of information for various purposes to provide and improve our Service to
          you.
        </Paragraph>

        <H2 id="personal-information">Personal Information</H2>
        <Paragraph>
          While using our Service, we may ask you to provide us with certain personally identifiable information that
          can be used to contact or identify you. Personally identifiable information may include, but is not limited
          to:
        </Paragraph>
        <List
          items={[
            "Email address",
            "First name and last name",
            "Phone number",
            "Address, State, Province, ZIP/Postal code, City",
            "Cookies and Usage Data",
          ]}
        />

        <H2 id="usage-data">Usage Data</H2>
        <Paragraph>
          We may also collect information on how the Service is accessed and used. This Usage Data may include
          information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser
          version, the pages of our Service that you visit, the time and date of your visit, the time spent on those
          pages, unique device identifiers and other diagnostic data.
        </Paragraph>

        <H2 id="cookies">Cookies</H2>
        <Paragraph>
          We use cookies and similar tracking technologies to track the activity on our Service and hold certain
          information.
        </Paragraph>
        <Paragraph>
          Cookies are files with a small amount of data which may include an anonymous unique identifier. Cookies are
          sent to your browser from a website and stored on your device. Tracking technologies also used are beacons,
          tags, and scripts to collect and track information and to improve and analyze our Service.
        </Paragraph>
        <Paragraph>
          You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if
          you do not accept cookies, you may not be able to use some portions of our Service.
        </Paragraph>
        <Blockquote citation="Data Protection Act">
          Users have the right to be informed about the collection and use of their personal data.
        </Blockquote>

        <H1 id="information-use">How We Use Your Information</H1>
        <Paragraph>The Comic DB uses the collected data for various purposes:</Paragraph>
        <List
          items={[
            "To provide and maintain our Service",
            "To notify you about changes to our Service",
            "To allow you to participate in interactive features of our Service when you choose to do so",
            "To provide customer support",
            "To gather analysis or valuable information so that we can improve our Service",
            "To monitor the usage of our Service",
            "To detect, prevent and address technical issues",
          ]}
        />

        <H1 id="information-sharing">Information Sharing</H1>
        <Paragraph>We may share your personal information in the following situations:</Paragraph>

        <H2 id="third-party-services">Third-Party Services</H2>
        <Paragraph>
          We may employ third-party companies and individuals to facilitate our Service, to provide the Service on our
          behalf, to perform Service-related services or to assist us in analyzing how our Service is used.
        </Paragraph>
        <Paragraph>
          These third parties have access to your Personal Data only to perform these tasks on our behalf and are
          obligated not to disclose or use it for any other purpose.
        </Paragraph>

        <H2 id="legal-requirements">Legal Requirements</H2>
        <Paragraph>
          The Comic DB may disclose your Personal Data in the good faith belief that such action is necessary to:
        </Paragraph>
        <List
          items={[
            "To comply with a legal obligation",
            "To protect and defend the rights or property of The Comic DB",
            "To prevent or investigate possible wrongdoing in connection with the Service",
            "To protect the personal safety of users of the Service or the public",
            "To protect against legal liability",
          ]}
        />

        <H1 id="data-security">Data Security</H1>
        <Paragraph>
          The security of your data is important to us, but remember that no method of transmission over the Internet,
          or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to
          protect your Personal Data, we cannot guarantee its absolute security.
        </Paragraph>

        <H1 id="user-rights">Your Rights</H1>
        <Paragraph>
          The Comic DB aims to take reasonable steps to allow you to correct, amend, delete, or limit the use of your
          Personal Data.
        </Paragraph>
        <Paragraph>
          If you wish to be informed what Personal Data we hold about you and if you want it to be removed from our
          systems, please contact us.
        </Paragraph>
        <Paragraph>In certain circumstances, you have the following data protection rights:</Paragraph>
        <List
          items={[
            "The right to access, update or to delete the information we have on you",
            "The right of rectification",
            "The right to object",
            "The right of restriction",
            "The right to data portability",
            "The right to withdraw consent",
          ]}
        />

        <H1 id="children-privacy">Children's Privacy</H1>
        <Paragraph>
          Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable
          information from anyone under the age of 13. If you are a parent or guardian and you are aware that your child
          has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data
          from children without verification of parental consent, we take steps to remove that information from our
          servers.
        </Paragraph>

        <H1 id="changes">Changes to This Privacy Policy</H1>
        <Paragraph>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
          Privacy Policy on this page.
        </Paragraph>
        <Paragraph>
          We will let you know via email and/or a prominent notice on our Service, prior to the change becoming
          effective and update the "effective date" at the top of this Privacy Policy.
        </Paragraph>
        <Paragraph>
          You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are
          effective when they are posted on this page.
        </Paragraph>

        <H1 id="contact">Contact Us</H1>
        <Paragraph>If you have any questions about this Privacy Policy, please contact us:</Paragraph>
        <List
          items={[
            "By email: privacy@thecomicdb.com",
            "By visiting this page on our website: www.thecomicdb.com/contact",
            "By phone number: +1 123 456 7890",
          ]}
        />
      </TextLayout>
    </div>
  )
}
