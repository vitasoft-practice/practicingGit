import style from 'styled-components';
const disabledGrey = "#808080";
type InputProps = {
    color: string,
    borderColor: string,
    disabled?: boolean
}

export const StyledInput = style.input<InputProps>`
    color: #fff;
    border: 1px solid  ${props => props.disabled ? disabledGrey : props.borderColor};
    margin: 5px;
    padding: 15px 20px;
    min-width: 200px;
    border-radius: 3px;
    background-color:${props => props.color};
    font-size: 16px;
    &:focus{
        outline: none;
    }
    &::placeholder{
        color: #fff;
    }
    &:disabled{
        &::placeholder{
            color: ${disabledGrey};
        }
        background-color: #BBBBBB;
        pointer-events: none;
    }
    &:hover{
        transform: scale(1.05);
    }

`