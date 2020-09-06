import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Header/Home/Home';
import Comments from './Comments/Comments';

function App() {
  return (
    <div>
      <Router>
        <Header></Header>

        <Switch>
          <Route path='/Home'>
            <Home></Home>
          </Route>
          <Route path='/PostDetail/:id'>
            <h1>Details</h1>
            <Comments></Comments>
          </Route>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='*'>
            <h1>harai gasi</h1>
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
