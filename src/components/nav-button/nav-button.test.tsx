import React from "react"
import { fireEvent, getByText, render } from "@testing-library/react"
import NavButton from "./nav-button"

test("should start on click function when nav button is pressed", () => {
    const mock = jest.fn()
    const value = "test"

    render(<NavButton value={value} onCLick={mock}/>)
    fireEvent.click(getByText(document.body, value))
    expect(mock).toHaveBeenCalled();
})