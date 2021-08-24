import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Book from './book';
import BooksForm from './booksForm';
import st from './books.module.css';
import { fetchBooks } from '../../redux/books/booksReducer';

const Books = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);
  const booksStatus = useSelector((state) => state.books.status);

  useEffect(() => {
    if (booksStatus === 'idle') {
      dispatch(fetchBooks());
    }
  }, [booksStatus, dispatch]);

  const renderedBooks = books.map((book) => <Book key={book.id} book={book} />);

  return (
    <section className={st.books}>
      <ul className={st.booksList}>{renderedBooks}</ul>
      <BooksForm />
    </section>
  );
};

export default Books;
