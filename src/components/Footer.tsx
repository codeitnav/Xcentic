import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <section id="footer">
    <footer className="bg-black text-white rounded-t-[20px]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h2 className="text-2xl font-bold tracking-wider">XCENTIC</h2>
              <div className="h-1 w-16 bg-white mt-2"></div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transforming businesses through innovative digital solutions and cutting-edge technology.
            </p>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="/about" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  About us
                </a>
              </li>
              <li>
                <a href="/careers" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  Careers
                </a>
              </li>
              <li>
                <a href="/support" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  Support center
                </a>
              </li>
              <li>
                <a href="/sarwisi-ai" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  Sarwisi AI
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/for-taskers"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  For Taskers
                </a>
              </li>
              <li>
                <a
                  href="/for-drivers"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  For Drivers
                </a>
              </li>
              <li>
                <a
                  href="/for-merchants"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  For Merchants
                </a>
              </li>
              <li>
                <a href="/safety" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  Safety Standards
                </a>
              </li>
              <li>
                <a href="/community" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  Community Guidelines
                </a>
              </li>
            </ul>
          </div>

          {/* Join Us Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Join us</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/sell-services"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  Sell your services
                </a>
              </li>
              <li>
                <a href="/get-help" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  Get help today
                </a>
              </li>
              <li>
                <a
                  href="/become-tasker"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  Become a tasker
                </a>
              </li>
              <li>
                <a
                  href="/become-driver"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  Become a driver
                </a>
              </li>
              <li>
                <a href="/advertise" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  Sell and advertise
                </a>
              </li>
            </ul>
          </div>

          {/* Contacts Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacts</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-gray-400" />
                <a
                  href="tel:+917906943033"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  +91 7906943033
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-gray-400" />
                <a
                  href="mailto:business@xcentic.in"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  business@xcentic.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">© {currentYear} XCENTIC Pvt. Ltd. All rights reserved.</div>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/xcentic"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/xcentic"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/company/xcentic"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/xcentic"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </section>
  )
}
