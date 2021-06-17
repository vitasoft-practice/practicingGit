import Input from "../../components/Input";
import form from "../../styles/form.module.scss";
import Form from '../../components/Form';
import {useEffect, useState} from 'react';
import {FormProvider} from "../../contexts/FormContext";
import { useRouter } from "next/router";
import { getRouteMatcher } from "next/dist/next-server/lib/router/utils";
import { createStore } from "redux";
import log from "../../redux/reducers/login";
import { Provider } from "react-redux";

const Next = () => {
    const router = useRouter();
    const composeEnhancers =  (typeof window as any).__REDUX_DEVTOOLS_EXTENSION__ && (typeof  window as any).__REDUX_DEVTOOLS_EXTENSION__()
    const store = createStore(log, composeEnhancers);
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