import React from 'react'
import  './Navigation.css'
import Link from '../shared/Link/Link'

function Navigation() {

    return <nav className="Navigation">
        <ul>
         <img className="logo"src="white-origami-bird.png" alt="logo"/>
        <Link url="#">Link 1</Link>
        <Link>Link 3</Link>

        </ul>
    </nav>
}

export default Navigation