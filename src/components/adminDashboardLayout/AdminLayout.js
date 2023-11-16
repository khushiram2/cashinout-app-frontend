import React from 'react'
import { Sidebar } from '../sidebar/Sidebar'
import "./Adminlayout.css"
export const AdminLayout = ({children}) => {
  return (
    <div className='d-flex' >
        <Sidebar/>
        <main className='admin-main' >
        {children}
        </main>
    </div>
  )
}
