import React from 'react';
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import Home from '../pages/home'
import MySetting from '../pages/setting/my-setting'


const Routing = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/setting" element={<MySetting />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Routing;
