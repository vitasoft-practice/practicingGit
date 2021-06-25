import style from 'styled-components';

const normal = "#FFFFFF";
const disabledGrey = "#808080";

type textAreaProps = {
    disabled?: boolean
}


export const StyledTextArea = style.textarea<textAreaProps>`
    margin: 10px;
    padding: 15px 25px;
    min-width: 300px;
    max-width: 700px;
    font-size: 28px;
    font-weight: bold;
    border: 3px solid ${props => props.disabled ? disabledGrey : normal};
    background-color: #151515;
    color:  ${normal};
    border-radius: 5px;
    &:focus{
        outline: none;
    }
    &:disabled{
        &::placeholder{
            color: ${disabledGrey};
        }
    }
    &::placeholder{
        color: ${normal};
    }

`