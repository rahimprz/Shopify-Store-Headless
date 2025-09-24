"use client"

import { AnimatedSection } from "@/components/AnimatedSection"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight } from "lucide-react"

export function TeamSection() {
  const teamMembers = [
    {
      id: "01",
      name: "Mark Jackson",
      role: "CO-FOUNDER & CEO",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
    },
    {
      id: "02", 
      name: "Valeria Novikova",
      role: "LIGHTING SPECIALIST",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
    },
    {
      id: "03",
      name: "Alex Podzemsky", 
      role: "GRAPHICS DESIGNER",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
    },
    {
      id: "04",
      name: "Helen Reeves",
      role: "MATERIAL CONSULTANT", 
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
    },
    {
      id: "05",
      name: "Jake Nicholson",
      role: "3D VISUALIZATION",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      isHighlighted: true
    }
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-20 left-10 text-[200px] font-bold text-gray-200 cal-sans transform -rotate-12 select-none">
          TEAM
        </div>
        <div className="absolute bottom-20 right-10 text-[150px] font-bold text-gray-200 cal-sans transform rotate-12 select-none">
          EXPERTS
        </div>
        {/* Decorative circles */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-amber-100 rounded-full opacity-20"></div>
        <div className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-orange-100 rounded-full opacity-30"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-amber-200 rounded-full opacity-25"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* AMAZING DESIGN TEAM Badge */}
        <AnimatedSection animation="slideInDown" className="flex items-center justify-start mb-8">
          <div>
            <Badge variant="outline" className="px-6 py-3 text-blue-600 border-blue-200 bg-blue-50 rounded-full">
              AMAZING DESIGN TEAM
            </Badge>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Content */}
          <AnimatedSection animation="slideInLeft" delay={200}>
            <div>
              {/* Main Heading */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-8 cal-sans leading-[0.9] tracking-tight">
                Meet The <span className="text-amber-600">Experts Our</span>
                <br />
                <span className="text-amber-600">Interior</span> Designers
              </h2>

              {/* Featured Team Member Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-amber-100 to-orange-200">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600&h=700&fit=crop"
                  alt="Mark Jackson - Lead Designer"
                  className="w-full h-[500px] lg:h-[600px] object-cover"
                />
                
                {/* Decorative elements around image */}
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-amber-400/30 to-orange-500/30 rounded-full backdrop-blur-sm animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-br from-orange-400/40 to-amber-500/40 rounded-full backdrop-blur-sm animate-pulse" style={{ animationDelay: "1s" }}></div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right Team List */}
          <AnimatedSection animation="slideInRight" delay={400}>
            <div className="space-y-0">
              {teamMembers.map((member, index) => (
                <div 
                  key={member.id}
                  className={`group border-b border-gray-200 py-6 hover:border-amber-300 transition-all duration-300 cursor-pointer ${
                    member.isHighlighted ? 'bg-gradient-to-r from-amber-50 to-transparent rounded-lg px-4' : ''
                  }`}
                  style={{ 
                    opacity: 0,
                    animationDelay: `${600 + (index * 100)}ms`,
                    animationFillMode: 'both'
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center flex-1">
                      <span className={`font-bold cal-sans text-lg mr-6 min-w-[3rem] ${
                        member.isHighlighted ? 'text-amber-600' : 'text-gray-400'
                      }`}>
                        {member.id}
                      </span>
                      <div className="flex-1">
                        <h3 className={`text-2xl lg:text-3xl font-bold cal-sans group-hover:text-gray-700 transition-colors duration-300 ${
                          member.isHighlighted ? 'text-amber-600' : 'text-gray-900'
                        }`}>
                          {member.name}
                        </h3>
                        <p className="text-sm text-gray-600 cal-sans mt-1 tracking-wider">
                          {member.role}
                        </p>
                      </div>
                    </div>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 ml-4 ${
                      member.isHighlighted 
                        ? 'bg-amber-500 text-white shadow-lg' 
                        : 'bg-gray-100 group-hover:bg-gray-200'
                    }`}>
                      <ArrowUpRight className={`w-5 h-5 transition-colors duration-300 ${
                        member.isHighlighted ? 'text-white' : 'text-gray-600'
                      }`} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
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