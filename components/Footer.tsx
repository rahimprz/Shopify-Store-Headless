"use client"

import { AnimatedSection } from "@/components/AnimatedSection"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { name: "About Us", href: "#" },
      { name: "Services", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Our Team", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Contact Us", href: "#" }
    ],
    projects: [
      { name: "Our Projects", href: "#" },
      { name: "Partners", href: "#" },
      { name: "Partners Program", href: "#" },
      { name: "Affiliate Program", href: "#" },
      { name: "Terms & Conditions", href: "#" },
      { name: "Support Center", href: "#" }
    ]
  }

  const socialLinks = [
    { name: "Facebook", href: "#" },
    { name: "Instagram", href: "#" },
    { name: "YouTube", href: "#" },
    { name: "Twitter", href: "#" }
  ]

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/foter-bg.jpg"
          alt="Footer Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Company Info */}
          <AnimatedSection animation="slideInUp" className="lg:col-span-1">
            <div>
              {/* Logo */}
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-sm transform rotate-45"></div>
                </div>
                <span className="text-2xl font-bold text-white cal-sans tracking-tight">antra</span>
              </div>

              {/* Description */}
              <p className="text-gray-300 cal-sans font-light leading-relaxed mb-6">
                We Transform Your Vision Into Beautifully Crafted Spaces.
              </p>

              {/* Address */}
              <div className="text-gray-400 cal-sans text-sm leading-relaxed">
                <p>5609 E Sprague Ave, Spokane Valley,</p>
                <p>WA 99212, USA</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Company Links */}
          <AnimatedSection animation="slideInUp" delay={200} className="lg:col-span-1">
            <div>
              <h3 className="text-lg font-bold text-white cal-sans mb-6">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-300 cal-sans text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* Projects Links */}
          <AnimatedSection animation="slideInUp" delay={400} className="lg:col-span-1">
            <div>
              <h3 className="text-lg font-bold text-white cal-sans mb-6">Projects</h3>
              <ul className="space-y-3">
                {footerLinks.projects.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-300 cal-sans text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* Contact Info */}
          <AnimatedSection animation="slideInUp" delay={600} className="lg:col-span-1">
            <div>
              <h3 className="text-lg font-bold text-white cal-sans mb-6">Contact</h3>
              
              {/* Phone */}
              <div className="mb-4">
                <a
                  href="tel:+10844560789"
                  className="text-amber-500 hover:text-amber-400 transition-colors duration-300 cal-sans text-lg font-semibold"
                >
                  +(084) 456-0789
                </a>
              </div>

              {/* Email */}
              <div className="mb-6">
                <a
                  href="mailto:support@example.com"
                  className="text-gray-300 hover:text-white transition-colors duration-300 cal-sans text-sm"
                >
                  Support@example.com
                </a>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 cal-sans text-sm"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-gray-800 mt-16 pt-8">
          <AnimatedSection animation="fadeIn" delay={800}>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <p className="text-gray-400 cal-sans text-sm">
                © Copyright {currentYear} Antra. All rights reserved.
              </p>
              
              {/* Decorative element */}
              <div className="flex items-center space-x-4 mt-4 md:mt-0">
                <div className="w-8 h-0.5 bg-amber-500"></div>
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                <div className="w-8 h-0.5 bg-amber-500"></div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </footer>
  )
}