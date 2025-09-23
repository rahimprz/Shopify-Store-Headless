"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, Phone, Search, Menu, X, Grid3X3 } from "lucide-react"

interface HeaderProps {
  scrollY: number
}

export function Header({ scrollY }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigationItems = [
    { name: "Home", hasDropdown: true },
    { name: "Services", hasDropdown: true },
    { name: "Projects", hasDropdown: true },
    { name: "Pages", hasDropdown: true },
    { name: "Blog", hasDropdown: true },
    { name: "Contact Us", hasDropdown: false },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 50 ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <div className="flex-shrink-0 opacity-0 nav-logo">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm transform rotate-45"></div>
              </div>
              <span className="text-2xl font-bold text-white cal-sans tracking-tight">antra</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10 opacity-0 nav-items">
            {navigationItems.map((item, index) => (
              <div key={item.name} className="relative group">
                <button className="flex items-center text-white hover:text-white/80 transition-colors duration-200 font-medium text-[17px] cal-sans">
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDown className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform duration-200" />
                  )}
                </button>
              </div>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center space-x-3 sm:space-x-6 opacity-0 nav-cta">
            {/* Phone Number */}
            <div className="hidden 2xl:flex items-center text-white">
              <Phone className="h-4 w-4 mr-3" />
              <div className="text-xs xl:text-sm">
                <div className="text-xs text-white/70 cal-sans">Call Us Phone</div>
                <div className="font-semibold cal-sans text-xs xl:text-sm">(+480) 123 678 900</div>
              </div>
            </div>

            {/* Get Quote Button */}
            <Button className="bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 cal-sans text-xs sm:text-sm md:text-base">
              Get A Quote!
            </Button>

            {/* Search Icon */}
            <Button
              variant="ghost"
              size="icon"
              className="hidden lg:flex text-white hover:text-white/80 hover:bg-white/10"
            >
              <Search className="h-5 w-5" />
            </Button>

            {/* Grid Icon */}
            <Button
              variant="ghost"
              size="icon"
              className="hidden lg:flex text-white hover:text-white/80 hover:bg-white/10"
            >
              <Grid3X3 className="h-5 w-5" />
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-white hover:text-white/80"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-white/20">
          <div className="px-6 py-6 space-y-3">
            {navigationItems.map((item) => (
              <button
                key={item.name}
                className="flex items-center justify-between w-full px-4 py-3 text-left text-gray-800 hover:bg-gray-50 rounded-lg transition-colors cal-sans"
              >
                {item.name}
                {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
              </button>
            ))}
            <div className="pt-4 border-t border-gray-200">
              <div className="flex items-center text-gray-800 px-4 py-3">
                <Phone className="h-4 w-4 mr-3" />
                <span className="text-sm font-medium cal-sans">(+480) 123 678 900</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
