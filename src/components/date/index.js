import React from 'react'

import style from './date.module.scss'
import img from '../../assets/search.svg'

const Date = () => {
    return (
        <div className={style.container}>
            <div className={style.left}>
                <img className={style.img} src={img} alt="" />
                <input className={style.input} type="text" placeholder='Search users' size={15} />
            </div>
            <div className={style.right}>
                <p className={style.para}>START DATE</p>
                <p className={style.date}>3-OCT-22</p>
                <p className={style.para}>END DATE</p>
                <p className={style.date}>9-OCT-22</p>
            </div>
        </div>
    )
}

export default Date
