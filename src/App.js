import React from 'react';
// import logo from './logo.svg';
import './App.css';

import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <Router>
        <div>
          {/*This is the function to Route to Page (via switch)*/}
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route exact path="/hook" component={Formregisterhook} /> */}
          </Switch>
        </div>
      </Router>
  );
}

export default App;
