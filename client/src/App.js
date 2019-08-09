import React from "react"
import FormikRegistrationForm from "./components/Form"
import "./App.css"
import styled from "styled-components"

const Heading = styled.h2`
  background: darkorchid;
  font-size: 4rem;
  color: white;
`
class App extends React.Component {
  constructor() {
    super()
    this.state = null
  }

  componentDidMount() {
    console.log("Something must go here")
  }

  render() {
    return (
      <div className="App">
        <h2>REGISTRATION STARTS HERE!</h2>
        <FormikRegistrationForm />
      </div>
    )
  }
}

export default App
