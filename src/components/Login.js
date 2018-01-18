import React from 'react'
import authTypes from '../auth/authTypes'

class Login extends React.Component {

    handleLogout (evt) {
        localStorage.removeItem("auth")
    }

    handleLogin (evt) {
        localStorage.setItem("auth",JSON.stringify({role:this.refs.role.value}))
    }

    render () {
        if(localStorage.getItem("auth")){
            return(
                <form onSubmit={(evt)=>this.handleLogout(evt)}>
                    <h1>
                        Now, You are {' '} 
                        {JSON.parse(localStorage.getItem("auth")).role}
                    </h1>

                    <button type="submit">LOGOUT</button>
                </form>
            )
        }
        else{
            return(
                <form onSubmit={(evt)=>this.handleLogin(evt)}>
                    <h1>Login</h1>
                    Choose your role:
                    <br/>
                    <select ref="role">
                        <option value={authTypes.ADMIN}>{authTypes.ADMIN}</option>
                        <option value={authTypes.MANAGER}>{authTypes.MANAGER}</option>
                        <option value={authTypes.MEMBER}>{authTypes.MEMBER}</option>
                    </select>
                    <br/>
                    <button type="submit">LOGIN</button>
                </form>
            )
        }
    }
}

export default Login;
