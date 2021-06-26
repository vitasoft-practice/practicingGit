import { StyledRadioButton, StyledLabel, StyledRadioButtonContainer, StyledRadioGroup } from "../styledComponents/radioButton";
import { useEffect, useState } from "react";
import radiobuttonInterface from "../interfaces/radiobuttonInterface";

interface RadioButtonProps {
    props: radiobuttonInterface
}
const RadioButton = ({ props }: RadioButtonProps) => {
    const [value, setValue] = useState("");
    useEffect(() => {
        console.log(value);
    }, [value]);
    return (
        <div>
            <StyledRadioGroup>
                <StyledRadioButtonContainer>
                    <StyledRadioButton disabled themeColor={props.themeColor} id="one" value="one" onChange={event => { setValue(event.target.value) }} name="radio" type="radio"></StyledRadioButton>
                    <StyledLabel htmlFor="one">One</StyledLabel>
                </StyledRadioButtonContainer>
                <StyledRadioButtonContainer>
                    <StyledRadioButton themeColor={props.themeColor} id="two" value="two" onChange={event => { setValue(event.target.value) }} name="radio" type="radio"></StyledRadioButton>
                    <StyledLabel htmlFor="two">Two</StyledLabel>
                </StyledRadioButtonContainer>
                <StyledRadioButtonContainer>
                    <StyledRadioButton themeColor={props.themeColor} id="three" value="three" onChange={event => { setValue(event.target.value) }} name="radio" type="radio"></StyledRadioButton>
                    <StyledLabel htmlFor="three">Three</StyledLabel>
                </StyledRadioButtonContainer>
                <StyledRadioButtonContainer>
                    <StyledRadioButton themeColor={props.themeColor} id="four" value="four" onChange={event => { setValue(event.target.value) }} name="radio" type="radio"></StyledRadioButton>
                    <StyledLabel htmlFor="four">Four</StyledLabel>
                </StyledRadioButtonContainer>
            </StyledRadioGroup>

            <p style={{ color: "white" }}>Selected Value: {value}</p>
        </div>

    )
}
export default RadioButton;