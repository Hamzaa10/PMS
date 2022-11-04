import React from 'react'
import Navbar from '../../components/layout/navbar'
import Sidebar from '../../components/layout/sidebar'
import Tabs from '../../components/tabs'

import style from './workload.module.scss'

const Workload = () => {
  return (
    <div className={style.container}>
      <div className={style.display}>
        <Sidebar />
        <div className={style.data}>
            <Navbar />
            <Tabs />
        </div>
      </div>
    </div>
  )
}

export default Workload
