import React, { useCallback, useState } from 'react';
import BurgerButton from '../burger-button/burger-button';
import NavButton from '../nav-button/nav-button';
import "./nav-bar.css"

export default function NavBar () {

    const [navState, setNavState] = useState(true)

    const buttonValues = ["Home", "Review","Approach"]

    const toggleNav = useCallback(()=>{
        setNavState(state => !state)
    }, [])

    return (
        <nav className="nav-bar">
            {
                 navState && (
                    <div className="nav-bar--container-items">
                        <div>
                            <NavButton value={buttonValues[0].toUpperCase()} />
                        </div>
                        <div>
                            <NavButton value={buttonValues[1].toUpperCase()} />
                        </div>
                        <div>
                            <NavButton value={buttonValues[2].toUpperCase()} />
                        </div>
                    </div>
                 )
                 
            }
            <div className="nav-bar--container-burger">
                 <BurgerButton onCLick={toggleNav}/>
            </div>
           
        </nav>
    )
}