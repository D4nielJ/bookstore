import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';

import { removeBook } from '../../redux/books/booksReducer';

import st from './book.module.css';

const Book = (props) => {
  const { book } = props;
  const {
    id, category, title, author,
  } = book;

  const dispatch = useDispatch();

  const onRemoveBtnClicked = () => {
    dispatch(
      removeBook(id),
    );
  };

  return (
    <li className={st.card}>
      <div className={st.leftContent}>
        <h3>{category}</h3>
        <h2>{title}</h2>
        <p className="author">{author}</p>
        <div>
          <button type="button">Comments</button>
          <button type="button" onClick={onRemoveBtnClicked}>
            Remove
          </button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className={st.rightContent}>
        <div className={st.completed}>
          <i className={st.completedIcon} />
        </div>
        <div className={st.completedText}>
          <span className={st.completedTextPercetange}>64%</span>
          <span className={st.completedTextSub}>Completed</span>
        </div>
        <div className={st.rightLine} />
        <div className={st.progress}>
          <p className={st.progressTitle}>CURRENT CHAPTER</p>
          <p className={st.progressChapter}>Chapter 17</p>
          <button type="button" className={st.progressButton}>
            UPDATE PROGRESS
          </button>
        </div>
      </div>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
};

export default Book;
