"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Anjali Mehta",
    position: "Founder",
    quote:
      "Before I started using Xcentic's e-commerce solution, I was running my business through WhatsApp and Instagram DMs. Order management was chaotic, and I often missed follow-ups. After launching my store through their platform, the difference has been huge. The dashboard is so easy to use—even someone with no tech background like me can manage everything. From adding products, tracking orders, to managing payments—it's all seamless now. My customers love the user experience, and I've started receiving online orders from cities I never expected! Xcentic's support team is always available, and they guided me through every step. I truly feel like I've taken my business to the next level.",
  },
  {
    id: 2,
    name: "Imran Qureshi",
    position: "Founder",
    quote:
      "We used to manage bookings manually—drivers would call in for ride confirmations, and we had to coordinate everything over the phone. It was stressful and prone to errors. Then we worked with Xcentic to develop a proper taxi app with separate driver and customer interfaces. Now, everything is automated: ride requests, driver allocation, GPS tracking, fare calculation, and even digital payments. Passengers find it more professional, and our team gets live insights into daily operations. What impressed me most was the customisation—Xcentic added features specific to our city needs. We've grown our fleet and improved our brand image drastically. Truly a turning point for our business",
  },
  {
    id: 3,
    name: "Sonal Agarwal",
    position: "CFO",
    quote:
      "Running a growing company without a proper system was becoming a challenge. Our HR, accounts, inventory, and project teams were all using different tools, which caused confusion and delays. Xcentic designed a custom ERP for us that brought everything under one roof. Now, every department is connected. I can track stock, view financial reports, monitor project status, and even process employee payroll—all from a single platform. The system has cut down our manual work by 50% and errors have reduced drastically. What I really appreciate is how the team took the time to understand our business before building the system. It feels like the ERP was made just for us",
  },
  {
    id: 4,
    name: "Nitesh Malhotra",
    position: "Sales Manager",
    quote:
      "Our sales process was completely manual—we relied on Excel sheets and scattered WhatsApp messages. Leads were getting lost, follow-ups were missed, and we couldn't track team performance. That's when we switched to the CRM system provided by Xcentic. Everything changed after that. We now have a single platform where all leads are tracked, categorized, and followed up on time. The automation helps send reminders, the dashboard gives complete visibility, and management can finally see real-time progress. It's like we've gone from playing blindfolded to working with a GPS. I'm grateful to Xcentic for transforming our sales workflow so efficiently.",
  },
  {
    id: 5,
    name: "Neha Arora",
    position: "Co-Founder",
    quote:
      "We were looking for more than just an online store—we needed a system that could handle bulk orders, easy logistics integration, and customer communication in one place. Xcentic delivered exactly that. The store looks premium, works flawlessly on mobile, and is super easy for my team to manage. We're now getting repeat orders from international clients as well. Honestly, it feels like we've moved from a local business to a global brand, all thanks to their platform",
  },
  {
    id: 6,
    name: "Pradeep Kumar",
    position: "Founder",
    quote:
      "Before working with Xcentic, we were running live classes over Zoom and sharing notes via WhatsApp. It was messy and not scalable. Their team built a custom learning platform with course modules, student dashboards, progress tracking, and integrated payment gateways. Today, we serve 10,000+ students across India with ease. The platform looks professional, is mobile-friendly, and has helped us build strong student retention. We finally feel like a real EdTech brand.",
  },
  {
    id: 7,
    name: "Sandeep Verma",
    position: "Co-Founder",
    quote:
      "We wanted a digital ordering system that wasn't dependent on Swiggy/Zomato and gave us full control. Xcentic helped us launch our own ordering site and mobile app with table booking, digital menu, UPI payments, and loyalty rewards. Our direct orders went up by 70%, and we save on commission charges. Plus, regulars love the new user experience. It's like having our own Swiggy, just better for business.",
  },
  {
    id: 8,
    name: "Amit Rathi",
    position: "Site Manager",
    quote:
      "We handle multiple sites across cities, and coordination was becoming a nightmare—material delivery updates, worker attendance, progress tracking, all over the place. Xcentic created a simple yet powerful app that lets us update site progress daily, track inventory, and even monitor labor productivity. Our central team now gets live updates from every project site. It has brought discipline and accountability across the board.",
  },
];

