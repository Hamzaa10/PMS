import React from 'react'

import style from './image.module.scss'

const Image = (props) => {
  return (
    <div className={style.container}>
      <a href="/"><img src={props.img} alt="" /></a>
      <p className={style.para}>{props.title}</p>
    </div>
  )
}

export default Image
