# Thủy Sản Thủy Lam - Seafood Processing Company Website

## Overview

This is a professional B2B website for Công ty TNHH Chế Biến Thủy Sản Thủy Lam (Thuy Lam Seafood Processing Company), a Vietnamese seafood processing company specializing in purchasing and processing fresh fish (particularly "cá bò" - cowfish) from Phước Tỉnh, Bà Rịa-Vũng Tàu region. The website serves as a digital presence to showcase their services, build trust with B2B partners, and facilitate customer contact.

The application is built as a modern full-stack web application with a React-based frontend and Express backend, designed to present the company's services, processes, and contact information in a professional, trustworthy manner that appeals to restaurants, exporters, and business partners.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System:**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server for fast hot module replacement
- Client-side routing using Wouter (lightweight React router alternative)
- Design system based on shadcn/ui components with Radix UI primitives

**Styling Approach:**
- Tailwind CSS for utility-first styling with custom configuration
- Design follows Material Design principles adapted for B2B seafood industry
- Marine-themed color palette (Ocean Blue #217 91% 60%, Fresh Green #142 71% 45%)
- Custom font stack: Barlow for headings, Inter for body text, Barlow Condensed for statistics
- Dark mode optimized with CSS custom properties for theming
- Responsive design with mobile-first approach

**Component Architecture:**
- Modular section-based components (HeroSection, AboutSection, ServicesSection, etc.)
- Reusable UI components from shadcn/ui library
- Page-level components for routing (Home, ServicesPage, ContactPage)
- Separation of concerns with components/pages/hooks structure

**State Management:**
- TanStack Query (React Query) for server state management
- React hooks for local component state
- Form handling with React Hook Form and Zod validation

### Backend Architecture

**Server Framework:**
- Express.js as the HTTP server framework
- TypeScript for type safety across the stack
- ESM (ECMAScript Modules) for modern JavaScript module system

**Development Setup:**
- Vite integration for development with middleware mode
- Custom error handling and request logging middleware
- Separation of routes and storage layer for scalability

**Storage Strategy:**
- In-memory storage implementation (MemStorage class) for development
- Interface-based design (IStorage) allowing easy swap to database implementation
- Currently includes user authentication schema prepared for future implementation

**API Design:**
- RESTful API pattern with `/api` prefix for all endpoints
- Type-safe request/response handling
- Session management prepared with connect-pg-simple for PostgreSQL sessions

### Database Design

**ORM & Schema:**
- Drizzle ORM for type-safe database operations
- PostgreSQL as the target database (configured but not actively used yet)
- Schema defined in shared folder for frontend/backend consistency
- Zod integration for runtime validation of database inputs

**Current Schema:**
- Users table with UUID primary keys, username, and password fields
- Prepared for authentication but not currently implemented
- Migration system configured with drizzle-kit

**Design Decision - Database Not Active:**
The application is currently content-focused without dynamic data requirements. The database infrastructure is prepared for future features like user authentication, contact form submissions, or content management, but the current version serves static content effectively without database dependency.

### Project Structure

**Monorepo Organization:**
- `/client` - Frontend React application
  - `/src/components` - Reusable UI components
  - `/src/pages` - Route-level page components
  - `/src/hooks` - Custom React hooks
  - `/src/lib` - Utility functions and query client
- `/server` - Backend Express application
  - `routes.ts` - API route definitions
  - `storage.ts` - Data persistence layer
  - `vite.ts` - Development server integration
- `/shared` - Shared TypeScript types and schemas
- `/attached_assets` - Static assets (images, reference HTML)

**Build & Deployment:**
- Development: Vite dev server proxied through Express
- Production: Vite builds static assets, Express serves them
- TypeScript compilation with path aliases for clean imports (@/, @shared/, @assets/)

### Design System

**Visual Identity:**
- Professional B2B aesthetic with marine/ocean theme
- Trust-building through transparency and quality imagery
- Gradient backgrounds (primary to chart-2) for visual interest
- Consistent spacing system (4, 8, 12, 16, 20, 24, 32px units)
- Shadow and elevation system for depth (hover-elevate, active-elevate-2 classes)

**Component Patterns:**
- Card-based layouts for information sections
- Icon-driven feature presentations (Lucide React icons)
- Testimonial cards with star ratings
- Process visualization with numbered steps
- Statistics display with large numbers and icons

## External Dependencies

**UI & Styling:**
- Tailwind CSS - Utility-first CSS framework
- Radix UI - Headless UI component primitives (@radix-ui/react-*)
- shadcn/ui - Pre-built component library built on Radix
- Lucide React - Icon library
- class-variance-authority - CSS variant management
- tailwind-merge & clsx - Utility class merging

**Frontend Framework:**
- React & React DOM - UI library
- Wouter - Lightweight client-side router
- TanStack Query - Server state management
- React Hook Form - Form state management
- Zod - Schema validation

**Backend Services:**
- Express - Web server framework
- Drizzle ORM - Database toolkit
- @neondatabase/serverless - PostgreSQL driver for Neon (serverless)
- connect-pg-simple - PostgreSQL session store

**Build Tools:**
- Vite - Frontend build tool and dev server
- esbuild - JavaScript bundler for production backend
- TypeScript - Type system
- PostCSS & Autoprefixer - CSS processing

**Development Tools:**
- @replit/* packages - Replit-specific development plugins
- tsx - TypeScript execution for Node.js
- drizzle-kit - Database migration toolkit

**Currently No Active Integrations:**
The application doesn't currently integrate with external APIs or third-party services. Contact form submissions are handled client-side with toast notifications. Future implementations may include email services, CRM integrations, or payment processors for B2B transactions.