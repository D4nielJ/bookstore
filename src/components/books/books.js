import { useSelector } from 'react-redux';
import Book from './book';
import BooksForm from './booksForm';

const Books = () => {
  const books = useSelector((state) => state.books);

  const renderedBooks = books.map((book) => <Book key={book.id} book={book} />);

  return (
    <div className="books">
      <ul className="books-list">{renderedBooks}</ul>
      <BooksForm />
    </div>
  );
};

export default Books;
