import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar () {

    const handleClick = () => {

    };

  return (
    <div className='navbar'>
      <div className='links_container'>
        <ul>
          <li><Link to='/'>Logo</Link></li>
          <li>
              <button
                  className='data_loader'
                  onClick={handleClick}>
                  Load Data
              </button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;