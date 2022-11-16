import React from 'react'
import { Link } from 'react-router-dom'

import style from './settingtabs.module.scss'

const SettingTabs = ({ title1, title2, title3, title4 }) => {
    return (
        <div className={style.container}>
            <div className={style.tabs}>
                <Link className={style.link} to="/setting">{title1}</Link>
                <Link className={style.link} to="/members">{title2}</Link>
                <Link className={style.link} to="/workspace">{title3}</Link>
                <Link className={style.link1} to="">{title4}</Link>
            </div>
        </div>
    )
}

export default SettingTabs
