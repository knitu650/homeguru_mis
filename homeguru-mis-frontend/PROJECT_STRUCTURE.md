# HomeGuru MIS Frontend - Project Structure

## Overview
A comprehensive Management Information System for educational institutions built with React, Redux Toolkit, and modern web technologies.

## Tech Stack
- **React 18** - UI Library
- **Redux Toolkit** - State Management  
- **React Router v6** - Routing
- **Axios** - HTTP Client
- **Chart.js** - Data Visualization
- **Framer Motion** - Animations
- **React Toastify** - Notifications
- **CSS Modules** - Component-scoped styling
- **Date-fns** - Date manipulation

## Getting Started

### Installation
```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test
```

### Environment Setup
Copy `.env.example` to `.env` and configure your environment variables.

## Project Structure

### `/public`
Static assets and HTML template
- `index.html` - Main HTML template
- `manifest.json` - PWA manifest
- `robots.txt` - SEO configuration

### `/src/assets`
Static resources
- **images/** - Logos, icons, avatars, placeholders
- **fonts/** - Custom fonts
- **styles/** - Global styles, variables, themes

### `/src/components`

#### `/common` - Reusable UI Components
- Button, Input, Select, Modal, Table, Card
- Badge, Spinner, Alert, Pagination
- SearchBar, Breadcrumb, Dropdown

#### `/layout` - Layout Components
- **Header** - Top navigation with theme toggle, notifications, user menu
- **Sidebar** - Collapsible navigation sidebar with menu items
- **Footer** - Footer with links
- **MainLayout** - Main app layout wrapper
- **AuthLayout** - Authentication pages layout

#### `/shared` - Shared Components
- **ErrorBoundary** - Error handling wrapper
- **ProtectedRoute** - Route protection for authenticated users
- **Charts** - Line, Bar, Pie, Doughnut charts
- **StatusBadge** - Dynamic status badges
- **Avatar** - User avatar with initials fallback
- **EmptyState** - Empty state placeholder

### `/src/features` - Feature Modules
Each feature follows a consistent structure:

```
feature-name/
├── components/     # Feature-specific components
├── pages/         # Page components
├── hooks/         # Custom hooks
├── services/      # API service functions
└── store/         # Redux slices and selectors
```

**Available Features:**
- **auth** - Authentication (login, register, password reset)
- **dashboard** - Admin/Teacher/Student/Parent dashboards
- **students** - Student management
- **teachers** - Teacher management
- **attendance** - Attendance tracking
- **assignments** - Assignment management
- **examinations** - Exam and results management
- **fees** - Fee structure and payment processing
- **hr** - Employee and recruitment management
- **payroll** - Salary and payroll processing
- **leave** - Leave application and approval
- **performance** - Performance appraisal
- **communication** - Announcements and messaging
- **timetable** - Schedule management
- **transport** - Transport and route management
- **hostel** - Hostel and room allocation
- **library** - Book management and circulation
- **learning-resources** - Digital learning materials
- **events** - Events and calendar management
- **helpdesk** - Ticket management system
- **reports** - Comprehensive reporting
- **settings** - System settings and configuration

### `/src/hooks` - Custom React Hooks
- `useApi` - API call wrapper with loading/error states
- `useDebounce` - Debounce values
- `useLocalStorage` - Local storage state management
- `useModal` - Modal state management
- `useForm` - Form handling with validation
- `usePagination` - Client-side pagination
- `useTheme` - Theme management
- `useMediaQuery` - Responsive breakpoint detection

### `/src/services` - Service Layer

#### `/api`
- `axiosConfig.js` - Axios instance configuration
- `interceptors.js` - Request/Response interceptors
- `apiClient.js` - API client with utility methods

#### `/auth`
- `tokenService.js` - JWT token management

#### `/storage`
- `localStorage.js` - Local storage wrapper
- `sessionStorage.js` - Session storage wrapper

#### `/utils`
- `errorHandler.js` - Error handling utilities
- `responseHandler.js` - Response formatting
- `apiHelpers.js` - API utility functions

### `/src/store` - Redux Store
- `index.js` - Store configuration
- `rootReducer.js` - Combined reducers
- `/middleware` - Custom middleware
- `/slices` - Global state slices
  - `globalSlice.js` - Global app state
  - `uiSlice.js` - UI state (theme, sidebar)

### `/src/routes` - Routing Configuration
- `index.jsx` - Main routes configuration
- `AppRoutes.jsx` - Route definitions
- `PrivateRoute.jsx` - Protected route wrapper
- `/modules` - Module-specific routes

### `/src/utils` - Utility Functions

#### `/constants`
- `apiConstants.js` - API-related constants
- `appConstants.js` - Application constants
- `routeConstants.js` - Route paths
- `statusConstants.js` - Status enums

#### `/helpers`
- `dateHelper.js` - Date formatting and manipulation
- `stringHelper.js` - String utilities
- `numberHelper.js` - Number formatting
- `arrayHelper.js` - Array utilities
- `formatHelper.js` - Data formatting
- `exportHelper.js` - Export utilities

#### `/validators`
- `formValidators.js` - Form validation functions
- `emailValidator.js` - Email validation
- `phoneValidator.js` - Phone number validation
- `fileValidator.js` - File upload validation

### `/src/config` - Configuration Files
- `app.config.js` - Application configuration
- `api.config.js` - API endpoints and configuration
- `theme.config.js` - Theme settings
- `chart.config.js` - Chart.js configuration
- `permissions.config.js` - Permission definitions

### `/src/context` - React Contexts
- `AuthContext.jsx` - Authentication context
- `ThemeContext.jsx` - Theme management context
- `NotificationContext.jsx` - Notification management
- `PermissionContext.jsx` - Permission checking
- `LanguageContext.jsx` - i18n support

## Key Features

### 🎨 Modern UI/UX
- Fully responsive design
- Dark/Light theme support
- Smooth animations and transitions
- Professional gradient effects
- Accessible components

### 🔐 Authentication & Authorization
- JWT-based authentication
- Token refresh mechanism
- Role-based access control
- Protected routes
- Permission guards

### 📊 Data Visualization
- Interactive charts (Line, Bar, Pie, Doughnut)
- Real-time dashboard updates
- Attendance tracking charts
- Fee collection analytics

### 🎯 State Management
- Redux Toolkit for global state
- Feature-based state organization
- Optimistic UI updates
- Centralized error handling

### 🚀 Performance
- Code splitting
- Lazy loading
- Memoization
- Optimized re-renders

### 📱 Responsive Design
- Mobile-first approach
- Adaptive layouts
- Touch-friendly interfaces
- Collapsible navigation

## Styling Approach

### CSS Variables
All design tokens are defined as CSS variables in `/assets/styles/variables.css`:
- Colors (primary, secondary, status colors)
- Typography (font sizes, weights, line heights)
- Spacing (margins, paddings)
- Shadows and borders
- Z-index layers
- Transitions

### Theming
Two built-in themes:
- **Light Theme** (`themes/light.css`)
- **Dark Theme** (`themes/dark.css`)

Theme switching is handled via `data-theme` attribute on `<html>` element.

### CSS Modules
- Component-scoped styles
- Prevents style conflicts
- Better maintainability
- Co-located with components

## API Integration

### Endpoint Structure
All API endpoints are defined in `config/api.config.js` and organized by feature:
```javascript
API_ENDPOINTS.students.list
API_ENDPOINTS.students.get
API_ENDPOINTS.students.create
// etc.
```

### Service Pattern
Each feature has a dedicated service file:
```javascript
// studentService.js
export const studentService = {
  getAll: (params) => apiClient.get(...),
  create: (data) => apiClient.post(...),
  // etc.
}
```

### Error Handling
- Automatic error interception
- Toast notifications for errors
- Centralized error formatting
- Retry logic for failed requests

## Best Practices

### Component Structure
```jsx
import React from 'react';
import styles from './Component.module.css';

const Component = ({ prop1, prop2 }) => {
  // Hooks
  // Event handlers
  // Render logic
  
  return (
    <div className={styles.container}>
      {/* JSX */}
    </div>
  );
};

