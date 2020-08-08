import React from 'react'
import './Navigation.css'
import Link from '../shared/Link/Link'
import UserContext from '../Context'

class Navigation extends React.Component {
    static contextType = UserContext
    render() {
        const { loggedIn, user } = this.context
        
        if (user) {
            return <nav className="Navigation">
                <ul>
                    <img className="logo" src="white-origami-bird.png" alt="logo" />
                    <Link url="/publications" >Publications</Link>
                    <Link url="/share">Share your thoughts</Link>
                    <Link url={`/profile/${user.userId}`}>Profile</Link>
                    <Link onClick={this.context.logOut} url="/">Logout</Link>

                </ul>
            </nav>

        } else {
            return <nav className="Navigation">
            <ul>
                <img className="logo" src="white-origami-bird.png" alt="logo" />
                <Link url="/register">Register</Link>
                <Link url="/login">Login</Link>

            </ul>
        </nav>
        }
    }

}

export default Navigation