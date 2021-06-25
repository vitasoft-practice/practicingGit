import Input from "../components/Input";
import Style from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import { InputPropsInterface } from "../interfaces/inputInterface";



const InputField = () => {
    const green = "#4AA96C";
    const red = "#F54748";
    const [borderColortext, setBorderColortext] = useState("");
    const [placeholderText, setPlaceHolderText] = useState("Enter admin");
    const [inputVal, setInputVal] = useState("");
    const [placeholderColor, setPlaceholderColor] = useState("");
    const [textColor, setTextColor] = useState("#fff");
    const [textValue, setTextValue] = useState("");
    useEffect(() => {
        if (inputVal === "") {
            setBorderColortext("#fff");
        }

    }, [inputVal])

    const handleClick = () => {
        if (inputVal != "admin") {
            setBorderColortext(red);
            setInputVal("");
            setPlaceholderColor(red);
            setPlaceHolderText("Invalid Input");
        } else {
            setBorderColortext(green);
            setTextColor(green);
        }
    }

    const inputProps: InputPropsInterface = {
        borderColor: borderColortext,
        value: inputVal,
        type: "text",
        placeholderColor: placeholderColor,
        textColor: textColor,
        placeholder: placeholderText,
        onstate: setInputVal
    }

    return (
        <div className={Style.flex}>
            <Input props={inputProps} />
            <button onClick={handleClick}>Check</button>
        </div>
    )
}
export default InputField;
