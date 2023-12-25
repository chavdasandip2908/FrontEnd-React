import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Header.css';

export default function Header() {

    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
        setIsToggled(!isToggled);
    };


    return (
        <>
            <nav className="nav">
                <div className={isToggled ? 'container active' : 'container'} id='main'>
                    <button className='navbtn' onClick={handleToggle}>
                        {isToggled ? (
                            <i className="fa-solid fa-xmark fa-2xl"></i>
                        ) : (
                            <i className="fa-solid fa-bars fa-2xl"></i>
                        )}
                    </button>


                    <h1 className="logo"><a href="/index.html">My Website</a></h1>
                    <ul>
                        <li><a href="#" className="current">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
