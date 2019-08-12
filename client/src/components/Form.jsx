import React, { useState, useEffect } from "react"
import { Form, Field, withFormik } from "formik"
import * as Yup from "yup"
import axios from "axios"
import styled from "styled-components"

const UserName = styled.label`
  display: flex;
  justify-content: center;
  font-size: 1.2rem;
  margin: 10px;
`
const Password = styled.label`
  display: flex;
  justify-content: center;
  font-size: 1rem;
  margin: 10px;
`

const Button = styled.button`
  border-radius: 5px;
  color: teal;
  padding: 5px;
  margin: 3px;
`
const RegistrationForm = ({
  touched,
  errors,
  status,
  values,
  handleSubmit
}) => {
  const [register, setRegister] = useState([])

  useEffect(() => {
    if (status) {
      setRegister([...register, status])
    }
  }, [status])

  useEffect(() => {
    axios.get("http://localhost:5000/api/restricted/data").then(response => {
      setRegister(response.data)
      console.log("it worked", response.data)
    })
  }, [])

  return (
    <div>
      <Form>
        <UserName>
          Username:
          <Field type="text" name="username" placeholder="Username" />
          {touched.username && errors.username && (
            <p className="error"> {errors.username}</p>
          )}
        </UserName>
        <Password>
          Password:
          <Field type="password" name="password" placeholder="Password" />
          {touched.password && errors.password && (
            <p className="error">{errors.password}</p>
          )}
        </Password>
        <Button type="submit">Submit</Button>

        {register.map(user => (
          <p key={user.id}>{user.name} </p>
        ))}
      </Form>
    </div>
  )
}

const FormikRegistrationForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    }
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required("You must enter a username to register"),
    password: Yup.string()
      .min("8")
      .required("EH HEM... aren't you forgetting to lock up?")
  }),

  handleSubmit(values, { setStatus, resetForm }) {
    axios
      .post("http://localhost:5000/api/register", values)
      .then(response => {
        console.log("post api response", response)
        setStatus(response.data)
        console.log("current user", values)
        resetForm()
      })
      .catch(error => console.log(error.response))
  }
})(RegistrationForm)

export default FormikRegistrationForm
