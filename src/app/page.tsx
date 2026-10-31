
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Mission from "@/components/Mission/Mission";
import Founder from "@/components/Founder/Founder";
import Donate from "@/components/Donate/Donate";
import GalleryPreview from "@/components/Gallery/GalleryPreview";
import Wave from "@/components/Wave/Wave";
import { site } from "@/content/site";
import { siteUrl } from "@/lib/siteUrl";

// Structured info that helps Google and AI search describe CHO correctly
const structuredData = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: site.name,
  alternateName: site.shortName,
  url: siteUrl,
  logo: `${siteUrl}/images/cho-logo.png`,
  foundingDate: "1974",
  founder: { "@type": "Person", name: "Eleanor Workman" },
  email: site.contact.email,
  telephone: site.contact.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.contact.mailingAddress[0],
    addressLocality: "North Augusta",
    addressRegion: "SC",
    postalCode: "29861",
    addressCountry: "US",
  },
  areaServed: "Haiti",
};

export default function Home() {
  return (
    <main id="main" className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Hero />
      <About />
      <Wave above="var(--band-white)" below="var(--band-cream)" />
      <Mission />
      <Wave above="var(--band-cream)" below="var(--band-sand)" soft />
      <Founder />
      <Wave above="var(--band-cream)" below="var(--band-sand)" soft />
      <GalleryPreview />
      <Donate />
    </main>
  );
}
