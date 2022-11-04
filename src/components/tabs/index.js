import React from 'react'
import { Link } from 'react-router-dom'

import style from './tabs.module.scss'

const Tabs = (props) => {
    return (
        <div className={style.container}>
            <div className={style.tabs}>
                <Link className={style.link} to="/">{props.title1}</Link>
                <Link className={style.link} to="/">{props.title2}</Link>
                <Link className={style.link} to="/">{props.title3}</Link>
                <Link className={style.link} to="/">{props.title4}</Link>
                <Link className={style.link} to="/">{props.title5}</Link>
                <Link className={style.link} to="/">{props.title6}</Link>
                <Link className={style.link} to="/">{props.title7}</Link>
                <Link className={style.link1} to="/">{props.title8}</Link>
            </div>
            <div className={style.btn}>
                <button className={style.button}>Import</button>
            </div>
        </div>
    )
}

export default Tabs
