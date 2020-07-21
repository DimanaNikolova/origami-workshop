import React from 'react'
import './Aside.css'
import Link from '../shared/Link/Link'

function Aside() {

    return <aside className="Aside">
        <ul>
            <Link url="/share">Share your thoughts</Link>
            <Link url="/publications">Publications</Link>
            <Link url="/post">Post</Link>
            <Link url="/register">Register</Link>
            <Link url="/login">Login</Link>
            <Link url="/profile/:userId">Profile</Link>

        </ul>
    </aside>
}

export default Aside