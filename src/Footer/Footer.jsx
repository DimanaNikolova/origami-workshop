import React from 'react'
import  './Footer.css'
import Link from '../shared/Link/Link'

function Footer() {

    return <footer className="Footer">
        <ul>
        <Link>Going to 2</Link>
        <Link>Going to 2</Link>
        <Link url="#"> <img className="logo"src="blue-origami-bird.png" alt="logo"/></Link>
        </ul>
        <p>This is my footer </p>
        
    </footer>
}

export default Footer