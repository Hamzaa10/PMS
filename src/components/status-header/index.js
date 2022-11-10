import React from 'react'

import style from './statusheader.module.scss'

const StatusHeader = () => {
    return (
        <div className={style.container}>
            <table>
                <tr>
                    <th>DAY</th>
                    <th>PROJECT</th>
                    <th>MILESTONE</th>
                    <th>NOT START</th>
                    <th>BLOCKED</th>
                    <th>WORKING ON</th>
                    <th>UNDER QA</th>
                    <th>DELIVERED</th>
                    <th>ACCEPTED</th>
                    <th>REJECTED</th>
                </tr>
            </table>
        </div>
    )
}

export default StatusHeader
