import { createStore, combineReducers } from 'redux';
import booksReducer from './books/booksReducer';

const reducer = combineReducers({
  books: booksReducer,
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
