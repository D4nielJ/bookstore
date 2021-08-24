const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const initialState = [
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
];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];

    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);

    default:
      return state;
  }
};

export default reducer;
