import Input from "../../components/Input";
import form from "../../styles/form.module.scss";
import Form from '../../components/Form';
import { useEffect, useState } from 'react';
import { FormProvider } from "../../contexts/FormContext";
import { useRouter } from "next/router";
import { getRouteMatcher } from "next/dist/next-server/lib/router/utils";
import { applyMiddleware, createStore } from "redux";
// import LoginReducers from "../../redux/reducers/login";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import Home from "./Home";
import ReduxForms from "./reduxForm";
import { submit } from "redux-form";
import { reducers } from "../../redux/actions";
import LoginReducers from "../../redux/reducers/login";

const Next = () => {

    const router = useRouter();
    const composeEnhancers = composeWithDevTools(applyMiddleware(thunkMiddleware));
    const store = createStore(reducers, composeEnhancers);
    const submit = (val: any) => {
        console.log(val);
    }
    return (
        <Provider store={store}>
            <div className={form.formcontainer}>
                <FormProvider>
                    <Form />
                </FormProvider>
                <div className={form.doc}>
                    <div className={form.row}>
                        <ul>
                            <li>This form requires a username: "Andrew" and password: "admin"</li>
                            <li>Entering wrong credentials will make the placeholder text display "Invalid username/password"</li>
                            <li className={form.li}>Additionally wrong credentials will change the background of the Input field to red and green when valid</li>
                        </ul>
                    </div>
                    <div className={form.row}>
                        <ul>
                            <li>The form also has a redux state which keeps track of the login Status</li>
                            <li>Upon entering valid credentials, The redux boolean state changes from false to true</li>
                            <li>On state change, The ternary operator displays the Home.tsx </li>
                            <li>Home.tsx has username which is tracked by a React useContext</li>
                            <li>The sign Out button resets the redux state to false which will make the ternary operator to display the form </li>
                        </ul>
                    </div>
                </div>
                <ReduxForms onSubmit={submit} />
            </div>
        </Provider>
    )
}
export default Next;