export default Component;
```

### Feature Module Pattern
1. Create feature folder in `/features`
2. Add components, pages, hooks, services
3. Create Redux slice if needed
4. Define routes
5. Export from index.js

### State Management
- Use Redux for global state
- Use local state for UI-only state
- Use custom hooks for reusable logic
- Keep state as close to where it's used as possible

### Code Organization
- One component per file
- Co-locate related files
- Use barrel exports (index.js)
- Follow consistent naming conventions

## Development Workflow

1. **Create Feature Branch**
   ```bash
   git checkout -b feature/feature-name
   ```

2. **Develop Feature**
   - Create components
   - Add styles
   - Implement logic
   - Write tests

3. **Test Locally**
   ```bash
   npm start
   npm test
   ```

4. **Build & Deploy**
   ```bash
   npm run build
   ```

## Environment Variables

```env
# API Configuration
REACT_APP_API_URL=http://localhost:8000/api/v1
REACT_APP_BASE_URL=http://localhost:3000

# Authentication
REACT_APP_TOKEN_KEY=homeguru_token
REACT_APP_REFRESH_TOKEN_KEY=homeguru_refresh_token

# App Configuration
REACT_APP_NAME=HomeGuru MIS
REACT_APP_VERSION=1.0.0
REACT_APP_ENVIRONMENT=development

# File Upload
REACT_APP_MAX_FILE_SIZE=5242880
REACT_APP_ALLOWED_FILE_TYPES=image/jpeg,image/png,application/pdf
```

## Available Scripts

- `npm start` - Start development server (port 3000)
- `npm build` - Create production build
- `npm test` - Run test suite
- `npm run eject` - Eject from Create React App
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix linting issues
- `npm run format` - Format code with Prettier

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and development process.

## License

This project is licensed under the MIT License.
