"use client"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-start overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/6782342/pexels-photo-6782342.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Modern Interior Design"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
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
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold mb-6 sm:mb-8 md:mb-12 leading-[0.85] sm:leading-[0.9] text-white cal-sans opacity-0 hero-text tracking-tight max-w-7xl">
            The Art of Stunning
            <br />
            Interior Design
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 sm:mb-12 md:mb-16 max-w-xl sm:max-w-2xl lg:max-w-3xl leading-relaxed cal-sans opacity-0 hero-subtitle font-light">
            Whether it's your home, office, or a commercial project, we are always dedicated to bringing your vision to
            life.
          </p>

          {/* CTA Button */}
          <div className="opacity-0 hero-button">
            <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 sm:px-10 md:px-14 py-4 sm:py-5 md:py-7 rounded-full text-base sm:text-lg md:text-xl font-semibold transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 group cal-sans backdrop-blur-sm">
              Take Course!
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
