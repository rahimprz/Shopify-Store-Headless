# Interior Design Projects with Shopify Integration

This Next.js application integrates with Shopify using Hydrogen to display interior design projects as products.

## Features

- **Shopify Integration**: Fetches products from Shopify using the Storefront API
- **Responsive Design**: Beautiful, mobile-first design with Tailwind CSS
- **Project Filtering**: Filter projects by category/type
- **Load More**: Pagination with load more functionality
- **Fallback Data**: Mock data when Shopify is not configured
- **Modern UI**: Cards with hover effects, animations, and professional styling

## Shopify Setup

### 1. Create a Shopify Store
1. Go to [Shopify](https://www.shopify.com) and create a new store
2. Set up your store with interior design products

### 2. Enable Storefront API
1. In your Shopify admin, go to **Apps** → **Manage private apps**
2. Click **Create private app**
3. Fill in the app details
4. In the **Storefront API** section, check **Allow this app to access your storefront data**
5. Select the following permissions:
   - Read products, variants, and collections
   - Read product tags
   - Read inventory levels and locations
6. Save the app and copy the **Storefront access token**

### 3. Configure Environment Variables
1. Copy `.env.local` to your project root
2. Replace the placeholder values:
   ```env
   NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=your-shop-name.myshopify.com
   NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN=your-storefront-access-token
   ```

### 4. Add Products to Shopify
Create products in your Shopify admin with:
- **Title**: Project name (e.g., "Modern Living Room Design")
- **Description**: Project description
- **Product Type**: Category (e.g., "Interior Design")
- **Tags**: Relevant tags (e.g., "modern", "living-room", "residential")
- **Images**: High-quality project photos
- **Price**: Project cost or consultation fee

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
├── lib/
│   └── shopify.ts          # Shopify client and API functions
├── components/
│   ├── ProjectCard.tsx     # Individual project card component
│   └── ProjectsSection.tsx # Main projects section with filtering
├── app/
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles with animations
└── .env.local             # Environment variables
```

## Customization

### Styling
- Modify `tailwind.config.ts` for custom colors and themes
- Update `app/globals.css` for custom animations and styles
- Customize components in the `components/` directory

### Data Structure
- Products are treated as interior design projects
- Product types become project categories
- Tags are used for filtering and display
- Prices represent project costs

### Mock Data
When Shopify is not configured, the app uses mock data defined in `lib/shopify.ts`. You can customize this data to match your needs.

## Deployment

This app is configured for static export and can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

Make sure to set your environment variables in your deployment platform.

## Shopify Hydrogen Features Used

- **Storefront API Client**: For fetching product data
- **GraphQL Queries**: Optimized queries for product information
- **TypeScript Types**: Full type safety for Shopify data
- **Error Handling**: Graceful fallbacks when API is unavailable

## Support

For Shopify-specific issues, refer to:
- [Shopify Storefront API Documentation](https://shopify.dev/api/storefront)
- [Shopify Hydrogen Documentation](https://hydrogen.shopify.dev/)
- [Shopify GraphQL Explorer](https://shopify.dev/graphiql/storefront-api)