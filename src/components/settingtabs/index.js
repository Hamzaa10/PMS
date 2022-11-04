import React from 'react'

import style from './settingtabs.module.scss'

const SettingTabs = (props) => {
    return (
        <div className={style.container}>
            <div className={style.tabs}>
                <a className={style.link} href="/">{props.title1}</a>
                <a className={style.link} href="/">{props.title2}</a>
                <a className={style.link1} href="/">{props.title3}</a>
            </div>
        </div>
    )
}

export default SettingTabs
