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
    addBook: (state, action) => {
      state.concat(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addBook } = booksSlice.actions;

export default booksSlice.reducer;
