import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
// LOGO
import logo from './images/logo.png'
// PAGES
import Home from './Pages/Home'
import Jobs from './Pages/Jobs'
import About from './Pages/About'
import SignIn from './Pages/SignIn'
import Register from './Pages/Register'
import PageNotFound from './Pages/PageNotFound'
import UserAgreement from './Pages/UserAgreement'
// COMPONENT
import Footer from './Component/Footer'
//import styles from '../css/home.module.css';


class App extends Component {
    render() {
        return (
            <>
                {/* ROUTER */}
                <Router>
                    {/* NAVIGATION */}
                    <nav>
                        {/* NAVBAR */}
                        <div className='row'>
                            {/* WEBSITE NAME */}
                            <div className='column column-5'>
                                {/* Logo */}
                                <span className='logo'>
                                    <Link to='/'>
                                        <img src={logo} alt='Kinid Logo' />
                                    </Link>
                                </span>
                                {/* Title - hidden  */}
                                <h1>KINID</h1>
                            </div>
                            {/* LINKS [Jobs, Upload/Build Resume]*/}
                            <div className='column column-2'>
                                {/* JOBS */}
                                <Link to='/jobs'>Jobs</Link>
                                {/* UPLOAD/BUILD RESUME */}
                                <Link to='/signin'>Upload/Build Resume</Link>
                                {/* CAREER / LEARNING */}
                                <a href="#">Career Development &amp; Learning</a>
                            </div>
                            {/* LINKS [Sign In, Register, Post Jobs] */}
                            <div className='column column-4'>
                                {/* SIGN IN */}
                                <Link to='/signin'>Sign In</Link>
                                {/* REGISTER */}
                                <Link to='/register'>Register</Link>
                                {/* POST JOB */}
                                <Link to='/signin'>Post Jobs</Link>
                            </div>
                        </div>
                    </nav>
                    {/* SWITCH */}
                    <Switch>
                        {/* HOME */}
                        <Route exact path='/' component={Home} />
                        {/* SIGN IN */}
                        <Route path='/signin' component={SignIn} />
                        {/* REGISTER */}
                        <Route path='/register' component={Register} />
                        {/* ABOUT */}
                        <Route path='/about' component={About} />
                        {/* JOBS */}
                        <Route path='/jobs' component={Jobs} />
                        {/* USER AGREEMENT */}
                        <Route path='/useragreement' component={UserAgreement} />
                        {/* PAGE NOT FOUND - 404 - ALWAYS LAST ROUTE ON FILE*/}
                        <Route component={PageNotFound} />
                    </Switch>
                </Router>
            </>
        );
    }
}

export default App;