import style from "styled-components";
import { RadioButtonLabel } from "../layout/RadioButton";


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
`


export const StyledLabel = style.label`
   color: #000;
   font-size: 25px;
   padding: 20px 30px;
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

export const StyledRadioButton = style.input`
    display: none;
    width: 18px;
    height: 18px;
    &:checked + ${StyledLabel}{
        Color: black;  
        background-color: #5F939A;
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
