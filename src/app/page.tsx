import Navbar from "@/components/Navbar"
import HeroSection from "@/components/Hero-section"
import OurExpertise from "@/components/Our-expertise"
import ServiceSection from "@/components/Our-services"
import Outreach from "@/components/Outreach"
import ScrollingTextSection from "@/components/Scrolling-text-section"
import TestimonialSection from "@/components/Testimonial-section"
import FAQSection from "@/components/FAQ-section"
import Footer from "@/components/Footer"
import ScrollReveal from "@/components/Scroll-reveal"
import ResourcesSection from "@/components/Resources-section"

export default function Home() {
  return (
    <div className="max-w-full">
      <Navbar />
      <HeroSection />
      <ScrollReveal direction="up" delay={100} duration={800}>
        <ServiceSection />
      </ScrollReveal>

      <ScrollReveal direction="up" delay={100} duration={800}>
        <OurExpertise/>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={100} duration={800}>
        <Outreach />
      </ScrollReveal>

      <ScrollingTextSection />

      <ScrollReveal direction="up" delay={100} duration={800}>
        <ResourcesSection />
      </ScrollReveal>

      <ScrollReveal direction="up" delay={100} duration={800}>
        <TestimonialSection />
      </ScrollReveal>

      <ScrollReveal direction="up" delay={100} duration={800}>
        <FAQSection />
      </ScrollReveal>

      <Footer />
    </div>
  )
}
