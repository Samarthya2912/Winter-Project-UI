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
import { useCallback, useEffect, useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    console.log(userId);
  }, [userId])

  const login = useCallback((userId) => {
    setIsLoggedIn(true);
    setUserId(userId);
  }, []);
  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setUserId(null);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = <Switch>
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
      <Redirect to="/" />
    </Switch>;
  } else {
    routes = <Switch>
      <Route exact path="/">
        <Users />
      </Route>
      <Route path="/:uid/places" exact>
        <UserPlaces />
      </Route>
      <Route exact path="/auth">
        <Auth />
      </Route>
      <Redirect to="/auth" />
    </Switch>;
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        userId,
        login,
        logout,
      }}
    >
      <Router>
        <MainNavigation />
        <main>
          {routes}
        </main>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
