import React from 'react'
import { AdminLayout } from '../../components/adminDashboardLayout/AdminLayout'
import { Navigate } from 'react-router-dom'

export const Dashboard = () => {
  return (
    <AdminLayout>
        <Navigate to="/123/allkhata"  />
    </AdminLayout>
  )
}
