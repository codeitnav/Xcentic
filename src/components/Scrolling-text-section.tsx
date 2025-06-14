"use client"

export default function ScrollingTextSection() {
  return (
    <section id="scrolling-text" className="py-10 bg-gray-50 overflow-hidden mb-12">
      <div className="space-y-4">
        {/* First Line - Moving Left */}
        <div className="relative">
          <div className="flex animate-scroll-left whitespace-nowrap">
            <div className="flex items-center space-x-8 text-4xl md:text-5xl lg:text-6xl font-black text-gray-900">
              <span>TRANSFORMING BUSINESSES</span>
              <span className="text-emerald-500 stroke-text">*</span>
              <span>DIGITAL INNOVATION</span>
              <span className="text-emerald-500 stroke-text">*</span>
              <span>AI SOLUTIONS</span>
              <span className="text-emerald-500 stroke-text">*</span>
              <span>TRANSFORMING BUSINESSES</span>
              <span className="text-emerald-500 stroke-text">*</span>
              <span>DIGITAL INNOVATION</span>
              <span className="text-emerald-500 stroke-text">*</span>
              <span>AI SOLUTIONS</span>
              <span className="text-emerald-500 stroke-text">*</span>
            </div>
          </div>
        </div>

        {/* Second Line - Moving Right */}
        <div className="relative">
          <div className="flex animate-scroll-right whitespace-nowrap">
            <div className="flex items-center space-x-8 text-4xl md:text-5xl lg:text-6xl font-black text-transparent stroke-text">
              <span>CLOUD SERVICES</span>
              <span className="text-emerald-500 opacity-100">*</span>
              <span>MOBILE APPS</span>
              <span className="text-emerald-500 opacity-100">*</span>
              <span>WEB DEVELOPMENT</span>
              <span className="text-emerald-500 opacity-100">*</span>
              <span>CLOUD SERVICES</span>
              <span className="text-emerald-500 opacity-100">*</span>
              <span>MOBILE APPS</span>
              <span className="text-emerald-500 opacity-100">*</span>
              <span>WEB DEVELOPMENT</span>
              <span className="text-emerald-500 opacity-100">*</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 10s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 10s linear infinite;
        }

        .stroke-text {
          -webkit-text-stroke: 2px #1f2937;
          text-stroke: 2px #1f2937;
        }

        @media (max-width: 768px) {
          .stroke-text {
            -webkit-text-stroke: 1px #1f2937;
            text-stroke: 1px #1f2937;
          }
        }
      `}</style>
    </section>
  )
}
