import React from 'react'
import Navbar from '../../components/layout/navbar'
import Sidebar from '../../components/layout/sidebar'
import Tabs from '../../components/tabs'
import Tabs4 from '../../components/4tabs'
import Tabs2 from '../../components/2tabs'

import style from './status.module.scss'
import Date from '../../components/date'
import StatusHeader from '../../components/status-header'

const Status = () => {
    return (
        <div className={style.container}>
            <div className={style.display}>
                <Sidebar />
                <div className={style.data}>
                    <Navbar title='PROJECTS' />
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
                        <Tabs4
                            title1="DAY"
                            title2="WEEK"
                            title3="MONTH"
                            title4="YEAR"
                        />
                        <Tabs2 
                            title1="HOURS"
                            title2="TASK" />
                    </div>
                    <Date />
                    <StatusHeader />
                </div>
            </div>
        </div>
    )
}

export default Status
