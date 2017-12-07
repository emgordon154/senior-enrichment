import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => (
  <nav>
    <ul id="navbar-elements">
      <li><Link to="/student">Students</Link></li>
      <li><Link to="/campus">Campuses</Link></li>
    </ul>
  </nav>
)

export default Navbar
