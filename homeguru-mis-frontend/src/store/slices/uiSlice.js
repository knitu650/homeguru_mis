import { createSlice } from '@reduxjs/toolkit';
import { THEME_CONFIG } from 'config/theme.config';

const initialState = {
  theme: localStorage.getItem(THEME_CONFIG.storageKey) || THEME_CONFIG.defaultTheme,
  sidebarCollapsed: localStorage.getItem('sidebar-collapsed') === 'true',
  isMobile: window.innerWidth < 768,
  activeModal: null,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
      localStorage.setItem(THEME_CONFIG.storageKey, action.payload);
      document.documentElement.setAttribute('data-theme', action.payload);
    },
    toggleTheme: state => {
      const newTheme = state.theme === 'light' ? 'dark' : 'light';
      state.theme = newTheme;
      localStorage.setItem(THEME_CONFIG.storageKey, newTheme);
      document.documentElement.setAttribute('data-theme', newTheme);
    },
    toggleSidebar: state => {
      state.sidebarCollapsed = !state.sidebarCollapsed;
      localStorage.setItem('sidebar-collapsed', state.sidebarCollapsed);
    },
    setSidebarCollapsed: (state, action) => {
      state.sidebarCollapsed = action.payload;
      localStorage.setItem('sidebar-collapsed', action.payload);
    },
    setIsMobile: (state, action) => {
      state.isMobile = action.payload;
    },
    openModal: (state, action) => {
      state.activeModal = action.payload;
    },
    closeModal: state => {
      state.activeModal = null;
    },
  },
});

export const {
  setTheme,
  toggleTheme,
  toggleSidebar,
  setSidebarCollapsed,
  setIsMobile,
  openModal,
  closeModal,
} = uiSlice.actions;

export default uiSlice.reducer;
