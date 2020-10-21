import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import CircleButton from './circle-button';

describe("circle-button", ()=>{

    test("it should start onClick prop function when it's pressed", ()=> {

        const mock = jest.fn()

        render(<CircleButton onClick={mock} width="20%">Test</CircleButton>)

        fireEvent.click(screen.getByTestId("circle-button"))

        expect(mock).toHaveBeenCalled()
    })  

})