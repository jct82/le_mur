// == Import
import Home from 'src/components/Home';
import Walls from 'src/components/Walls';
import Wall from 'src/components/Wall';
import UserProfile from 'src/components/UserProfile';
import './styles.css';
import { Route, Switch } from 'react-router-dom';
import MainHeader from '../MainHeader';

// == Composant
const App = () => (
  <div className="app" style={{ backgroundImage: 'url(/fondLiege.jpg)' }}>
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
    </Switch>
    
  </div>
);

// == Export
export default App;
