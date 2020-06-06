import React from 'react';
import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';
import AddBusiness from './views/CreateBusiness';
import {
  Route,
  Switch,
  BrowserRouter as Router
} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path ="/">
          <Login />
        </Route>
        <Route exact path ="/register">
          <Register />
        </Route>
        <Route exact path ="/dashboard">
          <Home />
        </Route>
        <Route exact path ="/addBusiness">
          <AddBusiness />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
