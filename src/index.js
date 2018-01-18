import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './components/Home'
import Login from './components/Login'
import MemberOnly from './components/MemberOnly'
import ManagerOnly from './components/ManagerOnly'
import AdminOnly from './components/AdminOnly'
import Prison from './components/Prison'
import NotAllowed from './components/NotAllowed'
import Free from './components/Free'


ReactDOM.render(
    <Router>
        <App>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/memberonly" component={MemberOnly}/>
                <Route path="/manageronly" component={ManagerOnly}/>
                <Route path="/adminonly" component={AdminOnly}/>
                <Route path="/prison" component={Prison}/>
                <Route path="/notallowed" component={NotAllowed}/>
                <Route path="/free" component={Free}/>
            </Switch>
        </App>
    </Router>

, document.getElementById('root'));
