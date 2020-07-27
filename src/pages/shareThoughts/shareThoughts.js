import React, { Component } from 'react'
import Navigation from '../../Navigation/Navigation'
import Aside from '../../Aside/Aside'
import Main from '../../Main/Main'
import Footer from '../../Footer/Footer'
import './shareThoughts.css';
import Posts from '../../Posts/Posts'

const shareThoughtsPage = () => {

    return (
        <div className="App">
            <div className='Container'>
                <Navigation />
                <Aside />
                <Main>
                    <div className="Input">
                        <div>
                            <h1>Share your Thoughts</h1>
                            <textarea></textarea>
                            <button >Post</button>

                        </div>
                        <div>

                            <h2>Last 3 posts on your wall</h2>
                            <Posts length={3} />
                        </div>

                    </div>
                </Main>
                <Footer />
            </div>
        </div>
    );

}

export default shareThoughtsPage

