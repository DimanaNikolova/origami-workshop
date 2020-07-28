import React, { Component } from 'react'
import Navigation from '../../Navigation/Navigation'
import Aside from '../../Aside/Aside'
import Main from '../../Main/Main'
import Footer from '../../Footer/Footer'
import Input from '../../shared/Input/Input'
import './register.css';

class RegisterPage extends React.Component {
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
        const { email, password, rePassword } = this.state
        return (
            <div className="App">
                <div className='Container'>
                    <Navigation />
                    <Aside />
                    <Main>
                        <div className="Register">
                            <h1>Register Page</h1>
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
                                <Input
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
                    <Footer />
                </div>
            </div>
        );

    }

}

export default RegisterPage

