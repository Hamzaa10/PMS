import React from 'react'

import style from './textfeild.module.scss'
import img from '../../assets/search.svg'

const Textfeild = () => {
    return (
        <div className={style.container}>
            <div className={style.left}>
                <img className={style.img} src={img} alt="" />
                <input className={style.input} type="text" placeholder='Search by name or email' size={60} />
            </div>
            <div className={style.right}>
                <input className={style.input} type="text" placeholder='Invite by email (multiple lines and CSV accepted)' size={55} />
                <select className={style.select} name="" id="">
                    <option value="">Admin</option>
                </select>
                <button className={style.btn}>Invite</button>
            </div>
        </div>
    )
}

export default Textfeild
