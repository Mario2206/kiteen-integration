import React from 'react';
import "./evolution-bar.css"
export default function EvolutionBar () {

    return (
        <nav className="evolution-bar">
            <button className="evolution-bar--button">PREV</button>
            <div className="evolution-bar--container-bar">
                <span className="evolution-bar--bar"></span>
            </div>
            <button className="evolution-bar--button">NEXT</button>
        </nav>
    )
}