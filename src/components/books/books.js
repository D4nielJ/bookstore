import { useSelector } from 'react-redux';
import Book from './book';
import BooksForm from './booksForm';
import st from './books.module.css';

const Books = () => {
  const books = useSelector((state) => state.books);

  const renderedBooks = books.map((book) => <Book key={book.id} book={book} />);

  return (
    <section className={st.books}>
      <ul className={st.booksList}>{renderedBooks}</ul>
      <BooksForm />
    </section>
  );
};

export default Books;
