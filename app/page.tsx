"use client"

import { useState, useEffect, useRef } from "react"
import { Header } from "@/components/Header"
import { HeroSection } from "@/components/HeroSection"
import { ServicesSection } from "@/components/ServicesSection"
import { StatisticsSection } from "@/components/StatisticsSection"
import { ProcessSection } from "@/components/ProcessSection"
import { ProjectsSection } from "@/components/ProjectsSection"
import { TestimonialsSection } from "@/components/TestimonialsSection"
import { TeamSection } from "@/components/TeamSection"
import { VideoCTASection } from "@/components/VideoCTASection"
import { NewsletterSection } from "@/components/NewsletterSection"
import { PanoramaSection } from "@/components/PanoramaSection"
import { Footer } from "@/components/Footer"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mousedown", handleMouseDown)
    document.addEventListener("mouseup", handleMouseUp)

    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, [role="button"]')
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter)
      el.addEventListener("mouseleave", handleMouseLeave)
    })

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mouseup", handleMouseUp)
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter)
        el.removeEventListener("mouseleave", handleMouseLeave)
      })
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Header scrollY={scrollY} />

      <HeroSection />

      <ServicesSection />

      <StatisticsSection />

      <ProcessSection />

      <ProjectsSection />

      <TestimonialsSection />

      <TeamSection />

      <VideoCTASection />

      <NewsletterSection />

      <PanoramaSection />

      <Footer />
    </div>
  )
}
