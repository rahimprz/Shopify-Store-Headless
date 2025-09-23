"use client"

import { AnimatedSection } from "@/components/AnimatedSection"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"
import { useState } from "react"

export function NewsletterSection() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email)
    setEmail("")
  }

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-20 left-10 text-[200px] font-bold text-gray-200 cal-sans transform -rotate-12 select-none">
          NEWS
        </div>
        <div className="absolute bottom-20 right-10 text-[150px] font-bold text-gray-200 cal-sans transform rotate-12 select-none">
          LETTER
        </div>
        {/* Decorative circles */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-amber-100 rounded-full opacity-20"></div>
        <div className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-orange-100 rounded-full opacity-30"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-amber-200 rounded-full opacity-25"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* SUBSCRIBE TO THE NEWSLETTER Badge */}
        <AnimatedSection animation="slideInDown" className="text-center mb-8">
          <div>
            <Badge variant="outline" className="px-6 py-3 text-blue-600 border-blue-200 bg-blue-50 rounded-full">
              SUBSCRIBE TO THE NEWSLETTER
            </Badge>
          </div>
        </AnimatedSection>

        {/* Main Heading */}
        <AnimatedSection animation="slideInUp" delay={200} className="text-center mb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 cal-sans leading-[0.9] tracking-tight">
              Join <span className="text-amber-600">Our Newsletter</span>
              <br />
              <span className="text-amber-600">Stay</span> Up To Date
            </h2>
          </div>
        </AnimatedSection>

        {/* Description */}
        <AnimatedSection animation="slideInUp" delay={400} className="text-center mb-12">
          <div>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed cal-sans font-light max-w-2xl mx-auto">
              Join our newsletter. Learn something new, gain access to exclusive content,
              <br />
              and stay informed with the latest updates in the industry.
            </p>
          </div>
        </AnimatedSection>

        {/* Newsletter Form */}
        <AnimatedSection animation="slideInUp" delay={600} className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="relative">
            <div className="flex items-center bg-white rounded-full shadow-lg border border-gray-200 overflow-hidden">
              <Input
                type="email"
                placeholder="Email address..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 border-0 bg-transparent px-6 py-4 text-gray-900 placeholder:text-gray-500 focus:ring-0 focus:outline-none cal-sans"
                required
              />
              <Button
                type="submit"
                size="lg"
                className="bg-amber-500 hover:bg-amber-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 mr-1 my-1"
              >
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </form>
        </AnimatedSection>

        {/* Bottom decorative element */}
        <AnimatedSection animation="fadeIn" delay={800} className="flex justify-center mt-16">
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