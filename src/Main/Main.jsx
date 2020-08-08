import React from 'react'
import './Main.css'
import Navigation from '../Navigation/Navigation'
import Aside from '../Aside/Aside'
import Footer from '../Footer/Footer'


const Main = (props) => {
    return (
        <div className="App">
        <Navigation />
        <div className='Container'>
          <Aside />
          <div className="Main">
            {props.children}
          </div>
        </div>
        <Footer />
      </div>
    )
  }
export default Main