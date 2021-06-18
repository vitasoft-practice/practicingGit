import input from '../styles/input.module.scss';
import inputInterface from '../interfaces/inputInterface';
import { useEffect, useState } from 'react';

interface inputProps{
    inputInterface: inputInterface
}

const Input  = ({inputInterface}: inputProps):JSX.Element =>{
    const [value, setValue] = useState<string>("");
    useEffect(()=>{
        inputInterface.onstate(value);
    },[value]);
    return (
        <input className={input.input} value={inputInterface.value} style = {{backgroundColor: inputInterface.border}} type = {inputInterface.type} onChange = {event =>{setValue(event.target.value)}} placeholder={inputInterface.placeholder}></input>
    )
}
export default Input;