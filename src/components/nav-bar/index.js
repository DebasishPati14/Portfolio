import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserSecret, FaBars } from 'react-icons/fa';
import { HiX } from "react-icons/hi";

import './style.scss'

const data = [
    {
        label: "HOME",
        to: '/'
    },
    {
        label: "ABOUT ME",
        to: '/about'
    },
    {
        label: "MY SKILLS",
        to: '/skills'
    },
    {
        label: "RESUME",
        to: '/resume'
    },
    {
        label: "CONTACT",
        to: '/contact'
    },
]

export default function NavBar({handleChange}) {
    const [buttonValue, setButtonValue] = useState(false);
const closeNavBar = ()=>{
    console.log(buttonValue);
    setButtonValue(!buttonValue);
    handleChange()
}

    const handleToggleIcon = () => {
        setButtonValue(!buttonValue);
        handleChange()
      };

    return (
        <>
            <nav className="navbar">
                <div className="navbar__container">
                    <Link to='/' className="navbar__container__logo">
                        <FaUserSecret size={35}></FaUserSecret>
                    </Link>
                </div>

                <ul className={`navbar__container__menu ${buttonValue ? "active" : ""}`}>
                    {data.map((item, index) => {
                        return (
                            <li key={index} className="navbar__container__menu__item">
                                <Link onClick={closeNavBar} to={item.to} className="navbar__container__menu__item__links">
                                    {item.label}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
                <div className="nav-icon">
                    <span onClick={handleToggleIcon}>
                        {buttonValue ? <HiX size={35} /> : <FaBars size={35} />}
                    </span>
                </div>
            </nav>
        </>
    )
}