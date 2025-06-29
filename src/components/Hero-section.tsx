"use client";

import { useState, useEffect } from "react";
import { ArrowRight } from 'lucide-react';
import ProjectDashboard from "./ProjectDashboard";
import { ContactForm } from "@/components/Contact-form";

const HeroSection = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section
      id="home"
      className="min-h-screen bg-gray-50 relative overflow-hidden flex items-center w-full mt-10 sm:mt-0 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 py-6 sm:py-16 lg:py-24"
    >
      {/* Floating Geometric Elements - Hidden on small mobile screens */}
      <div className="absolute inset-0 overflow-hidden hidden sm:block pointer-events-none">
        {/* Top Left Elements - responsive sizes and spacing */}
        <div
          className="absolute top-24 left-24 sm:top-32 sm:left-48 w-10 h-14 sm:w-16 sm:h-20 bg-gradient-to-br from-orange-400 to-orange-500 rounded-lg shadow-lg transform rotate-12 animate-float"
          style={{
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px) rotate(12deg)`,
          }}
        ></div>

        <div
          className="absolute top-44 left-40 sm:top-60 sm:left-64 w-8 h-14 sm:w-12 sm:h-20 bg-gradient-to-br from-teal-400 to-teal-500 rounded-full shadow-lg animate-float delay-300"
          style={{
            transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px)`,
          }}
        ></div>

        <div
          className="absolute top-72 left-28 sm:top-96 sm:left-44 w-12 h-10 sm:w-20 sm:h-12 bg-gradient-to-r from-purple-400 to-purple-500 rounded-lg shadow-lg transform -rotate-12 animate-float delay-700"
          style={{
            transform: `translate(${mousePosition.x * 0.008}px, ${mousePosition.y * 0.008}px) rotate(-12deg)`,
          }}
        ></div>

        {/* Top Right Elements - responsive spacing and size */}
        <div
          className="absolute top-20 right-24 sm:top-28 sm:right-48 w-12 h-18 sm:w-14 sm:h-24 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-lg shadow-lg transform rotate-45 animate-float delay-500"
          style={{
            transform: `translate(${mousePosition.x * -0.012}px, ${mousePosition.y * 0.012}px) rotate(45deg)`,
          }}
        ></div>

        <div
          className="absolute top-52 right-20 sm:top-64 sm:right-36 w-8 h-16 sm:w-10 sm:h-20 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full shadow-lg animate-float delay-1000"
          style={{
            transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * 0.01}px)`,
          }}
        ></div>

        <div
          className="absolute top-[22rem] right-28 sm:top-[28rem] sm:right-56 w-12 h-8 sm:w-18 sm:h-10 bg-gradient-to-r from-pink-400 to-pink-500 rounded-lg shadow-lg transform rotate-6 animate-float delay-200"
          style={{
            transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * 0.015}px) rotate(6deg)`,
          }}
        ></div>

        {/* Bottom Elements - responsive adjustments */}
        <div
          className="absolute bottom-28 left-20 sm:bottom-40 sm:left-32 w-10 h-14 sm:w-12 sm:h-20 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg shadow-lg transform -rotate-6 animate-float delay-800"
          style={{
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * -0.01}px) rotate(-6deg)`,
          }}
        ></div>

        <div
          className="absolute bottom-52 right-16 sm:bottom-64 sm:right-24 w-12 h-16 sm:w-16 sm:h-20 bg-gradient-to-br from-indigo-400 to-indigo-500 rounded-lg shadow-lg transform rotate-12 animate-float delay-400"
          style={{
            transform: `translate(${mousePosition.x * -0.008}px, ${mousePosition.y * -0.008}px) rotate(12deg)`,
          }}
        ></div>

        <div
          className="absolute bottom-20 left-[30%] sm:bottom-28 sm:left-1/3 w-6 h-10 sm:w-8 sm:h-12 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-full shadow-lg animate-float delay-600"
          style={{
            transform: `translate(${mousePosition.x * 0.012}px, ${mousePosition.y * -0.012}px)`,
          }}
        ></div>

        <div
          className="absolute bottom-44 right-[30%] sm:bottom-60 sm:right-1/4 w-12 h-8 sm:w-14 sm:h-10 bg-gradient-to-r from-red-400 to-red-500 rounded-lg shadow-lg transform rotate-15 animate-float delay-900"
          style={{
            transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px) rotate(15deg)`,
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center mt-16">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Main Headline */}
          <h1 className="mt-4 md:-mt-4 lg:-mt-6 text-5xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight px-2 sm:px-0 mx-auto text-center ">
            Driving the Future of
            <br />
            <span className="bg-gradient-to-r xl:text-7xl from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Global Innovation
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-1xl text-gray-600 mb-4 sm:mb-6 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
            We drive transformative growth by crafting cutting-edge digital
            solutions that turn complex challenges into competitive
            advantages—fueling innovation, agility, and resilience at every
            step.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 sm:mb-16 px-4 sm:px-0">
            <button
              onClick={() => setShowContactForm(true)}
              className="group bg-black hover:bg-gray-800 text-white px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-lg font-semibold text-xs sm:text-sm md:text-base transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2"
            >
              <span>Consult Our Experts</span>
              <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Dashboard Mockup - Extended width to break out of container */}
          <div
            className={`relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 transition-all duration-1200 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            {/* Browser Frame */}
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden max-w-7xl mx-auto">
              {/* Browser Header */}
              <div className="px-2 sm:px-6 py-2 sm:py-4 flex items-center justify-between bg-gray-100 border-b border-gray-200">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="mx-1 sm:mx-4 md:mx-6 bg-white rounded-lg px-1 sm:px-3 md:px-4 py-1 sm:py-2 text-xs sm:text-sm text-gray-600 border border-gray-200">
                  https://app.xcentric.com/dashboard
                </div>
                <div className="flex space-x-2">
                  <div className="w-6 h-6 bg-gray-300 rounded"></div>
                  <div className="w-6 h-6 bg-gray-300 rounded"></div>
                </div>
              </div>

              {/* Dashboard Content */}
              <ProjectDashboard />
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
        .delay-400 {
          animation-delay: 0.4s;
        }
        .delay-500 {
          animation-delay: 0.5s;
        }
        .delay-600 {
          animation-delay: 0.6s;
        }
        .delay-700 {
          animation-delay: 0.7s;
        }
        .delay-800 {
          animation-delay: 0.8s;
        }
        .delay-900 {
          animation-delay: 0.9s;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>

      {showContactForm && (
        <ContactForm onClose={() => setShowContactForm(false)} />
      )}
    </section>
  );
};

export default HeroSection;