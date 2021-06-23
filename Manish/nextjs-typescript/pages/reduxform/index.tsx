<<<<<<< HEAD
=======
import React, { useContext } from "react"
>>>>>>> 11aaf10188e3d18d47e098d42e58afcc5d946498
import CounterRedux from "../../components/CounterRedux"
import { Provider } from 'react-redux'
import store from '../../redux/store'
import Login from '../../components/Login'
import Input from "../../components/Input"
import Profile from '../../components/Profile'
<<<<<<< HEAD

const Counter = () => {

=======
import AuthContext from '../../context/authContext'

const Counter = () => {

    const { user, login, logout } = useContext(AuthContext)

    // console.log("contextvalue" + val);
>>>>>>> 11aaf10188e3d18d47e098d42e58afcc5d946498
    return (

        <div style={{ textAlign: "center" }}>

            <Provider store={store}>
<<<<<<< HEAD
                <Login />
               

            </Provider>
=======

                <Login />


            </Provider>
            <h1>Context Api</h1>

            <h2>User:{user ? "login" : "logout"}</h2>

            <button onClick={login}>Login</button>
            <button onClick={logout}>Logout</button>


>>>>>>> 11aaf10188e3d18d47e098d42e58afcc5d946498
        </div>



    )
}

export default Counter