import React from 'react';
import AnimLogo from '../anim-logo/anim-logo';

import "./dynamic-view.css"

export default function DynamicView () {

    return (
        <section className="dynamic-view">
            <div className="dynamic-view--text-part">
                <AnimLogo value="KITTEN"/>
            </div>        
        </section>       
    )
}