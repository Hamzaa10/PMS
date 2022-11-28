import React from 'react'
import { NavLink } from 'react-router-dom'

import style from './tabs.module.scss'

const Tabs = ({ title1, title2, title3, title4, title5, title6, title7, title8 }) => {

    const tabsStyle = ({ isActive }) => {
        return {
            color: isActive ? '#676A6F' : 'white',
            background: isActive ? 'white' : '#676A6F',
            padding: isActive ? '3px 30px' : '',
            borderLeft: isActive ? 'none' : 'none',
            borderRadius: isActive ? '5px' : '0px'
        }
    }

    return (
        <div className={style.container}>
            <div className={style.tabs}>
                <NavLink style={tabsStyle} className={style.link} to="/">{title1}</NavLink>
                <NavLink style={tabsStyle} className={style.link} to="/list">{title2}</NavLink>
                <NavLink style={tabsStyle} className={style.link} to="/board">{title3}</NavLink>
                <NavLink style={tabsStyle} className={style.link} to="/timeline">{title4}</NavLink>
                <NavLink style={tabsStyle} className={style.link} to="/gantt">{title5}</NavLink>
                <NavLink style={tabsStyle} className={style.link} to="/workload">{title6}</NavLink>
                <NavLink style={tabsStyle} className={style.link} to="/status">{title7}</NavLink>
                <NavLink style={tabsStyle} className={style.link1} to="/calender">{title8}</NavLink>
            </div>
        </div>
    )
}

export default Tabs
