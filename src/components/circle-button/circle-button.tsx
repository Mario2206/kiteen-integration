import React, { ReactChild, useRef, useEffect, useState } from 'react';
import "./circle-button.css"

interface IECircleButtonProps {
    children : ReactChild, 
    className? : string, 
    width : string // unit %,
    onClick? : ()=>void
}

export default  function CircleButton ({children, className, width, onClick} : IECircleButtonProps) {

    const buttonRef = useRef<HTMLDivElement>(null)
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
        <div className={`circle-button ${className ?? ""}`} ref={buttonRef} style={{width : width, height : height + "px"}}>
            <button className="circle-button--child" onClick={onClick} data-testid="circle-button">
                <span className="circle-button--border"></span>
                {children}
            </button>        
        </div>
    )
} 