"use client"

import { Carousel, Card } from "@/components/ui/cards-carousel"

const ServiceSection = () => {
  const serviceCards = services.map((service, index) => (
    <Card
      key={service.title}
      card={{
        src: `/services/${service.icon.toLowerCase()}.svg`,
        title: service.title,
        category: service.shortDescription,
        bgImage: service.bgImage, 
        content: (
          <div className="space-y-6">
            <p className="text-gray-600 leading-relaxed">{service.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {service.features.map((feature, i) => (
                <div key={i} className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        ),
      }}
      index={index}
    />
  ))

  return (
    <section
      id="services"
      className="py-12 px-4 md:px-6 lg:px-8 relative overflow-hidden"
      style={{ backgroundColor: "#d7f5e9" }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-emerald-200/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-white/15 rounded-full blur-xl animate-pulse delay-500"></div>
        <div className="absolute bottom-40 right-1/3 w-16 h-16 bg-emerald-300/20 rounded-full blur-xl animate-pulse delay-700"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 gap-4 h-full">
            {Array.from({ length: 48 }).map((_, i) => (
              <div key={i} className="border border-emerald-400/20"></div>
            ))}
          </div>
        </div>
      </div>

         <div className="text-center mb-12">
          <h2 className="text-4xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-4">Our Services</h2>
          <div className="h-1 w-40 bg-black mx-auto mt-6 mb-4"></div>
          <p className="text-black max-w-2xl mx-auto">
            Discover how our specialized expertise across multiple domains can transform your business and drive
            sustainable growth.
          </p>
        </div>

        {/* Enhanced Carousel */}
        <div className="relative">
          {/* Glow effect behind carousel */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-200/20 via-white/10 to-emerald-200/20 blur-3xl -z-10"></div>
          <Carousel items={serviceCards} />
        </div>
    </section>
  )
}

export const services = [
  {
    title: "Mobile App Development",
    shortDescription: "Native & Cross-Platform",
    description:
      "Craft sleek, user-friendly mobile apps tailored to elevate your business and captivate your audience.",
    icon: "Smartphone",
    bgImage: "/app-dev.png", 
    features: ["Responsive Design", "SEO Optimization", "Cross-Platform", "Native Performance"],
  },
  {
    title: "Software Development",
    shortDescription: "Custom Solutions",
    description:
      "Delivering cutting-edge software solutions to enhance efficiency, spark innovation, and drive results.",
    icon: "Code",
    bgImage: "/software.png",
    features: ["User-Friendly UI", "Performance Optimized", "Scalable Architecture", "Quality Assurance"],
  },
  {
    title: "Digital Transformation",
    shortDescription: "Business Evolution",
    description:
      "Empowering businesses to thrive in the modern era by upgrading legacy systems with forward-thinking digital solutions.",
    icon: "Globe",
    bgImage: "/digital-transformation.png", 
    features: ["Scalable Architecture", "Ongoing Support", "Process Automation", "System Integration"],
  },
  {
    title: "Ideation & Design Strategy",
    shortDescription: "Creative Solutions",
    description: "Designing intuitive and impactful digital products through seamless collaboration and strategy.",
    icon: "Palette",
    bgImage: "/design.png", 
    features: ["User Research", "Prototype Testing", "Design Systems", "Brand Identity"],
  },
  {
    title: "IT Consulting",
    shortDescription: "Strategic Guidance",
    description:
      "Expert guidance to simplify complex IT challenges, aligning technology with business goals for measurable success.",
    icon: "Database",
    bgImage: "/it-consulting.png", 
    features: ["API Development", "Database Design", "Technology Assessment", "Strategic Planning"],
  },
  {
    title: "DevOps",
    shortDescription: "Continuous Delivery",
    description: "Accelerating development cycles and improving product quality with our streamlined DevOps solutions.",
    icon: "Shield",
    bgImage: "/devops.png",
    features: ["Data Encryption", "Security Audits", "CI/CD Pipelines", "Infrastructure as Code"],
  },
  {
    title: "Cloud Managed Services",
    shortDescription: "Scalable Infrastructure",
    description: "Optimizing and safeguarding your cloud infrastructure, so you can focus on strategic growth.",
    icon: "Cloud",
    bgImage: "/cloud-hosting.png", 
    features: ["Data Encryption", "Security Audits", "Cloud Migration", "24/7 Monitoring"],
  },
]

export default ServiceSection
