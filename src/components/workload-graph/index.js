import React from 'react'

import style from './graph.module.scss'

const Graph = () => {
    return (
        <div className={style.container}>
            <div className={style.top}>
                <p className={style.para}>05:00</p>
                <div className={style.top_sec}>
                </div>
            </div>
            <div className={style.mid}>
                <p className={style.para}>07:30</p>
                <div className={style.mid_sec}>
                </div>
            </div>
            <div className={style.bottom}>
                <p className={style.para}>06:00</p>
                <div className={style.bottom_sec}>
                </div>
            </div>
        </div>
    )
}

export default Graph
