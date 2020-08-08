import React from 'react'
import './Link.css'
import { Link } from 'react-router-dom'

function LinkComponent({ children, url, onClick }) {

  return <li className="listItem">
    <Link onClick={onClick} to={url}>
      {children}
    </Link>
  </li>

}

export default LinkComponent