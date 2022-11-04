import React from 'react'

import style from './items.module.scss'

const Items = (props) => {
    return (
        <div className={style.container}>
            <p className={style.para}>{props.number}</p>
            <p className={style.para}>XYZ123 ABC</p>
            <p className={style.para}>DEV1234567@XYZ.COM</p>
            <p className={style.para}>{props.role}</p>
            <p className={style.para}>{props.status}</p>
            <p className={style.para}>10-OCT-2022</p>
            <p className={style.para1}>...</p>
        </div>
    )
}

export default Items
