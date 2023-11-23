import React from 'react'
import "./Header.css"
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <header>
        <div className='navbar'>
          <div className='name-container'>
            <h3>
              Cash in out
            </h3>
          </div>
            <NavLink to="/calculator">Calculator</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Sign up</NavLink>
            <NavLink to="/Profile">Profile</NavLink>       
        </div>
    </header>
  )
}
