import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import "./GeneralEntry.css"
export const GeneralEntry = ({show,handleClose,amount}) => {
const [generalEntryData, setgeneralEntryData] = useState({
  name:"",
  identifier:"",
  transactionType:"",
  amount:""
})

const handleChange = (e) => {
  setgeneralEntryData({
    ...generalEntryData,
    [e.target.name]:e.target.value,
    
  })
}

const handleSubmit = (e) => {
  e.preventDefault()
  console.log(generalEntryData)
}



  return (
    <Modal show={show} onHide={handleClose}  >
      <Modal.Header>
        <h2>
        GeneralEntry apart from khata

        </h2>
      </Modal.Header>
      <Modal.Body>
      <Form onChange={handleChange} onSubmit={handleSubmit} className='general-entry-form'  >
        <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control type='text' name='name' />
        </Form.Group>
        <Form.Group>
        <Form.Label>Identifier</Form.Label>
        <Form.Control placeholder='some identification to remember this transaction' type='text' name='identifier' />
        </Form.Group>
        <Form.Group>
        <Form.Label>Transaction Type</Form.Label>
        <Form.Check type='radio' value="cashIn" label="cash in" name='transactionType' />
        <Form.Check type='radio' value="cashOut" label="cash out" name='transactionType' />
        </Form.Group>
        <Form.Group>
        <Form.Label>Amount</Form.Label>
        <Form.Control type='text' name='amount' />
        </Form.Group>
        <Button type='submit'  >Save</Button>
      </Form>
      </Modal.Body>
      <Modal.Footer>
        <p>
       This is a general entry. That you might need to keep in mind
       for future refrences  
        </p>
      </Modal.Footer>
    </Modal>
  )
}
