import React from 'react'
import { AdminLayout } from '../../../components/adminDashboardLayout/AdminLayout'
import { Button, Container } from 'react-bootstrap'
import "./AllKhata.css"
export const AllKhata = () => {
  return (
    <AdminLayout>
    <Container>
        <div>
            <h2>kh123</h2>
        </div>
        <div className='filter-buttons'>
        {/* Buttons for different data */}
        <Button  variant='info'  >All Transactions</Button>
        <Button variant='success'>Paid Transactions</Button>
        <Button variant='danger' >Unpaid Transactions</Button>
      </div>

      <div className='table' >
        {/* Table of customer transactions */}
        <div>
        <h2> All Transactions</h2>
        <Button>view All</Button>
        </div>
        <table>
          <thead>
            <tr >
              <th>Serial Number</th>
              <th>Khata No.</th>
              <th>Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Sample row, you'll map through the transactions */}
            <tr>
              <td>1</td>
              <td>KH123</td>
              <td>2023-01-01</td>
              <td>Paid</td>
              <td>
                {/* Button to pay off the transaction */}
                <Button variant='warning' >Pay Off</Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='total'>
        {/* Row containing total */}
        <h2>Total: $500.00</h2>
      </div>

    </Container>
    </AdminLayout>
  )
}
