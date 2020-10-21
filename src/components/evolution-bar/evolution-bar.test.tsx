import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import EvolutionBar from './evolution-bar';

describe("evolution-bar", ()=> {
    
    test("When evolution === 0.3, the evolution bar must have a transform property of scaleX(0.3)", ()=> {
        const evolution = 0.3
        const expected = "scaleX(" + evolution + ")"
        render(<EvolutionBar evolution={evolution}/>)
        const element = screen.getByTestId("evolution-bar--bar")
        expect(element.style.transform).toBe(expected)
    })
    
    test("When evolution > 1, the evolution bar must not render", ()=> {
        const evolution = 1.1
        console.error = ()=>{};
        try {
            render(<EvolutionBar evolution={evolution}/>)
        }
        catch (e) {
            expect(e).not.toBeNull()
        }
        
    })

    test("It should start next function prop when next button is pressed", ()=> {

        const nextMock = jest.fn()
        const backMock = jest.fn()

        render(<EvolutionBar next={nextMock} back={backMock} evolution={0} />)

        fireEvent.click(screen.getByText("NEXT"))
        fireEvent.click(screen.getByText("PREV"))

        expect(nextMock).toHaveBeenCalled()
        expect(backMock).toHaveBeenCalled()
    })

})