import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom' 
import MainNavigation from './shared/components/Navigation/MainNavigation';
import Users from './user/pages/Users';
import UserPlaces from './places/pages/UserPlaces';

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
    </Router>
  );
}

export default App;
