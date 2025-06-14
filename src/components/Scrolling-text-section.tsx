"use client"

export default function ScrollingTextSection() {
  const SvgIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-emerald-500"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
      />
    </svg>
  )

  return (
    <section id="scrolling-text" className="py-10 bg-gray-50 overflow-hidden mb-12">
      <div className="space-y-4">
        {/* First Line - Moving Left */}
        <div className="relative">
          <div className="flex animate-scroll-left whitespace-nowrap">
            <div className="flex items-center space-x-8 text-4xl md:text-5xl lg:text-6xl font-black text-gray-900">
              <span>TRANSFORMING BUSINESSES</span>
              {SvgIcon}
              <span>DIGITAL INNOVATION</span>
              {SvgIcon}
              <span>AI SOLUTIONS</span>
              {SvgIcon}
              <span>TRANSFORMING BUSINESSES</span>
              {SvgIcon}
              <span>DIGITAL INNOVATION</span>
              {SvgIcon}
              <span>AI SOLUTIONS</span>
              {SvgIcon}
            </div>
          </div>
        </div>

        {/* Second Line - Moving Right */}
        <div className="relative">
          <div className="flex animate-scroll-right whitespace-nowrap">
            <div className="flex items-center space-x-8 text-4xl md:text-5xl lg:text-6xl font-black text-transparent stroke-text">
              <span>CLOUD SERVICES</span>
              {SvgIcon}
              <span>MOBILE APPS</span>
              {SvgIcon}
              <span>WEB DEVELOPMENT</span>
              {SvgIcon}
              <span>CLOUD SERVICES</span>
              {SvgIcon}
              <span>MOBILE APPS</span>
              {SvgIcon}
              <span>WEB DEVELOPMENT</span>
              {SvgIcon}
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
