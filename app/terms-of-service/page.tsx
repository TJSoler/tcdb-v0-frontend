import { TextLayout } from "@/components/text-layout/text-layout"
import { TableOfContents } from "@/components/text-layout/table-of-contents"
import { H1, H2, Paragraph, List, Blockquote } from "@/components/text-layout/typography"

export default function TermsOfServicePage() {
  // Table of contents items
  const tocItems = [
    { id: "introduction", text: "Introduction", level: 1 },
    { id: "definitions", text: "Definitions", level: 1 },
    { id: "account", text: "Your Account", level: 1 },
    { id: "content", text: "Content on the Service", level: 1 },
    { id: "prohibited-uses", text: "Prohibited Uses", level: 1 },
    { id: "intellectual-property", text: "Intellectual Property", level: 1 },
    { id: "copyright", text: "Copyright Policy", level: 2 },
    { id: "dmca", text: "DMCA Notice and Procedure", level: 2 },
    { id: "termination", text: "Termination", level: 1 },
    { id: "limitation-liability", text: "Limitation of Liability", level: 1 },
    { id: "disclaimer", text: "Disclaimer", level: 1 },
    { id: "governing-law", text: "Governing Law", level: 1 },
    { id: "changes", text: "Changes to Terms", level: 1 },
    { id: "contact", text: "Contact Us", level: 1 },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <TextLayout title="Terms of Service">
        <TableOfContents items={tocItems} />

        <H1 id="introduction">Introduction</H1>
        <Paragraph>
          Welcome to The Comic DB. These Terms of Service govern your use of our website located at www.thecomicdb.com
          and form a binding contractual agreement between you, the user of the Site and us, The Comic DB.
        </Paragraph>
        <Paragraph>
          By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the
          terms, then you may not access the Service.
        </Paragraph>

        <H1 id="definitions">Definitions</H1>
        <Paragraph>For the purposes of these Terms of Service:</Paragraph>
        <List
          items={[
            <span key="service">
              <strong>Service</strong> refers to the Website.
            </span>,
            <span key="terms">
              <strong>Terms</strong> refer to these Terms of Service.
            </span>,
            <span key="user">
              <strong>User</strong> refers to the individual accessing or using the Service, or the company, or other
              legal entity on behalf of which such individual is accessing or using the Service, as applicable.
            </span>,
            <span key="website">
              <strong>Website</strong> refers to The Comic DB, accessible from www.thecomicdb.com
            </span>,
            <span key="you">
              <strong>You</strong> means the individual accessing or using the Service, or the company, or other legal
              entity on behalf of which such individual is accessing or using the Service, as applicable.
            </span>,
          ]}
        />

        <H1 id="account">Your Account</H1>
        <Paragraph>
          When you create an account with us, you must provide information that is accurate, complete, and current at
          all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of
          your account on our Service.
        </Paragraph>
        <Paragraph>
          You are responsible for safeguarding the password that you use to access the Service and for any activities or
          actions under your password, whether your password is with our Service or a third-party service.
        </Paragraph>
        <Paragraph>
          You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware
          of any breach of security or unauthorized use of your account.
        </Paragraph>

        <H1 id="content">Content on the Service</H1>
        <Paragraph>
          Our Service allows you to post, link, store, share and otherwise make available certain information, text,
          graphics, videos, or other material. You are responsible for the content that you post on or through the
          Service, including its legality, reliability, and appropriateness.
        </Paragraph>
        <Paragraph>By posting content on or through the Service, You represent and warrant that:</Paragraph>
        <List
          items={[
            "The content is yours (you own it) or you have the right to use it and grant us the rights and license as provided in these Terms.",
            "The posting of your content on or through the Service does not violate the privacy rights, publicity rights, copyrights, contract rights or any other rights of any person.",
          ]}
        />
        <Paragraph>
          We reserve the right to terminate the account of anyone found to be infringing on a copyright.
        </Paragraph>

        <H1 id="prohibited-uses">Prohibited Uses</H1>
        <Paragraph>
          You may use the Service only for lawful purposes and in accordance with the Terms. You agree not to use the
          Service:
        </Paragraph>
        <List
          items={[
            "In any way that violates any applicable national or international law or regulation.",
            "For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way by exposing them to inappropriate content, asking for personally identifiable information, or otherwise.",
            'To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail", "chain letter", "spam", or any other similar solicitation.',
            "To impersonate or attempt to impersonate the Company, a Company employee, another user, or any other person or entity.",
            "In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or harmful, or in connection with any unlawful, illegal, fraudulent, or harmful purpose or activity.",
          ]}
        />

        <H1 id="intellectual-property">Intellectual Property</H1>
        <Paragraph>
          The Service and its original content (excluding Content provided by users), features and functionality are and
          will remain the exclusive property of The Comic DB and its licensors. The Service is protected by copyright,
          trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may
          not be used in connection with any product or service without the prior written consent of The Comic DB.
        </Paragraph>

        <H2 id="copyright">Copyright Policy</H2>
        <Paragraph>
          We respect the intellectual property rights of others. It is our policy to respond to any claim that Content
          posted on the Service infringes on the copyright or other intellectual property rights of any person or
          entity.
        </Paragraph>

        <H2 id="dmca">DMCA Notice and Procedure</H2>
        <Paragraph>
          If you are a copyright owner, or authorized on behalf of one, and you believe that the copyrighted work has
          been copied in a way that constitutes copyright infringement, please submit your claim via email to
          dmca@thecomicdb.com, with the subject line: "Copyright Infringement" and include in your claim a detailed
          description of the alleged infringement.
        </Paragraph>

        <Paragraph>
          You may be held accountable for damages (including costs and attorneys' fees) for misrepresentation or
          bad-faith claims on the infringement of any Content found on and/or through the Service on your copyright.
        </Paragraph>

        <H1 id="termination">Termination</H1>
        <Paragraph>
          We may terminate or suspend your account immediately, without prior notice or liability, for any reason
          whatsoever, including without limitation if you breach the Terms.
        </Paragraph>
        <Paragraph>
          Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account,
          you may simply discontinue using the Service.
        </Paragraph>
        <Blockquote citation="Legal Notice">
          All provisions of the Terms which by their nature should survive termination shall survive termination,
          including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of
          liability.
        </Blockquote>

        <H1 id="limitation-liability">Limitation of Liability</H1>
        <Paragraph>
          In no event shall The Comic DB, nor its directors, employees, partners, agents, suppliers, or affiliates, be
          liable for any indirect, incidental, special, consequential or punitive damages, including without limitation,
          loss of profits, data, use, goodwill, or other intangible losses, resulting from:
        </Paragraph>
        <List
          items={[
            "Your access to or use of or inability to access or use the Service;",
            "Any conduct or content of any third party on the Service;",
            "Any content obtained from the Service; and",
            "Unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage.",
          ]}
        />

        <H1 id="disclaimer">Disclaimer</H1>
        <Paragraph>
          Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis.
          The Service is provided without warranties of any kind, whether express or implied, including, but not limited
          to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of
          performance.
        </Paragraph>
        <Paragraph>
          The Comic DB, its subsidiaries, affiliates, and its licensors do not warrant that a) the Service will function
          uninterrupted, secure or available at any particular time or location; b) any errors or defects will be
          corrected; c) the Service is free of viruses or other harmful components; or d) the results of using the
          Service will meet your requirements.
        </Paragraph>

        <H1 id="governing-law">Governing Law</H1>
        <Paragraph>
          These Terms shall be governed and construed in accordance with the laws of the United States, without regard
          to its conflict of law provisions.
        </Paragraph>
        <Paragraph>
          Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
          If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of
          these Terms will remain in effect.
        </Paragraph>

        <H1 id="changes">Changes to Terms</H1>
        <Paragraph>
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is
          material we will try to provide at least 30 days' notice prior to any new terms taking effect. What
          constitutes a material change will be determined at our sole discretion.
        </Paragraph>
        <Paragraph>
          By continuing to access or use our Service after those revisions become effective, you agree to be bound by
          the revised terms. If you do not agree to the new terms, please stop using the Service.
        </Paragraph>

        <H1 id="contact">Contact Us</H1>
        <Paragraph>If you have any questions about these Terms, please contact us:</Paragraph>
        <List
          items={[
            "By email: terms@thecomicdb.com",
            "By visiting this page on our website: www.thecomicdb.com/contact",
            "By phone number: +1 123 456 7890",
          ]}
        />
      </TextLayout>
    </div>
  )
}
