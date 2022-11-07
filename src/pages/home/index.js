import React from 'react'
import Sidebar from '../../components/layout/sidebar'
import Navbar from '../../components/layout/navbar'
import Card from '../../components/card/index'
import Pagination from '../../components/pagination/index'
import Tabs from '../../components/tabs/index'

import style from './home.module.scss'

const Home = () => {
  return (
    <div className={style.container}>
      <div className={style.display}>
        <Sidebar />
        <div className={style.data}>
          <Navbar title="PROJECTS" />
          <Tabs
            title1="BOX"
            title2="LIST"
            title3="BOARD"
            title4="TIMELINE"
            title5="GANTT"
            title6="WORKLOAD"
            title7="STATUS"
            title8="CALENDER"
          />
          <div className={style.card}>
            {
              cardData.map(({ title, Details, Add }) => (
                <Card title={title} Details={Details} Add={Add} />
              ))
            }
          </div>
          <div className={style.pagination}>
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home


const cardData = [
  { title: "Project Name", Details: "Details", Add: "Add People" },
  { title: "Project Name", Details: "Details", Add: "Add People" },
  { title: "Project Name", Details: "Details", Add: "Add People" },
  { title: "Project Name", Details: "Details", Add: "Add People" },
  { title: "Project Name", Details: "Details", Add: "Add People" },
  { title: "Project Name", Details: "Details", Add: "Add People" },
  { title: "Project Name", Details: "Details", Add: "Add People" },
  { title: "Project Name", Details: "Details", Add: "Add People" }
]