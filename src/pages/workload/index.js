import React from 'react'
import Date from '../../components/date'
import Daytabs from '../../components/day tabs'
import Navbar from '../../components/layout/navbar'
import Sidebar from '../../components/layout/sidebar'
import Tabs from '../../components/tabs'
import Header from '../../components/workload-header'
import Table from '../../components/workload-table'

import style from './workload.module.scss'

const Workload = () => {
  return (
    <div className={style.container}>
      <div className={style.display}>
        <Sidebar />
        <div className={style.data}>
          <Navbar title="PROJECTS" />
          <Tabs
            title1="BOX"
            title2="LIST"
            title3="BOARD"
            title4="TIMELINE"
            title5="GANTT"
            title6="WORKLOAD"
            title7="STATUS"
            title8="CALENDER" />
          <div className={style.tabs}>
            <Daytabs
              title1="DAY"
              title2="WEEK"
              title3="MONTH"
            />
            <Daytabs
              title1="ALL"
              title2="NEW"
              title3="BACKLOG"
            />
          </div>
          <Date />
          <Header />
          <Table />
        </div>
      </div>
    </div>
  )
}

export default Workload
