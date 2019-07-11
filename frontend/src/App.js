import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import {About, Home, PostDetail} from "./components"

class App extends Component {

  render() {
    return (
        <Nav />
    );
  }
}

const Nav = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/post/:id" component={PostDetail}/>
    </div>
  </Router>
);

export default App;
