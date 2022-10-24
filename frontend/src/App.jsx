import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Genre from './components/pages/Genre/Genre';
import Home from './components/pages/Home/Home';
import Navigation from './components/nav/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.PureComponent {
  render() {
    return (
      <>
        <Navigation />
        <Switch>
          <Route path="/genre">
            <Genre />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </>
    );
  }
}

export default App;
