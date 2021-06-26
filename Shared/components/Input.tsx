import { useContext, useEffect, useState } from 'react';

import { InputPropsInterface } from '../interfaces/inputInterface';
import { StyledInput } from '../styledComponents/input';
interface InputProps {
    props: InputPropsInterface
}
const Input = ({ props }: InputProps): JSX.Element => {
    const [val, setVal] = useState("");
    useEffect(() => {
        props.onstate(val);
    }, [val]);

    return (
        <StyledInput disabled={props.disabled} onChange={event => { setVal(event.target.value) }} placeholderColor={props.placeholderColor} textColor={props.textColor} value={props.value} borderColor={props.borderColor} placeholder={props.placeholder} type={props.type}></StyledInput>
    )
}
export default Input;