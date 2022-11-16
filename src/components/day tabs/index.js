import React from 'react'

import style from './daytabs.module.scss'
import { Link } from 'react-router-dom'

const Daytabs = ({ title1, title2, title3 }) => {
    return (
        <div className={style.container}>
            <div className={style.tabs}>
                <Link className={style.link} to="/workload">{title1}</Link>
                <Link className={style.link} to="/week">{title2}</Link>
                <Link className={style.link1} to="/month">{title3}</Link>
            </div>
        </div>
    )
}

export default Daytabs
