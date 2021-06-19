import Input from './Input';
import form from '../styles/form.module.scss';
import button from '../styles/button.module.scss';
import inputInterface from '../interfaces/inputInterface';
import { FC, useContext, useEffect, useState } from 'react';
import {FormContext} from '../contexts/FormContext';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../redux/actions';
import { State } from '../redux/actions';
import Home from '../pages/next/Home';
const Form: FC = () => {
    const router = useRouter();
    const state = useSelector((state: boolean)=>state)
    const dispatch = useDispatch();
   
    
    const { signIn } = bindActionCreators(ActionCreators, dispatch);

    
    const  { userName,setUsername }  = useContext(FormContext);
    const [usernameborder, setusernameBorder] = useState<string>("");
    const [usernameval, setusernameVal] = useState<string>("");
    const [placeholderText, setPlaceholderText] = useState<string>("Username");
    const [passwordborder, setpasswordBorder] = useState<string>("");
    const [passwordval, setpasswordVal] = useState<string>("");
    const [passwordplaceholderText, setpasswordPlaceholderText] = useState<string>("Password");
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

    const LogIn = () =>{
        dispatch(()=>{
            signIn();
        });
    }
    
    const resetValues = () =>{
        setpasswordBorder("");
        setusernameBorder("");
    }

    const print = () =>{
        console.log({state});
        if(usernameval!= "Andrew") { setusernameVal(""); setusernameBorder("#FB3640"); setPlaceholderText("Invalid Username")}
        else{
            setusernameBorder("#4AA96C");
            if(passwordval!= "admin"){ setpasswordVal(""); setpasswordBorder("#FB3640"); setpasswordPlaceholderText("Invalid Password"); }
            else{
                setpasswordBorder("#4AA96C");
                setUsername(usernameval);
                resetValues();
                LogIn();
            }
        }
        
    }
    
    return (
       state ? <Home/> : <form className={form.formcontainer}>
       <Input inputInterface={username}/>
       <Input inputInterface={password}/>
       <button className={button.button} type="button" onClick={print}>Check</button>
   </form>

    )
}

export default Form;