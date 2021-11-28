import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import Users from "./user/pages/Users";
import UserPlaces from "./places/pages/UserPlaces";
import NewPlace from "./places/pages/NewPlace";
import UpdatePlace from "./places/pages/UpdatePlace";
import Auth from "./user/pages/Auth"

function App() {
  return (
    <Router>
      <MainNavigation />
      <Switch>
        <Route exact path="/">
          <Users />
        </Route>
        <Route path="/:uid/places" exact>
          <UserPlaces />
        </Route>
        <Route exact path="/places/new">
          <NewPlace />
        </Route>
        <Route exact path="/places/:placeId">
          <UpdatePlace />
        </Route>
        <Route exact path="/auth">
          <Auth />
        </Route>
      </Switch>
      <Redirect to="/" />
    </Router>
  );
}

export default App;
