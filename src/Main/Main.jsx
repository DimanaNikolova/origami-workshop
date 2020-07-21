import React from 'react'
import  './Main.css'
import Link from '../shared/Link/Link'

function Main({children, title}) {

    return <div className="Main">
        {children}
    </div>
}

export default Main