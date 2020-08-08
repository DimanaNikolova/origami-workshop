import React, { Component } from 'react'
import './Footer.css'
import Link from '../shared/Link/Link'
import UserContext from '../Context'

class Footer extends Component {
    static contextType = UserContext
    render() {
        const { loggedIn, user } = this.context
        if (user) {
            return <footer className="Footer">
                <ul>
                    <Link url="/share">Share your thoughts</Link>
                    <Link url="/publications">Publications</Link>
                    <Link url={`/profile/${user.userId}`}>Profile</Link>
                    <Link url="#"> <img className="logo" src="blue-origami-bird.png" alt="logo" /></Link>
                </ul>
                <p>This is my footer </p>

            </footer>
        } else {
            return <footer className="Footer">
                <ul>
                    <Link url="/register">Register</Link>
                    <Link url="/login">Login</Link>
                    <Link url="#"> <img className="logo" src="blue-origami-bird.png" alt="logo" /></Link>
                </ul>
                <p>This is my footer </p>
            </footer>
        }

    }
}

export default Footer