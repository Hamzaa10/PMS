import React from 'react'
import Navbar from '../../../components/layout/navbar'
import Sidebar from '../../../components/layout/sidebar'
import SettingTabs from '../../../components/settingtabs'

import style from './project.module.scss'

const Project = () => {
    return (
        <div className={style.container}>
            <div className={style.display}>
                <Sidebar />
                <div className={style.data}>
                    <Navbar title="SETTINGS" />
                    <SettingTabs
                        title1="MY SETTING"
                        title2="MEMBERS"
                        title3="WORKSPACE"
                        title4="PROJECT"
                    />
                </div>
            </div>
        </div>
    )
}

export default Project
