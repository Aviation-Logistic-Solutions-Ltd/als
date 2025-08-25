# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static HTML website for Aviation Digital Partners (ADP), a company providing aircraft technical records digitization and digital transformation solutions. The website is built with vanilla HTML, CSS, and JavaScript without any build tools or package managers.

## Architecture & Structure

- **Static Site**: Pure HTML/CSS/JavaScript with no framework dependencies
- **Multi-page Structure**: 6 main HTML pages (index, services, digitisation, about, opportunities, contact)
- **Responsive Design**: Mobile-first approach with comprehensive media queries
- **SEO Optimized**: Includes structured data, meta tags, sitemap, and robots.txt

### Key Files
- `index.html` - Landing page with hero section and company overview
- `style.css` - Comprehensive stylesheet with mobile-responsive design
- `script.js` - Interactive functionality (mobile menu, animations, back-to-top)
- `sitemap.xml` - SEO sitemap for search engines
- `robots.txt` - Search engine crawling directives

## Development Workflow

Since this is a static website with no build process:

### Local Development
- Open HTML files directly in browser for testing
- Use a local HTTP server for proper testing: `python -m http.server 8000` or similar
- Test responsive design using browser developer tools

### File Editing
- HTML files contain semantic markup with proper SEO meta tags
- CSS uses BEM-like naming conventions and utility classes
- JavaScript uses vanilla ES6+ features with DOM manipulation

### Deployment
- Files can be deployed directly to any static hosting service
- No compilation or build step required
- Ensure all asset paths are relative and working

## Code Conventions

### CSS Architecture
- Mobile-first responsive design with breakpoints at 576px, 768px, 992px, 1200px, 1440px
- Utility classes for spacing, colors, and common patterns
- Component-based styling for reusable elements (buttons, cards, etc.)
- CSS custom properties for brand colors (#00a9d8 primary blue)

### HTML Structure
- Semantic HTML5 elements throughout
- Consistent navigation structure across all pages
- Schema.org structured data for SEO
- Accessible markup with proper alt tags and ARIA labels

### JavaScript Patterns
- Event-driven architecture using addEventListener
- Intersection Observer API for animations
- Progressive enhancement approach
- No external dependencies or frameworks

## Analytics & Tracking

Google Analytics has been integrated across all HTML pages using gtag.js:

### Setup Required
1. **Get Google Analytics Measurement ID**: 
   - Go to [Google Analytics](https://analytics.google.com/)
   - Create a new property for aviationpartners.ie
   - Copy the Measurement ID (format: G-XXXXXXXXXX)

2. **Replace Placeholder**:
   - Find `GA_MEASUREMENT_ID` in all HTML files
   - Replace with your actual Google Analytics Measurement ID

3. **Verify Installation**:
   - Deploy website with updated analytics code
   - Visit Google Analytics dashboard to confirm data collection
   - Use Google Tag Assistant or similar tools to verify proper installation

### Analytics Features Available
- Page views and user sessions
- Traffic sources and referrals
- Geographic data of visitors
- Device and browser information
- Real-time visitor tracking
- Weekly/monthly traffic reports

## Content Management

- Company branding uses Aviation Digital Partners (ADP) identity
- Primary brand color: #00a9d8 (blue)
- Located in Shannon, Ireland
- Focus on aviation industry digital transformation services