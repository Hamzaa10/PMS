import React from 'react'
import ImportButton from '../../components/import button'
import Navbar from '../../components/layout/navbar'
import Sidebar from '../../components/layout/sidebar'
import Tabs from '../../components/tabs'

import style from './board.module.scss'

const Board = () => {
    return (
        <div className={style.container}>
            <div className={style.display}>
                <Sidebar />
                <div className={style.data}>
                    <Navbar title="PROJECTS" />
                    <div className={style.tabs}>
                        <Tabs
                            title1="BOX"
                            title2="LIST"
                            title3="BOARD"
                            title4="TIMELINE"
                            title5="GANTT"
                            title6="WORKLOAD"
                            title7="STATUS"
                            title8="CALENDER"
                        />
                        <ImportButton />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Board
