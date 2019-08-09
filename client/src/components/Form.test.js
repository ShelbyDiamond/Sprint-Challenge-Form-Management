import React from "react"
import ReactDOM from "react-dom"
import RegistrationForm from "./Form"
import Button from "./Form"
import { render } from "@testing-library/react"
import "@testing-library/react/cleanup-after-each"

describe("<RegistrationForm />", () => {
  it("renders without crashing", () => {
    render(<RegistrationForm />)
  })

  it("renders <h2>REGISTRATION STARTS HERE!</h2>", () => {
    const App = render(<RegistrationForm />)
    App.getByText("REGISTRATION STARTS HERE!")
  })

  it("renders submit button", () => {
    const button = render(<RegistrationForm />)

    const Button = getByTestId("Button")
    fireEvent.click(Button)
  })
})

describe("Test Button component", () => {
  it("Test click event", () => {
    const mockCallBack = jest.fn()

    const Button = shallow(<Button onClick={mockCallBack}>Ok!</Button>)
    button.find("button").simulate("click")
    expect(mockCallBack.mock.calls.length).toEqual(1)
  })
})
