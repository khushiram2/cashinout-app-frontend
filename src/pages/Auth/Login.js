import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import "./Register.css"
import { Link } from 'react-router-dom'
export const Login = () => {
const [formData, setformData] = React.useState({
    email:"",
    password:""
})

function handleChange(params) {
    setformData({
        [params.target.name]:params.target.value
    })
}
function handleSubmit() {
    console.log(formData)
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
