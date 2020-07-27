import React from 'react'
import './Navigation.css'
import Link from '../shared/Link/Link'

function Navigation() {

    return <nav className="Navigation">
        <ul>
            <img className="logo" src="white-origami-bird.png" alt="logo" />
            <Link url="/publications" >Publications</Link>
            <Link url="/share">Share your thoughts</Link>
            <Link url="/post">Post</Link>
            <Link url="/register">Register</Link>
            <Link url="/login">Login</Link>
            <Link url="/profile/:userId">Profile</Link>

        </ul>
    </nav>
}

export default Navigation