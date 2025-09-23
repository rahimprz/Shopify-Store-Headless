"use client"

import { AnimatedSection } from "@/components/AnimatedSection"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

export function VideoCTASection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/6782342/pexels-photo-6782342.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Modern Interior Design"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <AnimatedSection animation="slideInLeft">
            <div>
              {/* Main Heading */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 cal-sans leading-[0.9] tracking-tight">
                Unlock Your Dream
                <br />
                Home Today!
              </h2>
            </div>
          </AnimatedSection>

          {/* Right Content */}
          <AnimatedSection animation="slideInRight" delay={200}>
            <div className="text-right">
              <p className="text-white/90 text-base sm:text-lg leading-relaxed cal-sans font-light mb-8 max-w-md ml-auto">
                We encourage clients to actively participate in discussions, share their ideas, preferences, and feedback.
              </p>

              {/* Play Button */}
              <div className="flex justify-end">
                <Button
                  size="lg"
                  className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-2 border-white/30 hover:border-white/50 rounded-full w-20 h-20 flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-300 group"
                >
                  <Play className="w-8 h-8 ml-1 group-hover:scale-110 transition-transform duration-300" />
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-6 h-6 bg-amber-500/30 rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-white/30 rounded-full animate-bounce" style={{ animationDelay: "0.5s" }}></div>
      </div>
    </section>
  )
}