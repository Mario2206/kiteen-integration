import React from 'react';
import ExploreButton from '../explore-button/explore-button';

import "./dynamic-view.css"

interface IEDynamicView {
    title : string, 
    description : string, 
    img : string, 
    color : string,
    className? : string
}

export default function DynamicView ({className, title, description, img, color} : IEDynamicView) {

    return (
        <section className={`dynamic-view ${className ?? ""}`} style={{backgroundColor : color}}>           
            <div className="dynamic-view--container-text">
                <h1 className="dynamic-view--main-title">{title}</h1>
                <p className="dynamic-view--description">
                    {description}
                </p>
                <ExploreButton className="dynamic-view--explore-button" />
            </div>   
            <img src={img} alt="photo" className="miniature"/>                          
        </section>       
    )
}