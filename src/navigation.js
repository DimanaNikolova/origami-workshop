import React, { Component } from 'react'
import { BrowserRouter, Switch, Routre, Route } from 'react-router-dom'
import HomePage from './pages/homePage/HomePage'
import ShareThoughts from './pages/shareThoughts/shareThoughts'
import RegisterPage from './pages/register/register'
import LoginPage from './pages/login/Login'

const Navigation = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path ='/' component={HomePage}/>
            <Route path ='/publications' component={HomePage}/>
            <Route path ='/share' component={ShareThoughts}/>
            <Route path ='/register' component={RegisterPage}/>
            <Route path ='/login' component={LoginPage}/>
        </Switch>
        </BrowserRouter>
    );
}

export default Navigation