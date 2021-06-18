import CounterRedux from "../../components/CounterRedux"
import { Provider } from 'react-redux'
import store from '../../redux/store'

const Counter = () => {

    return (

        <div style={{ textAlign: "center" }}>


            <h1>CounterReducer Page</h1>
            <Provider store={store}>
                <CounterRedux />
            </Provider>
        </div>



    )
}

export default Counter