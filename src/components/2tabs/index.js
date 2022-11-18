import React from 'react'
import { NavLink } from 'react-router-dom'

import style from './tabs2.module.scss'

const Tabs2 = ({ title1, title2 }) => {
    return (
        <div className={style.container}>
            <div className={style.tabs}>
                <NavLink className={style.link} to="">{title1}</NavLink>
                <NavLink className={style.link1} to="">{title2}</NavLink>
            </div>
        </div>
    )
}

export default Tabs2
