// Export all custom hooks for easier imports
export { default as useApi } from './useApi';
export { default as useDebounce } from './useDebounce';
export { default as useLocalStorage } from './useLocalStorage';
export { default as useSessionStorage } from './useSessionStorage';
export { default as useForm } from './useForm';
export { default as useModal } from './useModal';
export { default as useToast } from './useToast';
export { default as usePagination } from './usePagination';
export { default as useSort } from './useSort';
export { default as useFilter } from './useFilter';
export { default as usePermission } from './usePermission';
export { default as useTheme } from './useTheme';
export { default as useMediaQuery } from './useMediaQuery';
export { default as useClickOutside } from './useClickOutside';
export { default as useFileUpload } from './useFileUpload';
export { default as useInfiniteScroll } from './useInfiniteScroll';

// Named exports from hooks with multiple exports
export {
  useIsMobile,
  useIsTablet,
  useIsDesktop,
  useIsSmallScreen,
  useIsLargeScreen,
  useIsPortrait,
  useIsLandscape,
  usePrefersReducedMotion,
  usePrefersDarkMode,
  useIsTouchDevice,
  useIsRetina,
} from './useMediaQuery';

export {
  useClickOutsideMultiple,
  useClickOutsideWithEvents,
} from './useClickOutside';

export {
  useScrollInfiniteScroll,
  useWindowInfiniteScroll,
} from './useInfiniteScroll';
