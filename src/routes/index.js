import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from '../pages/home';
import Members from '../pages/setting/members';
import MySetting from '../pages/setting/my-setting';
import Workspace from '../pages/setting/workspace';
import Detailpage from '../pages/setting/workspace/detail page';


const Routing = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/members' element={<Members />} />
          <Route path="/setting" element={<MySetting />} />
          <Route path='/workspace' element={<Workspace />} />
          <Route path='/detailpage' element={<Detailpage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Routing;
