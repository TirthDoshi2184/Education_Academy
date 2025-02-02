import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterslice';

const store = configureStore({
  reducer: {
    counter: counterReducer, // Add your slices here
  },
});

export default store;
