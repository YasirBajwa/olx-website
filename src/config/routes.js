import React from 'react';
import {BrowserRouter as Router,Route,Switch}  from 'react-router-dom';
import Home from '../components/Home/Home'
import Dashboard from '../components/Dashboard/dashboard';



class AppRouter extends React.Component{
    render(){
        return(
            <Router>
                <Switch>
                <Route exact path='/' component={ Home } />
                <Route exact path='/dashboard' component={ Dashboard } />
                </Switch>
            </Router>
        )
    }
}

export default AppRouter;