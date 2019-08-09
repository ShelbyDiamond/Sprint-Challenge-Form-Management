import React from "react"
import ReactDOM from "react-dom"
import { render, fireEvent, getByTestId } from "@testing-library/react"
import { getByText } from "@testing-library/dom"
import "@testing-library/jest-dom/extend-expect"
import "@testing-library/react/cleanup-after-each"
import RegistrationForm from "./Form"

describe("<RegistrationForm />", () => {
  it("renders without crashing", () => {
    render(<RegistrationForm />)
  })

  it("renders <h2>REGISTRATION STARTS HERE!</h2>", () => {
    const App = render(<RegistrationForm />)
    App.getByText("REGISTRATION STARTS HERE!")
  })

  it("renders submit button", () => {
    const { container } = render(<RegistrationForm />)
    const Button = getByTestId(container, "error")
    fireEvent.click(Button)
  })
})
