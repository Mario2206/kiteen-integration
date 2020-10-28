import React, { CSSProperties, useEffect, useMemo, useState } from 'react';
import CircleButton from '../circle-button/circle-button';
import "./evolution-bar.css"

interface IEEvolutionBar {
    evolution : number //number between 0 and 1,
    back? : ()=>void,
    next? : ()=>void
}

export default function EvolutionBar ({evolution, back, next} : IEEvolutionBar) {

    const [transformStyle, setTransformStyle] = useState<CSSProperties>({transform : "scale(0)"})

    const buttonWidth = useMemo(()=> {
        const screenWidth = window.innerWidth
        if(screenWidth <= 650) return 25 
        else return 15

    }, [])

    useEffect(()=>{
        if(evolution > 1 || evolution < 0) throw new Error("evolution prop must be between 0 and 1")
        setTransformStyle({transform : "scaleX(" + evolution + ")"})
    }, [evolution])

    return (
        <nav className="evolution-bar">
            <CircleButton className="evolution-bar--button" width={buttonWidth+"%"} onClick={back}>PREV</CircleButton>
            <div className="evolution-bar--container-bar">
                <span className="evolution-bar--bar" style={transformStyle} data-testid="evolution-bar--bar"></span>
            </div>
            <CircleButton className="evolution-bar--button" width={buttonWidth+"%"}  onClick={next}>NEXT</CircleButton>
        </nav>
    )
}