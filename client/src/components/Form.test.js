import React from "react"
import ReactDOM from "react-dom"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import "@testing-library/react/cleanup-after-each"
import RegistrationForm from "./Form"

describe("<RegistrationForm />", () => {
  it("renders without crashing", () => {
    render(<RegistrationForm />)
  })

  // it("renders submit button", () => {
  //   const { container } = render(<RegistrationForm />)
  //   const Button = getByTestId(container, "error")
  //   fireEvent.click(Button)
  // })
})
