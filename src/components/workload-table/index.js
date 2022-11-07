import React from 'react'
import Profile from '../../components/workload-profile/index'
import Number from '../../components/workload-number'
import Graph from '../../components/workload-graph'

import style from './table.module.scss'

const Table = () => {
    return (
        <div className={style.container}>
            <table>
                <tbody>
                    <tr>
                        <td className={style.first}>
                            {
                                profileData.map(({ index }) => (
                                    <Profile index={index} />
                                ))
                            }
                        </td>
                        <td className={style.second}>
                            {
                                profileData.map(({ index }) => (
                                    <Number index={index} />
                                ))
                            }
                        </td>
                        <td className={style.third}>
                            {
                                profileData.map(({ index }) => (
                                    <Number index={index} />
                                ))
                            }
                        </td>
                        <td className={style.third}>
                            {
                                profileData.map(({ index }) => (
                                    <Number index={index} />
                                ))
                            }
                        </td>
                        <td className={style.second}>
                            {
                                profileData.map(({ index }) => (
                                    <Number index={index} />
                                ))
                            }
                        </td>
                        <td className={style.graph}>
                            {
                                profileData.map(({ index }) => (
                                    <Graph index={index} />
                                ))
                            }
                        </td>
                        <td className={style.graph}>
                            {
                                profileData.map(({ index }) => (
                                    <Graph index={index} />
                                ))
                            }
                        </td>
                        <td className={style.graph}>
                            {
                                profileData.map(({ index }) => (
                                    <Graph index={index} />
                                ))
                            }
                        </td>
                        <td className={style.graph}>
                            {
                                profileData.map(({ index }) => (
                                    <Graph index={index} />
                                ))
                            }
                        </td>
                        <td className={style.graph}>
                            {
                                profileData.map(({ index }) => (
                                    <Graph index={index} />
                                ))
                            }
                        </td>
                        <td className={style.graph}>
                            {
                                profileData.map(({ index }) => (
                                    <Graph index={index} />
                                ))
                            }
                        </td>
                        <td>
                            {
                                profileData.map(({ index }) => (
                                    <Graph index={index} />
                                ))
                            }
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table

const profileData = [
    { index: "index" },
    { index: "index" },
    { index: "index" },
    { index: "index" },
    { index: "index" },
    { index: "index" },
    { index: "index" },
    { index: "index" },
    { index: "index" },
    { index: "index" },
    { index: "index" },
    { index: "index" },
    { index: "index" }
]