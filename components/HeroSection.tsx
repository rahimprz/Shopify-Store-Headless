"use client"

import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const backgroundImages = [
    "https://images.pexels.com/photos/6782342/pexels-photo-6782342.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [backgroundImages.length])

  return (
    <section className="relative h-screen flex items-center justify-start overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-2000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Interior Design ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white shadow-lg scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
        <div className="max-w-6xl">
          {/* Badge */}
          <div className="inline-block mb-8 sm:mb-12 opacity-0 hero-badge">
            <span className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-base font-medium tracking-[0.2em] uppercase cal-sans border border-white/30">
              Fast and Reliable
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold mb-6 sm:mb-8 md:mb-12 leading-[0.85] sm:leading-[0.9] text-white cal-sans opacity-0 hero-text tracking-tight max-w-7xl group">
            The Art of Stunning
            <br />
            <span className="text-white">Interior Design</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 sm:mb-12 md:mb-16 max-w-xl sm:max-w-2xl lg:max-w-3xl leading-relaxed cal-sans opacity-0 hero-subtitle font-light hover:text-white transition-colors duration-500">
            Whether it's your home, office, or a commercial project, we are always dedicated to bringing your vision to
            life.
          </p>

          {/* CTA Button */}
          <div className="opacity-0 hero-button">
            <Button className="bg-[#caa05c] hover:bg-[#b8945a] text-white px-8 sm:px-10 md:px-14 py-4 sm:py-5 md:py-7 rounded-full text-base sm:text-lg md:text-xl font-semibold transition-all duration-500 shadow-2xl hover:shadow-3xl hover:scale-110 group cal-sans relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative z-10">
              Get Started Today
              </span>
              <svg className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-500 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}