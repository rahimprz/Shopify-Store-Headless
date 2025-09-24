'use client';

import React, { useState, useEffect } from 'react';
import { ProjectCard } from './ProjectCard';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ShopifyProduct, fetchProducts, mockProducts } from '@/lib/shopify';
import { Grid, Filter, Loader2, Sparkles } from 'lucide-react';
import { AnimatedSection } from "./AnimatedSection" // adjust path if needed

export function ProjectsSection() {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [displayCount, setDisplayCount] = useState(6);

  useEffect(() => {
    async function loadProducts() {
      setLoading(true);
      try {
        // Try to fetch from Shopify first
        const shopifyProducts = await fetchProducts(12);
        
        // If no products from Shopify (not configured), use mock data
        if (shopifyProducts.length === 0) {
          setProducts(mockProducts);
        } else {
          setProducts(shopifyProducts);
        }
      } catch (error) {
        console.error('Error loading products:', error);
        // Fallback to mock data
        setProducts(mockProducts);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  // Get unique product types for filtering
  const productTypes = ['all', ...Array.from(new Set(products.map(p => p.productType.toLowerCase())))];
  
  // Filter products based on selected filter
  const filteredProducts = selectedFilter === 'all' 
    ? products 
    : products.filter(p => p.productType.toLowerCase() === selectedFilter);

  // Get products to display (with load more functionality)
  const displayedProducts = filteredProducts.slice(0, displayCount);
  const hasMore = displayedProducts.length < filteredProducts.length;

  const handleLoadMore = () => {
    setDisplayCount(prev => prev + 6);
  };

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
    setDisplayCount(6); // Reset display count when filter changes
  };

  if (loading) {
    return (
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <Loader2 className="w-12 h-12 animate-spin text-amber-500 mx-auto mb-4" />
              <p className="text-gray-600">Loading our amazing projects...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 text-[200px] font-bold text-gray-300 cal-sans transform -rotate-12 select-none animate-pulse">
          PROJECTS
        </div>
        <div className="absolute bottom-20 right-10 text-[150px] font-bold text-gray-300 cal-sans transform rotate-12 select-none animate-pulse" style={{ animationDelay: '1s' }}>
          PORTFOLIO
        </div>
        {/* Animated decorative elements */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-br from-amber-200 to-orange-200 rounded-full opacity-30 animate-float"></div>
        <div className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-gradient-to-br from-orange-200 to-amber-200 rounded-full opacity-40 animate-float" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-amber-300 to-orange-300 rounded-full opacity-35 animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <AnimatedSection animation="slideInDown" className="text-center mb-16">
          <div>
            <Badge variant="outline" className="mb-4 px-6 py-3 text-amber-600 border-amber-200 bg-amber-50 hover:bg-amber-100 transition-colors duration-300 shadow-lg hover:shadow-xl">
              <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
              OUR PROJECTS
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 cal-sans">
              <span className="block">Creative Projects That</span>
              <span className="text-[#caa05c] block">Define Our Style</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our Project showcases a diverse range of projects, from beautifully crafted residential spaces to functional and stylish commercial interiors
            </p>
          </div>
        </AnimatedSection>

        {/* Filter Tabs */}
        <AnimatedSection animation="slideInUp" delay={200} className="flex flex-wrap justify-center gap-3 mb-12">
          <div>
            {productTypes.map((type) => (
              <button
                key={type}
                onClick={() => handleFilterChange(type)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 transform hover:scale-105 ${
                  selectedFilter === type
                    ? 'bg-[#caa05c] text-white shadow-xl scale-105 animate-pulse'
                    : 'bg-white text-gray-600 hover:bg-[#caa05c]/10 hover:text-[#caa05c] shadow-md hover:shadow-xl border border-gray-200 hover:border-[#caa05c]/30'
                }`}
              >
                <Filter className={`w-4 h-4 ${selectedFilter === type ? 'animate-spin' : ''}`} style={{ animationDuration: '2s' }} />
                {type === 'all' ? 'All Projects' : type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Projects Grid */}
        {displayedProducts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {displayedProducts.map((product, index) => (
                <AnimatedSection 
                  key={product.id}
                  animation="slideInUp" 
                  delay={400 + (index * 100)}
                >
                  <ProjectCard
                    product={product}
                  />
                </AnimatedSection>
              ))}
            </div>

            {/* Load More Button */}
            {hasMore && (
              <AnimatedSection animation="fadeIn" delay={600} className="text-center">
                <div>
                  <Button
                    onClick={handleLoadMore}
                    size="lg"
                    className="bg-[#caa05c] hover:bg-[#b8945a] text-white px-10 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group"
                  >
                    Load More Projects
                    <Grid className="w-5 h-5 ml-2 group-hover:rotate-180 transition-transform duration-500" />
                  </Button>
                </div>
              </AnimatedSection>
            )}
          </>
        ) : (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <Grid className="w-16 h-16 mx-auto mb-4" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No Projects Found</h3>
            <p className="text-gray-600">
              {selectedFilter === 'all' 
                ? 'No projects available at the moment.' 
                : `No projects found for "${selectedFilter}". Try a different filter.`}
            </p>
          </div>
        )}

        {/* Stats Section */}
        <AnimatedSection animation="scaleIn" delay={800} className="mt-20">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100 hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.02]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center group hover:scale-110 transition-transform duration-300">
                <div className="text-3xl md:text-4xl font-bold text-[#caa05c] mb-2 group-hover:text-[#b8945a] transition-colors duration-300">
                  {products.length}+
                </div>
                <div className="text-gray-600 font-medium group-hover:text-gray-800 transition-colors duration-300">Projects Completed</div>
              </div>
              <div className="text-center group hover:scale-110 transition-transform duration-300">
                <div className="text-3xl md:text-4xl font-bold text-[#caa05c] mb-2 group-hover:text-[#b8945a] transition-colors duration-300">
                  {Array.from(new Set(products.map(p => p.productType))).length}
                </div>
                <div className="text-gray-600 font-medium group-hover:text-gray-800 transition-colors duration-300">Design Categories</div>
              </div>
              <div className="text-center group hover:scale-110 transition-transform duration-300">
                <div className="text-3xl md:text-4xl font-bold text-[#caa05c] mb-2 group-hover:text-[#b8945a] transition-colors duration-300">
                  100%
                </div>
                <div className="text-gray-600 font-medium group-hover:text-gray-800 transition-colors duration-300">Client Satisfaction</div>
              </div>
              <div className="text-center group hover:scale-110 transition-transform duration-300">
                <div className="text-3xl md:text-4xl font-bold text-[#caa05c] mb-2 group-hover:text-[#b8945a] transition-colors duration-300">
                  5★
                </div>
                <div className="text-gray-600 font-medium group-hover:text-gray-800 transition-colors duration-300">Average Rating</div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div> 
    </section>
  );
}