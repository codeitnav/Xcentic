"use client"

import { useState, useEffect } from "react"
import { ArrowRight, TrendingUp, Users, CheckCircle, BarChart3 } from "lucide-react"

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section id="home" className="min-h-screen bg-gray-50 relative overflow-hidden flex items-center py-25 w-full">
      {/* Floating Geometric Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Top Left Elements */}
        <div
          className="absolute top-20 left-16 w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-500 rounded-lg shadow-lg transform rotate-12 animate-float"
          style={{
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px) rotate(12deg)`,
          }}
        ></div>
        <div
          className="absolute top-32 left-32 w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-500 rounded-full shadow-lg animate-float delay-300"
          style={{
            transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px)`,
          }}
        ></div>
        <div
          className="absolute top-48 left-8 w-20 h-8 bg-gradient-to-r from-purple-400 to-purple-500 rounded-lg shadow-lg transform -rotate-12 animate-float delay-700"
          style={{
            transform: `translate(${mousePosition.x * 0.008}px, ${mousePosition.y * 0.008}px) rotate(-12deg)`,
          }}
        ></div>

        {/* Top Right Elements */}
        <div
          className="absolute top-16 right-20 w-14 h-14 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-lg shadow-lg transform rotate-45 animate-float delay-500"
          style={{
            transform: `translate(${mousePosition.x * -0.012}px, ${mousePosition.y * 0.012}px) rotate(45deg)`,
          }}
        ></div>
        <div
          className="absolute top-40 right-8 w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full shadow-lg animate-float delay-1000"
          style={{
            transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * 0.01}px)`,
          }}
        ></div>
        <div
          className="absolute top-64 right-32 w-18 h-6 bg-gradient-to-r from-pink-400 to-pink-500 rounded-lg shadow-lg transform rotate-6 animate-float delay-200"
          style={{
            transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * 0.015}px) rotate(6deg)`,
          }}
        ></div>

        {/* Bottom Elements */}
        <div
          className="absolute bottom-32 left-24 w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg shadow-lg transform -rotate-6 animate-float delay-800"
          style={{
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * -0.01}px) rotate(-6deg)`,
          }}
        ></div>
        <div
          className="absolute bottom-48 right-16 w-16 h-16 bg-gradient-to-br from-indigo-400 to-indigo-500 rounded-lg shadow-lg transform rotate-12 animate-float delay-400"
          style={{
            transform: `translate(${mousePosition.x * -0.008}px, ${mousePosition.y * -0.008}px) rotate(12deg)`,
          }}
        ></div>
        <div
          className="absolute bottom-20 left-1/3 w-8 h-8 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-full shadow-lg animate-float delay-600"
          style={{
            transform: `translate(${mousePosition.x * 0.012}px, ${mousePosition.y * -0.012}px)`,
          }}
        ></div>
        <div
          className="absolute bottom-40 right-1/3 w-14 h-6 bg-gradient-to-r from-red-400 to-red-500 rounded-lg shadow-lg transform rotate-15 animate-float delay-900"
          style={{
            transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px) rotate(15deg)`,
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Driving the Future of
            <br />
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
               Global Innovation
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            We drive transformative growth by crafting cutting-edge digital solutions that turn complex challenges into competitive advantages—fueling innovation, agility, and resilience at every step.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="group bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-3">
              <span>Consult Our Experts</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Dashboard Mockup */}
          <div
            className={`relative max-w-5xl mx-auto transition-all duration-1200 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
          >
            {/* Browser Frame */}
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
              {/* Browser Header */}
              <div className="bg-gray-100 px-6 py-4 flex items-center justify-between border-b border-gray-200">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="flex-1 mx-6 bg-white rounded-lg px-4 py-2 text-sm text-gray-600 border border-gray-200">
                  https://app.xcentic.com/dashboard
                </div>
                <div className="flex space-x-2">
                  <div className="w-6 h-6 bg-gray-300 rounded"></div>
                  <div className="w-6 h-6 bg-gray-300 rounded"></div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="bg-gradient-to-br from-gray-50 to-white p-8">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Project Dashboard</h3>
                    <p className="text-gray-600">Real-time development insights</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2 bg-emerald-100 rounded-full px-4 py-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-semibold text-emerald-700">LIVE</span>
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full"></div>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                      <BarChart3 className="h-8 w-8 text-emerald-600" />
                      <span className="text-sm font-semibold text-emerald-600 bg-emerald-100 px-2 py-1 rounded-full">
                        +23%
                      </span>
                    </div>
                    <div className="text-3xl font-bold text-gray-900">500+</div>
                    <div className="text-gray-600">Projects Delivered</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                      <TrendingUp className="h-8 w-8 text-blue-600" />
                      <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                        +5.2%
                      </span>
                    </div>
                    <div className="text-3xl font-bold text-gray-900">98.5%</div>
                    <div className="text-gray-600">Client Satisfaction</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                      <Users className="h-8 w-8 text-purple-600" />
                      <span className="text-sm font-semibold text-purple-600 bg-purple-100 px-2 py-1 rounded-full">
                        +18%
                      </span>
                    </div>
                    <div className="text-3xl font-bold text-gray-900">150+</div>
                    <div className="text-gray-600">Happy Clients</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                      <CheckCircle className="h-8 w-8 text-emerald-600" />
                      <span className="text-sm font-semibold text-emerald-600 bg-emerald-100 px-2 py-1 rounded-full">
                        99.9%
                      </span>
                    </div>
                    <div className="text-3xl font-bold text-gray-900">24/7</div>
                    <div className="text-gray-600">Uptime</div>
                  </div>
                </div>

                {/* Chart Section */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="text-lg font-semibold text-gray-900">Development Progress</h4>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">Real-time updates</span>
                    </div>
                  </div>
                  <div className="h-32 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg flex items-end justify-between px-6 pb-4">
                    <div
                      className="w-8 bg-gradient-to-t from-emerald-500 to-emerald-400 rounded-t-lg"
                      style={{ height: "60%" }}
                    ></div>
                    <div
                      className="w-8 bg-gradient-to-t from-teal-500 to-teal-400 rounded-t-lg"
                      style={{ height: "80%" }}
                    ></div>
                    <div
                      className="w-8 bg-gradient-to-t from-emerald-600 to-emerald-500 rounded-t-lg"
                      style={{ height: "45%" }}
                    ></div>
                    <div
                      className="w-8 bg-gradient-to-t from-cyan-500 to-cyan-400 rounded-t-lg"
                      style={{ height: "90%" }}
                    ></div>
                    <div
                      className="w-8 bg-gradient-to-t from-teal-600 to-teal-500 rounded-t-lg"
                      style={{ height: "70%" }}
                    ></div>
                    <div
                      className="w-8 bg-gradient-to-t from-emerald-500 to-emerald-400 rounded-t-lg"
                      style={{ height: "85%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-700 { animation-delay: 0.7s; }
        .delay-800 { animation-delay: 0.8s; }
        .delay-900 { animation-delay: 0.9s; }
        .delay-1000 { animation-delay: 1s; }
      `}</style>
    </section>
  )
}

export default HeroSection
