import React from 'react'
import Main from '../../Main/Main'
import Input from '../../shared/Input/Input'
import './register.css';

class RegisterPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            rePassword: ""
        }
    }
    onSubmit = async (event) => {
        event.preventDefault()
        const { username, password } = this.state

        try {

            const promise = await fetch(`http://localhost:9999/user/register`, {
                method: "POST",
                body: JSON.stringify({
                    username,
                    password
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const response = await promise.json()

            this.props.history.push('/login')
         
        } catch (e) {
            console.log(e);
        }

    }
    onChange = (event, type) => {
        const newState = {}
        newState[type] = event.target.value
        this.setState(newState)
    }

    render() {
        const { username, password, rePassword } = this.state
        return (

            <Main>
                <div className="Register">
                    <h1>Register Page</h1>
                    <form onSubmit={this.onSubmit}>
                        <Input
                            value={username}
                            onChange={(e) => this.onChange(e, 'username')}
                            label="Username"
                            id="username"
                        />
                        <Input
                            type="password"
                            value={password}
                            label="Password"
                            id="password"
                            onChange={(e) => this.onChange(e, 'password')}
                        />
                        <Input
                            type="password"
                            value={rePassword}
                            label="RePassword"
                            id="rePassword"
                            onChange={(e) => this.onChange(e, 'rePassword')}
                        />
                        <div className="form-control">
                            <button type="submit">
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </Main>

        );

    }

}

export default RegisterPage

