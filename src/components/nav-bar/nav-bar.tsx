import React, { useCallback, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
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
            
            <div className="nav-bar--container-items">
             
                <CSSTransition timeout={1500} in={navState} unmountOnExit classNames="nav-bar--nav-button">
                    <div>
                        <NavButton value={buttonValues[0].toUpperCase()} />
                    </div>                       
                </CSSTransition>                          

                <CSSTransition timeout={1500} in={navState} unmountOnExit classNames="nav-bar--nav-button">
                    <div>
                        <NavButton value={buttonValues[1].toUpperCase()} />
                    </div>                       
                </CSSTransition>   
                <CSSTransition timeout={1500} in={navState} unmountOnExit classNames="nav-bar--nav-button">
                    <div>
                        <NavButton value={buttonValues[2].toUpperCase()} />
                    </div>                       
                </CSSTransition>   
            </div>
            <div className="nav-bar--container-burger">
                 <BurgerButton onCLick={toggleNav}/>
            </div>
           
        </nav>
    )
}