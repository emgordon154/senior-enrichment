import React from 'react'
import { Link } from 'react-router-dom'


// Sorry for the inline styling,
// but believe me, my CSS file was screaming into the void
// and those links were still underlined :/
// const beautifyPLEASE = {
//   textDecoration: 'none',
//   color: '#203'
// }

// style={beautifyPLEASE}

const Navbar = () => (
  <nav>
      <Link to="/student" className="navlink">
        Students
      </Link>
      <Link to="/campus" className="navlink">
        Campuses
      </Link>
      <Link to="/" className="navlink">
        About
      </Link>
  </nav>
)

export default Navbar
