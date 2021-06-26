import Input from "../components/Input";
import Style from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import { InputPropsInterface } from "../interfaces/inputInterface";
import { StyledButton } from "../styledComponents/button";



const InputField = () => {
    const primary = "#5F939A";
    const green = "#4AA96C";
    const red = "#F54748";
    const [borderColortext, setBorderColortext] = useState("");
    const [placeholderText, setPlaceHolderText] = useState("Enter admin");
    const [inputVal, setInputVal] = useState("");
    const [placeholderColor, setPlaceholderColor] = useState("");
    const [textColor, setTextColor] = useState("#fff");
    const [textValue, setTextValue] = useState("");

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
        type: "password",
        placeholderColor: placeholderColor,
        textColor: textColor,
        placeholder: placeholderText,
        onstate: setInputVal
    }

    return (
        <div className={Style.flex}>
            <Input props={inputProps} />
            <StyledButton backgroundColor={primary} onClick={handleClick}>Check</StyledButton>
        </div>
    )
}
export default InputField;
