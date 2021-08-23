/* eslint-disable react/prop-types */

const Book = (props) => {
  const { book } = props;
  const {
    id, genre, title, author,
  } = book;

  return (
    <li className="book" data-id={id}>
      <h3>{genre}</h3>
      <h2>{title}</h2>
      <p className="author">{author}</p>
    </li>
  );
};

export default Book;
