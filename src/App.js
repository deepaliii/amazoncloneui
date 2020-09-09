import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from './Home';
import Login from './Login';
import Checkout from './Checkout';
import Navbar from './Navbar';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          {/* login */}
          {/* Navabar */}
          
          <Route path="/login">
            <Navbar/>
            <Login/>
          </Route>
          {/* checkout */}
          <Route path="/checkout">
            <Navbar/>
            {/* Navbar */}
            
            <Checkout/>
          </Route>
          {/* home */}
          <Route path="/">
            <Navbar/>
            {/* Naavbar */}
            
            <Home/>
          </Route>
        </Switch>       
      </div>
    </Router>
    
  );
}

export default App;
