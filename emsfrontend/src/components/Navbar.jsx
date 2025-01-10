import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='container navbar'>
        <div className="inner-container">

            <div className="logo">
                <img src="/logo.png" alt="" />
            </div>

            <nav>
                <ul className="nav-lists">
                    <NavLink to='/'><li className="list">Events</li></NavLink>
                    <NavLink to='/event-details'><li className="list">Event Details</li></NavLink>
                    <NavLink to='/event-creation'><li className="list">Add</li></NavLink>
                    <NavLink to='/event-update'><li className="list">Upload</li></NavLink>
                </ul>
            </nav>

        </div>
    </div>
  )
}

export default Navbar