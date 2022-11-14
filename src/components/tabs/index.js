import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import style from './tabs.module.scss'

const Tabs = (props) => {

    const { pathname } = useLocation();

    return (
        <div className={style.container}>
            <div className={style.tabs}>
                <Link className={style.link} to="/">{props.title1}</Link>
                <Link className={style.link} to="/list">{props.title2}</Link>
                <Link className={style.link} to="">{props.title3}</Link>
                <Link className={style.link} to="">{props.title4}</Link>
                <Link className={style.link} to="">{props.title5}</Link>
                <Link className={style.link} to="/workload">{props.title6}</Link>
                <Link className={style.link} to="/status">
                    <p style={{
                        color: pathname === "/status" ? "#676A6F" : "", background: pathname === "/status" ? "white" : ""
                    }}>
                        {props.title7}
                    </p>


                </Link>
                <Link className={style.link1} to="">{props.title8}</Link>
            </div>
        </div>
    )
}

export default Tabs
