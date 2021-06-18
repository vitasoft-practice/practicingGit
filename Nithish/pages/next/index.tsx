import Input from "../../components/Input";
import form from "../../styles/form.module.scss";
import Form from '../../components/Form';
import {useEffect, useState} from 'react';
import {FormProvider} from "../../contexts/FormContext";
import { useRouter } from "next/router";
import { getRouteMatcher } from "next/dist/next-server/lib/router/utils";
import { applyMiddleware, createStore } from "redux";
import LoginReducers from "../../redux/reducers/login";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import Home from "./Home";

const Next = () => {
    const router = useRouter();
    const composeEnhancers = composeWithDevTools(applyMiddleware(thunkMiddleware));
    const store = createStore(LoginReducers, composeEnhancers);
    // const [moveToNextPage, setMoveToNextPage] = useState<boolean>(false);
    // const [username, setUsername] = useState<string>("");
    
    return(
       <Provider store={store}>
            <div className={form.formcontainer}>
                <FormProvider>
                    <Form />
                </FormProvider>
            </div>
       </Provider>
    )
}
export default Next;