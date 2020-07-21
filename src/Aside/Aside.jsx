import React from 'react'
import  './Aside.css'
import Link from '../shared/Link/Link'

function Aside() {

    return <aside className="Aside">
        <ul>
        <Link url="#">Aside 1</Link>
        <Link url="#">Aside 3</Link>
        <Link url="#">Aside 3</Link>

        </ul>
    </aside>
}

export default Aside