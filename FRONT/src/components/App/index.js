// == Import
import Home from 'src/components/Home';
import Walls from 'src/components/Walls';
import Wall from 'src/components/Wall';
import UserProfile from 'src/components/UserProfile';
import Test from 'src/components/Test';
import './styles.css';
import { Route, Switch } from 'react-router-dom';
import MainHeader from '../MainHeader';

// == Composant
const App = () => (

  <div className="app">
    <MainHeader />
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
      <Route exact path="/test">
        <Test />
      </Route>
    </Switch>
  </div>
);

// == Export
export default App;
