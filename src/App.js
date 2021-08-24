import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Categories from './components/categories/categories';
import Books from './components/books/books';
import NoMatch from './components/noMatch/noMatch';
import st from './app.module.css';

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <div className={st.app}>
      <Navbar />
      <Switch>
        <Route path="/categories">
          <Categories />
        </Route>
        <Route exact path="/">
          <Books />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;
