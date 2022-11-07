import React from 'react'

import style from './header.module.scss'

const Header = () => {
    return (
        <div className={style.container}>
            <table>
                <tr>
                    <th className={style.width}>ASSIGNEE</th>
                    <th>CAPACITY</th>
                    <th>ASSIGNED</th>
                    <th>TRACKED</th>
                    <th>COMPLETED</th>
                    <th>MON 3 OCT</th>
                    <th>TUE 4 OCT</th>
                    <th>WED 5 OCT</th>
                    <th>THU 6 OCT</th>
                    <th>FRI 7 OCT</th>
                    <th>SAT 8 OCT</th>
                    <th>SUN 9 OCT</th>
                </tr>
            </table>
        </div>
    )
}

export default Header
