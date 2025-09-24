"use client"

import { AnimatedSection } from "@/components/AnimatedSection"
import { useEffect, useState } from "react"

export function StatisticsSection() {
  const [counters, setCounters] = useState({
    years: 0,
    projects: 0,
    team: 0,
    satisfaction: 0
  })

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          animateCounters()
        }
      },
      { threshold: 0.3 }
    )

    const section = document.getElementById('statistics-section')
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [isVisible])

  const animateCounters = () => {
    const targets = { years: 30, projects: 500, team: 50, satisfaction: 100 }
    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps

    let currentStep = 0

    const interval = setInterval(() => {
      currentStep++
      const progress = currentStep / steps

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)

      setCounters({
        years: Math.floor(targets.years * easeOutQuart),
        projects: Math.floor(targets.projects * easeOutQuart),
        team: Math.floor(targets.team * easeOutQuart),
        satisfaction: Math.floor(targets.satisfaction * easeOutQuart)
      })

      if (currentStep >= steps) {
        clearInterval(interval)
        setCounters(targets) // Ensure final values are exact
      }
    }, stepDuration)
  }

  return (
    <section id="statistics-section" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 text-[200px] font-bold text-gray-300 cal-sans transform -rotate-12 select-none animate-pulse">
          STATS
        </div>
        <div className="absolute bottom-20 right-10 text-[150px] font-bold text-gray-300 cal-sans transform rotate-12 select-none animate-pulse" style={{ animationDelay: '1s' }}>
          SUCCESS
        </div>
        {/* Animated decorative circles */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-br from-amber-200 to-orange-200 rounded-full opacity-30 animate-bounce" style={{ animationDuration: '3s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-gradient-to-br from-orange-200 to-amber-200 rounded-full opacity-40 animate-bounce" style={{ animationDuration: '4s', animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-amber-300 to-orange-300 rounded-full opacity-35 animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Statistics Grid with Enhanced Animations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16 lg:mb-20">
          {/* Years Experience */}
          <AnimatedSection animation="slideInUp" delay={200}>
            <div className="text-center group hover:scale-105 transition-all duration-500 cursor-pointer">
              <div className="relative mb-6 p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-amber-200">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 cal-sans leading-none mb-2 group-hover:text-amber-600 transition-colors duration-500">
                    {counters.years}+
                  </div>
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full animate-ping"></div>
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
                </div>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 cal-sans mb-4 group-hover:text-amber-600 transition-colors duration-300">Years Experience</h3>
              <p className="text-gray-600 cal-sans font-light leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                Improving homes with expert craftsmanship for years
              </p>
            </div>
          </AnimatedSection>

          {/* Projects Completed */}
          <AnimatedSection animation="slideInUp" delay={400}>
            <div className="text-center group hover:scale-105 transition-all duration-500 cursor-pointer">
              <div className="relative mb-6 p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-amber-200">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 cal-sans leading-none mb-2 group-hover:text-orange-600 transition-colors duration-500">
                    {counters.projects}<span className="text-amber-600">+</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full animate-ping" style={{ animationDelay: "0.5s" }}></div>
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"></div>
                </div>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 cal-sans mb-4 group-hover:text-orange-600 transition-colors duration-300">Projects Completed</h3>
              <p className="text-gray-600 cal-sans font-light leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                Over 500 successful projects delivered with quality and care
              </p>
            </div>
          </AnimatedSection>

          {/* Skilled Tradespeople */}
          <AnimatedSection animation="slideInUp" delay={600}>
            <div className="text-center group hover:scale-105 transition-all duration-500 cursor-pointer">
              <div className="relative mb-6 p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-amber-200">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 cal-sans leading-none mb-2 group-hover:text-amber-600 transition-colors duration-500">
                    {counters.team}<span className="text-amber-600">+</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full animate-ping" style={{ animationDelay: "1s" }}></div>
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
                </div>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 cal-sans mb-4 group-hover:text-amber-600 transition-colors duration-300">Skilled Tradespeople</h3>
              <p className="text-gray-600 cal-sans font-light leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                Our team of 50+ experts ensures top-quality results
              </p>
            </div>
          </AnimatedSection>

          {/* Client Satisfaction */}
          <AnimatedSection animation="slideInUp" delay={800}>
            <div className="text-center group hover:scale-105 transition-all duration-500 cursor-pointer">
              <div className="relative mb-6 p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-amber-200">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 cal-sans leading-none mb-2 group-hover:text-orange-600 transition-colors duration-500">
                    {counters.satisfaction}<span className="text-amber-600">%</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full animate-ping" style={{ animationDelay: "1.5s" }}></div>
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"></div>
                </div>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 cal-sans mb-4 group-hover:text-orange-600 transition-colors duration-300">Client Satisfaction</h3>
              <p className="text-gray-600 cal-sans font-light leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                All of our clients are satisfied with our work and service
              </p>
            </div>
          </AnimatedSection>
        </div>

        {/* Enhanced 3D Floor Plan Visualization */}
        <AnimatedSection animation="scaleIn" delay={1000}>
          <div className="relative group">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-100 to-gray-200 hover:shadow-3xl transition-all duration-700 transform hover:scale-[1.02]">
              <img
                src="https://images.pexels.com/photos/6782342/pexels-photo-6782342.jpeg?auto=compress&cs=tinysrgb&w=1400&h=600&fit=crop"
                alt="3D Floor Plan Visualization"
                className="w-full h-[400px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Enhanced overlay with animated gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent group-hover:from-black/40 transition-all duration-500"></div>

              {/* Animated floating info cards */}
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl transform hover:scale-110 transition-all duration-300 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                  <div>
                    <div className="text-sm font-bold text-gray-900 cal-sans">Living Room</div>
                    <div className="text-xs text-gray-600 cal-sans">24.5 m²</div>
                  </div>
                </div>
              </div>

              <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl transform hover:scale-110 transition-all duration-300 animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3 animate-pulse" style={{ animationDelay: "0.5s" }}></div>
                  <div>
                    <div className="text-sm font-bold text-gray-900 cal-sans">Kitchen</div>
                    <div className="text-xs text-gray-600 cal-sans">18.2 m²</div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl transform hover:scale-110 transition-all duration-300 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-3 animate-pulse" style={{ animationDelay: "1s" }}></div>
                  <div>
                    <div className="text-sm font-bold text-gray-900 cal-sans">Bedroom</div>
                    <div className="text-xs text-gray-600 cal-sans">16.8 m²</div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl transform hover:scale-110 transition-all duration-300 animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '1.5s' }}>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-amber-500 rounded-full mr-3 animate-pulse" style={{ animationDelay: "1.5s" }}></div>
                  <div>
                    <div className="text-sm font-bold text-gray-900 cal-sans">Bathroom</div>
                    <div className="text-xs text-gray-600 cal-sans">8.4 m²</div>
                  </div>
                </div>
              </div>

              {/* New animated progress indicators */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900 cal-sans mb-2">3D Visualization</div>
                    <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full animate-pulse" style={{ width: '85%' }}></div>
                    </div>
                    <div className="text-sm text-gray-600 cal-sans mt-2">85% Complete</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced decorative elements with animations */}
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-amber-400/40 to-orange-500/40 rounded-full backdrop-blur-sm animate-spin" style={{ animationDuration: '8s' }}></div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-br from-orange-400/50 to-amber-500/50 rounded-full backdrop-blur-sm animate-spin" style={{ animationDuration: '6s', animationDelay: '1s', animationDirection: 'reverse' }}></div>
            <div className="absolute top-1/2 -right-4 w-8 h-8 bg-gradient-to-br from-amber-300/30 to-orange-400/30 rounded-full backdrop-blur-sm animate-bounce" style={{ animationDelay: "0.5s" }}></div>
            <div className="absolute top-1/4 -left-4 w-6 h-6 bg-gradient-to-br from-orange-300/40 to-amber-400/40 rounded-full backdrop-blur-sm animate-bounce" style={{ animationDelay: "1.5s" }}></div>
          </div>
        </AnimatedSection>

        {/* Enhanced bottom decorative element */}
        <AnimatedSection animation="fadeIn" delay={1200} className="flex justify-center mt-16">
          <div className="group cursor-pointer">
            <div className="flex items-center space-x-4 hover:scale-110 transition-transform duration-300">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-amber-300 animate-pulse"></div>
              <div className="w-4 h-4 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full animate-bounce shadow-lg"></div>
              <div className="w-12 h-0.5 bg-gradient-to-r from-amber-300 via-amber-400 to-transparent animate-pulse"></div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}