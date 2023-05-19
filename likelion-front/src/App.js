import React, {Component} from "react";
import { Link, Route, Routes, BrowserRouter } from "react-router-dom";


import Home from './Home';
import About from './About';
import NotFound from './NotFound';

import Login from "./Login";
import Register from "./Register";


export default function App() {
  return (
    <BrowserRouter>
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
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route element={<NotFound/>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};
