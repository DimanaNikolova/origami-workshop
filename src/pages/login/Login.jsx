import React, { Component } from 'react'
import Navigation from '../../Navigation/Navigation'
import Aside from '../../Aside/Aside'
import Main from '../../Main/Main'
import Footer from '../../Footer/Footer'
import Input from '../../shared/Input/Input'
import './Login.css';

class LoginPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            rePassword: ""
        }
    }

    onChange = (event, type) => {
        const newState = {}
        newState[type] = event.target.value
        this.setState(newState)
    }

    render() {
        const { email, password } = this.state
        return (
            <div className="App">
                <div className='Container'>
                    <Navigation />
                    <Aside />
                    <Main>
                        <div className="Login">
                            <h1>Login Page</h1>
                            <form>
                                <Input
                                    value={email}
                                    onChange={(e) => this.onChange(e, 'email')}
                                    label="Email"
                                    id="email"
                                />
                                <Input
                                    value={password}
                                    label="Password"
                                    id="password"
                                    onChange={(e) => this.onChange(e, 'password')}
                                />
                                <div className="form-control">
                                    <button type="submit"> Login </button>
                                </div>
                            </form>
                        </div>
                    </Main>
                    <Footer />
                </div>
            </div>
        );

    }

}

export default LoginPage