export default function TestimonialSection() {
  const [, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextTestimonial = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToTestimonial = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => setIsTransitioning(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning((transitioning) => {
        if (!transitioning) {
          setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }
        return transitioning;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section
      id="testimonials"
      className="py-15 scroll-mt-24 px-4 md:px-6 lg:px-8 relative overflow-hidden bg-gray-50"
    >
      <div className="max-w-6xl mx-auto">
        {/* Floating Geometric Elements - Hidden on small mobile screens */}
        <div className="absolute inset-0 overflow-hidden hidden sm:block">
          {/* Top Left Elements */}
          <div
            className="absolute top-20 left-16 w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-500 rounded-lg shadow-lg transform rotate-12 animate-float"
            style={{
              transform: `translate(${mousePosition.x * 0.01}px, ${
                mousePosition.y * 0.01
              }px) rotate(12deg)`,
            }}
          ></div>
          <div
            className="absolute top-32 left-32 w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-500 rounded-full shadow-lg animate-float delay-300"
            style={{
              transform: `translate(${mousePosition.x * 0.015}px, ${
                mousePosition.y * 0.015
              }px)`,
            }}
          ></div>
          <div
            className="absolute top-48 left-8 w-20 h-8 bg-gradient-to-r from-purple-400 to-purple-500 rounded-lg shadow-lg transform -rotate-12 animate-float delay-700"
            style={{
              transform: `translate(${mousePosition.x * 0.008}px, ${
                mousePosition.y * 0.008
              }px) rotate(-12deg)`,
            }}
          ></div>

          {/* Top Right Elements */}
          <div
            className="absolute top-16 right-20 w-14 h-14 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-lg shadow-lg transform rotate-45 animate-float delay-500"
            style={{
              transform: `translate(${mousePosition.x * -0.012}px, ${
                mousePosition.y * 0.012
              }px) rotate(45deg)`,
            }}
          ></div>
          <div
            className="absolute top-40 right-8 w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full shadow-lg animate-float delay-1000"
            style={{
              transform: `translate(${mousePosition.x * -0.01}px, ${
                mousePosition.y * 0.01
              }px)`,
            }}
          ></div>
          <div
            className="absolute top-64 right-32 w-18 h-6 bg-gradient-to-r from-pink-400 to-pink-500 rounded-lg shadow-lg transform rotate-6 animate-float delay-200"
            style={{
              transform: `translate(${mousePosition.x * -0.015}px, ${
                mousePosition.y * 0.015
              }px) rotate(6deg)`,
            }}
          ></div>

          {/* Bottom Elements */}
          <div
            className="absolute bottom-32 left-24 w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg shadow-lg transform -rotate-6 animate-float delay-800"
            style={{
              transform: `translate(${mousePosition.x * 0.01}px, ${
                mousePosition.y * -0.01
              }px) rotate(-6deg)`,
            }}
          ></div>
          <div
            className="absolute bottom-48 right-16 w-16 h-16 bg-gradient-to-br from-indigo-400 to-indigo-500 rounded-lg shadow-lg transform rotate-12 animate-float delay-400"
            style={{
              transform: `translate(${mousePosition.x * -0.008}px, ${
                mousePosition.y * -0.008
              }px) rotate(12deg)`,
            }}
          ></div>
          <div
            className="absolute bottom-20 left-1/3 w-8 h-8 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-full shadow-lg animate-float delay-600"
            style={{
              transform: `translate(${mousePosition.x * 0.012}px, ${
                mousePosition.y * -0.012
              }px)`,
            }}
          ></div>
          <div
            className="absolute bottom-40 right-1/3 w-14 h-6 bg-gradient-to-r from-red-400 to-red-500 rounded-lg shadow-lg transform rotate-15 animate-float delay-900"
            style={{
              transform: `translate(${mousePosition.x * -0.01}px, ${
                mousePosition.y * -0.01
              }px) rotate(15deg)`,
            }}
          ></div>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl font-bold tracking-tight mb-4">
            Words of Appreciation
          </h2>
          <div className="h-1 w-40 bg-black mx-auto mt-5 mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover how businesses across industries have transformed their
            operations with Xcentic&apos;s cutting-edge digital solutions.
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="relative">
          <div className="max-w-md mx-auto">
            <div
              className={cn(
                "bg-white rounded-3xl shadow-sm p-6 transition-all duration-300 ease-in-out transform h-[450px] flex flex-col",
                isTransitioning
                  ? "scale-95 opacity-70"
                  : "scale-100 opacity-100"
              )}
            >
              {/* Header section with fixed spacing */}
              <div className="flex-shrink-0 text-center mb-4">
                <h3 className="text-xl font-semibold mb-1">
                  {currentTestimonial.name}
                </h3>
                <p className="text-gray-500 text-sm">
                  {currentTestimonial.position}
                </p>
              </div>

              {/* Quote section with scrollable content */}
              <div className="flex-1 flex items-start justify-center overflow-hidden">
                <div className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent pr-2">
                  <p className="text-gray-600 leading-relaxed text-center text-sm">
                    {currentTestimonial.quote}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            disabled={isTransitioning}
            className="absolute left-0 md:left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-sm border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>

          <button
            onClick={nextTestimonial}
            disabled={isTransitioning}
            className="absolute right-0 md:right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-sm border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              disabled={isTransitioning}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-200 disabled:cursor-not-allowed",
                index === currentIndex
                  ? "bg-black scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              )}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 mb-1">500+</div>
            <div className="text-sm text-gray-600">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 mb-1">98.5%</div>
            <div className="text-sm text-gray-600">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 mb-1">150+</div>
            <div className="text-sm text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 mb-1">24/7</div>
            <div className="text-sm text-gray-600">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}
