import React, { Component } from 'react';
import './App.css';
import { withRouter } from 'react-router-dom'
import Navigation from './components/Navigation'
import authInfo from './authInfo.json'
import authTypes from './auth/authTypes'

class App extends Component {

    constructor(props){
        super(props)

        // Routing based on user_auth (when accessed by address)
        this.routingByUserAuth(props);
    }

    componentWillReceiveProps(nextProps){
        // Routing based on user_auth (when router history is changed)
        this.routingByUserAuth(nextProps)
    }

    routingByUserAuth(props){
        // Get auth from local storage.
        // If you are using redux, you can use the props for getting login info.
        var auth = localStorage.getItem("auth")
                    ?JSON.parse(localStorage.getItem("auth")).role
                    :authTypes.GUEST
        console.log('Current role:'+auth)

        // Get location of current or next props
        const path = props.location.pathname
        console.log('Current path:'+path)

        // Compare the current auth to authInfo.json
        if(authInfo.hasOwnProperty(path)){
            if(authInfo[path].authorizedTo.indexOf(auth)<0){
                // When authinfo for this page was defined and auth is not matched
                // It kicks you to the defined location
                props.history.push(authInfo[path].exileTo)
            }
            // When authinfo for this page was not defined, it just let you in.
        }
    }

    render() {
        return (
            <div className="App">
                <Navigation />
                {this.props.children}
            </div>
        );
    }
}

export default withRouter(App);
