import React from 'react'

import style from './listitems.module.scss'


const ListItems = ({ project, milestone, task, id, type, assignee, priority, group, Status, expected, estimated, tracked, start, due, closed, qa, created }) => {
    return (
        <div className={style.container}>
            <p className={style.first}>{project}</p>
            <p className={style.first}>{milestone}</p>
            <p className={style.second}>{task}</p>
            <p className={style.third}>{id}</p>
            <p className={style.first}>{type}</p>
            <p className={style.third}>
                <div className={style.assignee}>
                    <p>{assignee}</p>
                </div>
            </p>
            <p className={style.third}>{priority}</p>
            <p className={style.third}>{group}</p>
            <p className={style.third}>{Status}</p>
            <p className={style.third}>{expected}</p>
            <p className={style.third}>{estimated}</p>
            <p className={style.third}>{tracked}</p>
            <p className={style.third}>{start}</p>
            <p className={style.third}>{due}</p>
            <p className={style.third}>{closed}</p>
            <p className={style.third}>
                <div className={style.assignee}>
                    <p>{qa}</p>
                </div>
            </p>
            <p className={style.third}>
                <div className={style.assignee}>
                    <p>{created}</p>
                </div>
            </p>
        </div>
    )
}

export default ListItems
