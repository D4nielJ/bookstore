/* eslint-disable react/prop-types */

import { removeBook } from '../../redux/books/booksReducer';
import { useDispatch } from 'react-redux';

const Book = (props) => {
  const { book } = props;
  const { id, genre, title, author } = book;

  const dispatch = useDispatch();

  const onRemoveBtnClicked = () => {
    dispatch(
      removeBook({
        id,
      }),
    );
  };

  return (
    <li className="book">
      <h3>{genre}</h3>
      <h2>{title}</h2>
      <p className="author">{author}</p>
      <button type="button" onClick={onRemoveBtnClicked}>
        Remove
      </button>
    </li>
  );
};

export default Book;
