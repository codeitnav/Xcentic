"use client"

import { BentoGrid, BentoGridItem } from "./ui/bento-grid"
import { Code, Briefcase, ShoppingCart, Smartphone, FileText } from "lucide-react"
import Image from "next/image"
export default function ResourcesSection() {
  const handleOpenPdf = (pdfPath: string) => {
    window.open(pdfPath, "_blank")
  }

  const items = [
    {
    title: "What Sets the XCENTIC Apart?",
    description: "Get a snapshot of our capabilities, services, and unique value proposition in our comprehensive company brochure.",
    header: (
      <div className="w-full h-24 relative rounded-xl mb-2 overflow-hidden">
        <Image
          src="/brochure.png"
          alt="Brochure"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
    ),
    icon: <FileText className="h-4 w-4 text-indigo-500" />,
    pdfPath: "/XCENTIC_Brochure.pdf",
  },
  {
    title: "How Can Our E-Commerce Solutions Transform Your Business?",
    description: "Uncover tailored e-commerce strategies and solutions designed to boost your online sales and streamline operations.",
    header: (
      <div className="w-full h-24 relative rounded-xl mb-2 overflow-hidden">
        <Image
          src="/ecommerce.png"
          alt="Ecommerce"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
    ),
    icon: <ShoppingCart className="h-4 w-4 text-emerald-500" />,
    pdfPath: "/Ecommerce-Xcentic.pdf",
  },
  {
    title: "What Makes a Winning Website Proposal?",
    description: "Discover our comprehensive approach to web development and how our proposals deliver value for your digital presence.",
    header: (
      <div className="w-full h-24 relative rounded-xl mb-2 overflow-hidden">
        <Image
          src="/website.png"
          alt="Website"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
    ),
    icon: <Code className="h-4 w-4 text-blue-500" />,
    pdfPath: "/Website Proposal.pdf",
  },
  {
  title: "Why Choose Xcentic for Your Next Application?",
  description: "See how our application development expertise brings innovative, user-friendly solutions to life for your business.",
  header: (
    <div className="w-full h-40 relative rounded-xl mb-2 overflow-hidden">
      <Image
        src="/next-application.png"
        alt="Application"
        fill
        className="object-cover"
        sizes="100vw"
      />
    </div>
  ),
  icon: <Smartphone className="h-4 w-4 text-red-500" />,
  pdfPath: "/Xcentic_Application_Proposal.pdf",
},
  {
  title: "Why Collaborate with Us?",
  description: "Explore the benefits of business collaboration.",
  header: (
    <div className="w-full h-40 relative rounded-xl mb-2 overflow-hidden">
      <Image
        src="/collaboration.png"
        alt="Collaboration"
        fill
        className="object-cover"
        sizes="100vw"
      />
    </div>
  ),
  icon: <Briefcase className="h-4 w-4 text-purple-500" />,
  pdfPath: "/Collaboration_Business.pdf",
},
];

  return (
    <section id="resources" className="relative w-full py-20 px-4 md:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl font-bold tracking-tight mb-4">Our Resources</h2>
          <div className="h-1 w-40 bg-black mx-auto mt-6 mb-4"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive resources to learn more about our services and how we can help your business grow.
          </p>
        </div>

        <BentoGrid className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-0">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={i === 3 ? "md:col-span-2" : ""}
              onClick={() => handleOpenPdf(item.pdfPath)}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  )
}
