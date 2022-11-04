import React from 'react'

import style from './tabs.module.scss'

const Tabs = (props) => {
    return (
        <div className={style.container}>
            <div className={style.tabs}>
                <a className={style.active} href="/">{props.title1}</a>
                <a className={style.link} href="/">{props.title2}</a>
                <a className={style.link} href="/">{props.title3}</a>
                <a className={style.link} href="/">{props.title4}</a>
                <a className={style.link} href="/">{props.title5}</a>
                <a className={style.link} href="/">{props.title6}</a>
                <a className={style.link} href="/">{props.title7}</a>
                <a className={style.link1} href="/">{props.title8}</a>
            </div>
            <div className={style.btn}>
                <button className={style.button}>Import</button>
            </div>
        </div>
    )
}

export default Tabs
