import React from 'react'
import Navbar from '../../../components/layout/navbar'
import Sidebar from '../../../components/layout/sidebar'
import Items from '../../../components/list item'
import SettingTabs from '../../../components/settingtabs'
import Textfeild from '../../../components/textfeild'
import Pagination from '../../../components/pagination/index'

import style from './members.module.scss'

const Members = () => {
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
                    />
                    <Textfeild />
                    <Items />
                    <Pagination />
                </div>
            </div>
        </div>
    )
}

export default Members
