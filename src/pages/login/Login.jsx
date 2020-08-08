import React from 'react'
import Main from '../../Main/Main'
import Input from '../../shared/Input/Input'
import './Login.css';
import UserContext from '../../Context';

class LoginPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""
        }
    }

    static contextType = UserContext

    handleChange = (event, type) => {
        const newState = {}
        newState[type] = event.target.value
        this.setState(newState)
    }

    onSubmit = async (event) => {
        event.preventDefault()
        const { username, password } = this.state

        try {
            const promise = await fetch(`http://localhost:9999/api/user/login`, {
                method: "POST",
                body: JSON.stringify({
                    username,
                    password
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const authToken = promise.headers.get('Authorization')
            document.cookie = `x-auth-token=${authToken}`
            const response = await promise.json()

            if (response.username && authToken) {
                const user = {
                    username: response.username,
                    userId: response._id
                }
                this.context.logIn(user)
                this.props.history.push('/')
            }

        } catch (e) {
            console.log(e);
        }

    }

    render() {
        const { username, password } = this.state
        return (
            <Main>
                <div className="Login">
                    <h1>Login Page</h1>
                    <form onSubmit={this.onSubmit}>
                        <Input
                            value={username}
                            onChange={(e) => this.handleChange(e, 'username')}
                            label="Username"
                            id="username"
                        />
                        <Input
                            type="password"
                            value={password}
                            label="Password"
                            id="password"
                            onChange={(e) => this.handleChange(e, 'password')}
                        />
                        <div className="form-control">
                            <button type="submit"> Login </button>
                        </div>
                    </form>
                </div>
            </Main>
        );

    }

}

export default LoginPage

