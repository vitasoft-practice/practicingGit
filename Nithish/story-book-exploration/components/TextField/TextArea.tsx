

import { useContext, useEffect, useState } from 'react';


import textAreaInterface from './textAreaInterface';
import { StyledTextArea } from './styledInput';

const TextInput = (props: textAreaInterface): JSX.Element => {
    const [val, setVal] = useState("");
    return (
        <StyledTextArea disabled={props.disabled} themeColor={props.themeColor} rows={props.rows} cols={props.cols} onChange={event => { setVal(event.target.value) }} name={props.name} id={props.id} value={props.value} placeholder={props.placeholder}></StyledTextArea>
    )
}
export default TextInput;