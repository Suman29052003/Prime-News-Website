import { configureStore } from '@reduxjs/toolkit';
import newsReducer from './slice/newSlice';

const store = configureStore({
  reducer: {
    news: newsReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;