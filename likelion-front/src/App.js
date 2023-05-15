import React, {Component} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


import Header from './Header';
import Main from './Main';
import NotFound from './NotFound';

import Login from "./Login";
import Register from "./Register";


export default function App() {
  return (
    <Login/>
    // <Main>
    //   <Routes>
    //     <Route path=''></Route>
    //   </Routes>
    // </Main>
    // <Routes>
    //   <Route path="/login" element={<Login/>}></Route>
    // </Routes>
    // <div className='App'>
    //   <BrowserRouter>
    //     <Routes>
    //       {/* <Route path="/" element={<Main />}></Route> */}

    //       <Users/>


    //       {/* 상단에 위치한 라우트들의 규칙을 모드 확인, 일치하는 라우트가 없는 경우 처리 */}
    //       <Route path="*" element={<NotFound />}></Route>
    //     </Routes>

    //   </BrowserRouter>
    // </div>
  );
};
