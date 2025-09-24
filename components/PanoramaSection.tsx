"use client"

import { AnimatedSection } from "@/components/AnimatedSection"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Play, RotateCcw, Maximize2 } from "lucide-react"

export function PanoramaSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-20 left-10 text-[200px] font-bold text-gray-200 cal-sans transform -rotate-12 select-none">
          360°
        </div>
        <div className="absolute bottom-20 right-10 text-[150px] font-bold text-gray-200 cal-sans transform rotate-12 select-none">
          VIEW
        </div>
        {/* Decorative circles */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-amber-100 rounded-full opacity-20"></div>
        <div className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-orange-100 rounded-full opacity-30"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-amber-200 rounded-full opacity-25"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Top Stats */}
        <AnimatedSection animation="slideInDown" className="text-center mb-12">
          <div className="text-gray-600 cal-sans text-lg mb-8">
            Our Website <span className="text-amber-600 font-bold">75000+</span> VIP Customer
          </div>
        </AnimatedSection>

        {/* Partner Logos */}
        <AnimatedSection animation="slideInUp" delay={200} className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {/* Building Construction */}
            <div className="flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 mb-3 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors duration-300">
                <div className="w-8 h-8 border-2 border-gray-600 rounded-sm relative">
                  <div className="absolute inset-1 border border-gray-600"></div>
                </div>
              </div>
              <div className="text-xs font-bold text-gray-700 cal-sans uppercase tracking-wider">BUILDING</div>
              <div className="text-xs text-gray-500 cal-sans">CONSTRUCTION</div>
            </div>

            {/* Architect Real Estate */}
            <div className="flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 mb-3 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors duration-300">
                <div className="w-8 h-8 relative">
                  <div className="w-full h-6 border-2 border-gray-600 border-b-0"></div>
                  <div className="w-full h-2 bg-gray-600"></div>
                </div>
              </div>
              <div className="text-xs font-bold text-gray-700 cal-sans uppercase tracking-wider">ARCHITECT</div>
              <div className="text-xs text-gray-500 cal-sans">REAL ESTATE</div>
            </div>

            {/* Trend Interiors */}
            <div className="flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 mb-3 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors duration-300">
                <div className="w-8 h-8 relative">
                  <div className="w-full h-2 bg-gray-600 mb-1"></div>
                  <div className="w-3/4 h-2 bg-gray-600 mb-1"></div>
                  <div className="w-1/2 h-2 bg-gray-600"></div>
                </div>
              </div>
              <div className="text-xs font-bold text-gray-700 cal-sans uppercase tracking-wider">TREND</div>
              <div className="text-xs text-gray-500 cal-sans">INTERIORS</div>
            </div>

            {/* Interior Premium */}
            <div className="flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 mb-3 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors duration-300">
                <div className="w-8 h-8 relative">
                  <div className="w-full h-full border-2 border-gray-600 rounded-sm">
                    <div className="absolute inset-2 bg-gray-600 rounded-sm"></div>
                  </div>
                </div>
              </div>
              <div className="text-xs font-bold text-gray-700 cal-sans uppercase tracking-wider">INTERIOR</div>
              <div className="text-xs text-gray-500 cal-sans">PREMIUM</div>
            </div>

            {/* Building Construction */}
            <div className="flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 mb-3 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors duration-300">
                <div className="w-8 h-8 bg-gray-600 rounded-full relative">
                  <div className="absolute inset-2 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="text-xs font-bold text-gray-700 cal-sans uppercase tracking-wider">BUILDING</div>
              <div className="text-xs text-gray-500 cal-sans">CONSTRUCTION</div>
            </div>

            {/* Real Estate */}
            <div className="flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 mb-3 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors duration-300">
                <div className="w-8 h-8 relative">
                  <div className="w-full h-6 border-2 border-gray-600 border-b-0 transform rotate-45"></div>
                  <div className="absolute bottom-0 w-full h-2 bg-gray-600"></div>
                </div>
              </div>
              <div className="text-xs font-bold text-gray-700 cal-sans uppercase tracking-wider">REAL</div>
              <div className="text-xs text-gray-500 cal-sans">ESTATE</div>
            </div>
          </div>
        </AnimatedSection>

        {/* 360-Degree Panoramas Badge */}
        <AnimatedSection animation="slideInDown" delay={400} className="text-center mb-8">
          <div>
            <Badge variant="outline" className="px-6 py-3 text-amber-600 border-amber-200 bg-amber-50 rounded-full">
              <RotateCcw className="w-4 h-4 mr-2" />
              360-DEGREE PANORAMAS
            </Badge>
          </div>
        </AnimatedSection>

        {/* Main Heading */}
        <AnimatedSection animation="slideInUp" delay={600} className="text-center mb-16">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 cal-sans leading-[0.9] tracking-tight">
              Create An Even <span className="text-[#caa05c]">Greater</span>
              <br />
              <span className="text-[#caa05c]">Experience</span>
            </h2>
          </div>
        </AnimatedSection>

        {/* 360 Panorama Viewer */}
        <AnimatedSection animation="scaleIn" delay={800}>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gray-900 group">
            {/* Main panorama image */}
            <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[700px]">
              <img
                src="https://images.pexels.com/photos/6782342/pexels-photo-6782342.jpeg?auto=compress&cs=tinysrgb&w=1400&h=700&fit=crop"
                alt="360 Degree Interior View"
                className="w-full h-full object-cover"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>

              {/* 360 Control Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="bg-white/95 backdrop-blur-sm rounded-full p-6 shadow-2xl transform scale-90 group-hover:scale-100 transition-transform duration-500">
                  <Button
                    size="lg"
                    className="bg-[#caa05c] hover:bg-[#b8945a] text-white rounded-full w-20 h-20 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Play className="w-8 h-8 ml-1" />
                  </Button>
                </div>
              </div>

              {/* 360 Degree Indicator */}
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                <div className="flex items-center text-gray-900">
                  <RotateCcw className="w-4 h-4 mr-2 animate-spin" style={{ animationDuration: '3s' }} />
                  <span className="font-bold cal-sans text-sm">360°</span>
                </div>
              </div>

              {/* Fullscreen Button */}
              <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-colors duration-300 cursor-pointer">
                <Maximize2 className="w-5 h-5 text-gray-900" />
              </div>

              {/* Navigation Dots */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
                <div className="w-3 h-3 bg-white rounded-full shadow-lg"></div>
                <div className="w-3 h-3 bg-white/50 rounded-full shadow-lg"></div>
                <div className="w-3 h-3 bg-white/50 rounded-full shadow-lg"></div>
                <div className="w-3 h-3 bg-white/50 rounded-full shadow-lg"></div>
              </div>

              {/* Room Labels */}
              <div className="absolute top-1/4 left-1/4 bg-[#caa05c]/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg animate-pulse">
                <span className="text-white text-xs font-bold cal-sans">Living Room</span>
              </div>

              <div className="absolute top-1/3 right-1/3 bg-blue-500/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg animate-pulse" style={{ animationDelay: '0.5s' }}>
                <span className="text-white text-xs font-bold cal-sans">Kitchen</span>
              </div>

              <div className="absolute bottom-1/3 left-1/3 bg-purple-500/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg animate-pulse" style={{ animationDelay: '1s' }}>
                <span className="text-white text-xs font-bold cal-sans">Dining</span>
              </div>
            </div>

            {/* Decorative elements around the viewer */}
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-amber-400/30 to-orange-500/30 rounded-full backdrop-blur-sm animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-br from-orange-400/40 to-amber-500/40 rounded-full backdrop-blur-sm animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 -right-4 w-8 h-8 bg-gradient-to-br from-amber-300/20 to-orange-400/20 rounded-full backdrop-blur-sm animate-bounce" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </AnimatedSection>

        {/* Bottom CTA */}
        <AnimatedSection animation="slideInUp" delay={1000} className="text-center mt-16">
          <div>
            <Button className="bg-[#caa05c] hover:bg-[#b8945a] text-white px-10 py-5 rounded-full font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 cal-sans text-lg flex items-center">
              Experience 360° Tour
              <RotateCcw className="ml-3 w-5 h-5" />
            </Button>
          </div>
        </AnimatedSection>

        {/* Bottom decorative element */}
        <AnimatedSection animation="fadeIn" delay={1200} className="flex justify-center mt-16">
          <div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-0.5 bg-amber-300"></div>
              <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
              <div className="w-12 h-0.5 bg-amber-300"></div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}