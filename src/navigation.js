import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import HomePage from './pages/homePage/HomePage'
import ShareThoughts from './pages/shareThoughts/shareThoughts'
import RegisterPage from './pages/register/register'
import LoginPage from './pages/login/Login'
import ProfilePage from './pages/profile/ProfilePage'
import ErrorPage from './pages/error/ErrorPage'
import UserContext from './Context'

class Navigation extends React.Component {
    static contextType = UserContext
    render() {
        if (this.context.loggedIn){

            return (
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={HomePage} />
                        <Route path='/publications' component={HomePage} />
                        <Route path='/register' component={RegisterPage} />
                        <Route path='/login' component={LoginPage} />
                        <Route path='/share' component={ShareThoughts} />
                        <Route exact path='/profile/:userId' component={ProfilePage} />
                        <Route component={ErrorPage} />
                    </Switch>
                </BrowserRouter>
            );
        } else{
            return (
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={HomePage} />
                        <Route path='/publications' component={HomePage} />
                        <Route path='/register' component={RegisterPage} />
                        <Route path='/login' component={LoginPage} />
                        <Route path='/share' component={ErrorPage} />
                        <Route exact path='/profile/:userId' component={ErrorPage} />
                        <Route component={ErrorPage} />
                    </Switch>
                </BrowserRouter>
            );
        }
    }
}

export default Navigation