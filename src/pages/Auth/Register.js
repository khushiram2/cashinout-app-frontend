import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import "./Register.css"
import { Link } from 'react-router-dom'
export const Register = () => {
const [formData, setformData] = useState({
    name:"",
    email:"",
    phone:"",
    password:"",
    confirmPassword:"",
    adminStatus:false
})

function handleChange(event) {
    const {name,value}=event.target
    setformData({
        ...formData,
        [name]:value
       
    })
}

function handleSubmit(e) {
        e.preventDefault()

    console.log(formData)
}

  return (
    <Container>

    <Form onChange={handleChange} onSubmit={handleSubmit}  >
        <Form.Group>
        <Form.Label>name</Form.Label>
        <Form.Control name='name' type='text' placeholder='Enter Name'   />
        </Form.Group>
        <Form.Group>
        <Form.Label>email</Form.Label>
        <Form.Control name='email' type='email' placeholder='Enter E-mail'   />
        </Form.Group>
        <Form.Group>
        <Form.Label>Phone</Form.Label>
        <Form.Control name='phone' type='Phone' placeholder='Enter Phone number'   />
        </Form.Group>
        <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control name='password' type='Password' placeholder='Enter Password'   />
        </Form.Group>
        <Form.Group>
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control name='confirmPassword' type='Password' placeholder='confirm Password'   />
        </Form.Group>
        <Form.Group  className='check-box-group' >
        <Form.Check type='radio' value={true} label="Register as Admin user" name='adminStatus'  />
        <Form.Check type='radio' value={false} label="Register as single user" name='adminStatus'  />       
        </Form.Group>
        <Button type='submit'>Register </Button>

    </Form>
    <div className='d-flex'>
    <p>already have an accout? </p> &nbsp; <Link to="/login"  >Login </Link> 
    </div>
    </Container>
  )
}
