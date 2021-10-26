// == Import
import Home from 'src/components/Home';
import Walls from 'src/components/Walls';
import Wall from 'src/components/Wall';
import UserProfile from 'src/components/UserProfile';
import './styles.css';
import { Route, Switch, Router } from 'react-router-dom';

// == Composant
const App = () => (
  <div className="app">
    <Router>
      <Switch>
        <Route exact to="/">
          <Home />
        </Route>
        <Route exact to="/walls">
          <Walls />
        </Route>
        <Route exact to="/wall">
          <Wall />
        </Route>
        <Route exact to="/userprofile">
          <UserProfile />
        </Route>
      </Switch>
    </Router>
  </div>
);

// == Export
export default App;
