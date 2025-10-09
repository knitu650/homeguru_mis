import { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTheme as setThemeAction, toggleTheme as toggleThemeAction } from 'store/slices/uiSlice';
import { THEME_CONFIG } from 'config/theme.config';

const useTheme = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector(state => state.ui);

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    
    // Update meta theme-color for mobile browsers
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute(
        'content',
        theme === 'dark' ? '#1f2937' : '#4f46e5'
      );
    }
  }, [theme]);

  // Set theme
  const setTheme = useCallback(
    newTheme => {
      if (THEME_CONFIG.themes.includes(newTheme)) {
        dispatch(setThemeAction(newTheme));
      } else {
        console.warn(`Invalid theme: ${newTheme}. Available themes:`, THEME_CONFIG.themes);
      }
    },
    [dispatch]
  );

  // Toggle between themes
  const toggleTheme = useCallback(() => {
    dispatch(toggleThemeAction());
  }, [dispatch]);

  // Set light theme
  const setLightTheme = useCallback(() => {
    setTheme('light');
  }, [setTheme]);

  // Set dark theme
  const setDarkTheme = useCallback(() => {
    setTheme('dark');
  }, [setTheme]);

  // Check if current theme is dark
  const isDark = theme === 'dark';

  // Check if current theme is light
  const isLight = theme === 'light';

  // Get system preference
  const getSystemTheme = useCallback(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  }, []);

  // Set theme based on system preference
  const useSystemTheme = useCallback(() => {
    const systemTheme = getSystemTheme();
    setTheme(systemTheme);
  }, [getSystemTheme, setTheme]);

  // Listen to system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = e => {
      // Only auto-switch if user hasn't manually set a preference
      const hasManualPreference = localStorage.getItem(THEME_CONFIG.storageKey);
      if (!hasManualPreference) {
        setTheme(e.matches ? 'dark' : 'light');
      }
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
  }, [setTheme]);

  return {
    // Current theme
    theme,
    isDark,
    isLight,
    
    // Theme setters
    setTheme,
    toggleTheme,
    setLightTheme,
    setDarkTheme,
    
    // System theme
    getSystemTheme,
    useSystemTheme,
    
    // Available themes
    availableThemes: THEME_CONFIG.themes,
  };
};

export default useTheme;
