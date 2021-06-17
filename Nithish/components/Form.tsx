import Input from './Input';
import form from '../styles/form.module.scss';
import button from '../styles/button.module.scss';
import inputInterface from '../interfaces/inputInterface';
import { FC, useContext, useEffect, useState } from 'react';
import {FormContext} from '../contexts/FormContext';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../redux/actions/actions';
const Form: FC = () => {
    interface Rootstate{
        isLog: boolean
    }
    const isLogged = useSelector((state: Rootstate) => state.isLog);
    const dispatch = useDispatch();

    const router = useRouter();
    const  { userName,setUsername }  = useContext(FormContext);
    const [usernameborder, setusernameBorder] = useState<string>("");
    const [usernameval, setusernameVal] = useState<string>("");
    const [placeholderText, setPlaceholderText] = useState<string>("Username");
    const [passwordborder, setpasswordBorder] = useState<string>("");
    const [passwordval, setpasswordVal] = useState<string>("");
    const [passwordplaceholderText, setpasswordPlaceholderText] = useState<string>("Password");
    const [text, setText] = useState<string>("");
    const username : inputInterface = {
        placeholder: placeholderText,
        value: usernameval,
        type: "text",
        border: usernameborder,
        onstate: setusernameVal
    }
    const password : inputInterface = {
        placeholder: passwordplaceholderText,
        value: passwordval,
        type: "password",
        border: passwordborder,
        onstate: setpasswordVal
    }
    
    const print = () =>{
        if(usernameval!= "Andrew") { setusernameVal(""); setusernameBorder("red"); setPlaceholderText("Invalid Username")}
        else{
            setusernameBorder("green");
            if(passwordval!= "admin"){ setpasswordVal(""); setpasswordBorder("red"); setpasswordPlaceholderText("Invalid Password"); }
            else{
                setpasswordBorder("green");
                setUsername(usernameval);
                // setMoveToNextPage(true);
                dispatch(logIn());
                setText("Alright!, Good to go");
                console.log(isLogged)
            }
        }
        
    }
    return (
        <form className={form.formcontainer}>
            <Input inputInterface={username}/>
            <Input inputInterface={password}/>
            <button className={button.button} type="button" onClick={print}>Check</button>
            <p className={form.p}>{text}</p>
        </form>
    )
}

export default Form;