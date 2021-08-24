import { createAsyncThunk } from '@reduxjs/toolkit';
import apiRoutes from '../../api/apiRoutes';
import apiAccess from '../../api/apiAccess';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const GET_BOOKS_PENDING = 'bookstore/books/fetchBooks/pending';
const GET_BOOKS_FULFILLED = 'bookstore/books/fetchBooks/fulfilled';

const initialState = {
  books: [
    {
      id: '1',
      title: 'Lord of the Rings',
      author: 'Tolkien',
      genre: 'Fantasy',
    },
    {
      id: '2',
      title: 'Game of Thrones',
      author: 'Martin',
      genre: 'Fantasy',
    },
    {
      id: '3',
      title: '1984',
      author: 'Asimov',
      genre: 'Science Fiction',
    },
  ],
  status: 'idle',
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return { ...state, books: [...state.books, action.payload] };

    case REMOVE_BOOK:
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

// export const addBook = (payload) => ({
//   type: ADD_BOOK,
//   payload,
// });

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const fetchBooks = createAsyncThunk(
  'bookstore/books/fetchBooks',
  async () => {
    const response = await apiAccess.get(apiRoutes.MAIN);
    console.log(Object.entries(response));
    const books = Object.entries(response).map((book) => ({
      id: book[0],
      title: book[1][0].title,
      category: book[1][0].category,
      genre: 'No support',
    }))
    return books;
  },
);

export const addBook 

export default reducer;
