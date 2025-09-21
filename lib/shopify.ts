// lib/shopify.ts
import { createStorefrontApiClient } from '@shopify/storefront-api-client';

// Shopify configuration
const SHOPIFY_STORE_DOMAIN =
  process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN || 'avvrj5-ky.myshopify.com';
const SHOPIFY_STOREFRONT_ACCESS_TOKEN =
  process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN || '4952f8261e178d6b8532248733c55a24';

// Create Shopify client
export const shopifyClient = createStorefrontApiClient({
  storeDomain: SHOPIFY_STORE_DOMAIN,
  apiVersion: '2025-01',
  publicAccessToken: SHOPIFY_STOREFRONT_ACCESS_TOKEN,
});

// GraphQL queries
export const GET_PRODUCTS_QUERY = `
  query GetProducts($first: Int!) {
    products(first: $first) {
      edges {
        node {
          id
          title
          handle
          description
          featuredImage {
            url
            altText
            width
            height
          }
          images(first: 5) {
            edges {
              node {
                url
                altText
                width
                height
              }
            }
          }
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
            maxVariantPrice {
              amount
              currencyCode
            }
          }
          variants(first: 1) {
            edges {
              node {
                id
                price {
                  amount
                  currencyCode
                }
                compareAtPrice {
                  amount
                  currencyCode
                }
              }
            }
          }
          tags
          productType
          createdAt
          updatedAt
        }
      }
    }
  }
`;

export const GET_PRODUCT_BY_HANDLE_QUERY = `
  query GetProductByHandle($handle: String!) {
    productByHandle(handle: $handle) {
      id
      title
      handle
      description
      descriptionHtml
      featuredImage {
        url
        altText
        width
        height
      }
      images(first: 10) {
        edges {
          node {
            url
            altText
            width
            height
          }
        }
      }
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
        maxVariantPrice {
          amount
          currencyCode
        }
      }
      variants(first: 10) {
        edges {
          node {
            id
            title
            price {
              amount
              currencyCode
            }
            compareAtPrice {
              amount
              currencyCode
            }
            availableForSale
            selectedOptions {
              name
              value
            }
          }
        }
      }
      tags
      productType
      vendor
      createdAt
      updatedAt
    }
  }
`;

