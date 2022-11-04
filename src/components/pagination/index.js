import React from 'react'
import style from './pagination.module.scss'

import img1 from '../../assets/icons8-less-than-50.png'
import img2 from '../../assets/icons8-more-than-50.png'

const Pagination = () => {
    return (
        <div className={style.container}>
            <div className={style.left}>
                <h3>SELECT PAGE</h3>
                <select className={style.nmbr} name="numbers" id="">
                    <option value="numbers">1</option>
                    <option value="numbers">2</option>
                    <option value="numbers">3</option>
                    <option value="numbers">4</option>
                    <option value="numbers">5</option>
                    <option value="numbers">6</option>
                    <option value="numbers">7</option>
                    <option value="numbers">8</option>
                    <option value="numbers">9</option>
                    <option value="numbers">10</option>
                </select>
            </div>
            <div className={style.right}>
                <h4>Showing 1 to 20 of 3,129 entries</h4>
                <div className={style.images}>
                    <img className={style.arrow1} src={img1} alt="" />
                    <img src={img1} alt="" />
                    <img src={img1} alt="" />
                    <p className={style.active}>3</p>
                    <p>4</p>
                    <p>5</p>
                    <img src={img2} alt="" />
                    <img src={img2} alt="" />
                    <img className={style.arrow2} src={img2} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Pagination
