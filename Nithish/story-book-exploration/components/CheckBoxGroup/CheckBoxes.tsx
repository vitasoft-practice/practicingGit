
import { useEffect } from "react";
import { ChangeEvent, useState } from "react";
import checkboxInterface from "./checkboxinterface";
import { StyledCheckbox, StyledCheckboxGroup, StyledCheckboxContainer, StyledLabel } from "./checkbox";

const CheckBoxes = (props: checkboxInterface): JSX.Element => {
    const array = props.elements;
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
        <StyledCheckboxGroup>
            {
                array.map(element => (
                    <StyledCheckboxContainer>
                        <StyledCheckbox disabled={element.disabled} themeColor={props.themeColor} onChange={event => { addcheck(event) }} type="checkbox" value={element.val} id={element.val}></StyledCheckbox>
                        <StyledLabel htmlFor={element.val}>{element.val}</StyledLabel>
                    </StyledCheckboxContainer>
                ))
            }
        </StyledCheckboxGroup>
    )
}
export default CheckBoxes;