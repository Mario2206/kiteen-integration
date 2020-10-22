import React, { CSSProperties } from "react"
import "./burger-button.css"

interface IEBurgerButtonProps {
    onCLick? : ()=>void, 
    style? : CSSProperties, 
    active : boolean
}

export default function BurgerButton ({onCLick, style, active} : IEBurgerButtonProps) {

    return (
        <button 
        onClick={onCLick} 
        style={style}  
        className={`burger-button ${active ? "burger-button_cross" : ""}`}
        data-testid="burger-button"
        ></button>
    )
}