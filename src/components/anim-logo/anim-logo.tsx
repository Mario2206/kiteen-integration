import React, { useEffect, useRef } from 'react';
import "./anim-logo.css"

export default function AnimLogo ({value} : {value : string}) {

    const animateRefEnter = useRef(null)
    const animateRefEnd = useRef(null)

    function onHoverEnter (event : any) {
        
        
        if(animateRefEnter) {
             const currentEnter : any= animateRefEnter.current
             currentEnter.beginElement();
        }     
    }

    function onHoverOut (e : any) {
        console.log(e.target);
        
        if(animateRefEnd) {
            const current : any = animateRefEnd.current
            current.beginElement()
        }
    }

    return (
        <div className="anim-logo" onMouseEnter={onHoverEnter} onMouseOut={onHoverOut}>
            <svg id="Logo" xmlns="http://www.w3.org/2000/svg" width="86.569" height="56.569" viewBox="0 0 56.569 56.569">
                <path id="Logo-2" data-name="Logo" d=" M-1269.909,728H-1286V711.909h10.909V688H-1246V717.09h-23.909V728Zm-5.182-16.091v5.182h5.182v-5.182Z" transform="translate(1424.113 422.85) rotate(45)" fill="#2f3245">
                    <animate
                    ref={animateRefEnter}
                    dur="0.2s"
                    attributeName="d"
                    values="
                    M-1269.909,728H-1286V711.909h10.909V688H-1246V717.09h-23.909V728Zm-5.182-16.091v5.182h5.182v-5.182Z;
                    M-1262.909,735H-1293V704.909h23.909V694H-1252v17.09h-10.909V735Zm-6.182-30.091v6.182h6.182v-6.182Z
                    "
                    fill="freeze"
                    />  
                    <animate
                    ref={animateRefEnd}
                    dur="0.2s"
                    attributeName="d"
                    values="
                    M-1262.909,735H-1293V704.909h23.909V694H-1252v17.09h-10.909V735Zm-6.182-30.091v6.182h6.182v-6.182Z;
                    M-1269.909,728H-1286V711.909h10.909V688H-1246V717.09h-23.909V728Zm-5.182-16.091v5.182h5.182v-5.182Z
                    "
                    fill="freeze"
                    />  
                </path>
                <span className="anim-logo--text">{value}</span>         
            </svg>
        </div>
    )
}