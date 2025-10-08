// Theme Configuration
export const THEME_CONFIG = {
  defaultTheme: 'light',
  themes: ['light', 'dark'],
  storageKey: 'homeguru-theme',
};

export const COLORS = {
  primary: {
    50: '#eef2ff',
    100: '#e0e7ff',
    200: '#c7d2fe',
    300: '#a5b4fc',
    400: '#818cf8',
    500: '#6366f1',
    600: '#4f46e5',
    700: '#4338ca',
    800: '#3730a3',
    900: '#312e81',
  },
  secondary: {
    50: '#f0fdfa',
    100: '#ccfbf1',
    200: '#99f6e4',
    300: '#5eead4',
    400: '#2dd4bf',
    500: '#14b8a6',
    600: '#0d9488',
    700: '#0f766e',
    800: '#115e59',
    900: '#134e4a',
  },
  success: {
    main: '#10b981',
    light: '#d1fae5',
    dark: '#047857',
  },
  warning: {
    main: '#f59e0b',
    light: '#fef3c7',
    dark: '#d97706',
  },
  error: {
    main: '#ef4444',
    light: '#fee2e2',
    dark: '#dc2626',
  },
  info: {
    main: '#3b82f6',
    light: '#dbeafe',
    dark: '#2563eb',
  },
};

export const BREAKPOINTS = {
  xs: '480px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

export default THEME_CONFIG;
