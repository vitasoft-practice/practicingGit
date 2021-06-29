import { StyledRadioButton, StyledLabel, StyledRadioButtonContainer, StyledRadioGroup } from "./radiobutton";
import { useEffect, useState } from "react";
import radiobuttonInterface from "./radiobuttonInterface";

const RadioButton = (props: radiobuttonInterface) => {
    const [value, setValue] = useState("");
    useEffect(() => {
        console.log(value);
    }, [value]);
    const arr = props.elements;
    return (
        <StyledRadioGroup>
            {
                arr.map(element => (
                    <StyledRadioButtonContainer>
                        <StyledRadioButton disabled={element.disabled} themeColor={props.themeColor} onChange={event => { setValue(event.target.value) }} id={element.val} value={element.val} name="radio" type="radio"></StyledRadioButton>
                        <StyledLabel htmlFor={element.val}>{element.val}</StyledLabel>
                    </StyledRadioButtonContainer>
                ))
            }
        </StyledRadioGroup>
    )
}
export default RadioButton;