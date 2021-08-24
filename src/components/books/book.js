import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';

import { removeBook } from '../../redux/books/booksReducer';

const Book = (props) => {
  const { book } = props;
  const {
    id, genre, title, author,
  } = book;

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

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    genre: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
};

export default Book;
