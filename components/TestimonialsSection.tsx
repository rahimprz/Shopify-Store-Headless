"use client"

import { AnimatedSection } from "@/components/AnimatedSection"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-20 left-10 text-[200px] font-bold text-gray-200 cal-sans transform -rotate-12 select-none">
          REVIEWS
        </div>
        <div className="absolute bottom-20 right-10 text-[150px] font-bold text-gray-200 cal-sans transform rotate-12 select-none">
          CLIENTS
        </div>
        {/* Decorative circles */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-amber-100 rounded-full opacity-20"></div>
        <div className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-orange-100 rounded-full opacity-30"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-amber-200 rounded-full opacity-25"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Hero Building Image */}
        <AnimatedSection animation="slideInDown" className="mb-16 lg:mb-20">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gray-200">
            <img
              src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1400&h=300&fit=crop"
              alt="Modern Architecture Building"
              className="w-full h-[200px] sm:h-[250px] lg:h-[300px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>
          </div>
        </AnimatedSection>

        {/* OUR CLIENTS SAY Badge */}
        <AnimatedSection animation="slideInLeft" className="flex items-center justify-start mb-8">
          <div>
            <div className="relative bg-white rounded-full px-8 py-4 shadow-lg border border-gray-200">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-amber-500 rounded-full mr-4 shadow-lg animate-pulse"></div>
                <span className="text-amber-600 font-bold tracking-[0.3em] uppercase cal-sans text-sm">OUR CLIENTS SAY</span>
                <div className="w-3 h-3 bg-amber-500 rounded-full ml-4 shadow-lg animate-pulse"></div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-amber-100 rounded-full opacity-60"></div>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-orange-100 rounded-full opacity-60"></div>
            </div>
          </div>
        </AnimatedSection>

        {/* Main Heading */}
        <AnimatedSection animation="slideInUp" delay={200} className="text-center mb-16 lg:mb-20">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 cal-sans leading-[0.9] tracking-tight">
              Here's What <span className="text-amber-600">Warm Words</span>
              <br />
              <span className="text-amber-600">Our Clients</span> Say
            </h2>
          </div>
        </AnimatedSection>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Side - Construction Image */}
          <AnimatedSection animation="slideInLeft" delay={400}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/h1-banner08.jpg"
                alt="Construction Team Working"
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              
              {/* Floating elements */}
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                  <div>
                    <div className="text-sm font-bold text-gray-900 cal-sans">Project Status</div>
                    <div className="text-xs text-gray-600 cal-sans">In Progress</div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-6 right-6 bg-amber-500/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                <div className="text-2xl font-bold text-white cal-sans">95%</div>
                <div className="text-sm text-white/90 cal-sans">Complete</div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right Side - Testimonial Content */}
          <AnimatedSection animation="slideInRight" delay={600}>
            <div className="space-y-8">
              {/* Rating Section */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-5xl lg:text-6xl font-bold text-gray-900 cal-sans mb-2">4.80</div>
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-amber-500 fill-current" />
                      ))}
                    </div>
                    <div className="text-gray-600 cal-sans text-sm">2,688 reviews</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-gray-900 cal-sans mb-2">
                      From Concept To Reality, The Team Turned My
                    </div>
                    <div className="text-lg font-bold text-gray-900 cal-sans mb-2">
                      Vision Into A Stunning, Livable Space. I Couldn't
                    </div>
                    <div className="text-lg font-bold text-gray-900 cal-sans">
                      Be Happier With This!
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Testimonial */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <div className="mb-6">
                  <div className="text-6xl text-amber-500 cal-sans leading-none mb-4">"</div>
                  <p className="text-lg lg:text-xl text-gray-700 leading-relaxed cal-sans font-light">
                    I absolutely love my the new modern living room! The clean lines, a neutral tones, and minimalist 
                    interior create such a calming & stylish atmosphere. Highly recommend their modern interior design services!
                  </p>
                </div>

                {/* Client Info */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4 overflow-hidden">
                    <img
                      src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                      alt="Morgan Dufresne"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 cal-sans">Morgan Dufresne</div>
                    <div className="text-gray-600 cal-sans text-sm">Company Owner</div>
                  </div>
                </div>
              </div>

              {/* Additional Testimonials */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed cal-sans font-light mb-4">
                    "Exceptional service and attention to detail. The team exceeded our expectations!"
                  </p>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-300 rounded-full mr-3 overflow-hidden">
                      <img
                        src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                        alt="Sarah Johnson"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 cal-sans text-sm">Sarah Johnson</div>
                      <div className="text-gray-600 cal-sans text-xs">Homeowner</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed cal-sans font-light mb-4">
                    "Professional, creative, and delivered exactly what we envisioned. Highly recommended!"
                  </p>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-300 rounded-full mr-3 overflow-hidden">
                      <img
                        src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                        alt="Michael Chen"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 cal-sans text-sm">Michael Chen</div>
                      <div className="text-gray-600 cal-sans text-xs">Business Owner</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Bottom decorative element */}
        <AnimatedSection animation="fadeIn" delay={800} className="flex justify-center mt-20">
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