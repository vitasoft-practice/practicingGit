import React, { useContext } from "react"
import CounterRedux from "../../components/CounterRedux"
import { Provider } from 'react-redux'
import store from '../../redux/store'
import Login from '../../components/Login'
import Input from "../../components/Input"
import Profile from '../../components/Profile'
import AuthContext from '../../context/authContext'

const Counter = () => {

    const { user, login, logout } = useContext(AuthContext)

    // console.log("contextvalue" + val);
    return (

        <div style={{ textAlign: "center" }}>

            <Provider store={store}>

                <Login />


            </Provider>
            <h1>Context Api</h1>

            <h2>User:{user ? "login" : "logout"}</h2>

            <button onClick={login}>Login</button>
            <button onClick={logout}>Logout</button>


        </div>



    )
}

export default Counter