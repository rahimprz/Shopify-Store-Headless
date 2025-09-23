"use client"

import { AnimatedSection } from "@/components/AnimatedSection"

export function StatisticsSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-20 left-10 text-[200px] font-bold text-gray-200 cal-sans transform -rotate-12 select-none">
          STATS
        </div>
        <div className="absolute bottom-20 right-10 text-[150px] font-bold text-gray-200 cal-sans transform rotate-12 select-none">
          SUCCESS
        </div>
        {/* Decorative circles */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-amber-100 rounded-full opacity-20"></div>
        <div className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-orange-100 rounded-full opacity-30"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-amber-200 rounded-full opacity-25"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16 lg:mb-20">
          {/* Years Experience */}
          <AnimatedSection animation="slideInUp" delay={200}>
            <div className="text-center">
              <div className="relative mb-6">
                <div className="text-6xl sm:text-7xl lg:text-8xl font-bold text-gray-900 cal-sans leading-none">2013</div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-amber-500 rounded-full animate-pulse"></div>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 cal-sans mb-4">Years Experience</h3>
              <p className="text-gray-600 cal-sans font-light leading-relaxed">
                Improving homes with expert craftsmanship for years
              </p>
            </div>
          </AnimatedSection>

          {/* Projects Completed */}
          <AnimatedSection animation="slideInUp" delay={400}>
            <div className="text-center">
              <div className="relative mb-6">
                <div className="text-6xl sm:text-7xl lg:text-8xl font-bold text-gray-900 cal-sans leading-none">
                  190<span className="text-amber-600">+</span>
                </div>
                <div
                  className="absolute -top-2 -right-2 w-4 h-4 bg-orange-500 rounded-full animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                ></div>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 cal-sans mb-4">Projects Completed</h3>
              <p className="text-gray-600 cal-sans font-light leading-relaxed">
                Over 250 successful projects delivered with quality and care
              </p>
            </div>
          </AnimatedSection>

          {/* Skilled Tradespeople */}
          <AnimatedSection animation="slideInUp" delay={600}>
            <div className="text-center">
              <div className="relative mb-6">
                <div className="text-6xl sm:text-7xl lg:text-8xl font-bold text-gray-900 cal-sans leading-none">
                  260<span className="text-amber-600">+</span>
                </div>
                <div
                  className="absolute -top-2 -right-2 w-4 h-4 bg-amber-500 rounded-full animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 cal-sans mb-4">Skilled Tradespeople</h3>
              <p className="text-gray-600 cal-sans font-light leading-relaxed">
                Our team of 30 experts ensures top-quality results
              </p>
            </div>
          </AnimatedSection>

          {/* Client Satisfaction */}
          <AnimatedSection animation="slideInUp" delay={800}>
            <div className="text-center">
              <div className="relative mb-6">
                <div className="text-6xl sm:text-7xl lg:text-8xl font-bold text-gray-900 cal-sans leading-none">
                  328<span className="text-amber-600">+</span>
                </div>
                <div
                  className="absolute -top-2 -right-2 w-4 h-4 bg-orange-500 rounded-full animate-pulse"
                  style={{ animationDelay: "1.5s" }}
                ></div>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 cal-sans mb-4">Client Satisfaction</h3>
              <p className="text-gray-600 cal-sans font-light leading-relaxed">
                All of our clients are satisfied with our work and service
              </p>
            </div>
          </AnimatedSection>
        </div>

        {/* 3D Floor Plan Visualization */}
        <AnimatedSection animation="scaleIn" delay={1000}>
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-100 to-gray-200">
              <img
                src="https://images.pexels.com/photos/6782342/pexels-photo-6782342.jpeg?auto=compress&cs=tinysrgb&w=1400&h=600&fit=crop"
                alt="3D Floor Plan Visualization"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />

              {/* Overlay with subtle gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

              {/* Floating info cards */}
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                  <div>
                    <div className="text-sm font-bold text-gray-900 cal-sans">Living Room</div>
                    <div className="text-xs text-gray-600 cal-sans">24.5 m²</div>
                  </div>
                </div>
              </div>

              <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                <div className="flex items-center">
                  <div
                    className="w-3 h-3 bg-blue-500 rounded-full mr-3 animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                  ></div>
                  <div>
                    <div className="text-sm font-bold text-gray-900 cal-sans">Kitchen</div>
                    <div className="text-xs text-gray-600 cal-sans">18.2 m²</div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                <div className="flex items-center">
                  <div
                    className="w-3 h-3 bg-purple-500 rounded-full mr-3 animate-pulse"
                    style={{ animationDelay: "1s" }}
                  ></div>
                  <div>
                    <div className="text-sm font-bold text-gray-900 cal-sans">Bedroom</div>
                    <div className="text-xs text-gray-600 cal-sans">16.8 m²</div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                <div className="flex items-center">
                  <div
                    className="w-3 h-3 bg-amber-500 rounded-full mr-3 animate-pulse"
                    style={{ animationDelay: "1.5s" }}
                  ></div>
                  <div>
                    <div className="text-sm font-bold text-gray-900 cal-sans">Bathroom</div>
                    <div className="text-xs text-gray-600 cal-sans">8.4 m²</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements around visualization */}
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-amber-400/30 to-orange-500/30 rounded-full backdrop-blur-sm animate-pulse"></div>
            <div
              className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-br from-orange-400/40 to-amber-500/40 rounded-full backdrop-blur-sm animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute top-1/2 -right-4 w-8 h-8 bg-gradient-to-br from-amber-300/20 to-orange-400/20 rounded-full backdrop-blur-sm animate-bounce"
              style={{ animationDelay: "0.5s" }}
            ></div>
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

