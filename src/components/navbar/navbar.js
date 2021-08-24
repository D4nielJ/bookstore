import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      key: 1,
      path: '/',
      text: 'books',
    },
    {
      key: 2,
      path: '/categories',
      text: 'Categories',
    },
  ];

  const createLinks = () => links.map((link) => (
    <li key={link.key}>
      <NavLink to={link.path} className="link" activeClassName="link-active" exact>
        {link.text}
      </NavLink>
    </li>
  ));

  return (
    <nav>
      <div className="nav-container">
        <NavLink to={links[0].path}>
          <h1>Bookstore</h1>
        </NavLink>
        <ul>{createLinks()}</ul>
      </div>
    </nav>
  );
};

export default Navbar;
