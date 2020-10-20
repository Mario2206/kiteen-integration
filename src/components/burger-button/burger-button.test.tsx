import { fireEvent, getByTestId, render, screen } from '@testing-library/react';
import React from 'react';
import BurgerButton from "./burger-button"

test("should start on click function when burger button is clicked", ()=> {
    const mock = jest.fn()
    render(<BurgerButton onCLick={mock}/>)
    fireEvent.click(screen.getByTestId("burger-button"))
    expect(mock).toHaveBeenCalled()
})