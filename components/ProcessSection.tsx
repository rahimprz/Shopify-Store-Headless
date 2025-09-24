"use client"
import { AnimatedSection } from "./AnimatedSection" // adjust path if needed

export function ProcessSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-20 left-10 text-[200px] font-bold text-gray-200 cal-sans transform -rotate-12 select-none">
          PROCESS
        </div>
        <div className="absolute bottom-20 right-10 text-[150px] font-bold text-gray-200 cal-sans transform rotate-12 select-none">
          WORK
        </div>
        {/* Decorative circles */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-amber-100 rounded-full opacity-20"></div>
        <div className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-orange-100 rounded-full opacity-30"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-amber-200 rounded-full opacity-25"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* HOW WE WORK Badge */}
        <AnimatedSection animation="slideInLeft" className="flex items-center justify-start mb-8">
          <div>
            <div className="relative bg-white rounded-full px-8 py-4 shadow-lg border border-gray-200">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-amber-500 rounded-full mr-4 shadow-lg animate-pulse"></div>
                <span className="text-amber-600 font-bold tracking-[0.3em] uppercase cal-sans text-sm">HOW WE WORK</span>
                <div className="w-3 h-3 bg-amber-500 rounded-full ml-4 shadow-lg animate-pulse"></div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-amber-100 rounded-full opacity-60"></div>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-orange-100 rounded-full opacity-60"></div>
            </div>
          </div>
        </AnimatedSection>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Content */}
          <AnimatedSection animation="slideInLeft" delay={200}>
            <div>
              {/* Main Heading */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 sm:mb-8 cal-sans leading-[0.9] tracking-tight max-w-4xl">
                Description <span className="text-amber-600">Architecture</span>
                <br />
                <span className="text-amber-600">Process</span> For Exceptional
                <br />
                Results.
              </h2>

              {/* Description */}
              <div className="space-y-4 sm:space-y-6 text-gray-600 text-base sm:text-lg leading-relaxed cal-sans font-light max-w-xl">
                <p>Our process is alive – adapting, refining, and growing with your vision. Always.</p>
                <p>Like artists with a blank canvas, we transform rooms into living works of art.</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Right Process Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Step 01 - Initial Consultation */}
            <AnimatedSection animation="slideInRight" delay={400}>
              <div className="relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 border border-gray-100 group overflow-hidden">
                {/* Large number background */}
                <div className="absolute -bottom-2 -right-2 text-6xl font-bold text-gray-100 cal-sans select-none">
                  01
                </div>

                {/* Image */}
                <div className="relative z-10 mb-4">
                  <div className="w-full h-28 bg-gray-200 rounded-2xl overflow-hidden">
                    <img
                      src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                      alt="Initial Consultation"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-gray-900 cal-sans mb-3">
                    <span className="text-amber-600">01.</span> Initial
                    <br />
                    Consultation
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed cal-sans font-light">
                    We begin by understanding your vision, goals, and needs, followed Antra.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Step 02 - Design & Planning */}
            <AnimatedSection animation="slideInRight" delay={600}>
              <div className="relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 border border-gray-100 group overflow-hidden">
                {/* Large number background */}
                <div className="absolute -bottom-2 -right-2 text-6xl font-bold text-gray-100 cal-sans select-none">
                  02
                </div>

                {/* Image */}
                <div className="relative z-10 mb-4">
                  <div className="w-full h-28 bg-gray-200 rounded-2xl overflow-hidden">
                    <img
                      src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                      alt="Design & Planning"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-gray-900 cal-sans mb-3">
                    <span className="text-amber-600">02.</span> Design &
                    <br />
                    Planning
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed cal-sans font-light">
                    Our team creates detailed designs that reflect your requirements.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Step 03 - Implementation */}
            <AnimatedSection animation="slideInRight" delay={800}>
              <div className="relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 border border-gray-100 group overflow-hidden">
                {/* Large number background */}
                <div className="absolute -bottom-2 -right-2 text-6xl font-bold text-gray-100 cal-sans select-none">
                  03
                </div>

                {/* Image */}
                <div className="relative z-10 mb-4">
                  <div className="w-full h-28 bg-gray-200 rounded-2xl overflow-hidden">
                    <img
                      src="https://images.pexels.com/photos/6782342/pexels-photo-6782342.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                      alt="Implementation"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-gray-900 cal-sans mb-3">
                    <span className="text-amber-600">03.</span> Implementation
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed cal-sans font-light">
                    With carefully selected contractors, we manage every phase.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Step 04 - Project Handover */}
            <AnimatedSection animation="slideInRight" delay={1000}>
              <div className="relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 border border-gray-100 group overflow-hidden">
                {/* Large number background */}
                <div className="absolute -bottom-2 -right-2 text-6xl font-bold text-gray-100 cal-sans select-none">
                  04
                </div>

                {/* Image */}
                <div className="relative z-10 mb-4">
                  <div className="w-full h-28 bg-gray-200 rounded-2xl overflow-hidden">
                    <img
                      src="https://images.pexels.com/photos/6782342/pexels-photo-6782342.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                      alt="Project Handover"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-gray-900 cal-sans mb-3">
                    <span className="text-amber-600">04.</span> Project Handover
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed cal-sans font-light">
                    Upon completion, we conduct a thorough review, making sure all details.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Bottom decorative element */}
        <AnimatedSection animation="fadeIn" delay={1200} className="flex justify-center mt-20">
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