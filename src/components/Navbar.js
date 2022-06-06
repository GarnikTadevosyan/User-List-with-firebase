import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
      <div className='links_container'>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/users-list'>User List</Link></li>
            <>

            </>
        </ul>
      </div>
    </div>
  )
}

export default Navbar