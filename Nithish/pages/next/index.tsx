import Input from "../../components/Input";
import form from "../../styles/form.module.scss";
import Form from '../../components/Form';
import {useEffect, useState} from 'react';
import {FormContext} from "../../contexts/FormContext";
import { useRouter } from "next/router";
import { getRouteMatcher } from "next/dist/next-server/lib/router/utils";

const Next = () => {
    const router = useRouter();
    const [moveToNextPage, setMoveToNextPage] = useState<boolean>(false);
    const [username, setUsername] = useState<string>("");
    useEffect(()=>{
        if(moveToNextPage){
            router.push('/next/'+username);
        }
    },[moveToNextPage]);
    return(
        <div className={form.formcontainer}>
            <FormContext.Provider value={{ setUsername,setMoveToNextPage  }}>
                <Form />
            </FormContext.Provider>
        </div>
    )
}
export default Next;