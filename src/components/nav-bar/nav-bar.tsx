import React, { useState } from 'react';
import BurgerButton from '../burger-button/burger-button';
import NavButton from '../nav-button/nav-button';
import "./nav-bar.css"

export default function NavBar () {

    const [toggleNav, setToggleNav] = useState(true)
    
    const buttonValues = ["Home", "Review","Approach"]

    return (
        <nav className="nav-bar">
            {
                toggleNav &&
                (
                   buttonValues.map((item : string)=>(<NavButton value={item.toUpperCase()}/>)) 
                ) 
            }
            <div className="nav-bar--container-burger">
                 <BurgerButton/>
            </div>
           
        </nav>
    )
}