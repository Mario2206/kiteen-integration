import { renderHook, act } from '@testing-library/react-hooks'
import {useAnim} from "./use-anim"

test("It should return the anim state value and a setter at beginning", ()=>{
    const { result } = renderHook(()=>useAnim())
    expect(result.current[0]).not.toBeNull()
    expect(result.current[1]).not.toBeNull()
})

test("It should return a new anim state value when the setter is called", ()=>{
    const newAnim = "pop 2s"
    const { result } = renderHook(()=>useAnim())

    act(()=> {
        result.current[1](newAnim)
    })
    expect(result.current[0].animation).toBe(newAnim)
})