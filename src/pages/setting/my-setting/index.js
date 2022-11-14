import React from 'react'
import Image from '../../../components/image'
import Navbar from '../../../components/layout/navbar'
import Sidebar from '../../../components/layout/sidebar'
import SettingTabs from '../../../components/settingtabs'
import Textarea from '../../../components/textarea/index'
import Button from '../../../components/button/index'

import img from '../../../assets/Ellipse 6.svg'
import img1 from '../../../assets/add-photo.png'
import style from './mysetting.module.scss'

const MySetting = () => {
    return (
        <div className={style.container}>
            <div className={style.display}>
                <Sidebar />
                <div className={style.data}>
                    <Navbar title="SETTINGS" />
                    <SettingTabs
                        title1="MY SETTING"
                        title2="MEMBERS"
                        title3="WORKSPACE"
                        title4="PROJECT"
                    />
                    <div className={style.input}>
                        <div>
                            {
                                inputData.map(({ lable }) => (
                                    <Textarea lable={lable} />
                                ))
                            }
                        </div>
                        <div className={style.image}>
                            <Image title="Change Picture" img={img} />
                            <img className={style.img} src={img1} alt="" />
                        </div>
                    </div>
                    <div className={style.btn}>
                        <Button title="SAVE" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MySetting


const inputData = [
    { lable: "USER NAME" },
    { lable: "EMAIL" },
    { lable: "NEW PASSWORD" },
    { lable: "CONFIRM PASSWORD" }
]