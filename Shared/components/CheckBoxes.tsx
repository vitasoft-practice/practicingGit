import { log } from "console";
import { useEffect } from "react";
import { ChangeEvent, useState } from "react";
import checkboxInterface from "../interfaces/checkboxinterface";
import { StyledCheckbox, StyledCheckboxGroup, StyledCheckboxContainer, StyledLabel } from "../styledComponents/checkbox";
interface CheckboxProps {
    props: checkboxInterface
}
const CheckBoxes = ({ props }: CheckboxProps): JSX.Element => {

    const [check, setCheck] = useState<Array<string>>([]);
    const [arr, setArr] = useState<string>("");
    useEffect(() => {
        setArr(check.join(","));
    }, [check])
    const addcheck = (value: ChangeEvent<HTMLInputElement>) => {
        if (value.target.checked) {
            setCheck([...check, value.target.value]);
        } else {
            setCheck(
                check.filter((element) => element !== value.target.value)
            );
        }

    }
    return (
        <div>
            <StyledCheckboxGroup>
                <StyledCheckboxContainer>
                    <StyledCheckbox themeColor={props.themeColor} onChange={event => { addcheck(event) }} type="checkbox" value="One" id="One"></StyledCheckbox>
                    <StyledLabel htmlFor="One">One</StyledLabel>
                </StyledCheckboxContainer>
                <StyledCheckboxContainer>
                    <StyledCheckbox disabled themeColor={props.themeColor} onChange={event => { addcheck(event) }} type="checkbox" value="Two" id="Two"></StyledCheckbox>
                    <StyledLabel htmlFor="Two">Two</StyledLabel>
                </StyledCheckboxContainer>
                <StyledCheckboxContainer>
                    <StyledCheckbox themeColor={props.themeColor} onChange={event => { addcheck(event) }} type="checkbox" value="Three" id="Three"></StyledCheckbox>
                    <StyledLabel htmlFor="Three">Three</StyledLabel>
                </StyledCheckboxContainer>
                <StyledCheckboxContainer>
                    <StyledCheckbox themeColor={props.themeColor} onChange={event => { addcheck(event) }} type="checkbox" value="Four" id="Four"></StyledCheckbox>
                    <StyledLabel htmlFor="Four">Four</StyledLabel>
                </StyledCheckboxContainer>
            </StyledCheckboxGroup>
            <p style={{ color: "white" }}>Selected values: {arr}</p>

        </div>
    )
}
export default CheckBoxes;