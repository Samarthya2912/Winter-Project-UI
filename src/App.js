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
import Auth from "./user/pages/Auth";
import { AuthContext } from "./shared/contexts/auth-context";
import { useCallback, useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => { setIsLoggedIn(true) }, [])
  const logout = useCallback(() => { setIsLoggedIn(false) }, [])

  return (
    <AuthContext.Provider value={{
      isLoggedIn, login, logout
    }}>
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
    </AuthContext.Provider>
  );
}

export default App;
