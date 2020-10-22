import React, { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import ExploreButton from '../explore-button/explore-button';

import "./dynamic-view.css"

interface IEDynamicView {
    title : string, 
    description : string, 
    img : string, 
    color : string,
    visible : boolean,
    className? : string
}

export default function DynamicView ({className, title, description, img, color, visible} : IEDynamicView) {

    const sectionRef = useRef<HTMLElement>(null)

    return (
        <CSSTransition in={visible} classNames="dynamic-view" timeout={3000} unmountOnExit nodeRef={sectionRef}>
            <section className={`dynamic-view ${className ?? ""}`} ref={sectionRef}>  
                <div className="dynamic-view--background"  style={{backgroundColor : color}}></div>         
                <div className="dynamic-view--container-text">
                    <h1 className="dynamic-view--main-title">{title}</h1>
                    <p className="dynamic-view--description">
                        {description}
                    </p>
                </div>  
                <ExploreButton className="dynamic-view--explore-button" /> 
                <img src={img} alt="photo" className="miniature"/>                          
            </section>       
        </CSSTransition>
      
    )
}