import React from 'react'
import style from './sidebar.module.scss'

import img from '../../../assets/logo-removebg-preview.png'

const Sidebar = () => {
  return (
    <div className={style.container}>
      <div className={style.logo}>
        <img src={img} alt="" />
      </div>
      <ul>
        <a href="/">Home</a>
        <a href="/qaboard">QA Board</a>
        <a href="/setting">Settings</a>
      </ul>
    </div>
  )
}

export default Sidebar
