import React from 'react';
import './HomePage.css';
import Posts from '../../Posts/Posts'
import Main from '../../Main/Main'
import UserContext from '../../Context'

class HomePage extends React.Component {
  static contextType = UserContext

  render(){
    return (
          <Main>
            <Posts  />
          </Main>   
    );

  }
}

export default HomePage;
