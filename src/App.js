import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom' 
import MainNavigation from './shared/components/Navigation/MainNavigation';
import Users from './user/pages/Users';
import UserPlaces from './places/pages/UserPlaces';
import NewPlace from './places/pages/NewPlace';

function App() {
  
  return (
    <Router>
      <MainNavigation />
      <Route exact path="/">
        <Users />
      </Route>
      <Route path="/:uid/places" exact>
        <UserPlaces />
      </Route>
      <Route exact path="/places/new">
        <NewPlace />
      </Route>
    </Router>
  );
}

export default App;
