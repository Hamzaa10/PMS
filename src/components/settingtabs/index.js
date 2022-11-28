import React from 'react'
import { NavLink } from 'react-router-dom'

import style from './settingtabs.module.scss'

const SettingTabs = ({ title1, title2, title3, title4 }) => {

    const tabsStyle = ({ isActive }) => {
        return {
            color: isActive ? '#676A6F' : 'white',
            background: isActive ? 'white' : '#676A6F',
            padding: isActive ? '6px 30px 3px' : '',
            borderRadius: isActive ? '5px' : ''
        }
    }

    return (
        <div className={style.container}>
            <div className={style.tabs}>
                <NavLink style={tabsStyle} className={style.link} to="/setting">{title1}</NavLink>
                <NavLink style={tabsStyle} className={style.link} to="/members">{title2}</NavLink>
                <NavLink style={tabsStyle} className={style.link} to="/workspace">{title3}</NavLink>
                <NavLink style={tabsStyle} className={style.link1} to="/project">{title4}</NavLink>
            </div>
        </div>
    )
}

export default SettingTabs
