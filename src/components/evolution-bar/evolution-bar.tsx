import React, { CSSProperties, useEffect, useState } from 'react';
import CircleButton from '../circle-button/circle-button';
import "./evolution-bar.css"

interface IEEvolutionBar {
    evolution : number //number between 0 and 1
}

export default function EvolutionBar ({evolution} : IEEvolutionBar) {

    const [transformStyle, setTransformStyle] = useState<CSSProperties>({transform : "scale(0)"})

    useEffect(()=>{
        if(evolution > 1 || evolution < 0) throw new Error("evolution prop must be between 0 and 1")
        setTransformStyle({transform : "scaleX(" + evolution + ")"})
    }, [evolution])

    return (
        <nav className="evolution-bar">
            <CircleButton className="evolution-bar--button" width="15%">PREV</CircleButton>
            <div className="evolution-bar--container-bar">
                <span className="evolution-bar--bar" style={transformStyle}></span>
            </div>
            <CircleButton className="evolution-bar--button" width="15%">NEXT</CircleButton>
        </nav>
    )
}