import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/booksReducer';

export default configureStore({
  reducer: {
    books: booksReducer,
  },
});
