import React from 'react';
import './explore-button.css'

export default function ExploreButton ({className} : {className? : string}) {

    return (
        <button className={`explore-button  ${className ?? ""}`}>
            <span className={`explore-button--text`}>EXPLORE</span>
        </button>
    )
}