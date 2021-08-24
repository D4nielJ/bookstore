import { NavLink } from 'react-router-dom';
import st from './navbar.module.css';

const Navbar = () => {
  const links = [
    {
      key: 1,
      path: '/',
      text: 'BOOKS',
    },
    {
      key: 2,
      path: '/categories',
      text: 'CATEGORIES',
    },
  ];

  const createLinks = () => links.map((link) => (
    <li key={link.key}>
      <NavLink
        to={link.path}
        className={st.link}
        activeClassName={st.linkActive}
        exact
      >
        {link.text}
      </NavLink>
    </li>
  ));

  return (
    <nav className={st.navbar}>
      <div className={st.navContainer}>
        <div className={st.leftLinks}>
          <NavLink to={links[0].path}>
            <h1 className={st.title}>Bookstore CMS</h1>
          </NavLink>
          <ul className={st.linksList}>{createLinks()}</ul>
        </div>
        <div className={st.profileContainer}>
          <i className={st.profileIcon} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
