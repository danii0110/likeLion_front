import React, {Component} from 'react';
import { Link, Route, Routes, BrowserRouter as Router } from 'react-router-dom';


import Home from './Home';
import About from './About';
import NotFound from './NotFound';

import Login from "./Login";
import Register from "./Register";


export default function App() {
  return (
    <Router>
      <header>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/about">
          <button>About</button>
        </Link>
      </header>
      <hr />
      <main>
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route component={NotFound} />
        </Routes>
      </main>
    </Router>
  );
};
