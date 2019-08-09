import React from "react"
import ReactDOM from "react-dom"
import UserForm from "./UserForm"
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
})
