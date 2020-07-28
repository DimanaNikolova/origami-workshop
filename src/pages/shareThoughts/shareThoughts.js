import React, { Component } from 'react'
import Main from '../../Main/Main'
import './shareThoughts.css';
import Posts from '../../Posts/Posts'

const shareThoughtsPage = () => {

    return (

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

    );

}

export default shareThoughtsPage

