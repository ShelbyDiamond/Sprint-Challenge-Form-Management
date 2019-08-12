import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import "@testing-library/react/cleanup-after-each"

describe("<App />", () => {
  it("renders <h2>REGISTRATION STARTS HERE!</h2>", () => {
    const app = render(<App />)
    app.getByText("REGISTRATION STARTS HERE!")
  })
})
