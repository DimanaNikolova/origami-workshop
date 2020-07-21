import React from 'react'
import './Footer.css'
import Link from '../shared/Link/Link'

function Footer() {

    return <footer className="Footer">
        <ul>
            <Link url="/share">Share your thoughts</Link>
            <Link url="/publications">Publications</Link>
            <Link url="/post">Post</Link>
            <Link url="/register">Register</Link>
            <Link url="/login">Login</Link>
            <Link url="/profile/:userId">Profile</Link>
            <Link url="#"> <img className="logo" src="blue-origami-bird.png" alt="logo" /></Link>
        </ul>
        <p>This is my footer </p>

    </footer>
}

export default Footer