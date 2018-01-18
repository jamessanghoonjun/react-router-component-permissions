import React from 'react'
import { Link } from 'react-router-dom'

class Navigation extends React.Component {
    render () {
        return(
            <div>
                <Link to='/login'>Login</Link>
                {' '}
                <Link to='/'>Home</Link>
                {' '}
                <Link to='/free'>Free</Link>
                {' '}
                <Link to='/memberonly'>MemberOnly</Link>
                {' '}
                <Link to='/manageronly'>ManagerOnly</Link>
                {' '}
                <Link to='/adminonly'>AdminOnly</Link>
            </div>
        )
    }
}

export default Navigation;
