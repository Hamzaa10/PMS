import React from 'react'
import { NavLink } from 'react-router-dom'

import style from './tabs2.module.scss'

const Tabs2 = ({ title1, title2 }) => {

    const tabsStyle = ({ isActive }) => {
        return {
            color: isActive ? '#676A6F' : 'white',
            background: isActive ? 'white' : '#676A6F',
            padding: isActive ? '3px 30px' : ''
        }
    }

    return (
        <div className={style.container}>
            <div className={style.tabs}>
                <NavLink style={tabsStyle} className={style.link} to="/hours">{title1}</NavLink>
                <NavLink style={tabsStyle} className={style.link1} to="/task">{title2}</NavLink>
            </div>
        </div>
    )
}

export default Tabs2
