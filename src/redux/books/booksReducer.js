import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    title: 'Lord of the Rings',
    author: 'Tolkien',
    genre: 'Fantasy',
  },
  {
    id: 2,
    title: 'Game of Thrones',
    author: 'Martin',
    genre: 'Fantasy',
  },
  {
    id: 3,
    title: '1984',
    author: 'Asimov',
    genre: 'Science Fiction',
  },
];

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook(state, action) {
      state.push(action.payload);
    },
    removeBook(state, action) {
      return state.filter((book) => book.id !== action.payload.id);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
