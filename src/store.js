import { configureStore } from '@reduxjs/toolkit';
import sharedDataReducer from './features/sharedDataSlice';

const store = configureStore({
  reducer: {
    sharedData: sharedDataReducer,
  },
});

export default store;
