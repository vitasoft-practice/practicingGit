import style from 'styled-components';

const normal = "#FFFFFF"

type InputProps = {
    borderColor: string,
    textColor: string,
    placeholderColor: string
}

export const StyledInput = style.input<InputProps>`
    margin: 10px;
    padding: 15px 25px;
    min-width: 300px;
    max-width: 400px;
    font-size: 28px;
    font-weight: bold;
    border: 3px solid ${props => props.borderColor || normal};
    background-color: #151515;
    color:  ${props => props.textColor || normal};
    border-radius: 5px;
    &:focus{
        outline: none;
    }
    &::placeholder{
        color: ${props => props.placeholderColor || normal};
    }

`