/* eslint-disable camelcase */
import { createAsyncThunk } from '@reduxjs/toolkit';
import apiRoutes from '../../api/apiRoutes';
import apiAccess from '../../api/apiAccess';

const ADD_BOOK_FULFILLED = 'bookstore/books/addBook/fulfilled';
const REMOVE_BOOK_FULFILLED = 'bookstore/books/removeBook/fulfilled';
const GET_BOOKS_PENDING = 'bookstore/books/fetchBooks/pending';
const GET_BOOKS_FULFILLED = 'bookstore/books/fetchBooks/fulfilled';

const initialState = {
  books: [],
  status: 'idle',
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK_FULFILLED:
      return { ...state, books: [...state.books, action.payload] };

    case REMOVE_BOOK_FULFILLED:
      return {
        ...state,
        books: [...state.books.filter((book) => book.id !== action.payload.id)],
      };

    case GET_BOOKS_PENDING:
      return { ...state, status: 'loading' };

    case GET_BOOKS_FULFILLED:
      return {
        ...state,
        status: 'succeeded',
        books: [...state.books, ...action.payload],
      };

    default:
      return state;
  }
};

export const fetchBooks = createAsyncThunk('bookstore/books/fetchBooks', async () => {
  const response = await apiAccess.get(apiRoutes.MAIN);
  const books = Object.entries(response).map((book) => ({
    id: book[0],
    title: book[1][0].title,
    atr: book[1][0].category,
  }));
  return books;
});

export const addBook = createAsyncThunk('bookstore/books/addBook', async (book) => {
  const { item_id, title, atr } = book;
  const response = await apiAccess.post(apiRoutes.MAIN, {
    item_id,
    title,
    category: atr,
  });
  if (response.ok) {
    return {
      id: item_id,
      title,
      atr,
    };
  }
  return null;
});

export const removeBook = createAsyncThunk('bookstore/books/removeBook', async (id) => {
  const response = await apiAccess.delete(apiRoutes.MAIN, id);
  if (response.ok) {
    return { id };
  }
  return {};
});

export default reducer;
