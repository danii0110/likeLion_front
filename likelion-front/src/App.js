import React, {Component} from "react";
import { Link, Route, Routes, BrowserRouter } from "react-router-dom";


import Home from './Home';
import About from './About';
import NotFound from './NotFound';

import Login from "./Login";
import Register from "./Register";
import Profile from "./Profile";


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
        <Link to="/profile">
          <button>Profile</button>
        </Link>
      </header>
      <hr />
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/profile" element={<Profile/>}/>
          <Route element={<NotFound/>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};
