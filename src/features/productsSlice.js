import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const productsFromLocalStorage = () => {
  return (
    JSON.parse(localStorage.getItem('products')) ?? {
      products: [],
      allProducts: 0,
      price: 0,
    }
  );
};

export const productsSlice = createSlice({
  name: 'products',
  initialState: productsFromLocalStorage(),
  reducers: {
    addProduct: (state, { payload }) => {
      const product = state.products.find((prod) => prod.id == payload.id);

      if (product) {
        toast.warn('Product already added to your cart !');
      } else {
        state.products = [...state.products, payload];
        toast.success('Product add your cart');
        productsSlice.caseReducers.calculateTotal(state);
      }
    },
    removeProduct: (state, { payload }) => {
      state.products = state.products.filter(
        (product) => product.id != payload
      );
      productsSlice.caseReducers.calculateTotal(state);
    },
    incrementAmount: (state, { payload }) => {
      const item = state.products.find((prod) => prod.id == payload);
      item.amount += 1;
      productsSlice.caseReducers.calculateTotal(state);
    },
    decrementAmount: (state, { payload }) => {
      const item = state.products.find((prod) => prod.id == payload);
      item.amount -= 1;
      productsSlice.caseReducers.calculateTotal(state);
    },
    calculateTotal: (state) => {
      let allProductsCounter = 0;
      let allProductsPrice = 0;
      state.products.forEach((product) => {
        allProductsPrice += product.amount * product.price;
        allProductsCounter += product.amount;
      });

      state.allProducts = allProductsCounter;
      state.price = allProductsPrice;
      localStorage.setItem('products', JSON.stringify(state));
    },
  },
});

export const { addProduct, removeProduct, incrementAmount, decrementAmount } =
  productsSlice.actions;
export default productsSlice.reducer;
