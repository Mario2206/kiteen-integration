import React from 'react';
import AnimLogo from '../anim-logo/anim-logo';
import EvolutionBar from '../evolution-bar/evolution-bar';
import ExploreButton from '../explore-button/explore-button';
import NavBar from '../nav-bar/nav-bar';

import "./dynamic-view.css"

export default function DynamicView () {

    return (
        <section className="dynamic-view">
            <div className="dynamic-view--text-part">
                <AnimLogo value="KITTEN" className="dynamic-view--anim-logo"/>
                <div className="dynamic-view--container-miniature">
                    <img src={require("../../assets/img/img1.png")} alt="photo" className="miniature"/>
                </div>                
                <div className="dynamic-view--container-text">
                    <h1 className="dynamic-view--main-title">Ornate Style</h1>
                    <p className="dynamic-view--description">
                        Phasellus finibus enim nulla, quis ornare odio facilisis eu. Suspendisse ornare ante 
                        sit amet arcu semper, vel eleifend tortor egestas 
                    </p>
                    <ExploreButton className="dynamic-view--explore-button" />
                </div>             
            </div> 
            <div className="dynamic-view--picture-part">
                <div className="dynamic-view--container-nav">
                    <NavBar/> 
                </div>  
                <div className="dynamic-view--evolution-bar-container">
                    <EvolutionBar />    
                </div>           
            </div>     
        </section>       
    )
}