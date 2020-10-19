import React, { useCallback, useEffect, useRef, useState } from 'react';
import {useSpring, animated, config} from "react-spring"
import "./anim-logo.css"
import { Spring } from 'react-spring/renderprops';

export default function AnimLogo ({value} : {value : string}) {

    const [currentPath, setCurrentPath] = useState(0)
    const paths = [
        "M11.38,39.66,0,28.28,11.38,16.91l7.71,7.71L36,7.71,56.57,28.28,36,48.85,19.09,32Zm7.71-15-3.66,3.66L19.09,32l3.67-3.67Z",
        "M45.19,16.91,56.57,28.28,45.19,39.66,37.48,32,20.57,48.85,0,28.28,20.57,7.71,37.48,24.62ZM37.48,32l3.66-3.67-3.66-3.66-3.67,3.66Z"
    ]

    const [props, set] = useSpring(()=>({path : paths[0]}))

    return (
        <div className="anim-logo" onClick={()=>set({path : paths[1]})}>  
            <svg width="57.983" height="57.983" viewBox="0 0 57.983 57.983">
                <Spring reset native from={{ t: 0 }} to={{ t: 1 }}>
                    {({t} : {t : any})=><animated.path fill="#2f3245" d={props.path} />}
                </Spring>
                
            </svg>
        </div>
    )
}