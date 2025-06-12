"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  image: string;
  rating: number;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Mitchell",
    position: "Chief Technology Officer",
    company: "TechFlow Solutions",
    image: "/testimonial.jpg",
    rating: 5,
    quote:
      "Xcentic's AI implementation transformed our entire data processing pipeline. What used to take hours now happens in minutes, and the accuracy has improved by 40%.",
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    position: "Digital Transformation Lead",
    company: "Global Manufacturing Corp",
    image: "/testimonial.jpg",
    rating: 5,
    quote:
      "The cloud migration strategy Xcentic designed for us was flawless. Zero downtime during transition, 60% cost reduction, and our systems are now more secure and scalable than ever before.",
  },
  {
    id: 3,
    name: "Dr. Priya Sharma",
    position: "Head of Innovation",
    company: "HealthTech Innovations",
    image: "/testimonial.jpg",
    rating: 5,
    quote:
      "Xcentic's blockchain solution revolutionized our patient data management. We now have complete transparency, enhanced security, and compliance with all healthcare regulations.",
  },
  {
    id: 4,
    name: "James Wilson",
    position: "VP of Operations",
    company: "RetailMax Enterprise",
    image: "/testimonial.jpg",
    rating: 4.5,
    quote:
      "The IoT integration Xcentic delivered connected all our stores seamlessly. Real-time inventory tracking, predictive maintenance, and automated reordering have increased our efficiency by 35%.",
  },
  {
    id: 5,
    name: "Elena Chen",
    position: "Chief Executive Officer",
    company: "FinanceForward Inc",
    image: "/testimonial.jpg",
    rating: 5,
    quote:
      "Xcentic's business intelligence platform gave us insights we never knew existed. Data-driven decision making is now at the core of our strategy, resulting in 25% revenue growth this quarter.",
  },
  {
    id: 6,
    name: "David Kumar",
    position: "Innovation Director",
    company: "Smart Cities Ltd",
    image: "/testimonial.jpg",
    rating: 5,
    quote:
      "The AR/VR solutions Xcentic created for our urban planning projects are incredible. Stakeholders can now visualize developments in immersive 3D, making approvals 50% faster.",
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
      className="py-12 px-4 md:px-6 lg:px-8 relative overflow-hidden bg-gray-50"
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
                "bg-white rounded-3xl shadow-sm p-8 transition-all duration-300 ease-in-out transform",
                isTransitioning
                  ? "scale-95 opacity-70"
                  : "scale-100 opacity-100"
              )}
            >
              <div className="flex flex-col items-center text-center">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mb-4 mx-auto">
                  <Image
                    src={
                      currentTestimonial.image ||
                      "/placeholder.svg?height=64&width=64"
                    }
                    alt={currentTestimonial.name}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold">
                  {currentTestimonial.name}
                </h3>
                <p className="text-gray-500 text-sm">
                  {currentTestimonial.position} at {currentTestimonial.company}
                </p>
                <div className="flex items-center mt-4 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "w-5 h-5",
                        i < Math.floor(currentTestimonial.rating)
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      )}
                    />
                  ))}
                  <span className="ml-2 text-gray-700 font-medium">
                    {currentTestimonial.rating.toFixed(1)}
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {currentTestimonial.quote}
                </p>
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
