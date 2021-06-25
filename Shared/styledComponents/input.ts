import style from 'styled-components';

const normal = "#FFFFFF"
const disabledGrey = "#808080";

type InputProps = {
    borderColor: string,
    textColor: string,
    placeholderColor: string,
    disabled?: boolean
}

export const StyledInput = style.input<InputProps>`
    margin: 10px;
    padding: 15px 25px;
    min-width: 300px;
    max-width: 400px;
    font-size: 28px;
    font-weight: bold;
    border: 3px solid ${props => props.disabled ? disabledGrey : (props.borderColor || normal)};
    background-color: #151515;
    color:  ${props => props.textColor || normal};
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
        color: ${props => props.placeholderColor || normal};
    }

`