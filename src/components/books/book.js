import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';

import { removeBook } from '../../redux/books/booksReducer';

import st from './book.module.css';
import Progress from '../charts/progress';

const percentage = 64;

const Book = (props) => {
  const { book } = props;
  const { id, category, title, author } = book;

  const dispatch = useDispatch();

  const onRemoveBtnClicked = () => {
    dispatch(removeBook(id));
  };


  return (
    <li className={st.card}>
      <div className={st.leftContent}>
        <h3>{category}</h3>
        <h2 className="font-alt">{title}</h2>
        <p className={`${st.author} font-alt`}>{author}</p>
        <div className={st.leftButtons}>
          <button type="button" className="font-alt">
            Comments
          </button>
          <div className={st.line2} />
          <button
            type="button"
            className="font-alt"
            onClick={onRemoveBtnClicked}
          >
            Remove
          </button>
          <div className={st.line2} />
          <button type="button" className="font-alt">
            Edit
          </button>
        </div>
      </div>
      <div className={st.rightContent}>
        <div className={st.completed}>
          <Progress percentage={percentage} />
          <i className={st.completedIcon} />
        </div>
        <div className={st.completedText}>
          <span className={st.completedTextPrc}>64%</span>
          <span className={st.completedTextSub}>Completed</span>
        </div>
        <div className={st.line2} />
        <div className={`${st.progress} font-alt`}>
          <p className={st.current}>CURRENT CHAPTER</p>
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
