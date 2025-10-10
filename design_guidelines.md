# Design Guidelines: Thủy Sản Thủy Lam - Seafood Processing Company Website

## Design Approach: Professional B2B with Marine Theme
**Foundation:** Material Design principles adapted for Vietnamese corporate seafood industry
**Inspiration:** Clean, trustworthy B2B platforms like Alibaba's supplier pages + fresh seafood market aesthetics
**Core Principle:** Build trust through transparency, showcase quality through visuals, enable easy contact

## Color Palette

**Primary Colors:**
- Ocean Blue: 217 91% 60% (trust, professionalism, marine theme)
- Fresh Green: 142 71% 45% (freshness, quality, sustainability)
- Deep Navy: 217 91% 20% (headers, strong text)

**Neutral Scale (Dark Mode Optimized):**
- Background: 220 13% 9%
- Surface: 220 13% 13%
- Border: 220 9% 20%
- Text Primary: 0 0% 98%
- Text Secondary: 220 9% 65%

**Accent & Semantic:**
- Success Green: 142 71% 45%
- Warning Amber: 38 92% 50%
- Info Blue: 199 89% 48%

## Typography

**Font Families:**
- Headings: 'Barlow', sans-serif (strong, modern, works well with Vietnamese)
- Body: 'Inter', sans-serif (highly readable, excellent Vietnamese support)
- Accent: 'Barlow Condensed' for statistics/numbers

**Scale:**
- Hero Title: text-5xl md:text-7xl font-bold (48px → 72px)
- Section Headings: text-3xl md:text-4xl font-bold
- Subsection: text-xl md:text-2xl font-semibold
- Body: text-base md:text-lg (16px → 18px)
- Small: text-sm (14px)

## Layout System

**Spacing Primitives:** Use 4, 8, 12, 16, 20, 24, 32 units consistently
- Section padding: py-16 md:py-24 lg:py-32
- Container max-width: max-w-7xl
- Component gaps: gap-8 md:gap-12
- Card padding: p-6 md:p-8

**Grid Strategy:**
- Hero: Full-width with centered content max-w-6xl
- Services: 3-column grid (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
- Process Steps: 5-column timeline on desktop, stacked on mobile
- Contact: 2-column split (form + info)

## Component Library

**Navigation:**
- Sticky header with blur backdrop (backdrop-blur-lg bg-background/80)
- Logo left, main nav center, contact CTA right
- Mobile: Hamburger menu with slide-in drawer
- Links: Smooth underline animation on hover

**Hero Section:**
- Full viewport height (min-h-screen) with gradient overlay
- Large hero image: Fresh stingray on ice or processing facility
- Gradient: from-blue-600/90 to-green-600/90 over image
- Centered content: Company name, tagline, dual CTAs
- Floating trust indicators: "15+ năm kinh nghiệm", "Chất lượng đảm bảo"

**Service Cards:**
- Rounded-2xl cards with hover lift effect (transform hover:scale-105)
- Icon top (from Heroicons - use Outline style)
- Service title, description, "Tìm hiểu thêm" link
- Glass morphism effect: bg-surface/50 backdrop-blur border

**Process Timeline:**
- Horizontal stepper with connecting lines
- Each step: Icon → Number → Title → Description
- Active step highlighted with primary color
- Responsive: Vertical on mobile, horizontal on desktop

**Contact Form:**
- Input fields: Outlined style with focus ring (ring-2 ring-primary)
- Labels: Floating style that moves up on focus
- Button: Primary CTA with gradient bg-gradient-to-r from-blue-600 to-green-600
- Social links: Zalo, Facebook icons with hover bounce effect

**Product Showcase:**
- Image gallery with lightbox functionality
- Cards showing: Image, product name, quick specs
- Hover overlay with "Xem chi tiết" button

**Footer:**
- 4-column layout: Company info, Quick links, Services, Contact
- Social media icons (Facebook, Zalo) with brand colors
- Newsletter signup with inline form
- Bottom bar: Copyright, policies, certifications

## Imagery Strategy

**Required Images:**
1. **Hero Image:** Large, high-quality photo of fresh stingray on ice or in processing facility (full-width, 1920×1080px)
2. **Process Section:** 5 images showing each production step - purchasing, preliminary processing, processing, packaging, delivery
3. **Product Gallery:** Multiple images of processed seafood products, facilities
4. **Team/Facility:** Company building exterior, processing area (clean, professional)
5. **Trust Badges:** Quality certifications, food safety logos

**Image Treatment:**
- Subtle overlay gradients for text readability
- Rounded corners (rounded-xl to rounded-2xl)
- Lazy loading for performance
- Alt text in Vietnamese for accessibility

## Interactive Elements

**Micro-interactions:**
- Button hover: Slight scale (scale-105) + shadow increase
- Card hover: Lift effect (translateY -4px) + shadow
- Link hover: Underline slide animation
- Image hover: Subtle zoom (scale-110) within container

**Animations (Minimal):**
- Fade-in on scroll for sections (intersection observer)
- Number counters for statistics (animate when visible)
- Smooth scroll to sections
- No complex animations - focus on performance

## Responsive Breakpoints

- Mobile: 320px - 767px (single column, stacked)
- Tablet: 768px - 1023px (2 columns where appropriate)
- Desktop: 1024px+ (full multi-column layouts)
- Max container: 1280px (max-w-7xl)

## Accessibility & Performance

- Dark mode optimized for all sections
- Focus indicators: ring-2 ring-primary with offset
- Semantic HTML5 structure
- Vietnamese language support (lang="vi")
- Fast loading: Optimize images, use CDN for fonts
- ARIA labels for interactive elements

## Brand Voice in Design

- Professional yet approachable
- Emphasize freshness, quality, trust
- Use blue/green to evoke ocean freshness
- Clean, uncluttered layouts
- Vietnamese-first content with proper typography