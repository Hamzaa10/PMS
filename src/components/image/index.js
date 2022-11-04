import React from 'react'
import { Link } from 'react-router-dom'

import style from './image.module.scss'

const Image = (props) => {
  return (
    <div className={style.container}>
      <Link to="/detailpage"><img src={props.img} alt="" /></Link>
      <p className={style.para}>{props.title}</p>
    </div>
  )
}

export default Image
