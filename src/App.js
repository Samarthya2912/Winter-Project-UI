import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom' 
import MainNavigation from './shared/components/Navigation/MainNavigation';
import Users from './user/pages/Users';

function App() {
  
  return (
    <Router>
      <MainNavigation />
      <Route exact path="/">
        <Users />
      </Route>
    </Router>
  );
}

export default App;
