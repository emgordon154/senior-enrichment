import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => (
  <nav>
      <Link to="/student" className="navlink">Students</Link>
      <Link to="/campus" className="navlink">Campuses</Link>
      <Link to="/" className="navlink">About</Link>
  </nav>
)

export default Navbar
