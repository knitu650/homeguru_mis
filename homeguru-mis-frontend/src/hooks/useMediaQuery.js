import { useState, useEffect } from 'react';
import { BREAKPOINTS } from 'config/theme.config';

const useMediaQuery = (query) => {
  const getMatches = (query) => {
    // Prevents SSR issues
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches;
    }
    return false;
  };

  const [matches, setMatches] = useState(getMatches(query));

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    
    // Set initial value
    setMatches(mediaQuery.matches);

    // Create event listener
    const handleChange = (e) => {
      setMatches(e.matches);
    };

    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
    // Legacy browsers
    else if (mediaQuery.addListener) {
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }
  }, [query]);

  return matches;
};

// Helper hooks for common breakpoints
export const useIsMobile = () => {
  return useMediaQuery(`(max-width: ${BREAKPOINTS.md})`);
};

export const useIsTablet = () => {
  return useMediaQuery(`(min-width: ${BREAKPOINTS.md}) and (max-width: ${BREAKPOINTS.lg})`);
};

export const useIsDesktop = () => {
  return useMediaQuery(`(min-width: ${BREAKPOINTS.lg})`);
};

export const useIsSmallScreen = () => {
  return useMediaQuery(`(max-width: ${BREAKPOINTS.sm})`);
};

export const useIsLargeScreen = () => {
  return useMediaQuery(`(min-width: ${BREAKPOINTS.xl})`);
};

// Orientation detection
export const useIsPortrait = () => {
  return useMediaQuery('(orientation: portrait)');
};

export const useIsLandscape = () => {
  return useMediaQuery('(orientation: landscape)');
};

// Reduced motion preference
export const usePrefersReducedMotion = () => {
  return useMediaQuery('(prefers-reduced-motion: reduce)');
};

// Dark mode preference
export const usePrefersDarkMode = () => {
  return useMediaQuery('(prefers-color-scheme: dark)');
};

// Touch device detection
export const useIsTouchDevice = () => {
  return useMediaQuery('(hover: none) and (pointer: coarse)');
};

// Retina/High DPI display detection
export const useIsRetina = () => {
  return useMediaQuery('(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)');
};

export default useMediaQuery;
