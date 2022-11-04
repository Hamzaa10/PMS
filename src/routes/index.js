import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import MySetting from '../pages/setting/my-setting';
import Home from '../pages/home'


const Routing = () => {
  return (
    <div>
        <BrowserRouter>
    <Routes>
    <Route path="/setting" element={<MySetting/>}/>
    <Route path="/" element={<Home/>}/>

    </Routes>
  </BrowserRouter>
    </div>
  )
}

export default Routing;
