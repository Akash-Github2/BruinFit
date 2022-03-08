import React, { useEffect, useState } from "react";
import { MenuItems } from "./MenuItems"
import './Navbar.css'
import { useNavigate } from "react-router-dom";
import { logout } from "./../../firebase";

function Navbar() {
    const [clicked, clickButton] = useState(false);
    const navigate = useNavigate();

    return (
        <nav className="NavbarItems">
            <h1 className="navbar-logo">BruinFit</h1>
            <div className="menu-icon" onClick ={(e)=>clickButton(!clicked)}>
                <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>

            </div>
            <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                {MenuItems.map((item, index) => { 
                    return (
                    <li key ={index}>
                        <a className={item.cnName} href ={item.url}>
                        {item.title}
                        </a>
                    </li> 
                )
                    })}
                    <button onClick={(e) => {
                        e.preventDefault();
                        logout();
                        navigate("/");
                        }} >
                            Logout
                    </button>
            </ul>
        </nav>
    )
}
export default Navbar

