import React, { useContext } from 'react'
import AuthContext from '../components/AuthContext'

const IsLoggedIn = () => {
    const { user, login, logout } = useContext(AuthContext)
    return (
        <div>
            <h1>Context Api</h1>

            <h2>User:{user ? "login" : "logout"}</h2>

            <button onClick={login}>Login</button>
            <button onClick={logout}>Logout</button>

        </div>
    )
}

export default IsLoggedIn
