import { useState } from "react";

export function useAnim (anim = "") :[{animation : string}, (anim : string)=>void] {

    const [animState, setAnimState] = useState<{animation : string}>({animation :anim})

    const updateAnim = (newAnim : string) => {
        setAnimState({animation : newAnim})
    }

    return [
        animState,
        updateAnim
    ]
}