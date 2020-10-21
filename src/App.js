import React from 'react';
import './App.css';
import Home from './Pages/Home/Home';
import { Switch, BrowserRouter as Router, Route} from 'react-router-dom';
import Favourites from './Pages/Favourites/Favourites';

  

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/favourites" component={Favourites}></Route>
      </Switch>
    </Router>

    
  );
}

export default App;
