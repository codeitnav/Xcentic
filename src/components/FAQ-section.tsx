"use client"
import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { cn } from "@/lib/utils"

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "How can Xcentic help my business with digital transformation?",
    answer:
      "We assess your current technology landscape, identify opportunities for growth, and implement customized digital solutions to streamline operations and enhance performance.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We work across diverse industries, including finance, healthcare, retail, manufacturing, and logistics, delivering tailored digital solutions that drive impact.",
  },
  {
    question: "How does AI benefit businesses?",
    answer:
      "AI enhances efficiency, automates repetitive tasks, and provides actionable insights, allowing businesses to focus on innovation and strategy.",
  },
  {
    question: "Can you assist with cloud migration and security?",
    answer:
      "Our cloud-managed services ensure a smooth transition to the cloud while maintaining data security and compliance.",
  },
  {
    question: "What makes Xcentic different from other IT service providers?",
    answer:
      "Our commitment to innovation, customer-centric approach, and deep industry expertise set us apart, ensuring transformative digital experiences for our clients.",
  },
]

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => 
      prev.includes(index) 
        ? prev.filter((item) => item !== index) 
        : [...prev, index]
    )
  }

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8" style={{ backgroundColor: "#d7f5e9" }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg">
            Find answers to common questions about our services and processes.
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-200"
                aria-expanded={openItems.includes(index)}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {item.question}
                </h3>
                <div className="flex-shrink-0">
                  {openItems.includes(index) ? (
                    <Minus className="h-5 w-5 text-gray-600" />
                  ) : (
                    <Plus className="h-5 w-5 text-gray-600" />
                  )}
                </div>
              </button>

              <div
                className={cn(
                  "overflow-hidden transition-all duration-300 ease-in-out",
                  openItems.includes(index) 
                    ? "max-h-96 opacity-100" 
                    : "max-h-0 opacity-0"
                )}
              >
                <div className="px-6 pb-6">
                  <div className="h-px bg-gray-200 mb-4"></div>
                  <p className="text-gray-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}