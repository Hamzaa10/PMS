import React from 'react'
import Tabs4 from '../../components/4tabs'
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
          <div className={style.tab}>
            <Tabs
              title1="BOX"
              title2="LIST"
              title3="BOARD"
              title4="TIMELINE"
              title5="GANTT"
              title6="WORKLOAD"
              title7="STATUS"
              title8="CALENDER" />
          </div>
          <div className={style.tabs}>
            <Daytabs
              title1="DAY"
              title2="WEEK"
              title3="MONTH"
            />
            <Tabs4
              title1="ALL"
              title2="NEW"
              title3="BACKLOG"
              title4="BUGS"
            />
          </div>
          <Date />
          <div className={style.items}>
            <Header 
              tab1="MON 3 OCT"
              tab2="TUE 3 OCT"
              tab3="WED 3 OCT"
              tab4="THU 3 OCT"
              tab5="FRI 3 OCT"
              tab6="SAT 3 OCT"
              tab7="SUN 3 OCT"
            />
            <Table />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Workload
