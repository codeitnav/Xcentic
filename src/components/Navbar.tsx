"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { useMemo } from "react"
import Image from "next/image"

interface NavItem {
  name: string
  href: string
}

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isOverFooter, setIsOverFooter] = useState(false)

  const navItems: NavItem[] = useMemo(
    () => [
      { name: "Home", href: "#home" },
      { name: "Our Services", href: "#services" },
      { name: "Expertise", href: "#expertise" },
      { name: "Resources", href: "#resources" },
      { name: "Blog", href: "#blog" },
      { name: "Portfolio", href: "#portfolio" },
    ],
    [],
  )

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleActiveSection = () => {
      const sections = navItems.map((item) => item.href.substring(1))
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleActiveSection)
    return () => window.removeEventListener("scroll", handleActiveSection)
  }, [navItems])

  useEffect(() => {
    const handleFooterIntersection = () => {
      const footer = document.getElementById("footer")
      if (footer) {
        const footerRect = footer.getBoundingClientRect()
        const navbarHeight = 80 // Approximate navbar height

        // Check if navbar is overlapping with footer (considering mobile screens)
        const isOverlapping = footerRect.top < navbarHeight && window.innerWidth < 1024
        setIsOverFooter(isOverlapping)
      }
    }

    window.addEventListener("scroll", handleFooterIntersection)
    window.addEventListener("resize", handleFooterIntersection)

    return () => {
      window.removeEventListener("scroll", handleFooterIntersection)
      window.removeEventListener("resize", handleFooterIntersection)
    }
  }, [])

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="fixed top-0 left-0 right-0 xl:left-52 xl:right-52 2xl:left-64 2xl:right-64 z-50 px-4 sm:px-6 lg:px-8 pt-2 sm:pt-3">
      <nav
        className={`transition-all duration-700 ease-out rounded-xl sm:rounded-2xl ${
          isOverFooter
            ? "bg-white/95 backdrop-blur-3xl border border-gray-200/50 shadow-xl shadow-black/10 py-2"
            : isScrolled
              ? "bg-emerald-600/20 backdrop-blur-3xl border border-white/30 shadow-xl shadow-black/10 py-2"
              : "bg-emerald-600/10 backdrop-blur-3xl border border-white/20 shadow-md shadow-black/5 py-2.5"
        }`}
        style={{
          backdropFilter: "blur(30px)",
          WebkitBackdropFilter: "blur(30px)",
        }}
      >
        <div className="w-full max-w-none px-2 sm:px-4 lg:px-6">
          <div className="flex items-center justify-between h-full min-h-[3rem]">
            {/* Left - Logo */}
            <div className="flex-shrink-0">
              <Image src="/logo_dark.png" alt="XCENTIC Logo" width={150} height={40} className="object-contain h-10" />
            </div>

            {/* Center - Nav Items (Hidden on smaller screens) */}
            <div className="hidden lg:flex items-center justify-center flex-1 mx-8">
              <div className="flex items-center space-x-1 xl:space-x-2">
                {navItems.map((item) => {
                  const sectionId = item.href.substring(1)
                  const isActive = activeSection === sectionId
                  return (
                    <button
                      key={item.name}
                      onClick={() => handleNavClick(item.href)}
                      className={`relative px-3 xl:px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full group whitespace-nowrap ${
                        isActive
                          ? isOverFooter
                            ? "text-gray-900 bg-gray-900/10 shadow-md shadow-gray-900/10"
                            : "text-gray-900 bg-white/25 shadow-md shadow-white/20"
                          : isOverFooter
                            ? "text-gray-700 hover:text-gray-900 hover:bg-gray-900/10 hover:shadow-sm hover:shadow-gray-900/10"
                            : "text-gray-700 hover:text-gray-900 hover:bg-white/15 hover:shadow-sm hover:shadow-white/10"
                      }`}
                    >
                      <span className="relative z-10">{item.name}</span>
                      <span
                        className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gray-900 transition-all duration-300 rounded-full ${
                          isActive ? "w-6" : "w-0 group-hover:w-6"
                        }`}
                      ></span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Right - Contact + Mobile Menu */}
            <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
              <button
                onClick={() => handleNavClick("#footer")}
                className={`relative overflow-hidden transition-all duration-300 rounded-full font-semibold border shadow-md hover:scale-105 ${
                  isOverFooter
                    ? "bg-gray-900/90 text-white hover:bg-gray-800/95 border-gray-700/40 shadow-gray-900/20"
                    : "bg-gray-900/85 text-white hover:bg-gray-800/90 border-gray-700/30 shadow-gray-900/20"
                } ${isScrolled ? "px-3 sm:px-4 py-1.5 text-xs sm:text-sm" : "px-3 sm:px-5 py-2 text-sm"}`}
                style={{
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                }}
              >
                <span className="relative z-10 whitespace-nowrap">Contact Us</span>
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden p-2.5 sm:p-3 rounded-full transition-all duration-300 backdrop-blur border ${
                  isOverFooter
                    ? isMobileMenuOpen
                      ? "bg-gray-900/15 text-gray-900 border-gray-300/40"
                      : "bg-gray-900/10 text-gray-700 hover:text-gray-900 hover:bg-gray-900/15 border-gray-300/30"
                    : isMobileMenuOpen
                      ? "bg-white/25 text-gray-900 border-white/25"
                      : "bg-white/10 text-gray-700 hover:text-gray-900 hover:bg-white/20 border-white/25"
                }`}
                style={{
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                }}
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5 sm:h-6 sm:w-6 rotate-90 transition-transform duration-300" />
                ) : (
                  <Menu className="h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-300" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`lg:hidden transition-all duration-500 overflow-hidden ${
              isMobileMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"
            }`}
          >
            <div
              className="px-4 sm:px-6 pt-5 pb-6 space-y-3 backdrop-blur-2xl rounded-xl border shadow-lg shadow-black/10"
              style={{
                backdropFilter: "blur(25px)",
                WebkitBackdropFilter: "blur(25px)",
                backgroundColor: isOverFooter ? "rgba(255, 255, 255, 0.15)" : "rgba(255, 255, 255, 0.1)",
                borderColor: isOverFooter ? "rgba(156, 163, 175, 0.3)" : "rgba(255, 255, 255, 0.25)",
              }}
            >
              {navItems.map((item, index) => {
                const sectionId = item.href.substring(1)
                const isActive = activeSection === sectionId

                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className={`block w-full text-left px-4 py-3 text-sm font-medium transition-all duration-300 rounded-lg ${
                      isActive
                        ? isOverFooter
                          ? "text-gray-900 bg-gray-900/15 shadow-md shadow-gray-900/10"
                          : "text-gray-900 bg-white/30 shadow-md shadow-white/20"
                        : isOverFooter
                          ? "text-gray-700 hover:text-gray-900 hover:bg-gray-900/15 hover:shadow-sm hover:shadow-gray-900/10"
                          : "text-gray-700 hover:text-gray-900 hover:bg-white/20 hover:shadow-sm hover:shadow-white/10"
                    }`}
                    style={{
                      animationDelay: `${index * 40}ms`,
                      animation: isMobileMenuOpen ? "slideInUp 0.4s ease-out forwards" : "none",
                    }}
                  >
                    {item.name}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </nav>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}

export default Navbar
