import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './component/NoMatch/NoMatch';
import Countrydetails from './component/Countrydetails/Countrydetails';

function App() {

  return (
    <Router>
      <Switch>

        <Route path='/home'>
          <Home></Home>
        </Route>

        <Route path='/country/:countryName'>
          <Countrydetails></Countrydetails>
        </Route>

        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='*'>
          <NoMatch />
        </Route>

      </Switch>

    </Router>

  );
}


export default App;
