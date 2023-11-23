import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import "./Register.css"
import { Link } from 'react-router-dom'
import useApi from '../../Customhooks.js/useApiHook'
export const Login = () => {
const [formData, setformData] = React.useState({
    email:"",
    password:""
})
const loginIntance=useApi()

function handleChange(params) {
    setformData({
        [params.target.name]:params.target.value
    })
}
async function handleSubmit() {
    const response = await loginIntance.createData("/auth/login",formData)
    console.log(response.data)
}

    
  return (
    <Container className='login-container' >
    <Form onChange={handleChange} onSubmit={handleSubmit}  >
        <Form.Group>
        <Form.Label>email</Form.Label>
        <Form.Control name='email' type='email' placeholder='Enter E-mail' title='Name'  />
        </Form.Group>
        <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control name='password' type='Password' placeholder='Enter Password' title='Name'  />
        </Form.Group>
        <Button type='submit'>Login </Button>

    </Form>
    <div className='d-flex' >
    <p>already have an accout? </p> &nbsp; <Link to="/register"  >Login </Link> 
    </div>
    </Container>
  )
}
