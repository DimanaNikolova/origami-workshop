import React from 'react';
import './HomePage.css';
import Navigation from '../../Navigation/Navigation'
import Aside from '../../Aside/Aside'
import Posts from '../../Posts/Posts'
import Main from '../../Main/Main'
import Footer from '../../Footer/Footer'

function HomePage() {
  return (
    <div className="App">
      <div className='Container'>
      <Navigation />
          <Aside />
        <Main>
          <Posts  />
        </Main>
      <Footer />
      </div>
    </div>
  );
}

export default HomePage;
