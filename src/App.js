import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';

import history from './history';

import './App.scss';
import Dashboard from './screens/Dashboard';
import Login from './screens/Dashboard/Login';
import Footer from './screens/Dashboard/Footer';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router history={history}>
            <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route path="/login" exact component={Login} />
            </Switch>
            <Footer />
        </Router>
      </div>
    );
  }
};

export default App;
