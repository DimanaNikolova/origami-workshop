import React from 'react'
import './Aside.css'
import Link from '../shared/Link/Link'
import UserContext from '../Context'

class Aside extends React.Component {
    static contextType = UserContext
    render() {
        const { loggedIn, user } = this.context
        if (user) {

            return <aside className="Aside">
                <ul>
                    <Link url="/share">Share your thoughts</Link>
                    <Link url="/publications">Publications</Link>
                    <Link url={`/profile/${user.userId}`}>Profile</Link>

                </ul>
            </aside>
        } else {
            return <aside className="Aside">
                <ul>
                    <Link url="/register">Register</Link>
                    <Link url="/login">Login</Link>

                </ul>
            </aside>
        }

    }
}

export default Aside