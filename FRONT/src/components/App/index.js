// == Import
import Home from 'src/components/Home';
import Walls from 'src/components/Walls';
import Wall from 'src/components/Wall';
import UserProfile from 'src/components/UserProfile';
import img from 'src/assets/icons/submit.png';
import './styles.css';
import { Route, Switch, Router } from 'react-router-dom';

// == Composant
const App = () => (
  <div className="app">
    <img src={img} />
    {/* <Router> */}
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/walls">
        <Walls />
      </Route>
      <Route exact path="/wall">
        <Wall />
      </Route>
      <Route exact path="/userprofile">
        <UserProfile />
      </Route>
    </Switch>
    {/* </Router> */}
  </div>
);

// == Export
export default App;
