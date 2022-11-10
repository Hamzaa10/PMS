import React from 'react'
import Navbar from '../../components/layout/navbar'
import Sidebar from '../../components/layout/sidebar'
import ListHeader from '../../components/list-header'
import Tabs from '../../components/tabs'

import style from './list.module.scss'

const List = () => {
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
                    <ListHeader />
                </div>
            </div>
        </div>
    )
}

export default List
