import React, { useCallback, useRef, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import BurgerButton from '../burger-button/burger-button';
import NavButton from '../nav-button/nav-button';
import "./nav-bar.css"

export default function NavBar () {

    const buttonValues = ["Home", "Review","Approach"]
    const [values, setValues] = useState<Array<string>>([])
    const buttonRefArray = [
        useRef<HTMLDivElement>(null),
        useRef<HTMLDivElement>(null),
        useRef<HTMLDivElement>(null)
    ]

    const toggleNav = useCallback(()=>{
        setValues(state => state.length === 0   ? buttonValues : [])
    }, [setValues, buttonValues])

    return (
        <nav className="nav-bar">
            <TransitionGroup className="nav-bar--container-items">
                {
                    values.map((item, index) => (
                        <CSSTransition 
                        key={index} 
                        timeout={1500} 
                        nodeRef={buttonRefArray[index]} 
                        unmountOnExit 
                        classNames="nav-bar--nav-button"
                        >
                            <div ref={buttonRefArray[index]}>
                                <NavButton value={buttonValues[index].toUpperCase()} />
                            </div>                       
                        </CSSTransition>  
                    ))
                }                                       
            </TransitionGroup>  
            <div className="nav-bar--container-burger">
                 <BurgerButton onCLick={toggleNav} active={values.length > 0}/>
            </div>
           
        </nav>
    )
}