import React from 'react'

import style from './daytabs.module.scss'
import { NavLink } from 'react-router-dom'

const Daytabs = ({ title1, title2, title3 }) => {

    const tabsStyle = ({ isActive }) => {
        return {
            color: isActive ? '#676A6F' : 'white',
            background: isActive ? 'white' : '#676A6F',
            padding: isActive ? '3px 30px' : '',
            borderRadius: isActive ? '5px' : ''
        }
    }

    return (
        <div className={style.container}>
            <div className={style.tabs}>
                <NavLink style={tabsStyle} className={style.link} to="/workload">{title1}</NavLink>
                <NavLink style={tabsStyle} className={style.link} to="/week">{title2}</NavLink>
                <NavLink style={tabsStyle} className={style.link1} to="/month">{title3}</NavLink>
            </div>
        </div>
    )
}

export default Daytabs
