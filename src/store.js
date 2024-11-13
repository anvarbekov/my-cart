import { configureStore } from '@reduxjs/toolkit';
import productRedusers from './features/productsSlice';

export const store = configureStore({
  reducer: {
    products: productRedusers,
  },
});
