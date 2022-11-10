import React from 'react'

import style from './graph.module.scss'

const Graph = () => {
    return (
        <div className={style.container}>
            <div className={style.top}>
                <div className={style.top_sec}>
                    <p className={style.para}>05:00</p>
                </div>
            </div>
            <div className={style.mid}>
                <div className={style.mid_sec}>
                    <p className={style.para}>07:30</p>
                </div>
            </div>
            <div className={style.bottom}>
                <div className={style.bottom_sec}>
                    <p className={style.para}>06:00</p>
                </div>
            </div>
        </div>
    )
}

export default Graph
