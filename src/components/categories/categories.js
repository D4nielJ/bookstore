import { Link } from 'react-router-dom';
import st from './categories.module.css';

const Categories = () => (
  <div className={st.categories}>
    <p className={st.construction}>This section is under construction</p>
    <Link to="/" className={st.link}>Go back</Link>
  </div>
);

export default Categories;
