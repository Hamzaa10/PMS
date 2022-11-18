import React from 'react'
import { NavLink } from 'react-router-dom'

import style from './tabs4.module.scss'

const Tabs4 = ({ title1, title2, title3, title4 }) => {

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
                <NavLink style={tabsStyle} className={style.link} to="/status">{title1}</NavLink>
                <NavLink style={tabsStyle} className={style.link} to="/statusweek">{title2}</NavLink>
                <NavLink style={tabsStyle} className={style.link} to="/statusmonth">{title3}</NavLink>
                <NavLink style={tabsStyle} className={style.link1} to="/statusyear">{title4}</NavLink>
            </div>
        </div>
    )
}

export default Tabs4
