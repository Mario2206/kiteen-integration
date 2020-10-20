import React from 'react';
import AnimLogo from '../anim-logo/anim-logo';
import NavBar from '../nav-bar/nav-bar';

import "./dynamic-view.css"

export default function DynamicView () {

    return (
        <section className="dynamic-view">
            <div className="dynamic-view--text-part">
                <AnimLogo value="KITTEN"/>
            </div> 
            <div className="dynamic-view--picture-part">
                <NavBar/>  
            </div>     
        </section>       
    )
}