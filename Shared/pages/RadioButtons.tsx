// import { RadioButton, Item, RadioButtonLabel } from '../layout/RadioButton'
import RadioButton from "../components/RadioButton";
import { StyledButton } from "../styledComponents/button";
import { useState } from "react";
import radiobuttonInterface from "../interfaces/radiobuttonInterface";

const RadioButtons = () => {
    const primary = "#5F939A";
    const secondary = "#FF7B54";
    const [color, setColor] = useState(primary);
    const checkBoxProps: radiobuttonInterface = {
        themeColor: color
    }
    return (
        // <div>
        //     <Item>
        //         <RadioButton
        //             type="radio"
        //             name="radio"
        //             value="male"
        //         />
        //         <RadioButtonLabel />
        //         <span>Male</span>
        //     </Item>
        //     <Item>
        //         <RadioButton
        //             type="radio"
        //             name="radio"
        //             value="female"
        //         />
        //         <RadioButtonLabel />
        //         <span>Female</span>
        //     </Item>
        //     <Item>
        //         <RadioButton
        //             type="radio"
        //             name="radio"
        //             value="orthers"
        //         />
        //         <RadioButtonLabel />
        //         <span>Others</span>
        //     </Item>
        // </div>
        <div>
            <RadioButton props={checkBoxProps} />
            <div>
                <StyledButton onClick={() => { setColor(primary) }} backgroundColor="#5F939A">Primary Checkbox</StyledButton>
                <StyledButton onClick={() => { setColor(secondary) }} backgroundColor="#FF7B54">Secondary Checkbox</StyledButton>
            </div>
        </div>

    )
}
export default RadioButtons;