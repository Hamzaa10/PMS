import React from 'react'
import { Link } from 'react-router-dom'

import style from './tabs4.module.scss'

const Tabs4 = ({ title1, title2, title3, title4 }) => {
    return (
        <div className={style.container}>
            <div className={style.tabs}>
                <Link className={style.link} to="">{title1}</Link>
                <Link className={style.link} to="">{title2}</Link>
                <Link className={style.link} to="">{title3}</Link>
                <Link className={style.link1} to="">{title4}</Link>
            </div>
        </div>
    )
}

export default Tabs4
