import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import booksReducer from './books/booksReducer';

const middlewares = [thunk, logger];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
  books: booksReducer,
});

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middlewares)),
);

export default store;
