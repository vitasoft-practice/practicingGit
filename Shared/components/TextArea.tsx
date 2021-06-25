

import { useContext, useEffect, useState } from 'react';


import textAreaInterface from '../interfaces/textAreaInterface';
import { StyledTextArea } from '../styledComponents/textArea';
interface TextAreaProps {
    props: textAreaInterface
}
const Input = ({ props }: TextAreaProps): JSX.Element => {
    const [val, setVal] = useState("");
    useEffect(() => {
        props.onstate(val);
    }, [val]);

    return (
        <StyledTextArea rows={props.rows} cols={props.cols} onChange={event => { setVal(event.target.value) }} name={props.name} id={props.id} value={props.value} placeholder={props.placeholder}></StyledTextArea>
    )
}
export default Input;