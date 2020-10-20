import * as React from 'react';
import "./nav-button.css"

export default function NavButton ({value} : {value : string}) {
    
    return (
        <button className="nav-button">
            {value}
        </button>
    )
}