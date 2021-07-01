import style from 'styled-components';

const normal = "#fff";
const disabledGrey = "#DDDDDD";

type textAreaProps = {
    disabled?: boolean,
    themeColor: string
}


export const StyledTextArea = style.textarea<textAreaProps>`
    margin: 10px;
    padding: 15px 25px;
    min-width: 200px;
    font-size: 20px;
    // font-weight: bold;
    border: 1px solid ${props => props.disabled ? disabledGrey : normal};
    background-color: ${props => props.themeColor};
    color:  ${normal};
    border-radius: 3px;
    &:focus{
        outline: none;
    }
    &:disabled{
        &::placeholder{
            color: ${disabledGrey};
        }
        background-color: #F8F5F1;
        pointer-events: none;
    }
    &::placeholder{
        color: ${normal};
    }
    &:hover{
        transform: scale(1.05);
    }

`