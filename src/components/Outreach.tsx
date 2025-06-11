import { GlobeDemo } from "./Globe-animation"

export default function Outreach() {
  return (
    <section id="outreach" className="py-24 px-4 md:px-6 lg:px-8 bg-gray-50">
      <div
        className="w-full mx-auto rounded-[40px] overflow-hidden shadow-xl"
        style={{border: "3px solid black", backgroundColor: "#d7f5e9", margin: "0 20px" }}
      >
        <div className="w-full max-w-7xl mx-auto px-4 py-2">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h2 className="text-5xl font-bold tracking-tight mb-4">Global Outreach</h2>
              <div className="h-1 w-20 bg-black mb-4"></div>

              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                At <strong>Xcentic</strong>, we transcend geographical boundaries to deliver exceptional web and mobile
                application development services to clients worldwide. Our global presence enables us to understand
                diverse market needs and create solutions that resonate across cultures and industries.
              </p>

              <div className="space-y-4">
                {[
                  {
                    title: "International Expertise:",
                    desc: "We've successfully delivered projects across 6 continents, understanding local market dynamics and user preferences.",
                  },
                  {
                    title: "24/7 Support:",
                    desc: "Our distributed team ensures round-the-clock support and seamless communication across different time zones.",
                  },
                  {
                    title: "Scalable Solutions:",
                    desc: "From startups to enterprise-level corporations, we build applications that grow with your business globally.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-700">
                      <strong>{item.title}</strong> {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <div className="grid grid-cols-3 gap-4 text-center sm:gap-6">
                  {[
                    { label: "Countries Served", value: "50+" },
                    { label: "Global Clients", value: "500+" },
                    { label: "Time Zones", value: "15+" },
                  ].map((stat, idx) => (
                    <div key={idx}>
                      <div className="text-xl sm:text-3xl font-bold text-black">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Content - Globe Animation */}
            <div className="flex justify-center lg:justify-end">
              <GlobeDemo />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
