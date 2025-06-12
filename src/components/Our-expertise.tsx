"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import Image from "next/image";

const OurExpertise = () => {
  const [, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      if (!scrollContainerRef.current) return;

      animationFrameId = requestAnimationFrame(() => {
        const container = scrollContainerRef.current!;
        const scrollTop = container.scrollTop;
        const scrollHeight = container.scrollHeight - container.clientHeight;
        const totalSections = expertiseContent.length;

        if (scrollHeight > 0) {
          const progress = scrollTop / scrollHeight;
          const sectionIndex = Math.floor(progress * totalSections);
          const activeIdx = Math.min(sectionIndex, totalSections - 1);
          if (activeIdx !== activeIndex) {
            setActiveIndex(activeIdx);
          }
        }
      });
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.style.scrollBehavior = "smooth"; // Add smooth scrolling
      container.addEventListener("scroll", handleScroll);
      // Ensure touch scrolling works on mobile
      (
        container.style as CSSStyleDeclaration & {
          webkitOverflowScrolling: string;
        }
      ).webkitOverflowScrolling = "touch";
    }

    return () => {
      if (container) container.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, [activeIndex]);

  return (
    <section
      id="expertise"
      className="w-full overflow-x-hidden py-20 px-4 md:px-6 lg:px-8 bg-white relative"
    >
      {/* Floating Geometric Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
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
          className="absolute bottom-40 right-1/3 w-14 h-6 bg-gradient-to-r from-red-400 to-red-500 rounded-lg shadow-lg transform rotate-15 animate-float delay-900"
          style={{
            transform: `translate(${mousePosition.x * -0.01}px, ${
              mousePosition.y * -0.01
            }px) rotate(15deg)`,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-4">
            Our Expertise
          </h2>
          <div className="h-1 w-40 bg-black mx-auto mt-6 mb-4"></div>
          <p className="text-black max-w-2xl mx-auto">
            Unlock smarter solutions with AI that enhances decision-making and
            streamlines operations like never before.
          </p>
        </div>

        <div
          className="w-full mx-auto rounded-[40px] overflow-hidden shadow-xl relative"
          style={{
            border: "3px solid black",
            height: "70vh",
          }}
        >
          {/* Sticky Content Display */}
          <div className="absolute inset-0 bg-gray-50 p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
              {/* Left Content */}
              <div className="flex flex-col justify-center space-y-6">
                <motion.h3
                  key={`title-${activeIndex}`}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-3xl font-bold text-gray-900"
                >
                  {expertiseContent[activeIndex].title}
                </motion.h3>

                <motion.div
                  key={`line-${activeIndex}`}
                  initial={{ width: 0 }}
                  animate={{ width: "5rem" }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="h-1 bg-black"
                ></motion.div>

                <motion.p
                  key={`desc-${activeIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="text-lg text-gray-700 leading-relaxed"
                >
                  {expertiseContent[activeIndex].description}
                </motion.p>

                {/* Features List */}
                <motion.div
                  key={`features-${activeIndex}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="space-y-2"
                >
                  {expertiseContent[activeIndex].features.map(
                    (feature, idx) => (
                      <motion.div
                        key={`feature-${activeIndex}-${idx}`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.4 + idx * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <div className="w-2 h-2 bg-black rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </motion.div>
                    )
                  )}
                </motion.div>
              </div>

              {/* Right Content - Image (Hidden on small screens) */}
              <div className="hidden lg:flex items-center justify-center">
                <motion.div
                  key={`image-${activeIndex}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="relative w-full h-80 rounded-2xl overflow-hidden shadow-xl"
                >
                  <Image
                    src={
                      expertiseContent[activeIndex].image ||
                      "/placeholder.svg?height=320&width=400"
                    }
                    alt={expertiseContent[activeIndex].title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority={activeIndex === 0}
                  />
                </motion.div>
              </div>
            </div>

            {/* Progress Indicators */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {expertiseContent.map((_, index) => (
                <div
                  key={`indicator-${index}`}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeIndex === index ? "bg-black w-8" : "bg-gray-400"
                  }`}
                ></div>
              ))}
            </div>

            {/* Section Counter */}
            <div className="absolute top-6 right-6 bg-black text-white px-3 py-1 rounded-full">
              <span className="text-sm font-semibold">
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(expertiseContent.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* Invisible Scroll Area */}
          <div
            ref={scrollContainerRef}
            className="absolute inset-0 overflow-y-auto opacity-0 cursor-pointer touch-pan-y"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            <div style={{ height: `${expertiseContent.length * 100}vh` }}>
              {/* This creates the scrollable area */}
            </div>
          </div>

          {/* Scroll Hint */}
          <div className="absolute bottom-3 right-6 flex flex-col items-center space-y-2 text-black">
            <div className="text-xs font-medium">Scroll to explore</div>
            <div className="w-6 h-10 border-2 border-black rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>

        {/* External Progress Bar */}
        <div className="mt-8 mx-5">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-black h-2 rounded-full transition-all duration-300 ease-out"
              style={{
                width: `${
                  ((activeIndex + 1) / expertiseContent.length) * 100
                }%`,
              }}
            ></div>
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

        /* Ensure scrolling works on mobile devices */
        .touch-pan-y {
          touch-action: pan-y;
        }
      `}</style>
    </section>
  );
};

const expertiseContent = [
  {
    title: "Artificial Intelligence",
    description:
      "Unlock smarter solutions with AI that enhances decision-making and streamlines operations. Our AI solutions include Machine Learning Models, Predictive Analytics, and Automated Decision Making.",
    image: "/artificial-intelligence.jpg",
    features: [
      "Machine Learning Models",
      "Predictive Analytics",
      "Automated Decision Making",
    ],
  },
  {
    title: "Generative AI",
    description:
      "Harness the power of creativity through Generative AI, producing fresh content and automating workflows. Features include Content Generation, Creative Automation, and Custom AI Models.",
    image: "/generative-ai.jpg",
    features: ["Content Generation", "Creative Automation", "Custom AI Models"],
  },
  {
    title: "Machine Learning",
    description:
      "Build intelligent systems that analyze patterns, predict outcomes, and continuously optimize operations. Specializing in Pattern Recognition, Predictive Modeling, and Data Analysis.",
    image: "/machine-learning.jpg",
    features: ["Pattern Recognition", "Predictive Modeling", "Data Analysis"],
  },
  {
    title: "Computer Vision",
    description:
      "Transform visual data with advanced computer vision, streamlining image processing and recognition. Our expertise covers Image Recognition, Object Detection, and Visual Analytics.",
    image: "/computer-vision.jpg",
    features: ["Image Recognition", "Object Detection", "Visual Analytics"],
  },
  {
    title: "Cloud Solutions",
    description:
      "Elevate your business with secure, scalable cloud infrastructure designed for seamless operations. Including Scalable Infrastructure, Security & Compliance, and 24/7 Monitoring.",
    image: "/cloud-solutions.jpg",
    features: [
      "Scalable Infrastructure",
      "Security & Compliance",
      "24/7 Monitoring",
    ],
  },
  {
    title: "IoT (Internet of Things)",
    description:
      "Seamlessly connect devices with IoT apps that boost efficiency and enhance automation. Featuring Device Connectivity, Real-time Monitoring, and Smart Automation.",
    image: "/iot.jpg",
    features: [
      "Device Connectivity",
      "Real-time Monitoring",
      "Smart Automation",
    ],
  },
  {
    title: "AR/VR Development",
    description:
      "Deliver immersive, interactive experiences with cutting-edge AR and VR applications. Specializing in Immersive Experiences, 3D Visualization, and Interactive Design.",
    image: "/ar-vr.jpg",
    features: [
      "Immersive Experiences",
      "3D Visualization",
      "Interactive Design",
    ],
  },
  {
    title: "Blockchain",
    description:
      "Strengthen transparency and security with blockchain solutions for various industries. Our services include Secure Transactions, Smart Contracts, and Decentralized Systems.",
    image: "/blockchain.jpg",
    features: [
      "Secure Transactions",
      "Smart Contracts",
      "Decentralized Systems",
    ],
  },
  {
    title: "Business Intelligence",
    description:
      "Empower decision-making with BI tools that provide clear insights and actionable analytics. Including Data Visualization, Performance Analytics, and Strategic Insights.",
    image: "/business-intelligence.jpg",
    features: [
      "Data Visualization",
      "Performance Analytics",
      "Strategic Insights",
    ],
  },
];

export default OurExpertise;
