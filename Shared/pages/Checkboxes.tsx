import { useState } from "react";
import CheckBoxes from "../components/CheckBoxes";
import checkboxInterface from "../interfaces/checkboxinterface";
import { StyledButton } from "../styledComponents/button";

const Checkboxes = () => {
    const primary = "#5F939A";
    const secondary = "#FF7B54";
    const [color, setColor] = useState(primary);
    const checkBoxProps: checkboxInterface = {
        themeColor: color
    }
    return (
        <div>
            <CheckBoxes props={checkBoxProps} />
            <div>
                <StyledButton onClick={() => { setColor(primary) }} backgroundColor="#5F939A">Primary Checkbox</StyledButton>
                <StyledButton onClick={() => { setColor(secondary) }} backgroundColor="#FF7B54">Secondary Checkbox</StyledButton>
            </div>
        </div>

    )
}

export default Checkboxes;