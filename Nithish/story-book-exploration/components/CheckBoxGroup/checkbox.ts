import style from 'styled-components';
const PrimaryBlack = "#000000";
const disabledGrey = "#808080";


type checkBoxProps = {
    themeColor: string,
    disabled?: boolean
}


export const StyledCheckboxGroup = style.div`
    width: 300px;
    margin 0 auto;
    background-color: white;
    border-radius: 5px;
    overflow: hidden;

`

export const StyledCheckboxContainer = style.div`
    display: flex;
    width: 100%;
`

export const StyledLabel = style.label`
    color: ${PrimaryBlack};
    padding: 20px 30px;
    font-size: 25px;
    display: flex;
    width: 100%;
    cursor: pointer;
    position: relative;
    &:hover{
        background-color: #DDDDDD;
    }
 
    &::before{
        content: '';
        width: 25px;
        height: 25px;
        cursor: pointer;
        border-radius: 5px;
        border: 2px solid black;
        margin-right: 20px;
    }
    
`

export const StyledCheckbox = style.input<checkBoxProps>`
    display: none;
    &:checked + ${StyledLabel}{
        position: relative;
        background-color: ${props => props.themeColor};
        font-weight: 500;
    }
    &:disabled + ${StyledLabel}{
        color: ${disabledGrey};
    }
    &:disabled + ${StyledLabel}::before{
        border: 2px solid ${disabledGrey};
    }
    &:checked + ${StyledLabel}::before{
        background-color: black;
    }
    &:checked + ${StyledLabel}::after{
        content: "";
        position: absolute;
        top: 31px;
        left: 44px;
        width: 10px;
        height: 18px;
        border-right: 3px solid #66DE93;
        border-bottom: 3px solid #66DE93;
        transform: translate(-50%, -50%) rotateZ(40deg);
        
    }
`