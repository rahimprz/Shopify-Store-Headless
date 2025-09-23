'use client';

import React, { useState, useEffect } from 'react';
import { ProjectCard } from './ProjectCard';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ShopifyProduct, fetchProducts, mockProducts } from '@/lib/shopify';
import { Grid, Filter, Loader2 } from 'lucide-react';
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
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <AnimatedSection animation="slideInDown" className="text-center mb-16">
          <div>
            <Badge variant="outline" className="mb-4 px-4 py-2 text-amber-600 border-amber-200 bg-amber-50">
              <Grid className="w-4 h-4 mr-2" />
              OUR PROJECTS
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 cal-sans">
              <span className="block">Creative Projects That</span>
              <span className="text-amber-600 block">Define Our Style</span>
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
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedFilter === type
                    ? 'bg-amber-500 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-600 hover:bg-amber-50 hover:text-amber-600 shadow-md hover:shadow-lg'
                }`}
              >
                <Filter className="w-4 h-4" />
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
                    className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    Load More Projects
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
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-amber-600 mb-2">
                  {products.length}+
                </div>
                <div className="text-gray-600 font-medium">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-amber-600 mb-2">
                  {Array.from(new Set(products.map(p => p.productType))).length}
                </div>
                <div className="text-gray-600 font-medium">Design Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-amber-600 mb-2">
                  100%
                </div>
                <div className="text-gray-600 font-medium">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-amber-600 mb-2">
                  5★
                </div>
                <div className="text-gray-600 font-medium">Average Rating</div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div> 
    </section>
  );
}