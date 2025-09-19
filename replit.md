# Property Masters Group Website

## Overview

Property Masters Group is a comprehensive web application built for a commercial real estate company based in Sherwood Park, Alberta. The platform provides an integrated solution for showcasing property portfolios, managing maintenance services, grounds keeping operations, and facilitating client contact. The application features a modern, responsive design with a professional dark theme emphasizing teal and charcoal colors to convey trust and expertise in the commercial real estate sector.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The application uses a modern React-based frontend built with TypeScript and Vite for optimal development experience and build performance. The UI is constructed using shadcn/ui components with Radix UI primitives, providing accessible and customizable interface elements. Tailwind CSS handles all styling with a custom dark theme configuration that maintains the brand's professional color scheme (dark navy/charcoal backgrounds with teal accents).

### Component Structure
The frontend follows a modular component architecture with clearly separated concerns:
- **Layout Components**: Navigation, Footer, and main page wrappers
- **Page Components**: Home page with hero section, services showcase, property portfolio, and contact forms
- **UI Components**: Comprehensive shadcn/ui component library for consistent design patterns
- **Business Components**: Property portfolio displays, service sections, and contact forms with real-time data integration

### Backend Architecture
The server uses Express.js with TypeScript, providing a RESTful API architecture. The application implements a clean separation between route handling, business logic, and data access layers. The server includes middleware for request logging, JSON parsing, and error handling.

### Data Management
The application uses Drizzle ORM for type-safe database operations with PostgreSQL as the primary database (configured via Neon Database serverless connection). The data layer supports two main entities:
- **Properties**: Managing commercial real estate listings with square footage, occupancy rates, and property types
- **Contact Inquiries**: Handling customer communications with status tracking and inquiry categorization

### State Management
Client-side state management utilizes TanStack Query (React Query) for server state management, providing caching, background updates, and optimistic updates. Local component state is managed through React's built-in useState and useReducer hooks.

### Routing and Navigation
The application uses Wouter for lightweight client-side routing, providing a simple but effective navigation system. The routing structure supports the main business sections: services, properties, about, and contact pages.

## External Dependencies

### Database Services
- **Neon Database**: Serverless PostgreSQL hosting for production data storage
- **Drizzle Kit**: Database migration and schema management tooling

### Email Services  
- **SendGrid**: Email service integration for contact form notifications and client communications

### UI and Styling Dependencies
- **Radix UI**: Accessible component primitives for complex UI elements
- **Tailwind CSS**: Utility-first CSS framework for responsive design
- **Lucide React**: Icon library providing consistent iconography
- **class-variance-authority**: Type-safe variant API for component styling

### Development and Build Tools
- **Vite**: Fast build tool and development server with React plugin support
- **TypeScript**: Static type checking for improved code reliability
- **ESBuild**: Fast JavaScript bundler for production builds

### Form and Validation
- **React Hook Form**: Performant form library with minimal re-renders
- **Zod**: TypeScript-first schema validation for forms and API data
- **@hookform/resolvers**: Integration layer between React Hook Form and Zod validation

### Additional Utilities
- **date-fns**: Lightweight date manipulation library
- **nanoid**: Secure URL-friendly unique string ID generator
- **clsx & tailwind-merge**: Utility functions for conditional CSS class composition