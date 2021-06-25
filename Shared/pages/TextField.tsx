import TextArea from '../components/TextArea';
import textAreaInterface from "../interfaces/textAreaInterface";
import { useState } from 'react';


const TextField = () => {

    const [textValue, setTextValue] = useState("");

    const textAreaProps: textAreaInterface = {
        value: textValue,
        name: "textArea",
        id: "textAres",
        placeholder: "Enter something.......",
        cols: 80,
        rows: 4,
        onstate: setTextValue
    }

    return (
        <TextArea props={textAreaProps} />
    )
}
export default TextField;