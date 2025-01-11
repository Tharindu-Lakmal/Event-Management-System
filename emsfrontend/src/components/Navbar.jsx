import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='container navbar'>
        <div className="inner-container">

            <div className="logo">
            <NavLink to='/'><img src="/newlogo.png" alt="" /></NavLink>
            </div>

            <nav>
                <ul className="nav-lists">
                    <NavLink to='/'><li className="list">Events</li></NavLink>
                    <NavLink to='/event-details'><li className="list">Event Details</li></NavLink>
                    <NavLink to='/event-creation'><li className="list">Add</li></NavLink>
                    <NavLink to='/event-update'><li className="list">Update</li></NavLink>
                </ul>
            </nav>

        </div>
    </div>
  )
}

export default Navbar