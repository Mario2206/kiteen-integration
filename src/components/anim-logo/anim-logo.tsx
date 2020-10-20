import React, { useCallback, useRef, useState } from 'react';
import { useAnim } from '../../hooks/use-anim/use-anim';
import {CSSTransition} from "react-transition-group"
import "./anim-logo.css"

function AnimLogo ({value} : {value : string}) {

    const animateRefEnter = useRef<any>(null)
    const animateRefEnd = useRef<any>(null)
    const buttonRef = useRef<HTMLDivElement>(null)
    const animDuration = 1

    const [anim, setAnim] = useAnim("")
    const [text, setText] = useState("")

    const onHoverEnter = useCallback(() => {     
        const currentEnter= animateRefEnter.current
        if(currentEnter) {
            setAnim(`moveLeft ${animDuration}s forwards`)
            setText(value)
            currentEnter.beginElement();
        }  
    }, [])

    const onHoverOut = useCallback((event : any) => { 

        const button  = buttonRef.current
        const current = animateRefEnd.current

        if( button && current) {
            if(event.relatedTarget!== (button.parentNode || null)) return
            setAnim(`moveBack ${animDuration}s forwards`)
            setText("")
            current.beginElement()
        }      
    }, [])

    return (
        <div className="anim-logo" onMouseEnter={onHoverEnter} onMouseOut={onHoverOut} ref={buttonRef}>
            <span className="anim-logo--container"  style={anim}>
                <svg
                width="86.569" 
                height="56.569" 
                viewBox="0 0 56.569 56.569" 
                className="anim-logo--picture"
                >
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
                        begin="indefinite"
                        />  
                        <animate
                        ref={animateRefEnd}
                        dur="0.2s"
                        attributeName="d"
                        values="
                        M-1262.909,735H-1293V704.909h23.909V694H-1252v17.09h-10.909V735Zm-6.182-30.091v6.182h6.182v-6.182Z;
                        M-1269.909,728H-1286V711.909h10.909V688H-1246V717.09h-23.909V728Zm-5.182-16.091v5.182h5.182v-5.182Z
                        "
                        begin="indefinite"
                        fill="freeze"
                        />  
                    </path>        
                </svg>  
                <CSSTransition in={text ? true : false} timeout={animDuration * 1000} className="anim-logo-transition" classNames="anim-logo-transition">
                    <span className="anim-logo--text">{text}</span> 
                </CSSTransition>
                
            </span>
        </div>
    )
}

const AnimLogoMemo = React.memo(AnimLogo)

export default AnimLogoMemo