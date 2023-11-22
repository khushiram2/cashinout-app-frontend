import React from 'react'
import { AdminLayout } from '../../../components/adminDashboardLayout/AdminLayout'
import { Button, Container, Form } from 'react-bootstrap'

export const NewKhata = () => {
  return (
    <AdminLayout>
       <Container>
        <Form>
            <Form.Group>
            <Form.Label>Name of costumer</Form.Label>
            <Form.Control name="name" type='text' />
            </Form.Group>
            <Form.Group>
            <Form.Label>Email of costumer</Form.Label>
            <Form.Control name="email" type='email' />
            </Form.Group>
            <Form.Group>
            <Form.Label>Phone of costumer</Form.Label>
            <Form.Control name='phone' type='Phome' />
            </Form.Group>
            <Form.Group>
            <Form.Label>Amount</Form.Label>
            <Form.Control name='amount'  type='text' />
            </Form.Group>
            <Button type='submit'>Save Khata</Button>
        </Form>
       </Container>
    </AdminLayout>
  )
}
