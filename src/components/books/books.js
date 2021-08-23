import { useSelector } from 'react-redux';

const Books = () => {
  const books = useSelector((state) => state.books);

  const renderedBooks = books.map((book) => (
    <li className="book" key={book.id}>
      <h3>{book.genre}</h3>
      <h2>{book.title}</h2>
      <p className="author">{book.author}</p>
    </li>
  ));

  return <ul className="books-container">{renderedBooks}</ul>;
};

export default Books;
