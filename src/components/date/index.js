import React from 'react'

import style from './date.module.scss'
import img from '../../assets/icons8-search.svg'
import img1 from '../../assets/Vector.svg'

const Date = ({ startdate, enddate }) => {
    return (
        <div className={style.container}>
            <div className={style.left}>
                <img className={style.img} src={img} alt="" />
                <input className={style.input} type="text" placeholder='Search users' size={15} />
            </div>
            <a className={style.image} href="">
                <img src={img1} alt="" />
            </a>
            <div className={style.right}>
                <p className={style.para}>START DATE</p>
                <p className={style.date}>{startdate}</p>
                <p className={style.para}>END DATE</p>
                <p className={style.date}>{enddate}</p>
            </div>
        </div>
    )
}

export default Date
