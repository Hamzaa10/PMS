import React from 'react'

import style from './items.module.scss'

const Items = () => {
    return (
        // <div className={style.container}>
        //     <table className={style.table}>
        //         <tr className={style.row}>
        //             <th className={style.head}>NO.</th>
        //             <th className={style.head}>NAME</th>
        //             <th className={style.head}>EMAIL</th>
        //             <th className={style.head}>ROLE</th>
        //             <th className={style.head}>ACCOUNT STATUS</th>
        //             <th className={style.head}>LAST ACTIVE</th>
        //             <th className={style.head}>SETTINGS</th>
        //         </tr>
        //         <tr className={style.row}>
        //             <td>1</td>
        //             <td>XYZ123 ABC</td>
        //             <td>DEV1234567@XYZ.COM</td>
        //             <td>DEVELOPER ^</td>
        //             <td className={style.green}>ACTIVE</td>
        //             <td>10-OCT-2022</td>
        //             <td>...</td>
        //         </tr>
        //         <tr className={style.row}>
        //             <td>2</td>
        //             <td>XYZ123 ABC</td>
        //             <td>DEV1234567@XYZ.COM</td>
        //             <td>DEVELOPER ^</td>
        //             <td className={style.green}>ACTIVE</td>
        //             <td>10-OCT-2022</td>
        //             <td>...</td>
        //         </tr>
        //         <tr className={style.row}>
        //             <td>3</td>
        //             <td>XYZ123 ABC</td>
        //             <td>DEV1234567@XYZ.COM</td>
        //             <td>DEVELOPER ^</td>
        //             <td className={style.red}>CLOSED</td>
        //             <td>10-OCT-2022</td>
        //             <td>...</td>
        //         </tr>
        //         <tr className={style.row}>
        //             <td>4</td>
        //             <td>XYZ123 ABC</td>
        //             <td>DEV1234567@XYZ.COM</td>
        //             <td>DEVELOPER ^</td>
        //             <td className={style.green}>ACTIVE</td>
        //             <td>10-OCT-2022</td>
        //             <td>...</td>
        //         </tr>
        //         <tr className={style.row}>
        //             <td>5</td>
        //             <td>XYZ123 ABC</td>
        //             <td>DEV1234567@XYZ.COM</td>
        //             <td>OWNER ^</td>
        //             <td className={style.green}>ACTIVE</td>
        //             <td>10-OCT-2022</td>
        //             <td>...</td>
        //         </tr>
        //         <tr className={style.row}>
        //             <td>6</td>
        //             <td>XYZ123 ABC</td>
        //             <td>DEV1234567@XYZ.COM</td>
        //             <td>ADMIN ^</td>
        //             <td className={style.green}>ACTIVE</td>
        //             <td>10-OCT-2022</td>
        //             <td>...</td>
        //         </tr>
        //         <tr className={style.row}>
        //             <td>7</td>
        //             <td>XYZ123 ABC</td>
        //             <td>DEV1234567@XYZ.COM</td>
        //             <td>PM ^</td>
        //             <td className={style.green}>ACTIVE</td>
        //             <td>10-OCT-2022</td>
        //             <td>...</td>
        //         </tr>
        //         <tr className={style.row}>
        //             <td>8</td>
        //             <td>XYZ123 ABC</td>
        //             <td>DEV1234567@XYZ.COM</td>
        //             <td>QA ^</td>
        //             <td className={style.green}>ACTIVE</td>
        //             <td>10-OCT-2022</td>
        //             <td>...</td>
        //         </tr>
        //         <tr className={style.row}>
        //             <td>9</td>
        //             <td>XYZ123 ABC</td>
        //             <td>DEV1234567@XYZ.COM</td>
        //             <td>DEVELOPER ^</td>
        //             <td className={style.green}>ACTIVE</td>
        //             <td>10-OCT-2022</td>
        //             <td>...</td>
        //         </tr>
        //         <tr className={style.row}>
        //             <td>10</td>
        //             <td>XYZ123 ABC</td>
        //             <td>DEV1234567@XYZ.COM</td>
        //             <td>DESIGN ^</td>
        //             <td className={style.green}>ACTIVE</td>
        //             <td>10-OCT-2022</td>
        //             <td>...</td>
        //         </tr>
        //         <tr className={style.row}>
        //             <td>11</td>
        //             <td>XYZ123 ABC</td>
        //             <td>DEV1234567@XYZ.COM</td>
        //             <td>DEVELOPER ^</td>
        //             <td className={style.yellow}>HOLD</td>
        //             <td>10-OCT-2022</td>
        //             <td>...</td>
        //         </tr>
        //         <tr className={style.row}>
        //             <td>12</td>
        //             <td>XYZ123 ABC</td>
        //             <td>DEV1234567@XYZ.COM</td>
        //             <td>DEVELOPER ^</td>
        //             <td className={style.green}>ACTIVE</td>
        //             <td>10-OCT-2022</td>
        //             <td>...</td>
        //         </tr>
        //         <tr className={style.row}>
        //             <td>13</td>
        //             <td>XYZ123 ABC</td>
        //             <td>DEV1234567@XYZ.COM</td>
        //             <td>OWNER ^</td>
        //             <td className={style.green}>ACTIVE</td>
        //             <td>10-OCT-2022</td>
        //             <td>...</td>
        //         </tr>
        //         <tr className={style.row}>
        //             <td>14</td>
        //             <td>XYZ123 ABC</td>
        //             <td>DEV1234567@XYZ.COM</td>
        //             <td>ADMIN ^</td>
        //             <td className={style.green}>ACTIVE</td>
        //             <td>10-OCT-2022</td>
        //             <td>...</td>
        //         </tr>
        //         <tr className={style.row}>
        //             <td>15</td>
        //             <td>XYZ123 ABC</td>
        //             <td>DEV1234567@XYZ.COM</td>
        //             <td>PM ^</td>
        //             <td className={style.green}>ACTIVE</td>
        //             <td>10-OCT-2022</td>
        //             <td>...</td>
        //         </tr>
        //         <tr className={style.row}>
        //             <td>16</td>
        //             <td>XYZ123 ABC</td>
        //             <td>DEV1234567@XYZ.COM</td>
        //             <td>QA ^</td>
        //             <td className={style.green}>ACTIVE</td>
        //             <td>10-OCT-2022</td>
        //             <td>...</td>
        //         </tr>
        //         <tr className={style.row}>
        //             <td>17</td>
        //             <td>XYZ123 ABC</td>
        //             <td>DEV1234567@XYZ.COM</td>
        //             <td>ADMIN ^</td>
        //             <td className={style.green}>ACTIVE</td>
        //             <td>10-OCT-2022</td>
        //             <td>...</td>
        //         </tr>
        //         <tr className={style.row}>
        //             <td>18</td>
        //             <td>XYZ123 ABC</td>
        //             <td>DEV1234567@XYZ.COM</td>
        //             <td>PM ^</td>
        //             <td className={style.green}>ACTIVE</td>
        //             <td>10-OCT-2022</td>
        //             <td>...</td>
        //         </tr>
        //     </table>
        // </div>
        <div className={style.container}>
            <table>
                <tbody>
                    <tr>
                        <th>NO.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Account Status</th>
                        <th>LAST ACTIVE</th>
                        <th>SETTINGS</th>
                    </tr>
                    {itemData.map(({ NO, name, email, role, status, ACTIVE, settings }) => (
                        <tr>
                            <td>{NO}</td>
                            <td>{name}</td>
                            <td>{email}</td>
                            <td>{role}</td>
                            <td className={style.color}>{status}</td>
                            <td>{ACTIVE}</td>
                            <td>{settings}</td>
                            <td></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Items


const itemData = [
    {
        NO: "1",
        name: "XYZ123 ABC",
        email: "DEV1234567@XYZ.COM",
        role: "DEVELOPER ^",
        status: "ACTIVE",
        ACTIVE: "10-OCT-2022 ",
        settings: "..."
    },
    {
        NO: "2",
        name: "XYZ123 ABC",
        email: "DEV1234567@XYZ.COM",
        role: "DEVELOPER ^",
        status: "ACTIVE",
        ACTIVE: "10-OCT-2022 ",
        settings: "..."
    },
    {
        NO: "3",
        name: "XYZ123 ABC",
        email: "DEV1234567@XYZ.COM",
        role: "DEVELOPER ^",
        status: "CLOSED",
        ACTIVE: "10-OCT-2022 ",
        settings: "..."
    },
    {
        NO: "4",
        name: "XYZ123 ABC",
        email: "DEV1234567@XYZ.COM",
        role: "DEVELOPER ^",
        status: "ACTIVE",
        ACTIVE: "10-OCT-2022 ",
        settings: "..."
    },
    {
        NO: "5",
        name: "XYZ123 ABC",
        email: "DEV1234567@XYZ.COM",
        role: "OWNER ^",
        status: "ACTIVE",
        ACTIVE: "10-OCT-2022 ",
        settings: "..."
    },
    {
        NO: "6",
        name: "XYZ123 ABC",
        email: "DEV1234567@XYZ.COM",
        role: "ADMIN ^",
        status: "ACTIVE",
        ACTIVE: "10-OCT-2022 ",
        settings: "..."
    },
    {
        NO: "7",
        name: "XYZ123 ABC",
        email: "DEV1234567@XYZ.COM",
        role: "PM ^",
        status: "ACTIVE",
        ACTIVE: "10-OCT-2022 ",
        settings: "..."
    },
    {
        NO: "8",
        name: "XYZ123 ABC",
        email: "DEV1234567@XYZ.COM",
        role: "QA ^",
        status: "ACTIVE",
        ACTIVE: "10-OCT-2022 ",
        settings: "..."
    },
    {
        NO: "9",
        name: "XYZ123 ABC",
        email: "DEV1234567@XYZ.COM",
        role: "DEVELOPER ^",
        status: "ACTIVE",
        ACTIVE: "10-OCT-2022 ",
        settings: "..."
    },
    {
        NO: "10",
        name: "XYZ123 ABC",
        email: "DEV1234567@XYZ.COM",
        role: "DESIGN ^",
        status: "ACTIVE",
        ACTIVE: "10-OCT-2022 ",
        settings: "..."
    },
    {
        NO: "11",
        name: "XYZ123 ABC",
        email: "DEV1234567@XYZ.COM",
        role: "DEVELOPER ^",
        status: "HOLD",
        ACTIVE: "10-OCT-2022 ",
        settings: "..."
    },
    {
        NO: "12",
        name: "XYZ123 ABC",
        email: "DEV1234567@XYZ.COM",
        role: "DEVELOPER ^",
        status: "ACTIVE",
        ACTIVE: "10-OCT-2022 ",
        settings: "..."
    },
    {
        NO: "13",
        name: "XYZ123 ABC",
        email: "DEV1234567@XYZ.COM",
        role: "OWNER ^",
        status: "ACTIVE",
        ACTIVE: "10-OCT-2022 ",
        settings: "..."
    },
    {
        NO: "14",
        name: "XYZ123 ABC",
        email: "DEV1234567@XYZ.COM",
        role: "ADMIN ^",
        status: "ACTIVE",
        ACTIVE: "10-OCT-2022 ",
        settings: "..."
    },
    {
        NO: "15",
        name: "XYZ123 ABC",
        email: "DEV1234567@XYZ.COM",
        role: "PM ^",
        status: "ACTIVE",
        ACTIVE: "10-OCT-2022 ",
        settings: "..."
    },
    {
        NO: "16",
        name: "XYZ123 ABC",
        email: "DEV1234567@XYZ.COM",
        role: "QA ^",
        status: "ACTIVE",
        ACTIVE: "10-OCT-2022 ",
        settings: "..."
    },
    {
        NO: "17",
        name: "XYZ123 ABC",
        email: "DEV1234567@XYZ.COM",
        role: "ADMIN ^",
        status: "ACTIVE",
        ACTIVE: "10-OCT-2022 ",
        settings: "..."
    },
    {
        NO: "18",
        name: "XYZ123 ABC",
        email: "DEV1234567@XYZ.COM",
        role: "PM ^",
        status: "ACTIVE",
        ACTIVE: "10-OCT-2022 ",
        settings: "..."
    },
];
