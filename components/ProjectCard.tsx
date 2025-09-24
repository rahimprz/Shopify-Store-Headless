'use client';

import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShopifyProduct, formatPrice } from '@/lib/shopify';
import { ExternalLink, Tag, Calendar } from 'lucide-react';

interface ProjectCardProps {
  product: ShopifyProduct;
  className?: string;
}

export function ProjectCard({ product, className = '' }: ProjectCardProps) {
  const price = product.variants.edges[0]?.node.price;
  const compareAtPrice = product.variants.edges[0]?.node.compareAtPrice;
  const isOnSale = compareAtPrice && parseFloat(compareAtPrice.amount) > parseFloat(price.amount);

  return (
    <Card className={`group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 hover:scale-[1.02] bg-white rounded-3xl ${className}`}>
      <div className="relative overflow-hidden">
        {product.featuredImage && (
          <div className="relative h-64 w-full">
            <Image
              src={product.featuredImage.url}
              alt={product.featuredImage.altText || product.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-125 group-hover:rotate-2"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </div>
        )}
        
        {/* Price Badge */}
        <div className="absolute top-4 right-4 z-10">
          <div className="bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-xl transform group-hover:scale-110 transition-all duration-300 border border-white/50">
            {isOnSale && (
              <span className="text-sm text-gray-500 line-through mr-2">
                {formatPrice(compareAtPrice.amount, compareAtPrice.currencyCode)}
              </span>
            )}
            <span className={`font-bold ${isOnSale ? 'text-red-600' : 'text-gray-900'}`}>
              {formatPrice(price.amount, price.currencyCode)}
            </span>
          </div>
        </div>

        {/* Project Type Badge */}
        <div className="absolute top-4 left-4 z-10">
          <Badge variant="secondary" className="bg-gradient-to-r from-amber-500/90 to-orange-500/90 text-white border-0 backdrop-blur-sm shadow-lg transform group-hover:scale-110 transition-all duration-300">
            {product.productType}
          </Badge>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center">
          <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
            <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 shadow-xl hover:shadow-2xl transform hover:scale-105">
              <ExternalLink className="w-4 h-4" />
              View Project
            </button>
          </div>
        </div>
      </div>

      <CardContent className="p-6">
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors duration-500 line-clamp-2">
              {product.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 group-hover:text-gray-700 transition-colors duration-300">
              {product.description}
            </p>
          </div>

          {/* Tags */}
          {product.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {product.tags.slice(0, 3).map((tag, index) => (
                <div key={index} className="flex items-center gap-1 text-xs text-gray-500 bg-gray-100 hover:bg-amber-50 rounded-full px-3 py-1 transition-colors duration-300 transform hover:scale-105">
                  <Tag className="w-3 h-3" />
                  {tag}
                </div>
              ))}
              {product.tags.length > 3 && (
                <div className="text-xs text-gray-500 bg-gray-100 hover:bg-amber-50 rounded-full px-3 py-1 transition-colors duration-300 transform hover:scale-105">
                  +{product.tags.length - 3} more
                </div>
              )}
            </div>
          )}

          {/* Project Date */}
          <div className="flex items-center gap-2 text-xs text-gray-500 pt-2 border-t border-gray-100 group-hover:border-amber-200 transition-colors duration-300">
            <Calendar className="w-3 h-3" />
            <span>
              Completed {new Date(product.createdAt).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long' 
              })}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}