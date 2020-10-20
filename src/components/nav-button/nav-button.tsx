import * as React from 'react';
import "./nav-button.css"

export default function NavButton ({value, onCLick} : {value : string, onCLick ? : ()=>void}) {
    
    return (
        <button className="nav-button" onClick={onCLick}>
            {value}
        </button>
    )
}