import style from "styled-components";
import { RadioButtonLabel } from "../layout/RadioButton";

const PrimaryBlack = "#000000";
const disabledGrey = "#808080";
type RadiobuttonProps = {
    themeColor: string;
    disabled?: boolean
}

export const StyledRadioGroup = style.div`
    background-color: #fff;
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: 0 auto;
    border-radius: 5px;
    overflow: hidden;
`

export const StyledRadioButtonContainer = style.div`

    width: 100%;
    &:hover{
        background-color: #DDDDDD;
    }
`


export const StyledLabel = style.label`
   color: #000;
   font-size: 25px;
   padding: 20px 30px;
   cursor: pointer;
   display: flex;
   width: 100%;
   
   &::before{
       content:"";
       width: 25px;
       height: 25px;
       border-radius: 50%;
       border: 2px solid black;
       margin-right: 20px;
       margin-top: 5px;
   }
`

export const StyledRadioButton = style.input<RadiobuttonProps>`
    display: none;
    width: 18px;
    height: 18px;
    &:checked + ${StyledLabel}{
        Color: black;  
        background-color: ${props => props.themeColor};
    }
    &:disabled + ${StyledLabel}{
        color: ${disabledGrey};
    }
    &:disabled + ${StyledLabel}::before{
        border: 2px solid ${disabledGrey};
    }
    &:disabled + ${StyledRadioButtonContainer}{
        &:hover{
            background-color: #fff;
        }
    }
    &:checked + ${StyledLabel}::before{
        content:"";
        width: 25px;
        height: 25px;
        border-radius: 50%;
        border: 5px solid white;
        background-color: #000;
        margin-right: 20px;
        margin-top: 5px;
    }
`
