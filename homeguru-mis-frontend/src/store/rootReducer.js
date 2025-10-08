import { combineReducers } from '@reduxjs/toolkit';
import globalReducer from './slices/globalSlice';
import uiReducer from './slices/uiSlice';

const rootReducer = combineReducers({
  global: globalReducer,
  ui: uiReducer,
});

export default rootReducer;
