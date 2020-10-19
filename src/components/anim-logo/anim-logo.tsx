import React, { useCallback, useEffect, useRef, useState } from 'react';
import {useSpring, animated, config} from "react-spring"
import "./anim-logo.css"

export default function AnimLogo ({value} : {value : string}) {

    const [enter, setEnter] = useState(false)
    const {x}  = useSpring({config : {duration : 300},x : !enter ? 0 : 1})


    const onHoverEnter = useCallback(()=> {
        setEnter(state=>!state)
    }, [])

    return (
        <div className="anim-logo" onMouseEnter={onHoverEnter}>
            <animated.svg id="Logo" xmlns="http://www.w3.org/2000/svg" width="86.569" height="56.569" viewBox="0 0 56.569 56.569">
                    <animated.path
                    d={x.interpolate({
                        range : [0,1],
                        output : [
                            "M-1269.909,728H-1286V711.909h10.909V688H-1246V717.09h-23.909V728Zm-5.182-16.091v5.182h5.182v-5.182Z",
                            "M-1262.909,735H-1293V704.909h23.909V694H-1252v17.09h-10.909V735Zm-6.182-30.091v6.182h6.182v-6.182Z"
                        ]
                    })}
                    id="Logo-2"
                    data-name="Logo"
                    transform="translate(1424.113 422.85) rotate(45)"
                    fill="#2f3245"
                    // fill="freeze"
                    />  
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="57.983" height="57.983" viewBox="0 0 57.983 57.983">
  <path id="Logo" d="M-1262.909,735H-1293V704.909h23.909V694H-1252v17.09h-10.909V735Zm-6.182-30.091v6.182h6.182v-6.182Z" transform="translate(1434.013 423.557) rotate(45)" fill="#2f3245"/>
</svg> */}

            </animated.svg>
            <animated.svg id="Logo" xmlns="http://www.w3.org/2000/svg" width="86.569" height="56.569" viewBox="0 0 56.569 56.569">
                    <animated.path
                    d={x.interpolate({
                        range : [0,1],
                        output : [
                            "M-1262.909,735H-1293V704.909h23.909V694H-1252v17.09h-10.909V735Zm-6.182-30.091v6.182h6.182v-6.182Z",
                            "M-1269.909,728H-1286V711.909h10.909V688H-1246V717.09h-23.909V728Zm-5.182-16.091v5.182h5.182v-5.182Z"
                        ]
                    })}
                    id="Logo-2"
                    data-name="Logo"
                    transform="translate(1434.013 423.557) rotate(45)"
                    fill="#2f3245"
                    // fill="freeze"
                    />  
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="57.983" height="57.983" viewBox="0 0 57.983 57.983">
  <path id="Logo" d="M-1262.909,735H-1293V704.909h23.909V694H-1252v17.09h-10.909V735Zm-6.182-30.091v6.182h6.182v-6.182Z" transform="translate(1434.013 423.557) rotate(45)" fill="#2f3245"/>
</svg> */}

            </animated.svg>
        </div>
    )
}