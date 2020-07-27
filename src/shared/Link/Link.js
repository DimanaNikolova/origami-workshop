import React from 'react'
import './Link.css'
import { Link } from 'react-router-dom'

function LinkComponent({ children, url }) {

  return <li className="listItem">
    <Link to={url}>
      {children}
    </Link>
  </li>

}

export default LinkComponent