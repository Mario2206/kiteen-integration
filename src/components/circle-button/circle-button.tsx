import React, { ReactChild, useRef, useEffect, useState } from 'react';
import "./circle-button.css"

interface IECircleButtonProps {
    children : ReactChild, 
    className : string, 
    width : string // unit %
}

export default  function CircleButton ({children, className, width} : {children : ReactChild, className : string, width : string}) {

    const buttonRef = useRef<HTMLButtonElement>(null)
    const [height, setHeight] = useState(0)

    function adjustHeight () {
        const button = buttonRef.current

        if (button) {
            const buttonWidth = button.getBoundingClientRect().width
            setHeight(buttonWidth)
        }
    }

    useEffect(()=> {
        adjustHeight()
    }, [width])

    useEffect(()=>{
        window.addEventListener("resize", adjustHeight)
        
        return ()=>window.removeEventListener("resize", adjustHeight)
    }, [buttonRef])

    return (
        <button className={`circle-button ${className ?? ""}`} ref={buttonRef} style={{width : width, height : height + "px"}}>
            <span className="circle-button--child">
                <span className="circle-button--border"></span>
                {children}
            </span>
            
        </button>
    )
} 