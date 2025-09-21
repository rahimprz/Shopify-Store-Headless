"use client";

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { 
  ChevronDown, 
  Phone, 
  Search, 
  ArrowDown,
  Menu,
  X,
  Grid3X3,
  ExternalLink,
  ArrowRight,
  Users,
  Award
} from 'lucide-react';

import { ProjectsSection } from '@/components/ProjectsSection';
 
export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, [role="button"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  const navigationItems = [
    { name: 'Home', hasDropdown: true },
    { name: 'Services', hasDropdown: true },
    { name: 'Projects', hasDropdown: true },
    { name: 'Pages', hasDropdown: true },
    { name: 'Blog', hasDropdown: true },
    { name: 'Contact Us', hasDropdown: false },
  ];

  return (
    <div className="min-h-screen bg-white">
      
 

      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <div className="flex-shrink-0 opacity-0 nav-logo">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-sm transform rotate-45"></div>
                </div>
                <span className="text-2xl font-bold text-white cal-sans tracking-tight">
                  antra
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-10 opacity-0 nav-items">
              {navigationItems.map((item, index) => (
                <div key={item.name} className="relative group">
                  <button className="flex items-center text-white hover:text-white/80 transition-colors duration-200 font-medium text-[17px] cal-sans">
                    {item.name}
                    {item.hasDropdown && (
                      <ChevronDown className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform duration-200" />
                    )}
                  </button>
                </div>
              ))}
            </nav>

            {/* Right Side */}
            <div className="flex items-center space-x-3 sm:space-x-6 opacity-0 nav-cta">
              {/* Phone Number */}
              <div className="hidden xl:flex items-center text-white">
                <Phone className="h-4 w-4 mr-3" />
                <div className="text-sm">
                  <div className="text-xs text-white/70 cal-sans">Call Us Phone</div>
                  <div className="font-semibold cal-sans">(+480) 123 678 900</div>
                </div>
              </div>

              {/* Get Quote Button */}
              <Button className="bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 cal-sans text-sm sm:text-[16px]">
                Get A Quote!
              </Button>

              {/* Search Icon */}
              <Button variant="ghost" size="icon" className="hidden lg:flex text-white hover:text-white/80 hover:bg-white/10">
                <Search className="h-5 w-5" />
              </Button>

              {/* Grid Icon */}
              <Button variant="ghost" size="icon" className="hidden lg:flex text-white hover:text-white/80 hover:bg-white/10">
                <Grid3X3 className="h-5 w-5" />
              </Button>

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-white hover:text-white/80"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-white/20">
            <div className="px-6 py-6 space-y-3">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  className="flex items-center justify-between w-full px-4 py-3 text-left text-gray-800 hover:bg-gray-50 rounded-lg transition-colors cal-sans"
                >
                  {item.name}
                  {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
                </button>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center text-gray-800 px-4 py-3">
                  <Phone className="h-4 w-4 mr-3" />
                  <span className="text-sm font-medium cal-sans">(+480) 123 678 900</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
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
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem] 3xl:text-[12rem] font-bold mb-8 sm:mb-12 leading-[0.8] sm:leading-[0.85] text-white cal-sans opacity-0 hero-text tracking-tight">
              The Art of Stunning
              <br />
              Interior Design
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-12 sm:mb-16 max-w-2xl sm:max-w-3xl leading-relaxed cal-sans opacity-0 hero-subtitle font-light">
              Whether it's your home, office, or a commercial project, we are always dedicated to bringing your vision to life.
            </p>

            {/* CTA Button */}
            <div className="opacity-0 hero-button">
              <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 sm:px-12 py-4 sm:py-6 rounded-full text-lg sm:text-xl font-semibold transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 group cal-sans backdrop-blur-sm">
                Take Course!
                <div className="ml-4 w-8 h-8 border-2 border-current rounded-full flex items-center justify-center group-hover:bg-gray-900 group-hover:border-gray-900 transition-all duration-300">
                  <span className="text-sm font-bold group-hover:text-white transition-colors duration-300">→</span>
                </div>
              </Button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 sm:bottom-12 left-6 lg:left-12 opacity-0 scroll-indicator">
            <div className="animate-bounce-custom">
              <div className="w-12 h-12 rounded-full border-2 border-white/40 flex items-center justify-center backdrop-blur-sm bg-white/10">
                <ArrowDown className="h-5 w-5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Sections */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-3">
          <div className="absolute top-20 left-10 text-[200px] font-bold text-gray-200 cal-sans transform -rotate-12 select-none">
            WHO WE ARE
          </div>
          <div className="absolute bottom-20 right-10 text-[150px] font-bold text-gray-200 cal-sans transform rotate-12 select-none">
            DESIGN
          </div>
          {/* Decorative circles */}
          <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-amber-100 rounded-full opacity-20"></div>
          <div className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-orange-100 rounded-full opacity-30"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-amber-200 rounded-full opacity-25"></div>
        </div>
        
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* WHO WE ARE Badge */}
          <div className="flex items-center justify-center mb-12 opacity-0 service-badge">
            <div className="relative bg-white rounded-full px-8 py-4 shadow-xl border border-gray-100">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-amber-500 rounded-full mr-4 shadow-lg animate-pulse"></div>
                <span className="text-amber-600 font-bold tracking-[0.3em] uppercase cal-sans text-sm">
                  WHO WE ARE
                </span>
                <div className="w-3 h-3 bg-amber-500 rounded-full ml-4 shadow-lg animate-pulse"></div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-amber-100 rounded-full opacity-60"></div>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-orange-100 rounded-full opacity-60"></div>
            </div>
          </div>

          {/* Main Heading and Description */}
          <div className="max-w-5xl mb-20 opacity-0 service-heading">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-8 cal-sans leading-[0.9] tracking-tight">
              Experience <span className="text-amber-600">The Art Of Interior Design</span>
            </h2>
            <div className="space-y-6 text-gray-600 text-lg sm:text-xl leading-relaxed cal-sans max-w-3xl">
              <p className="font-light">We specialize in transforming visions into reality.</p>
              <p className="font-light">Explore our portfolio of innovative architectural and interior design projects crafted with precision and passion.</p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">
            {/* Architectural Design */}
            <div className="bg-white p-8 lg:p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 opacity-0 service-card-1 border border-gray-100 group relative overflow-hidden">
              {/* Subtle background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-8">
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 cal-sans leading-tight">
                    Architectural<br />Design
                  </h3>
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <div className="w-7 h-7 border-2 border-amber-600 rounded-sm"></div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed cal-sans text-sm lg:text-base font-light">
                  Dream it, we'll design it! From big picture layouts to the tiniest details, our architectural magic brings your ideas to life with creativity and precision!
                </p>
              </div>
            </div>
            
            {/* Interior Design & Planning */}
            <div className="bg-white p-8 lg:p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 opacity-0 service-card-2 border border-gray-100 group relative overflow-hidden">
              {/* Subtle background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-8">
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 cal-sans leading-tight">
                    Interior<br />Design &<br />Planning
                  </h3>
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <div className="w-7 h-7 border-2 border-orange-600 rounded-full"></div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed cal-sans text-sm lg:text-base font-light">
                  Make your space shine! Our team creates inviting, beautiful interiors that reflect your style and make every room a favorite place to be.
                </p>
              </div>
            </div>
            
            {/* Consulting Services */}
            <div className="bg-white p-8 lg:p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 opacity-0 service-card-3 border border-gray-100 group relative overflow-hidden">
              {/* Subtle background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-8">
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 cal-sans leading-tight">
                    Consulting<br />Services
                  </h3>
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <div className="w-7 h-7 border-2 border-amber-600 rounded-lg transform rotate-45"></div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed cal-sans text-sm lg:text-base font-light">
                  Consider us your design whisperers! We provide expert advice to help your project sparkle with creativity, efficiency, and spot-on solutions.
                </p>
              </div>
            </div>

            {/* Project Management */}
            <div className="bg-white p-8 lg:p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 opacity-0 service-card-4 border border-gray-100 group relative overflow-hidden">
              {/* Subtle background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-8">
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 cal-sans leading-tight">
                    Project<br />Management
                  </h3>
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <div className="w-7 h-7">
                      <div className="w-full h-1.5 bg-orange-600 rounded-full mb-1.5"></div>
                      <div className="w-4 h-1.5 bg-orange-600 rounded-full mb-1.5"></div>
                      <div className="w-5 h-1.5 bg-orange-600 rounded-full"></div>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed cal-sans text-sm lg:text-base font-light">
                  We handle the hustle! From start to finish, we keep your project on track, on budget, and stress-free – so you can sit back and watch the magic happen.
                </p>
              </div>
            </div>
          </div>
          
          {/* Bottom decorative element */}
          <div className="flex justify-center mt-20 opacity-0 service-decoration">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-0.5 bg-amber-300"></div>
              <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
              <div className="w-12 h-0.5 bg-amber-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Where Spaces Inspire Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 text-[300px] font-bold text-white cal-sans transform -rotate-12 select-none">
            DESIGN
          </div>
          <div className="absolute bottom-20 right-10 text-[200px] font-bold text-white cal-sans transform rotate-12 select-none">
            INSPIRE
          </div>
          {/* Decorative circles */}
          <div className="absolute top-1/4 right-1/4 w-40 h-40 bg-amber-500/10 rounded-full"></div>
          <div className="absolute bottom-1/3 left-1/3 w-32 h-32 bg-amber-500/5 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-amber-500/10 rounded-full"></div>
        </div>
        
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="opacity-0 inspire-content">
              {/* STARTED IN 1991 Badge */}
              <div className="flex items-center mb-8 sm:mb-12">
                <div className="relative">
                  <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-sm rounded-full px-8 py-4 border border-amber-500/30">
                    <div className="flex items-center">
                      <div className="flex items-center mr-4">
                        <div className="w-2 h-2 bg-amber-500 rounded-full mr-2 animate-pulse"></div>
                        <div className="w-1 h-1 bg-amber-400 rounded-full mr-2"></div>
                        <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
                      </div>
                      <span className="text-amber-400 font-bold tracking-[0.4em] uppercase cal-sans text-sm">
                        STARTED IN 1991
                      </span>
                      <div className="flex items-center ml-4">
                        <div className="w-2 h-2 bg-amber-500 rounded-full ml-2 animate-pulse"></div>
                        <div className="w-1 h-1 bg-amber-400 rounded-full ml-2"></div>
                        <div className="w-2 h-2 bg-amber-500 rounded-full ml-2 animate-pulse"></div>
                      </div>
                    </div>
                    {/* Glowing effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-full blur-xl"></div>
                  </div>
                  {/* Floating decorative elements */}
                  <div className="absolute -top-3 -right-3 w-6 h-6 bg-amber-500/20 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
                  <div className="absolute -bottom-3 -left-3 w-4 h-4 bg-orange-500/20 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
                </div>
              </div>

              {/* Main Heading */}
              <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 sm:mb-12 cal-sans leading-[0.9] tracking-tight">
                Where Spaces Inspire,
                <br />
                And <span className="text-amber-500">Design Comes</span>
                <br />
                <span className="text-amber-500">Alive</span>
              </h2>

              {/* Feature List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                <div className="flex items-center text-white">
                  <div className="w-6 h-6 mr-4 flex-shrink-0 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-lg">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="text-white w-3 h-3">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-medium cal-sans text-base lg:text-lg">Latest Technologies</span>
                </div>
                
                <div className="flex items-center text-white">
                  <div className="w-6 h-6 mr-4 flex-shrink-0 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-lg">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="text-white w-3 h-3">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-medium cal-sans text-base lg:text-lg">High-Quality Designs</span>
                </div>
                
                <div className="flex items-center text-white">
                  <div className="w-6 h-6 mr-4 flex-shrink-0 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-lg">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="text-white w-3 h-3">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-medium cal-sans text-base lg:text-lg">5 Years Warranty</span>
                </div>
                
                <div className="flex items-center text-white">
                  <div className="w-6 h-6 mr-4 flex-shrink-0 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-lg">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="text-white w-3 h-3">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-medium cal-sans text-base lg:text-lg">Residential Design</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-white/80 text-lg leading-relaxed cal-sans font-light mb-12 max-w-xl">
                Whether it's your home, office, or a commercial project, we are always dedicated to bringing your vision to life. Our numbers speak better than words:
              </p>

              {/* More About Us Button */}
              <div className="inline-block">
                <Button className="bg-transparent border-2 border-amber-500 text-white hover:bg-amber-500 hover:text-gray-900 px-8 py-4 rounded-full font-semibold transition-all duration-300 group cal-sans text-base flex items-center shadow-lg hover:shadow-2xl hover:scale-105 backdrop-blur-sm">
                  More About Us
                  <div className="ml-4 w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-gray-800 group-hover:to-gray-900 transition-all duration-300 shadow-lg">
                    <span className="text-white group-hover:text-amber-400 font-bold text-lg transition-colors duration-300">→</span>
                  </div>
                </Button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative opacity-0 inspire-image">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/6782342/pexels-photo-6782342.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
                  alt="Modern Interior Design Living Room"
                  className="w-full h-[500px] lg:h-[600px] object-cover"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                
                {/* Floating stats cards */}
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                  <div className="text-2xl font-bold text-gray-900 cal-sans">500+</div>
                  <div className="text-sm text-gray-600 cal-sans">Projects Done</div>
                </div>
                
                <div className="absolute bottom-6 right-6 bg-amber-500/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                  <div className="text-2xl font-bold text-white cal-sans">30+</div>
                  <div className="text-sm text-white/90 cal-sans">Years Experience</div>
                </div>
              </div>
              
              {/* Decorative elements around image */}
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-amber-400/30 to-orange-500/30 rounded-full backdrop-blur-sm animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-br from-orange-400/40 to-amber-500/40 rounded-full backdrop-blur-sm animate-pulse" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/2 -left-4 w-8 h-8 bg-gradient-to-br from-amber-300/20 to-orange-400/20 rounded-full backdrop-blur-sm animate-bounce" style={{animationDelay: '0.5s'}}></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Comprehensive Interior Design Services Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* OUR SERVICES Badge */}
          <div className="flex items-center justify-start mb-8 opacity-0 comprehensive-badge">
            <div className="relative bg-gray-50 rounded-full px-8 py-4 shadow-lg border border-gray-200">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-amber-500 rounded-full mr-4 shadow-lg animate-pulse"></div>
                <span className="text-gray-700 font-bold tracking-[0.3em] uppercase cal-sans text-sm">
                  OUR SERVICES
                </span>
                <div className="w-3 h-3 bg-amber-500 rounded-full ml-4 shadow-lg animate-pulse"></div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-amber-100 rounded-full opacity-60"></div>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-orange-100 rounded-full opacity-60"></div>
            </div>
          </div>

          {/* Main Heading */}
          <div className="mb-12 opacity-0 comprehensive-content">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 cal-sans leading-[0.9] tracking-tight max-w-4xl">
              Explore Our <span className="text-amber-600">Comprehensive</span>
              <br />
              <span className="text-amber-600">Interior Design</span> Services
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-lg sm:text-xl leading-relaxed cal-sans font-light max-w-3xl">
              We specialize in transforming visions into reality. Explore our portfolio of innovative architectural and interior design projects crafted with precision.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Image Section */}
            <div className="relative opacity-0 comprehensive-image">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gray-100">
                <img
                  src="https://images.pexels.com/photos/6782342/pexels-photo-6782342.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
                  alt="Modern Interior Design Living Room"
                  className="w-full h-[500px] lg:h-[600px] object-cover"
                />
                
                {/* Overlay Content */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8">
                  <div className="text-white">
                    <h3 className="text-xl lg:text-2xl font-bold cal-sans mb-3 leading-tight">
                      Realistic 3D visualizations to help you envision your space before it's built in real life.
                    </h3>
                    <p className="text-white/90 cal-sans font-light">
                      There are a variety...
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Services List */}
            <div className="opacity-0 comprehensive-services space-y-0">
                {/* Service 01 */}
                <div className="group border-b border-gray-200 py-6 hover:border-amber-300 transition-all duration-300 cursor-pointer opacity-0 service-item-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center flex-1">
                      <span className="text-gray-400 font-bold cal-sans text-lg mr-6 min-w-[3rem]">01</span>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 cal-sans group-hover:text-gray-700 transition-colors duration-300">
                        Residential Interior Design
                      </h3>
                    </div>
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-gray-200 transition-all duration-300 ml-4">
                      <svg className="w-5 h-5 text-gray-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Service 02 */}
                <div className="group border-b border-gray-200 py-6 hover:border-amber-300 transition-all duration-300 cursor-pointer opacity-0 service-item-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center flex-1">
                      <span className="text-gray-400 font-bold cal-sans text-lg mr-6 min-w-[3rem]">02</span>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 cal-sans group-hover:text-gray-700 transition-colors duration-300">
                        Outdoor & Landscape Design
                      </h3>
                    </div>
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-gray-200 transition-all duration-300 ml-4">
                      <svg className="w-5 h-5 text-gray-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Service 03 */}
                <div className="group border-b border-gray-200 py-6 hover:border-amber-300 transition-all duration-300 cursor-pointer opacity-0 service-item-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center flex-1">
                      <span className="text-gray-400 font-bold cal-sans text-lg mr-6 min-w-[3rem]">03</span>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 cal-sans group-hover:text-gray-700 transition-colors duration-300">
                        Interior Design Consultation
                      </h3>
                    </div>
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-gray-200 transition-all duration-300 ml-4">
                      <svg className="w-5 h-5 text-gray-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Service 04 */}
                <div className="group border-b border-gray-200 py-6 hover:border-amber-300 transition-all duration-300 cursor-pointer opacity-0 service-item-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center flex-1">
                      <span className="text-gray-400 font-bold cal-sans text-lg mr-6 min-w-[3rem]">04</span>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 cal-sans group-hover:text-gray-700 transition-colors duration-300">
                        Commercial Interior Design
                      </h3>
                    </div>
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-gray-200 transition-all duration-300 ml-4">
                      <svg className="w-5 h-5 text-gray-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Service 05 */}
                <div className="group border-b border-gray-200 py-6 hover:border-amber-300 transition-all duration-300 cursor-pointer opacity-0 service-item-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center flex-1">
                      <span className="text-gray-400 font-bold cal-sans text-lg mr-6 min-w-[3rem]">05</span>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 cal-sans group-hover:text-gray-700 transition-colors duration-300">
                        Renovation And Remodelling
                      </h3>
                    </div>
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-gray-200 transition-all duration-300 ml-4">
                      <svg className="w-5 h-5 text-gray-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Service 06 */}
                <div className="group py-6 cursor-pointer opacity-0 service-item-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center flex-1">
                      <span className="text-amber-500 font-bold cal-sans text-lg mr-6 min-w-[3rem]">06</span>
                      <h3 className="text-2xl lg:text-3xl font-bold cal-sans group-hover:text-gray-700 transition-colors duration-300">
                        Interior <span className="text-amber-600">2D/3D</span> Layouts
                      </h3>
                    </div>
                    <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center shadow-lg ml-4">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
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
            <div className="text-center opacity-0 stats-item-1">
              <div className="relative mb-6">
                <div className="text-6xl sm:text-7xl lg:text-8xl font-bold text-gray-900 cal-sans leading-none">
                  2013
                </div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-amber-500 rounded-full animate-pulse"></div>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 cal-sans mb-4">
                Years Experience
              </h3>
              <p className="text-gray-600 cal-sans font-light leading-relaxed">
                Improving homes with expert craftsmanship for years
              </p>
            </div>

            {/* Projects Completed */}
            <div className="text-center opacity-0 stats-item-2">
              <div className="relative mb-6">
                <div className="text-6xl sm:text-7xl lg:text-8xl font-bold text-gray-900 cal-sans leading-none">
                  190<span className="text-amber-600">+</span>
                </div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-orange-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 cal-sans mb-4">
                Projects Completed
              </h3>
              <p className="text-gray-600 cal-sans font-light leading-relaxed">
                Over 250 successful projects delivered with quality and care
              </p>
            </div>

            {/* Skilled Tradespeople */}
            <div className="text-center opacity-0 stats-item-3">
              <div className="relative mb-6">
                <div className="text-6xl sm:text-7xl lg:text-8xl font-bold text-gray-900 cal-sans leading-none">
                  260<span className="text-amber-600">+</span>
                </div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-amber-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 cal-sans mb-4">
                Skilled Tradespeople
              </h3>
              <p className="text-gray-600 cal-sans font-light leading-relaxed">
                Our team of 30 experts ensures top-quality results
              </p>
            </div>

            {/* Client Satisfaction */}
            <div className="text-center opacity-0 stats-item-4">
              <div className="relative mb-6">
                <div className="text-6xl sm:text-7xl lg:text-8xl font-bold text-gray-900 cal-sans leading-none">
                  328<span className="text-amber-600">+</span>
                </div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-orange-500 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 cal-sans mb-4">
                Client Satisfaction
              </h3>
              <p className="text-gray-600 cal-sans font-light leading-relaxed">
                All of our clients are satisfied with our work and service
              </p>
            </div>
          </div>

          {/* 3D Floor Plan Visualization */}
          <div className="relative opacity-0 stats-visualization">
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
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  <div>
                    <div className="text-sm font-bold text-gray-900 cal-sans">Kitchen</div>
                    <div className="text-xs text-gray-600 cal-sans">18.2 m²</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-3 animate-pulse" style={{animationDelay: '1s'}}></div>
                  <div>
                    <div className="text-sm font-bold text-gray-900 cal-sans">Bedroom</div>
                    <div className="text-xs text-gray-600 cal-sans">16.8 m²</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-amber-500 rounded-full mr-3 animate-pulse" style={{animationDelay: '1.5s'}}></div>
                  <div>
                    <div className="text-sm font-bold text-gray-900 cal-sans">Bathroom</div>
                    <div className="text-xs text-gray-600 cal-sans">8.4 m²</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements around visualization */}
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-amber-400/30 to-orange-500/30 rounded-full backdrop-blur-sm animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-br from-orange-400/40 to-amber-500/40 rounded-full backdrop-blur-sm animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 -right-4 w-8 h-8 bg-gradient-to-br from-amber-300/20 to-orange-400/20 rounded-full backdrop-blur-sm animate-bounce" style={{animationDelay: '0.5s'}}></div>
          </div>
          
          {/* Bottom decorative element */}
          <div className="flex justify-center mt-16 opacity-0 stats-decoration">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-0.5 bg-amber-300"></div>
              <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
              <div className="w-12 h-0.5 bg-amber-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Process Section */}
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
          <div className="flex items-center justify-start mb-8 opacity-0 process-badge">
            <div className="relative bg-white rounded-full px-8 py-4 shadow-lg border border-gray-200">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-amber-500 rounded-full mr-4 shadow-lg animate-pulse"></div>
                <span className="text-amber-600 font-bold tracking-[0.3em] uppercase cal-sans text-sm">
                  HOW WE WORK
                </span>
                <div className="w-3 h-3 bg-amber-500 rounded-full ml-4 shadow-lg animate-pulse"></div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-amber-100 rounded-full opacity-60"></div>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-orange-100 rounded-full opacity-60"></div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Content */}
            <div className="opacity-0 process-content">
              {/* Main Heading */}
              <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-8 cal-sans leading-[0.9] tracking-tight">
                Description <span className="text-amber-600">Architecture</span>
                <br />
                <span className="text-amber-600">Process</span> For Exceptional
                <br />
                Results.
              </h2>

              {/* Description */}
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed cal-sans font-light max-w-xl">
                <p>
                  Our process is alive – adapting, refining, and growing with your vision. Always.
                </p>
                <p>
                  Like artists with a blank canvas, we transform rooms into living works of art.
                </p>
              </div>
            </div>

            {/* Right Process Steps */}
            <div className="opacity-0 process-steps">
              {/* Process Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Step 01 - Initial Consultation */}
                <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 opacity-0 process-step-1 border border-gray-100 group overflow-hidden">
                  {/* Large number background */}
                  <div className="absolute -bottom-4 -right-4 text-8xl font-bold text-gray-100 cal-sans select-none">
                    01
                  </div>
                  
                  {/* Image */}
                  <div className="relative z-10 mb-6">
                    <div className="w-full h-32 bg-gray-200 rounded-2xl overflow-hidden">
                      <img
                        src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                        alt="Initial Consultation"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-gray-900 cal-sans mb-4">
                      <span className="text-amber-600">01.</span> Initial
                      <br />
                      Consultation
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed cal-sans font-light">
                      We begin by understanding your vision, goals, and needs, followed Antra.
                    </p>
                  </div>
                </div>

                {/* Step 02 - Design & Planning */}
                <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 opacity-0 process-step-2 border border-gray-100 group overflow-hidden">
                  {/* Large number background */}
                  <div className="absolute -bottom-4 -right-4 text-8xl font-bold text-gray-100 cal-sans select-none">
                    02
                  </div>
                  
                  {/* Image */}
                  <div className="relative z-10 mb-6">
                    <div className="w-full h-32 bg-gray-200 rounded-2xl overflow-hidden">
                      <img
                        src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                        alt="Design & Planning"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-gray-900 cal-sans mb-4">
                      <span className="text-amber-600">02.</span> Design &
                      <br />
                      Planning
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed cal-sans font-light">
                      Our team creates detailed designs that reflect your requirements.
                    </p>
                  </div>
                </div>

                {/* Step 03 - Implementation */}
                <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 opacity-0 process-step-3 border border-gray-100 group overflow-hidden">
                  {/* Large number background */}
                  <div className="absolute -bottom-4 -right-4 text-8xl font-bold text-gray-100 cal-sans select-none">
                    03
                  </div>
                  
                  {/* Image */}
                  <div className="relative z-10 mb-6">
                    <div className="w-full h-32 bg-gray-200 rounded-2xl overflow-hidden">
                      <img
                        src="https://images.pexels.com/photos/6782342/pexels-photo-6782342.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                        alt="Implementation"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-gray-900 cal-sans mb-4">
                      <span className="text-amber-600">03.</span> Implementation
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed cal-sans font-light">
                      With carefully selected contractors, we manage every phase.
                    </p>
                  </div>
                </div>

                {/* Step 04 - Project Handover */}
                <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 opacity-0 process-step-4 border border-gray-100 group overflow-hidden">
                  {/* Large number background */}
                  <div className="absolute -bottom-4 -right-4 text-8xl font-bold text-gray-100 cal-sans select-none">
                    04
                  </div>
                  
                  {/* Image */}
                  <div className="relative z-10 mb-6">
                    <div className="w-full h-32 bg-gray-200 rounded-2xl overflow-hidden">
                      <img
                        src="https://images.pexels.com/photos/6782342/pexels-photo-6782342.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                        alt="Project Handover"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-gray-900 cal-sans mb-4">
                      <span className="text-amber-600">04.</span> Project Handover
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed cal-sans font-light">
                      Upon completion, we conduct a thorough review, making sure all details.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom decorative element */}
          <div className="flex justify-center mt-20 opacity-0 process-decoration">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-0.5 bg-amber-300"></div>
              <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
              <div className="w-12 h-0.5 bg-amber-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
    <ProjectsSection />
    </div>
  );
}