import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/home';
import Members from '../pages/setting/members';
import MySetting from '../pages/setting/my-setting';
import Workspace from '../pages/setting/workspace';
import Detailpage from '../pages/setting/workspace/detail page';
import Workload from '../pages/workload';
import ProjectName from '../pages/project-name';
import Status from '../pages/status';
import List from '../pages/list';
import WorkloadWeek from '../pages/workload/workload-week';
import WorkloadMonth from '../pages/workload/workload-month';
import StatusWeek from '../pages/status/status-week';
import StatusMonth from '../pages/status/status-month';
import StatusYear from '../pages/status/status=year';
import StatusHour from '../pages/status/status-hours';
import StatusTask from '../pages/status/status-task';
import Project from '../pages/setting/project';
import Board from '../pages/board';
import Timeline from '../pages/timeline';
import Gantt from '../pages/gantt';
import Calender from '../pages/calender';

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
          <Route path='/workload' element={<Workload />} />
          <Route path='/projectname' element={<ProjectName />} />
          <Route path='/status' element={<Status />} />
          <Route path='/list' element={<List />} />
          <Route path='/week' element={<WorkloadWeek />} />
          <Route path='/month' element={<WorkloadMonth />} />
          <Route path='/statusweek' element={<StatusWeek />} />
          <Route path='/statusmonth' element={<StatusMonth />} />
          <Route path='/statusyear' element={<StatusYear />} />
          <Route path='/hours' element={<StatusHour />} />
          <Route path='/task' element={<StatusTask />} />
          <Route path='/project' element={<Project />} />
          <Route path='/board' element={<Board />} />
          <Route path='/timeline' element={<Timeline />} />
          <Route path='/gantt' element={<Gantt />} />
          <Route path='/calender' element={<Calender />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Routing;
