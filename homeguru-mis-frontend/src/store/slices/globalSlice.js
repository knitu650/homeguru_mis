import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  error: null,
  successMessage: null,
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    clearError: state => {
      state.error = null;
    },
    setSuccessMessage: (state, action) => {
      state.successMessage = action.payload;
    },
    clearSuccessMessage: state => {
      state.successMessage = null;
    },
    resetGlobal: () => initialState,
  },
});

export const {
  setLoading,
  setError,
  clearError,
  setSuccessMessage,
  clearSuccessMessage,
  resetGlobal,
} = globalSlice.actions;

export default globalSlice.reducer;
