import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from '../pages/home';
import Members from '../pages/setting/members';
import MySetting from '../pages/setting/my-setting';
import Workspace from '../pages/setting/workspace';


const Routing = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/members' element={<Members />} />
          <Route path="/setting" element={<MySetting />} />
          <Route path='/workspace' element={<Workspace />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Routing;
