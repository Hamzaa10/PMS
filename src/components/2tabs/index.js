import React from 'react'
import { Link } from 'react-router-dom'

import style from './tabs2.module.scss'

const Tabs2 = ({ title1, title2 }) => {
    return (
        <div className={style.container}>
            <div className={style.tabs}>
                <Link className={style.link} to="">{title1}</Link>
                <Link className={style.link1} to="">{title2}</Link>
            </div>
        </div>
    )
}

export default Tabs2
