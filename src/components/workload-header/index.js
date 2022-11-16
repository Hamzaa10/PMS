import React from 'react'

import style from './header.module.scss'

const Header = ({ tab1, tab2, tab3, tab4, tab5, tab6, tab7 }) => {
    return (
        <div className={style.container}>
            <table>
                <tr>
                    <th className={style.width}>ASSIGNEE</th>
                    <th className={style.width1}>CAPACITY</th>
                    <th className={style.width1}>ASSIGNED</th>
                    <th className={style.width1}>TRACKED</th>
                    <th className={style.width1}>COMPLETED</th>
                    <th className={style.width1}>{tab1}</th>
                    <th className={style.width1}>{tab2}</th>
                    <th className={style.width1}>{tab3}</th>
                    <th className={style.width1}>{tab4}</th>
                    <th className={style.width1}>{tab5}</th>
                    <th className={style.width1}>{tab6}</th>
                    <th className={style.width1}>{tab7}</th>
                </tr>
            </table>
        </div>
    )
}

export default Header
