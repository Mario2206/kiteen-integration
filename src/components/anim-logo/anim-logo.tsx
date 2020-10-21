import React, { useCallback, useRef, useState } from 'react';
import { useAnim } from '../../hooks/use-anim/use-anim';
import {CSSTransition} from "react-transition-group"
import "./anim-logo.css"

function AnimLogoComponent ({value, className} : {value : string, className? : string}) {

    const animateRefEnter = useRef<any>(null)
    const animateRefEnd = useRef<any>(null)
    const buttonRef = useRef<HTMLDivElement>(null)
    const textRef = useRef<HTMLElement>(null)
    const animDuration = 1

    const [anim, setAnim] = useAnim("")
    const [text, setText] = useState("")
    const [active, setActiveState] = useState(false)

    const onHoverEnter = useCallback(() => {    

        const currentEnter= animateRefEnter.current
        const currentOut = animateRefEnd.current

        if(currentEnter && currentOut) {
            if(active) {
                setAnim(`moveBack ${animDuration}s forwards`)
                currentOut.beginElement()
                setText("")
            }
            else
            {
                setAnim(`moveLeft ${animDuration}s forwards`)
                currentEnter.beginElement()
                setText(value)
            }
            setActiveState(state=>!state)
        }  
    }, [active])

    return (
        <div className={`anim-logo ${className ?? ""}`} onMouseEnter={onHoverEnter} ref={buttonRef}>
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
                <CSSTransition 
                nodeRef={textRef}
                in={active} 
                timeout={animDuration * 4000} 
                unmountOnExit
                className="anim-logo-transition" 
                classNames="anim-logo-transition">
                    <span className="anim-logo--text" ref={textRef}>{value}</span> 
                </CSSTransition>
                
            </span>
        </div>
    )
}

const AnimLogo = React.memo(AnimLogoComponent)

export default AnimLogo