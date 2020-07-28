import React, { Component } from 'react'
import Main from '../../Main/Main'
import './ProfilePage.css';
import Posts from '../../Posts/Posts'

export default class ProfilePage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: null,
            posts: null
        }
    }
    componentDidMount() {
        console.log(this.props.match.params.userId);
        this.getUser(this.props.match.params.userId)
    }

    getUser = (id) => {
        fetch(`http://localhost:9999/api/user?id=${id}`)
            .then(res => {
                if (!res.ok) {
                    this.props.history.push('/error')
                }
                return res.json()
            }).then(user => {
                console.log(user.username)
                this.setState({ username: user.username, posts: user.posts && user.posts.length })
            })
    }

    render() {
        const { username, posts } = this.state

        if (!username) {
            return (
                <Main>
                    <h1>Loading...</h1>
                </Main>

            )
        }

        return (
            <Main>
                <p>Username and posts: {posts}</p>
                <h2>Last 3 posts on your wall</h2>
                <Posts length={3} />
            </Main>
        )
    }
}
