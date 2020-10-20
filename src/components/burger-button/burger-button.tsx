import React, { CSSProperties } from "react"
import "./burger-button.css"

export default function BurgerButton ({onCLick, style} : {onCLick? : ()=>void, style? : CSSProperties}) {

    return (
        <button onClick={onCLick} style={style}  className="burger-button" data-testid="burger-button"></button>
    )
}