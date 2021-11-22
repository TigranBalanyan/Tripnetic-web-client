import React from 'react'
import { Router } from 'react-router'
import * as FAIcons from 'react-icons/fa'
import { Link } from 'react-router-dom'


function Navbar() {
    return (
        <>
          <div className="navBar">
              <Link to="#" className='menu-bars'>
                  <FAIcons.FaBars/>
              </Link>
          </div>

        </>
    )
}

export default Navbar
