import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: '1',
    title: 'The Hunger Games',
    genre: 'Action',
    author: 'Suzanne Collins',
  },
  {
    id: '2',
    title: 'Dune',
    genre: 'Science Fiction',
    author: 'Frank Herbert',
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
      state.filter((book) => book.id !== action.payload.id);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
