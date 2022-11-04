import React from 'react'
import style from './navbar.module.scss'
// import Button from '../../button/index'

const Navbar = (props) => {
    return (
        <div className={style.container}>
            <div className={style.title}>
                <p className={style.para}>{props.title}</p>
            </div>
        </div>
    )
}

export default Navbar
