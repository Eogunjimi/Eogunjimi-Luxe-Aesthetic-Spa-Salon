import { useSeo } from "../hooks/useSeo";
import { Hero } from "../components/home/Hero";
import { TrustStrip } from "../components/home/TrustStrip";
import { BrandStory } from "../components/home/BrandStory";
import { FeaturedTreatments } from "../components/home/FeaturedTreatments";
import { BeforeAfterPreview } from "../components/home/BeforeAfterPreview";
import { WhyChoose } from "../components/home/WhyChoose";
import { ReviewsSection } from "../components/home/ReviewsSection";
import { FounderSection } from "../components/home/FounderSection";
import { ExperienceTimeline } from "../components/home/ExperienceTimeline";
import { FacilityShowcase } from "../components/home/FacilityShowcase";
import { ConsultationCTA } from "../components/home/ConsultationCTA";
import { FAQSection } from "../components/home/FAQSection";
import { InstagramGallery } from "../components/home/InstagramGallery";
import { FinalCTA } from "../components/home/FinalCTA";
import { faqs } from "../data/content";
import { faqSchema } from "../utils/schema";

export default function Home() {
  useSeo({
    title:
      "Luxe Aesthetics Spa Saloon | Luxury Med Spa in Port Harcourt & Warri",
    description:
      "Port Harcourt & Warri's premier luxury med spa. Medical aesthetics, body contouring, facials, massage, hair, nails & wellness — open 24 hours. Book now.",
    path: "/",
    image: "/images/salon_1.jpg",
    type: "website",
    schema: [faqSchema(faqs)],
  });

  return (
    <>
      <Hero />
      <TrustStrip />
      <BrandStory />
      <FeaturedTreatments />
      <BeforeAfterPreview />
      <WhyChoose />
      <ReviewsSection />
      <FounderSection />
      <ExperienceTimeline />
      <FacilityShowcase />
      <ConsultationCTA />
      <FAQSection />
      <InstagramGallery />
      <FinalCTA />
    </>
  );
}
