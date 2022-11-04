import React from 'react'
import Navbar from '../../../components/layout/navbar'
import Sidebar from '../../../components/layout/sidebar'
import Head from '../../../components/list head'
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
                    <Head />
                    {
                        itemData.map(({ number, role, status }) => (
                            <Items number={number} role={role} status={status} />
                        ))
                    }
                    <Pagination />
                </div>
            </div>
        </div>
    )
}

export default Members


const itemData = [
    {
        number: "1",
        role: "DEVELOPER ^",
        status: "ACTIVE"
    },
    {
        number: "2",
        role: "DEVELOPER ^",
        status: "ACTIVE"
    },
    {
        number: "3",
        role: "DEVELOPER ^",
        status: "CLOSED"
    },
    {
        number: "4",
        role: "DEVELOPER ^",
        status: "ACTIVE"
    },
    {
        number: "5",
        role: "ONWER ^",
        status: "ACTIVE"
    },
    {
        number: "6",
        role: "ADMIN ^",
        status: "ACTIVE"
    },
    {
        number: "7",
        role: "PM ^",
        status: "ACTIVE"
    },
    {
        number: "8",
        role: "QA ^",
        status: "ACTIVE"
    },
    {
        number: "9",
        role: "DEVELOPER ^",
        status: "ACTIVE"
    },
    {
        number: "10",
        role: "DESIGN ^",
        status: "ACTIVE"
    },
    {
        number: "11",
        role: "DEVELOPER ^",
        status: "HOLD"
    },
    {
        number: "12",
        role: "DEVELOPER ^",
        status: "ACTIVE"
    },
    {
        number: "13",
        role: "OWNER ^",
        status: "ACTIVE"
    },
    {
        number: "14",
        role: "ADMIN ^",
        status: "ACTIVE"
    },
    {
        number: "15",
        role: "PM ^",
        status: "ACTIVE"
    },
    {
        number: "16",
        role: "QA ^",
        status: "ACTIVE"
    },
    {
        number: "17",
        role: "ADMIN ^",
        status: "ACTIVE"
    },
    {
        number: "18",
        role: "PM ^",
        status: "ACTIVE"
    },
]