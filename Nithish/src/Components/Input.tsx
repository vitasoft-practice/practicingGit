import React, { useEffect, useState } from "react";
import '../Styles/_input.scss';
import Iprops from "../Interfaces";

interface Props{
    input: Iprops
}
const Input = ({input}: Props):JSX.Element=>  {
    const [value, setValue] =  useState<string>();
    useEffect(()=>{
        input.onstate(value)
    },[value]);
    return (
        <input placeholder={input.placeholder} onChange = {event => {setValue(event.target.value)}}></input>
    )
}
export default Input;