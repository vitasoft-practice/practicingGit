import CounterRedux from "../../components/CounterRedux"
import { Provider } from 'react-redux'
import store from '../../redux/store'
import Login from '../../components/Login'
import Input from "../../components/Input"
import Profile from '../../components/Profile'

const Counter = () => {

    return (

        <div style={{ textAlign: "center" }}>

            <Provider store={store}>
                <Login />
               

            </Provider>
        </div>



    )
}

export default Counter