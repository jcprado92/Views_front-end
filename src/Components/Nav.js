import React from 'react'
import { Link } from "react-router-dom"
import "../styles/stylin.css"

function Nav() {
  return (
    <div className='Nav'>
        <Link to="/">Views</Link>
        <Link to="/pics">My Views</Link>
        <Link to="/pics/new">Add New View</Link>
    </div>
  )
}

export default Nav