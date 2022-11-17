import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

import style from './tabs.module.scss'

const Tabs = ({ title1, title2, title3, title4, title5, title6, title7, title8 }) => {

    // const { pathname } = useLocation();

    return (
        <div className={style.container}>
            <div className={style.tabs}>
                <NavLink className={style.link} to="/">{title1}</NavLink>
                <NavLink className={style.link} to="/list">{title2}</NavLink>
                <NavLink className={style.link} to="">{title3}</NavLink>
                <NavLink className={style.link} to="">{title4}</NavLink>
                <NavLink className={style.link} to="">{title5}</NavLink>
                <NavLink className={style.link} to="/workload">{title6}</NavLink>
                <NavLink className={style.link} to="/status">
                    {/* <p style={{ color: pathname === "/status" ? "#676A6F" : "", background: pathname === "/status" ? "#ffffff" : "", width: pathname === "/status" ? "110px" : "", height: pathname === "/status" ? "25px" : ""  }}>  */}
                    {title7}
                    {/* </p> */}
                </NavLink>
                <NavLink className={style.link1} to="">{title8}</NavLink>
            </div>
        </div>
    )
}

export default Tabs
