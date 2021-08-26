import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';

import { removeBook } from '../../redux/books/booksReducer';

import st from './book.module.css';
import Progress from '../charts/progress';
import categories from '../../data/categories';

const Book = (props) => {
  const { book } = props;
  const { id, title, atr } = book;
  const atrArr = atr.split('-');

  let percentage = 0;
  if (atrArr[2] !== '0') {
    percentage = Math.floor((atrArr[3] / atrArr[2]) * 100);
  }

  const dispatch = useDispatch();

  const onRemoveBtnClicked = () => {
    dispatch(removeBook(id));
  };

  return (
    <li className={st.card}>
      <div className={st.leftContent}>
        <h3>{categories[atrArr[0]]}</h3>
        <h2 className="font-alt">{title}</h2>
        <p className={`${st.author} font-alt`}>{atrArr[1]}</p>
        <div className={st.leftButtons}>
          <button type="button" className="font-alt">
            Comments
          </button>
          <div className={st.line2} />
          <button type="button" className="font-alt" onClick={onRemoveBtnClicked}>
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
          <span className={st.completedTextPrc}>{`${percentage}%`}</span>
          <span className={st.completedTextSub}>Completed</span>
        </div>
        <div className={st.line2} />
        <div className={`${st.progress} font-alt`}>
          <p className={st.current}>CURRENT CHAPTER</p>
          <p className={st.progressChapter}>{`Chapter ${atrArr[3]}`}</p>
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
    atr: PropTypes.string,
  }).isRequired,
};

export default Book;