// Types
export interface ShopifyProduct {
  id: string;
  title: string;
  handle: string;
  description: string;
  featuredImage?: {
    url: string;
    altText?: string;
    width?: number;
    height?: number;
  };
  images: {
    edges: Array<{
      node: {
        url: string;
        altText?: string;
        width?: number;
        height?: number;
      };
    }>;
  };
  priceRange: {
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
    maxVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
  variants: {
    edges: Array<{
      node: {
        id: string;
        price: {
          amount: string;
          currencyCode: string;
        };
        compareAtPrice?: {
          amount: string;
          currencyCode: string;
        };
      };
    }>;
  };
  tags: string[];
  productType: string;
  createdAt: string;
  updatedAt: string;
}

export interface ShopifyProductsResponse {
  products: {
    edges: Array<{
      node: ShopifyProduct;
    }>;
  };
}

// Fetch products function
export async function fetchProducts(first: number = 12): Promise<ShopifyProduct[]> {
  try {
    const response = await shopifyClient.request<ShopifyProductsResponse>(GET_PRODUCTS_QUERY, {
      variables: { first },
    });

    return response.data?.products?.edges?.map(edge => edge.node) || [];
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

// Fetch single product by handle
export async function fetchProductByHandle(handle: string): Promise<ShopifyProduct | null> {
  try {
    const response = await shopifyClient.request(GET_PRODUCT_BY_HANDLE_QUERY, {
      variables: { handle },
    });

    return response.data?.productByHandle || null;
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
}

// Format price helper
export function formatPrice(amount: string, currencyCode: string): string {
  const price = parseFloat(amount);
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currencyCode,
  }).format(price);
}

// Mock data for development (when Shopify is not configured)
export const mockProducts: ShopifyProduct[] = [
  {
    id: 'mock-1',
    title: 'Modern Living Room Design',
    handle: 'modern-living-room-design',
    description: 'A stunning contemporary living space featuring clean lines, neutral tones, and premium materials.',
    featuredImage: {
      url: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      altText: 'Modern Living Room',
      width: 800,
      height: 600,
    },
    images: {
      edges: [
        {
          node: {
            url: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
            altText: 'Modern Living Room',
            width: 800,
            height: 600,
          }
        }
      ]
    },
    priceRange: {
      minVariantPrice: { amount: '15000.00', currencyCode: 'USD' },
      maxVariantPrice: { amount: '25000.00', currencyCode: 'USD' }
    },
    variants: {
      edges: [
        {
          node: {
            id: 'variant-1',
            price: { amount: '20000.00', currencyCode: 'USD' }
          }
        }
      ]
    },
    tags: ['interior-design', 'modern', 'living-room'],
    productType: 'Interior Design',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: 'mock-2',
    title: 'Luxury Kitchen Renovation',
    handle: 'luxury-kitchen-renovation',
    description: 'Premium kitchen design with marble countertops, custom cabinetry, and state-of-the-art appliances.',
    featuredImage: {
      url: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800',
      altText: 'Luxury Kitchen',
      width: 800,
      height: 600,
    },
    images: {
      edges: [
        {
          node: {
            url: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800',
            altText: 'Luxury Kitchen',
            width: 800,
            height: 600,
          }
        }
      ]
    },
    priceRange: {
      minVariantPrice: { amount: '30000.00', currencyCode: 'USD' },
      maxVariantPrice: { amount: '50000.00', currencyCode: 'USD' }
    },
    variants: {
      edges: [
        {
          node: {
            id: 'variant-2',
            price: { amount: '40000.00', currencyCode: 'USD' }
          }
        }
      ]
    },
    tags: ['interior-design', 'luxury', 'kitchen'],
    productType: 'Interior Design',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: 'mock-3',
    title: 'Minimalist Bedroom Suite',
    handle: 'minimalist-bedroom-suite',
    description: 'Serene bedroom design emphasizing simplicity, natural light, and peaceful ambiance.',
    featuredImage: {
      url: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800',
      altText: 'Minimalist Bedroom',
      width: 800,
      height: 600,
    },
    images: {
      edges: [
        {
          node: {
            url: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800',
            altText: 'Minimalist Bedroom',
            width: 800,
            height: 600,
          }
        }
      ]
    },
    priceRange: {
      minVariantPrice: { amount: '12000.00', currencyCode: 'USD' },
      maxVariantPrice: { amount: '18000.00', currencyCode: 'USD' }
    },
    variants: {
      edges: [
        {
          node: {
            id: 'variant-3',
            price: { amount: '15000.00', currencyCode: 'USD' }
          }
        }
      ]
    },
    tags: ['interior-design', 'minimalist', 'bedroom'],
    productType: 'Interior Design',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: 'mock-4',
    title: 'Corporate Office Design',
    handle: 'corporate-office-design',
    description: 'Professional workspace design promoting productivity and collaboration in a modern environment.',
    featuredImage: {
      url: 'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=800',
      altText: 'Corporate Office',
      width: 800,
      height: 600,
    },
    images: {
      edges: [
        {
          node: {
            url: 'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=800',
            altText: 'Corporate Office',
            width: 800,
            height: 600,
          }
        }
      ]
    },
    priceRange: {
      minVariantPrice: { amount: '25000.00', currencyCode: 'USD' },
      maxVariantPrice: { amount: '45000.00', currencyCode: 'USD' }
    },
    variants: {
      edges: [
        {
          node: {
            id: 'variant-4',
            price: { amount: '35000.00', currencyCode: 'USD' }
          }
        }
      ]
    },
    tags: ['interior-design', 'commercial', 'office'],
    productType: 'Interior Design',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: 'mock-5',
    title: 'Boutique Restaurant Interior',
    handle: 'boutique-restaurant-interior',
    description: 'Intimate dining space with warm lighting, custom furniture, and sophisticated atmosphere.',
    featuredImage: {
      url: 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=800',
      altText: 'Restaurant Interior',
      width: 800,
      height: 600,
    },
    images: {
      edges: [
        {
          node: {
            url: 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=800',
            altText: 'Restaurant Interior',
            width: 800,
            height: 600,
          }
        }
      ]
    },
    priceRange: {
      minVariantPrice: { amount: '20000.00', currencyCode: 'USD' },
      maxVariantPrice: { amount: '35000.00', currencyCode: 'USD' }
    },
    variants: {
      edges: [
        {
          node: {
            id: 'variant-5',
            price: { amount: '28000.00', currencyCode: 'USD' }
          }
        }
      ]
    },
    tags: ['interior-design', 'commercial', 'restaurant'],
    productType: 'Interior Design',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: 'mock-6',
    title: 'Luxury Bathroom Spa',
    handle: 'luxury-bathroom-spa',
    description: 'Spa-like bathroom retreat featuring natural stone, premium fixtures, and ambient lighting.',
    featuredImage: {
      url: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=800',
      altText: 'Luxury Bathroom',
      width: 800,
      height: 600,
    },
    images: {
      edges: [
        {
          node: {
            url: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=800',
            altText: 'Luxury Bathroom',
            width: 800,
            height: 600,
          }
        }
      ]
    },
    priceRange: {
      minVariantPrice: { amount: '18000.00', currencyCode: 'USD' },
      maxVariantPrice: { amount: '28000.00', currencyCode: 'USD' }
    },
    variants: {
      edges: [
        {
          node: {
            id: 'variant-6',
            price: { amount: '23000.00', currencyCode: 'USD' }
          }
        }
      ]
    },
    tags: ['interior-design', 'luxury', 'bathroom'],
    productType: 'Interior Design',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  }
];